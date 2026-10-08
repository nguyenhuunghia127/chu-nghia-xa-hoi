/**
 * ỨNG DỤNG ÔN THI CHỦ NGHĨA XÃ HỘI KHOA HỌC (CNXHKH)
 * Xử lý toàn bộ logic: Luyện tập, Thi thử, Flashcards, Trả lời ngắn, Thống kê, Âm thanh & Confetti.
 */

(function () {
  'use strict';

  // 1. STATE & STORAGE
  const STORAGE_KEY_ANSWERS = 'cnxh_quiz_answers';
  const STORAGE_KEY_BOOKMARKS = 'cnxh_quiz_bookmarks';
  const STORAGE_KEY_FC_MASTERED = 'cnxh_fc_mastered';
  const STORAGE_KEY_FC_REVIEW = 'cnxh_fc_review';
  const STORAGE_KEY_THEME = 'cnxh_theme';

  let rawMcqList = [...QUIZ_DATA.mcq];
  let rawSaList = [...QUIZ_DATA.shortAnswer];

  let state = {
    mode: 'practice', // 'practice' | 'exam'
    currentMcqIndex: 0,
    filteredMcqIndices: [], // indices into rawMcqList
    userAnswers: JSON.parse(localStorage.getItem(STORAGE_KEY_ANSWERS) || '{}'),
    bookmarks: new Set(JSON.parse(localStorage.getItem(STORAGE_KEY_BOOKMARKS) || '[]')),
    filterStatus: 'all',
    searchQuery: '',

    // Exam state
    exam: {
      active: false,
      durationSec: 45 * 60,
      remainingSec: 45 * 60,
      timerId: null,
      submitted: false,
      startTime: null,
      endTime: null
    },

    // Short answer state
    sa: {
      mode: 'flashcard', // 'flashcard' | 'typein' | 'listall'
      currentFcIndex: 0,
      fcFlipped: false,
      mastered: new Set(JSON.parse(localStorage.getItem(STORAGE_KEY_FC_MASTERED) || '[]')),
      review: new Set(JSON.parse(localStorage.getItem(STORAGE_KEY_FC_REVIEW) || '[]')),
      currentTypeInIndex: 0,
      filteredSaList: [...rawSaList]
    }
  };

  // 2. AUDIO SYNTHESIZER (Pure Web Audio API - no external assets required)
  const audioCtx = (window.AudioContext || window.webkitAudioContext) ? new (window.AudioContext || window.webkitAudioContext)() : null;

  function playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.08) {
    if (!audioCtx) return;
    try {
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio not supported or blocked
    }
  }

  function playCorrectSound() {
    playTone(523.25, 'sine', 0.1, 0.07); // C5
    setTimeout(() => playTone(659.25, 'sine', 0.18, 0.07), 80); // E5
  }

  function playWrongSound() {
    playTone(280, 'triangle', 0.2, 0.06);
  }

  function playClickSound() {
    playTone(800, 'sine', 0.04, 0.03);
  }

  // 3. DOM ELEMENTS
  const dom = {
    // Header & Tabs
    themeToggle: document.getElementById('btn-theme-toggle'),
    resetBtn: document.getElementById('btn-reset-data'),
    headerProgressText: document.getElementById('header-progress-text'),
    tabButtons: document.querySelectorAll('.tab-btn'),
    tabPanes: document.querySelectorAll('.tab-pane'),
    bookmarksCountBadge: document.getElementById('bookmarks-count-badge'),

    // MCQ Controls
    modePracticeBtn: document.getElementById('mode-practice'),
    modeExamBtn: document.getElementById('mode-exam'),
    examControlsBar: document.getElementById('exam-controls-bar'),
    timerText: document.getElementById('timer-text'),
    btnSubmitExam: document.getElementById('btn-submit-exam'),
    searchMcqInput: document.getElementById('search-mcq-input'),
    btnClearSearch: document.getElementById('btn-clear-search'),
    filterMcqSelect: document.getElementById('filter-mcq-status'),
    btnShuffleMcq: document.getElementById('btn-shuffle-mcq'),

    // Question Card
    qIndexBadge: document.getElementById('q-index-badge'),
    qOriginalId: document.getElementById('q-original-id'),
    qStatusBadge: document.getElementById('q-status-badge'),
    btnToggleBookmark: document.getElementById('btn-toggle-bookmark'),
    bookmarkStarIcon: document.getElementById('bookmark-star-icon'),
    bookmarkText: document.getElementById('bookmark-text'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    practiceFeedback: document.getElementById('practice-feedback'),
    feedbackIcon: document.getElementById('feedback-icon'),
    feedbackHeading: document.getElementById('feedback-heading'),
    feedbackDetail: document.getElementById('feedback-detail'),
    btnPrevQuestion: document.getElementById('btn-prev-question'),
    btnNextQuestion: document.getElementById('btn-next-question'),

    // Sidebar Palette
    paletteSummaryCount: document.getElementById('palette-summary-count'),
    progressPercent: document.getElementById('progress-percent'),
    progressBarFill: document.getElementById('progress-bar-fill'),
    paletteGrid: document.getElementById('palette-grid'),

    // Short Answer DOM
    saModeFlashcard: document.getElementById('sa-mode-flashcard'),
    saModeTypein: document.getElementById('sa-mode-typein'),
    saModeListall: document.getElementById('sa-mode-listall'),
    searchSaInput: document.getElementById('search-sa-input'),
    saFlashcardView: document.getElementById('sa-flashcard-view'),
    saTypeinView: document.getElementById('sa-typein-view'),
    saListallView: document.getElementById('sa-listall-view'),

    // Flashcard
    flashcardElement: document.getElementById('flashcard-element'),
    fcIndexBadge: document.getElementById('fc-index-badge'),
    fcQuestionText: document.getElementById('fc-question-text'),
    fcAnswerText: document.getElementById('fc-answer-text'),
    btnFcPrev: document.getElementById('btn-fc-prev'),
    btnFcNext: document.getElementById('btn-fc-next'),
    btnFcForget: document.getElementById('btn-fc-forget'),
    btnFcRemembered: document.getElementById('btn-fc-remembered'),
    fcReviewCount: document.getElementById('fc-review-count'),
    fcMasteredCount: document.getElementById('fc-mastered-count'),

    // Type-in
    typeinIndexBadge: document.getElementById('typein-index-badge'),
    typeinQuestionText: document.getElementById('typein-question-text'),
    typeinUserInput: document.getElementById('typein-user-input'),
    btnCheckTypein: document.getElementById('btn-check-typein'),
    btnShowTypeinAnswer: document.getElementById('btn-show-typein-answer'),
    typeinResultBox: document.getElementById('typein-result-box'),
    typeinMatchBadge: document.getElementById('typein-match-badge'),
    typeinStandardAnswer: document.getElementById('typein-standard-answer'),
    btnTypeinPrev: document.getElementById('btn-typein-prev'),
    btnTypeinNext: document.getElementById('btn-typein-next'),

    // List all
    saListallContainer: document.getElementById('sa-listall-container'),

    // Stats
    statTotalAnswered: document.getElementById('stat-total-answered'),
    statCorrectCount: document.getElementById('stat-correct-count'),
    statIncorrectCount: document.getElementById('stat-incorrect-count'),
    statBookmarksCount: document.getElementById('stat-bookmarks-count'),
    bookmarksListContainer: document.getElementById('bookmarks-list-container'),
    btnClearBookmarks: document.getElementById('btn-clear-bookmarks'),

    // Modal
    examResultModal: document.getElementById('exam-result-modal'),
    modalScoreTitle: document.getElementById('modal-score-title'),
    modalScorePoints: document.getElementById('modal-score-points'),
    modalCorrectText: document.getElementById('modal-correct-text'),
    modalIncorrectText: document.getElementById('modal-incorrect-text'),
    modalSkippedText: document.getElementById('modal-skipped-text'),
    modalTimeTaken: document.getElementById('modal-time-taken'),
    btnModalReview: document.getElementById('btn-modal-review'),
    btnModalClose: document.getElementById('btn-modal-close'),

    // Confetti
    confettiCanvas: document.getElementById('confetti-canvas')
  };

  // 4. THEME INITIALIZATION
  function initTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY_THEME) || 'light';
    if (savedTheme === 'dark') {
      document.body.classList.replace('theme-light', 'theme-dark');
    }
    dom.themeToggle.addEventListener('click', () => {
      const isDark = document.body.classList.contains('theme-dark');
      if (isDark) {
        document.body.classList.replace('theme-dark', 'theme-light');
        localStorage.setItem(STORAGE_KEY_THEME, 'light');
      } else {
        document.body.classList.replace('theme-light', 'theme-dark');
        localStorage.setItem(STORAGE_KEY_THEME, 'dark');
      }
      playClickSound();
    });
  }

  // 5. DATA PERSISTENCE HELPERS
  function saveAnswers() {
    localStorage.setItem(STORAGE_KEY_ANSWERS, JSON.stringify(state.userAnswers));
  }

  function saveBookmarks() {
    localStorage.setItem(STORAGE_KEY_BOOKMARKS, JSON.stringify(Array.from(state.bookmarks)));
    updateBadges();
  }

  function saveFcProgress() {
    localStorage.setItem(STORAGE_KEY_FC_MASTERED, JSON.stringify(Array.from(state.sa.mastered)));
    localStorage.setItem(STORAGE_KEY_FC_REVIEW, JSON.stringify(Array.from(state.sa.review)));
  }

  // 6. MCQ FILTERING & SEARCH
  function updateFilteredIndices() {
    const query = state.searchQuery.trim().toLowerCase();
    const filter = state.filterStatus;

    state.filteredMcqIndices = [];

    rawMcqList.forEach((q, idx) => {
      // 1. Text Search matching
      let matchesQuery = true;
      if (query) {
        const inQuestion = q.question.toLowerCase().includes(query);
        const inOptions = q.options.some(opt => opt.toLowerCase().includes(query));
        matchesQuery = inQuestion || inOptions;
      }

      if (!matchesQuery) return;

      // 2. Status matching
      const ans = state.userAnswers[q.id];
      const isAnswered = ans !== undefined;
      const isCorrect = isAnswered && ans === q.correctIndex;
      const isBookmarked = state.bookmarks.has(q.id);

      if (filter === 'all') {
        state.filteredMcqIndices.push(idx);
      } else if (filter === 'unanswered' && !isAnswered) {
        state.filteredMcqIndices.push(idx);
      } else if (filter === 'correct' && isCorrect) {
        state.filteredMcqIndices.push(idx);
      } else if (filter === 'incorrect' && isAnswered && !isCorrect) {
        state.filteredMcqIndices.push(idx);
      } else if (filter === 'bookmarked' && isBookmarked) {
        state.filteredMcqIndices.push(idx);
      }
    });

    // Clamp current index
    if (state.filteredMcqIndices.length > 0) {
      if (state.currentMcqIndex >= state.filteredMcqIndices.length) {
        state.currentMcqIndex = 0;
      }
    } else {
      state.currentMcqIndex = 0;
    }
  }

  // 7. RENDER MCQ QUESTION CARD
  function renderCurrentMcq() {
    if (state.filteredMcqIndices.length === 0) {
      dom.questionText.innerHTML = 'Không tìm thấy câu hỏi nào phù hợp với bộ lọc.';
      dom.qIndexBadge.textContent = '0/0';
      dom.qOriginalId.textContent = '';
      dom.qStatusBadge.textContent = 'Trống';
      dom.qStatusBadge.className = 'status-pill status-unanswered';
      dom.optionsContainer.innerHTML = '';
      dom.practiceFeedback.classList.add('hidden');
      return;
    }

    const rawIdx = state.filteredMcqIndices[state.currentMcqIndex];
    const q = rawMcqList[rawIdx];
    const userAnswer = state.userAnswers[q.id];
    const hasAnswered = userAnswer !== undefined;
    const isBookmarked = state.bookmarks.has(q.id);

    // Meta & badges
    dom.qIndexBadge.textContent = `Câu ${state.currentMcqIndex + 1}/${state.filteredMcqIndices.length}`;
    dom.qOriginalId.textContent = `#${q.id}`;

    // Bookmark button
    if (isBookmarked) {
      dom.btnToggleBookmark.classList.add('bookmarked');
      dom.bookmarkStarIcon.textContent = '★';
      dom.bookmarkText.textContent = 'Đã lưu';
    } else {
      dom.btnToggleBookmark.classList.remove('bookmarked');
      dom.bookmarkStarIcon.textContent = '☆';
      dom.bookmarkText.textContent = 'Lưu câu này';
    }

    // Status pill
    if (!hasAnswered) {
      dom.qStatusBadge.textContent = 'Chưa làm';
      dom.qStatusBadge.className = 'status-pill status-unanswered';
    } else if (state.mode === 'exam' && !state.exam.submitted) {
      dom.qStatusBadge.textContent = 'Đã chọn';
      dom.qStatusBadge.className = 'status-pill status-correct';
    } else {
      if (userAnswer === q.correctIndex) {
        dom.qStatusBadge.textContent = 'Đã làm đúng ✓';
        dom.qStatusBadge.className = 'status-pill status-correct';
      } else {
        dom.qStatusBadge.textContent = 'Đã làm sai ✗';
        dom.qStatusBadge.className = 'status-pill status-incorrect';
      }
    }

    // Question title
    dom.questionText.textContent = q.question;

    // Render 4 Options
    dom.optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    q.options.forEach((optText, optIdx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.dataset.optIdx = optIdx;

      const isSelected = userAnswer === optIdx;
      const isCorrectOpt = optIdx === q.correctIndex;

      if (isSelected) {
        btn.classList.add('selected');
      }

      // Practice mode immediate feedback
      if (state.mode === 'practice' && hasAnswered) {
        if (isCorrectOpt) {
          btn.classList.add('is-correct');
        } else if (isSelected && !isCorrectOpt) {
          btn.classList.add('is-incorrect');
        }
      }

      // Exam submitted feedback
      if (state.mode === 'exam' && state.exam.submitted) {
        if (isCorrectOpt) {
          btn.classList.add('is-correct');
        } else if (isSelected && !isCorrectOpt) {
          btn.classList.add('is-incorrect');
        }
      }

      btn.innerHTML = `
        <span class="opt-prefix">${letters[optIdx]}</span>
        <span class="opt-text">${optText}</span>
      `;

      btn.addEventListener('click', () => {
        handleOptionSelect(q.id, optIdx, q.correctIndex);
      });

      dom.optionsContainer.appendChild(btn);
    });

    // Practice Feedback banner
    if (state.mode === 'practice' && hasAnswered) {
      dom.practiceFeedback.classList.remove('hidden');
      if (userAnswer === q.correctIndex) {
        dom.practiceFeedback.className = 'feedback-banner success';
        dom.feedbackIcon.textContent = '✓';
        dom.feedbackHeading.textContent = 'Tuyệt vời, câu trả lời chính xác!';
        dom.feedbackDetail.textContent = q.explanation;
      } else {
        dom.practiceFeedback.className = 'feedback-banner wrong';
        dom.feedbackIcon.textContent = '✗';
        dom.feedbackHeading.textContent = 'Chưa chính xác!';
        dom.feedbackDetail.textContent = q.explanation;
      }
    } else if (state.mode === 'exam' && state.exam.submitted) {
      dom.practiceFeedback.classList.remove('hidden');
      if (userAnswer === q.correctIndex) {
        dom.practiceFeedback.className = 'feedback-banner success';
        dom.feedbackIcon.textContent = '✓';
        dom.feedbackHeading.textContent = 'Chính xác!';
        dom.feedbackDetail.textContent = q.explanation;
      } else {
        dom.practiceFeedback.className = 'feedback-banner wrong';
        dom.feedbackIcon.textContent = '✗';
        dom.feedbackHeading.textContent = `Bạn đã chọn đáp án ${userAnswer !== undefined ? letters[userAnswer] : 'bỏ qua'}`;
        dom.feedbackDetail.textContent = q.explanation;
      }
    } else {
      dom.practiceFeedback.classList.add('hidden');
    }

    // Nav button states
    dom.btnPrevQuestion.disabled = state.currentMcqIndex === 0;
    dom.btnNextQuestion.disabled = state.currentMcqIndex === state.filteredMcqIndices.length - 1;

    renderPalette();
    updateBadges();
  }

  // 8. HANDLE MCQ SELECTION
  function handleOptionSelect(qId, selectedIdx, correctIdx) {
    if (state.mode === 'exam' && state.exam.submitted) {
      return; // Exam finished, view-only
    }

    const isFirstTime = state.userAnswers[qId] === undefined;
    state.userAnswers[qId] = selectedIdx;
    saveAnswers();

    if (state.mode === 'practice') {
      if (selectedIdx === correctIdx) {
        playCorrectSound();
      } else {
        playWrongSound();
      }
    } else {
      playClickSound();
    }

    renderCurrentMcq();
  }

  // 9. RENDER SIDEBAR PALETTE GRID
  function renderPalette() {
    dom.paletteGrid.innerHTML = '';
    const totalRaw = rawMcqList.length;
    let answeredCount = 0;
    let correctCount = 0;

    rawMcqList.forEach(q => {
      const ans = state.userAnswers[q.id];
      if (ans !== undefined) {
        answeredCount++;
        if (ans === q.correctIndex) correctCount++;
      }
    });

    const percent = Math.round((answeredCount / totalRaw) * 100);
    dom.progressPercent.textContent = `${percent}%`;
    dom.progressBarFill.style.width = `${percent}%`;
    dom.paletteSummaryCount.textContent = `${state.filteredMcqIndices.length}/${totalRaw} câu`;

    state.filteredMcqIndices.forEach((rawIdx, filterIdx) => {
      const q = rawMcqList[rawIdx];
      const ans = state.userAnswers[q.id];
      const isCurrent = filterIdx === state.currentMcqIndex;
      const isBookmarked = state.bookmarks.has(q.id);

      const btn = document.createElement('button');
      btn.className = 'palette-btn';
      btn.textContent = q.id;
      btn.title = `Câu ${q.id}: ${q.question.substring(0, 50)}...`;

      if (isCurrent) btn.classList.add('active');
      if (isBookmarked) btn.classList.add('is-bookmarked');

      if (ans !== undefined) {
        if (state.mode === 'exam' && !state.exam.submitted) {
          btn.classList.add('exam-answered');
        } else {
          if (ans === q.correctIndex) {
            btn.classList.add('answered-correct');
          } else {
            btn.classList.add('answered-incorrect');
          }
        }
      }

      btn.addEventListener('click', () => {
        state.currentMcqIndex = filterIdx;
        playClickSound();
        renderCurrentMcq();
      });

      dom.paletteGrid.appendChild(btn);
    });
  }

  // 10. UPDATE BADGES & STATS
  function updateBadges() {
    let answered = 0;
    let correct = 0;
    let incorrect = 0;

    rawMcqList.forEach(q => {
      const ans = state.userAnswers[q.id];
      if (ans !== undefined) {
        answered++;
        if (ans === q.correctIndex) correct++;
        else incorrect++;
      }
    });

    dom.headerProgressText.textContent = `${answered}/${rawMcqList.length}`;
    dom.bookmarksCountBadge.textContent = `${state.bookmarks.size} đã lưu`;

    // Stats tab numbers
    dom.statTotalAnswered.textContent = `${answered}/${rawMcqList.length}`;
    dom.statCorrectCount.textContent = correct;
    dom.statIncorrectCount.textContent = incorrect;
    dom.statBookmarksCount.textContent = state.bookmarks.size;

    renderBookmarksList();
  }

  // 11. BOOKMARK TOGGLE
  function toggleBookmarkCurrent() {
    if (state.filteredMcqIndices.length === 0) return;
    const rawIdx = state.filteredMcqIndices[state.currentMcqIndex];
    const q = rawMcqList[rawIdx];

    if (state.bookmarks.has(q.id)) {
      state.bookmarks.delete(q.id);
    } else {
      state.bookmarks.add(q.id);
    }
    saveBookmarks();
    playClickSound();
    renderCurrentMcq();
  }

  function renderBookmarksList() {
    dom.bookmarksListContainer.innerHTML = '';
    if (state.bookmarks.size === 0) {
      dom.bookmarksListContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">⭐</div>
          <h4>Chưa có câu hỏi nào được lưu</h4>
          <p>Nhấp vào biểu tượng sao trên các câu hỏi khó để lưu vào danh sách này.</p>
        </div>
      `;
      return;
    }

    state.bookmarks.forEach(id => {
      const q = rawMcqList.find(item => item.id === id);
      if (!q) return;

      const item = document.createElement('div');
      item.className = 'bookmark-item';
      item.innerHTML = `
        <div class="bm-info">
          <span class="q-badge">Câu #${q.id}</span>
          <span class="bm-q-text">${q.question}</span>
        </div>
        <div class="bm-actions">
          <button class="btn-primary btn-jump-to" data-id="${q.id}">Làm ngay</button>
          <button class="btn-danger btn-remove-bm" data-id="${q.id}">Xóa</button>
        </div>
      `;

      item.querySelector('.btn-jump-to').addEventListener('click', () => {
        // Switch to MCQ tab and navigate to this question
        switchTab('tab-mcq');
        state.filterStatus = 'all';
        dom.filterMcqSelect.value = 'all';
        state.searchQuery = '';
        dom.searchMcqInput.value = '';
        updateFilteredIndices();
        const fIdx = state.filteredMcqIndices.findIndex(idx => rawMcqList[idx].id === q.id);
        if (fIdx !== -1) {
          state.currentMcqIndex = fIdx;
          renderCurrentMcq();
        }
      });

      item.querySelector('.btn-remove-bm').addEventListener('click', () => {
        state.bookmarks.delete(q.id);
        saveBookmarks();
        renderCurrentMcq();
      });

      dom.bookmarksListContainer.appendChild(item);
    });
  }

  // 12. EXAM MODE LOGIC
  function startExamMode() {
    state.mode = 'exam';
    dom.modePracticeBtn.classList.remove('active');
    dom.modeExamBtn.classList.add('active');
    dom.examControlsBar.classList.remove('hidden');

    // Confirm reset answers for clean exam
    const confirmNew = confirm("Bắt đầu bài thi thử với 105 câu trong thời gian 45 phút?\n(Tiến độ thi thử sẽ được tính điểm và đồng hồ sẽ đếm ngược)");
    if (!confirmNew) {
      setModePractice();
      return;
    }

    state.exam.active = true;
    state.exam.submitted = false;
    state.exam.durationSec = 45 * 60;
    state.exam.remainingSec = 45 * 60;
    state.exam.startTime = Date.now();
    state.userAnswers = {};
    saveAnswers();

    // Shuffle questions for exam
    shuffleMcqList();
    state.currentMcqIndex = 0;
    renderCurrentMcq();

    // Start timer interval
    if (state.exam.timerId) clearInterval(state.exam.timerId);
    state.exam.timerId = setInterval(updateExamTimer, 1000);
    renderTimer();
  }

  function setModePractice() {
    state.mode = 'practice';
    dom.modeExamBtn.classList.remove('active');
    dom.modePracticeBtn.classList.add('active');
    dom.examControlsBar.classList.add('hidden');
    if (state.exam.timerId) clearInterval(state.exam.timerId);
    state.exam.active = false;
    renderCurrentMcq();
  }

  function updateExamTimer() {
    state.exam.remainingSec--;
    renderTimer();

    if (state.exam.remainingSec <= 0) {
      clearInterval(state.exam.timerId);
      alert("Hết giờ làm bài! Hệ thống sẽ tự động nộp bài thi của bạn.");
      submitExam();
    }
  }

  function renderTimer() {
    const mins = Math.floor(state.exam.remainingSec / 60);
    const secs = state.exam.remainingSec % 60;
    dom.timerText.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  function submitExam() {
    if (state.exam.timerId) clearInterval(state.exam.timerId);
    state.exam.submitted = true;
    state.exam.endTime = Date.now();

    // Calculate score
    const total = rawMcqList.length;
    let correct = 0;
    let incorrect = 0;
    let skipped = 0;

    rawMcqList.forEach(q => {
      const ans = state.userAnswers[q.id];
      if (ans === undefined) {
        skipped++;
      } else if (ans === q.correctIndex) {
        correct++;
      } else {
        incorrect++;
      }
    });

    const score10 = ((correct / total) * 10).toFixed(1);
    const timeUsedSec = Math.round((state.exam.endTime - state.exam.startTime) / 1000);
    const usedMin = Math.floor(timeUsedSec / 60);
    const usedSec = timeUsedSec % 60;

    // Show result in modal
    dom.modalScorePoints.textContent = score10;
    dom.modalCorrectText.textContent = `${correct} câu (${Math.round((correct / total) * 100)}%)`;
    dom.modalIncorrectText.textContent = `${incorrect} câu`;
    dom.modalSkippedText.textContent = `${skipped} câu`;
    dom.modalTimeTaken.textContent = `${usedMin} phút ${usedSec} giây`;

    if (Number(score10) >= 8.5) {
      dom.modalScoreTitle.textContent = "Xuất sắc! 🎉";
      triggerConfetti();
    } else if (Number(score10) >= 6.5) {
      dom.modalScoreTitle.textContent = "Khá tốt! Cố lên nhé! 👍";
    } else {
      dom.modalScoreTitle.textContent = "Cần ôn tập thêm! 📖";
    }

    dom.examResultModal.classList.remove('hidden');
    renderCurrentMcq();
  }

  // 13. SHUFFLE QUESTIONS
  function shuffleMcqList() {
    for (let i = rawMcqList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [rawMcqList[i], rawMcqList[j]] = [rawMcqList[j], rawMcqList[i]];
    }
    updateFilteredIndices();
    renderCurrentMcq();
  }

  // 14. RESET PROGRESS
  function resetAllData() {
    const ok = confirm("Bạn có chắc chắn muốn đặt lại toàn bộ tiến độ làm bài trắc nghiệm và thẻ ghi nhớ không?");
    if (!ok) return;

    state.userAnswers = {};
    saveAnswers();
    state.sa.mastered.clear();
    state.sa.review.clear();
    saveFcProgress();

    state.currentMcqIndex = 0;
    updateFilteredIndices();
    renderCurrentMcq();
    updateBadges();
    renderFlashcard();
    alert("Đã đặt lại tiến độ về ban đầu!");
  }

  // 15. SHORT ANSWER: FLASHCARD LOGIC
  function renderFlashcard() {
    const list = state.sa.filteredSaList;
    if (list.length === 0) {
      dom.fcQuestionText.textContent = "Không tìm thấy câu hỏi ngắn phù hợp.";
      dom.fcAnswerText.textContent = "";
      dom.fcIndexBadge.textContent = "0/0";
      return;
    }

    if (state.sa.currentFcIndex >= list.length) state.sa.currentFcIndex = 0;
    const item = list[state.sa.currentFcIndex];

    dom.fcIndexBadge.textContent = `Thẻ ${state.sa.currentFcIndex + 1}/${list.length} (#${item.id})`;
    dom.fcQuestionText.textContent = item.question;
    dom.fcAnswerText.textContent = item.answer;

    // Reset flip
    state.sa.fcFlipped = false;
    dom.flashcardElement.classList.remove('flipped');

    // Counters
    dom.fcMasteredCount.textContent = state.sa.mastered.size;
    dom.fcReviewCount.textContent = state.sa.review.size;

    dom.btnFcPrev.disabled = state.sa.currentFcIndex === 0;
    dom.btnFcNext.disabled = state.sa.currentFcIndex === list.length - 1;
  }

  function flipFlashcard() {
    state.sa.fcFlipped = !state.sa.fcFlipped;
    if (state.sa.fcFlipped) {
      dom.flashcardElement.classList.add('flipped');
    } else {
      dom.flashcardElement.classList.remove('flipped');
    }
    playClickSound();
  }

  // 16. SHORT ANSWER: TYPE-IN LOGIC
  function renderTypeIn() {
    const list = state.sa.filteredSaList;
    if (list.length === 0) {
      dom.typeinQuestionText.textContent = "Không tìm thấy câu hỏi.";
      return;
    }
    if (state.sa.currentTypeInIndex >= list.length) state.sa.currentTypeInIndex = 0;
    const item = list[state.sa.currentTypeInIndex];

    dom.typeinIndexBadge.textContent = `Câu ${state.sa.currentTypeInIndex + 1}/${list.length} (#${item.id})`;
    dom.typeinQuestionText.textContent = item.question;
    dom.typeinUserInput.value = "";
    dom.typeinResultBox.classList.add('hidden');

    dom.btnTypeinPrev.disabled = state.sa.currentTypeInIndex === 0;
    dom.btnTypeinNext.disabled = state.sa.currentTypeInIndex === list.length - 1;
  }

  function normalizeText(str) {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // remove diacritics for flexible matching
      .replace(/[^\w\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function checkTypeInAnswer() {
    const list = state.sa.filteredSaList;
    const item = list[state.sa.currentTypeInIndex];
    const userText = dom.typeinUserInput.value.trim();

    if (!userText) {
      alert("Vui lòng nhập câu trả lời của bạn trước khi kiểm tra!");
      return;
    }

    const normUser = normalizeText(userText);
    const normAns = normalizeText(item.answer);

    // Keyword matching ratio
    const ansWords = normAns.split(' ').filter(w => w.length > 2);
    let matchedWords = 0;
    ansWords.forEach(w => {
      if (normUser.includes(w)) matchedWords++;
    });

    const ratio = ansWords.length > 0 ? Math.round((matchedWords / ansWords.length) * 100) : 100;
    const scorePct = Math.min(100, Math.max(ratio, normUser === normAns ? 100 : ratio));

    dom.typeinResultBox.classList.remove('hidden');
    dom.typeinStandardAnswer.textContent = item.answer;

    if (scorePct >= 75) {
      dom.typeinMatchBadge.textContent = `Độ khớp ý chính: ${scorePct}% (Rất chuẩn xác!)`;
      dom.typeinMatchBadge.style.backgroundColor = "var(--emerald-light)";
      dom.typeinMatchBadge.style.color = "var(--emerald)";
      playCorrectSound();
    } else if (scorePct >= 40) {
      dom.typeinMatchBadge.textContent = `Độ khớp ý chính: ${scorePct}% (Khá tốt, đối chiếu thêm)`;
      dom.typeinMatchBadge.style.backgroundColor = "var(--amber-light)";
      dom.typeinMatchBadge.style.color = "var(--amber)";
      playClickSound();
    } else {
      dom.typeinMatchBadge.textContent = `Độ khớp ý chính: ${scorePct}% (Cần bổ sung thêm từ khóa)`;
      dom.typeinMatchBadge.style.backgroundColor = "var(--rose-light)";
      dom.typeinMatchBadge.style.color = "var(--rose)";
      playWrongSound();
    }
  }

  // 17. SHORT ANSWER: LIST ALL
  function renderSaListAll() {
    dom.saListallContainer.innerHTML = '';
    const list = state.sa.filteredSaList;

    if (list.length === 0) {
      dom.saListallContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <h4>Không tìm thấy câu hỏi ngắn nào</h4>
        </div>
      `;
      return;
    }

    list.forEach(item => {
      const card = document.createElement('div');
      card.className = 'sa-item-card';
      card.innerHTML = `
        <div class="sa-item-head">
          <span class="q-badge">Câu #${item.id}</span>
          <span class="sa-item-question">${item.question}</span>
        </div>
        <div class="sa-item-ans-box">
          <div class="sa-item-ans-title">Đáp án chuẩn:</div>
          <div class="sa-item-answer">${item.answer}</div>
        </div>
      `;
      dom.saListallContainer.appendChild(card);
    });
  }

  // 18. TAB SWITCHING
  function switchTab(tabId) {
    dom.tabButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    dom.tabPanes.forEach(pane => {
      pane.classList.toggle('active', pane.id === tabId);
    });

    if (tabId === 'tab-mcq') {
      renderCurrentMcq();
    } else if (tabId === 'tab-short-answer') {
      renderFlashcard();
      renderTypeIn();
      renderSaListAll();
    } else if (tabId === 'tab-stats') {
      updateBadges();
    }
  }

  // 19. CONFETTI CELEBRATION (Lightweight Canvas Engine)
  function triggerConfetti() {
    const canvas = dom.confettiCanvas;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ['#4f46e5', '#10b981', '#f59e0b', '#ec4899', '#3b82f6'];

    for (let i = 0; i < 120; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedY: Math.random() * 4 + 2,
        speedX: (Math.random() - 0.5) * 3,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 8
      });
    }

    let frame = 0;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotationSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      frame++;
      if (frame < 220) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    requestAnimationFrame(animate);
  }

  // 20. KEYBOARD SHORTCUTS
  function initKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      // Ignore if user is typing in input or textarea
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
        return;
      }

      const activeTab = document.querySelector('.tab-pane.active').id;

      if (activeTab === 'tab-mcq') {
        // Option selection 1, 2, 3, 4 or A, B, C, D
        const key = e.key.toUpperCase();
        let optIdx = -1;
        if (key === '1' || key === 'A') optIdx = 0;
        else if (key === '2' || key === 'B') optIdx = 1;
        else if (key === '3' || key === 'C') optIdx = 2;
        else if (key === '4' || key === 'D') optIdx = 3;

        if (optIdx !== -1 && state.filteredMcqIndices.length > 0) {
          const rawIdx = state.filteredMcqIndices[state.currentMcqIndex];
          const q = rawMcqList[rawIdx];
          handleOptionSelect(q.id, optIdx, q.correctIndex);
        }

        // Navigation Left / Right
        if (e.key === 'ArrowLeft') {
          if (state.currentMcqIndex > 0) {
            state.currentMcqIndex--;
            playClickSound();
            renderCurrentMcq();
          }
        } else if (e.key === 'ArrowRight') {
          if (state.currentMcqIndex < state.filteredMcqIndices.length - 1) {
            state.currentMcqIndex++;
            playClickSound();
            renderCurrentMcq();
          }
        }

        // S key to bookmark
        if (key === 'S') {
          toggleBookmarkCurrent();
        }
      } else if (activeTab === 'tab-short-answer') {
        // Space to flip flashcard
        if (e.code === 'Space' && state.sa.mode === 'flashcard') {
          e.preventDefault();
          flipFlashcard();
        } else if (e.key === 'ArrowLeft' && state.sa.mode === 'flashcard') {
          if (state.sa.currentFcIndex > 0) {
            state.sa.currentFcIndex--;
            renderFlashcard();
          }
        } else if (e.key === 'ArrowRight' && state.sa.mode === 'flashcard') {
          if (state.sa.currentFcIndex < state.sa.filteredSaList.length - 1) {
            state.sa.currentFcIndex++;
            renderFlashcard();
          }
        }
      }
    });
  }

  // 21. EVENT LISTENERS SETUP
  function initEventListeners() {
    // Nav tabs
    dom.tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        playClickSound();
        switchTab(btn.dataset.tab);
      });
    });

    // Reset button
    dom.resetBtn.addEventListener('click', resetAllData);

    // MCQ Controls
    dom.modePracticeBtn.addEventListener('click', () => {
      playClickSound();
      setModePractice();
    });

    dom.modeExamBtn.addEventListener('click', () => {
      playClickSound();
      startExamMode();
    });

    dom.btnSubmitExam.addEventListener('click', () => {
      const confirmSub = confirm("Bạn có chắc chắn muốn nộp bài thi ngay bây giờ?");
      if (confirmSub) submitExam();
    });

    // Search MCQ
    dom.searchMcqInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      dom.btnClearSearch.classList.toggle('hidden', !state.searchQuery);
      updateFilteredIndices();
      renderCurrentMcq();
    });

    dom.btnClearSearch.addEventListener('click', () => {
      dom.searchMcqInput.value = '';
      state.searchQuery = '';
      dom.btnClearSearch.classList.add('hidden');
      updateFilteredIndices();
      renderCurrentMcq();
    });

    // Filter MCQ
    dom.filterMcqSelect.addEventListener('change', (e) => {
      state.filterStatus = e.target.value;
      playClickSound();
      updateFilteredIndices();
      renderCurrentMcq();
    });

    // Shuffle MCQ
    dom.btnShuffleMcq.addEventListener('click', () => {
      playClickSound();
      shuffleMcqList();
      alert("Đã xáo trộn ngẫu nhiên ngân hàng câu hỏi!");
    });

    // Bookmark button
    dom.btnToggleBookmark.addEventListener('click', toggleBookmarkCurrent);

    // Prev / Next question
    dom.btnPrevQuestion.addEventListener('click', () => {
      if (state.currentMcqIndex > 0) {
        state.currentMcqIndex--;
        playClickSound();
        renderCurrentMcq();
      }
    });

    dom.btnNextQuestion.addEventListener('click', () => {
      if (state.currentMcqIndex < state.filteredMcqIndices.length - 1) {
        state.currentMcqIndex++;
        playClickSound();
        renderCurrentMcq();
      }
    });

    // Short Answer mode buttons
    dom.saModeFlashcard.addEventListener('click', () => {
      state.sa.mode = 'flashcard';
      dom.saModeFlashcard.classList.add('active');
      dom.saModeTypein.classList.remove('active');
      dom.saModeListall.classList.remove('active');
      dom.saFlashcardView.classList.remove('hidden');
      dom.saTypeinView.classList.add('hidden');
      dom.saListallView.classList.add('hidden');
      playClickSound();
      renderFlashcard();
    });

    dom.saModeTypein.addEventListener('click', () => {
      state.sa.mode = 'typein';
      dom.saModeFlashcard.classList.remove('active');
      dom.saModeTypein.classList.add('active');
      dom.saModeListall.classList.remove('active');
      dom.saFlashcardView.classList.add('hidden');
      dom.saTypeinView.classList.remove('hidden');
      dom.saListallView.classList.add('hidden');
      playClickSound();
      renderTypeIn();
    });

    dom.saModeListall.addEventListener('click', () => {
      state.sa.mode = 'listall';
      dom.saModeFlashcard.classList.remove('active');
      dom.saModeTypein.classList.remove('active');
      dom.saModeListall.classList.add('active');
      dom.saFlashcardView.classList.add('hidden');
      dom.saTypeinView.classList.add('hidden');
      dom.saListallView.classList.remove('hidden');
      playClickSound();
      renderSaListAll();
    });

    // Search Short Answer
    dom.searchSaInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) {
        state.sa.filteredSaList = [...rawSaList];
      } else {
        state.sa.filteredSaList = rawSaList.filter(item =>
          item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q)
        );
      }
      renderFlashcard();
      renderTypeIn();
      renderSaListAll();
    });

    // Flashcard events
    dom.flashcardElement.addEventListener('click', flipFlashcard);
    dom.btnFcPrev.addEventListener('click', () => {
      if (state.sa.currentFcIndex > 0) {
        state.sa.currentFcIndex--;
        playClickSound();
        renderFlashcard();
      }
    });
    dom.btnFcNext.addEventListener('click', () => {
      if (state.sa.currentFcIndex < state.sa.filteredSaList.length - 1) {
        state.sa.currentFcIndex++;
        playClickSound();
        renderFlashcard();
      }
    });

    dom.btnFcRemembered.addEventListener('click', () => {
      const item = state.sa.filteredSaList[state.sa.currentFcIndex];
      state.sa.mastered.add(item.id);
      state.sa.review.delete(item.id);
      saveFcProgress();
      playCorrectSound();
      if (state.sa.currentFcIndex < state.sa.filteredSaList.length - 1) {
        state.sa.currentFcIndex++;
      }
      renderFlashcard();
    });

    dom.btnFcForget.addEventListener('click', () => {
      const item = state.sa.filteredSaList[state.sa.currentFcIndex];
      state.sa.review.add(item.id);
      state.sa.mastered.delete(item.id);
      saveFcProgress();
      playWrongSound();
      if (state.sa.currentFcIndex < state.sa.filteredSaList.length - 1) {
        state.sa.currentFcIndex++;
      }
      renderFlashcard();
    });

    // Type-in events
    dom.btnCheckTypein.addEventListener('click', checkTypeInAnswer);
    dom.btnShowTypeinAnswer.addEventListener('click', () => {
      const item = state.sa.filteredSaList[state.sa.currentTypeInIndex];
      dom.typeinResultBox.classList.remove('hidden');
      dom.typeinMatchBadge.textContent = "Xem trực tiếp đáp án mẫu";
      dom.typeinMatchBadge.style.backgroundColor = "var(--primary-light)";
      dom.typeinMatchBadge.style.color = "var(--primary)";
      dom.typeinStandardAnswer.textContent = item.answer;
      playClickSound();
    });

    dom.btnTypeinPrev.addEventListener('click', () => {
      if (state.sa.currentTypeInIndex > 0) {
        state.sa.currentTypeInIndex--;
        playClickSound();
        renderTypeIn();
      }
    });

    dom.btnTypeinNext.addEventListener('click', () => {
      if (state.sa.currentTypeInIndex < state.sa.filteredSaList.length - 1) {
        state.sa.currentTypeInIndex++;
        playClickSound();
        renderTypeIn();
      }
    });

    // Clear bookmarks button
    dom.btnClearBookmarks.addEventListener('click', () => {
      if (confirm("Bạn có chắc chắn muốn xóa tất cả câu đã đánh dấu sao không?")) {
        state.bookmarks.clear();
        saveBookmarks();
        renderCurrentMcq();
      }
    });

    // Modal buttons
    dom.btnModalClose.addEventListener('click', () => {
      dom.examResultModal.classList.add('hidden');
      setModePractice();
    });

    dom.btnModalReview.addEventListener('click', () => {
      dom.examResultModal.classList.add('hidden');
      state.currentMcqIndex = 0;
      renderCurrentMcq();
    });
  }

  // 22. INITIALIZATION
  function initApp() {
    initTheme();
    updateFilteredIndices();
    renderCurrentMcq();
    renderFlashcard();
    renderTypeIn();
    renderSaListAll();
    updateBadges();
    initEventListeners();
    initKeyboardShortcuts();
  }

  // Start app on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
