// Ngân hàng câu hỏi Ôn thi Chủ nghĩa xã hội khoa học (CNXHKH)
const QUIZ_DATA = {
  "mcq": [
    {
      "id": 1,
      "question": "Ai là người viết tác phẩm \"Không tưởng\" (Utôpia)?",
      "options": [
        "Xanh Xi Mông",
        "Campanenla",
        "Tômát Morơ",
        "Uynxtenli"
      ],
      "correctIndex": 2,
      "explanation": "Đáp án đúng: C. Tômát Morơ"
    },
    {
      "id": 2,
      "question": "Tác phẩm nào đánh dấu sự ra đời của Chủ nghĩa xã hội khoa học?",
      "options": [
        "Chống Đuy - Rinh",
        "Tuyên ngôn của Đảng cộng sản",
        "Bộ Tư bản",
        "Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán"
      ],
      "correctIndex": 1,
      "explanation": "Đáp án đúng: B. Tuyên ngôn của Đảng cộng sản"
    },
    {
      "id": 3,
      "question": "Đâu là giai cấp có lợi ích cơ bản đối lập với lợi ích của giai cấp tư sản?",
      "options": [
        "Giai cấp nông dân",
        "Tiểu tư sản",
        "Tầng lớp trí thức",
        "Giai cấp công nhân"
      ],
      "correctIndex": 3,
      "explanation": "Đáp án đúng: D. Giai cấp công nhân"
    },
    {
      "id": 4,
      "question": "Chủ nghĩa duy vật lịch sử đã luận giải như thế nào về mặt triết học của lịch sử phát triển chủ nghĩa tư bản?",
      "options": [
        "Sự sụp đổi của chủ nghĩa tư bản và sự thắng lợi của chủ nghĩa xã hội là tất yếu như nhau",
        "Chủ nghĩa tư bản là đỉnh cao trong sự phát triển của lịch sử loài người",
        "Kinh tế tư bản chủ nghĩa phát triển tạo nên lực lượng sản xuất hiện đại",
        "Giai cấp tư sản là lực lượng xã hội đối đầu trực tiếp với giai cấp công nhân"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Sự sụp đổi của chủ nghĩa tư bản và sự thắng lợi của chủ nghĩa xã hội là tất yếu như nhau"
    },
    {
      "id": 5,
      "question": "Đâu là Nhà nước xã hội chủ nghĩa đầu tiên trên thế giới?",
      "options": [
        "Nhà nước Xô Viết, năm 1917",
        "Nhà nước XHCN Việt Nam",
        "Nhà nước Trung Quốc",
        "Nhà nước XHCN Cuba"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Nhà nước Xô Viết, năm 1917"
    },
    {
      "id": 6,
      "question": "Người lãnh đạo Đảng cộng sản Liên Xô sau khi V.I.Lênin mất (1924) là ai?",
      "options": [
        "Iosif Vissarionovich Stalin",
        "Georgy Maksimilianovich Malenkov",
        "Konstantin Ustinovich Chernenko",
        "Mikhail Sergeyevich Gorbachov"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Iosif Vissarionovich Stalin"
    },
    {
      "id": 7,
      "question": "Cách mạng Việt Nam diễn ra theo quy luật nào?",
      "options": [
        "Kiên định mục tiêu chủ nghĩa xã hội",
        "Tính bạo lực cách mạng",
        "Độc lập dân tộc gắn với chủ nghĩa xã hội",
        "Thực hiện thời kỳ quá độ lên chủ nghĩa xã hội"
      ],
      "correctIndex": 2,
      "explanation": "Đáp án đúng: C. Độc lập dân tộc gắn với chủ nghĩa xã hội"
    },
    {
      "id": 8,
      "question": "Đâu là giai cấp bị bóc lột giá trị thặng dư trong các nước tư bản?",
      "options": [
        "Giai cấp nông dân",
        "Tiểu tư sản",
        "Tầng lớp trí thức",
        "Giai cấp công nhân"
      ],
      "correctIndex": 3,
      "explanation": "Đáp án đúng: D. Giai cấp công nhân"
    },
    {
      "id": 9,
      "question": "Phạm trù nào là phạm trù trung tâm của chủ nghĩa xã hội khoa học?",
      "options": [
        "Chủ nghĩa xã hội",
        "Đảng cộng sản",
        "Sứ mệnh lịch sử của giai cấp công nhân",
        "Cách mạng xã hội chủ nghĩa"
      ],
      "correctIndex": 2,
      "explanation": "Đáp án đúng: C. Sứ mệnh lịch sử của giai cấp công nhân"
    },
    {
      "id": 10,
      "question": "Tổ chức nào sẽ trực tiếp thực thi vấn đề dân chủ?",
      "options": [
        "Các Đảng phái chính trị",
        "Nhà nước",
        "Pháp luật",
        "Các tổ chức chính trị - xã hội"
      ],
      "correctIndex": 1,
      "explanation": "Đáp án đúng: B. Nhà nước"
    },
    {
      "id": 11,
      "question": "Theo Hiến pháp năm 2013, nước Cộng hoà xã hội chủ nghĩa Việt Nam bao gồm những bộ phận lãnh thổ nào?",
      "options": [
        "Vùng biến, đất liền, các đảo và hải đảo.",
        "Vùng biển, đất liền, vùng trời và hải đảo",
        "Đất liền, hải đảo, vùng biển và vùng trời.",
        "Đất liền, hải đảo, vùng biển và vùng trời trên biển."
      ],
      "correctIndex": 2,
      "explanation": "Đáp án đúng: C. Đất liền, hải đảo, vùng biển và vùng trời."
    },
    {
      "id": 12,
      "question": "Nước ta có bao nhiêu dân tộc cùng chung sống?",
      "options": [
        "53",
        "54",
        "55",
        "56"
      ],
      "correctIndex": 1,
      "explanation": "Đáp án đúng: B. 54"
    },
    {
      "id": 13,
      "question": "Yếu tố nào tác động trực tiếp đến việc phát triển nguồn lực con người?",
      "options": [
        "Phát triển về chính trị",
        "Phát triển về kinh tế - xã hội",
        "Phát triển về văn hóa",
        "Phát triển về giáo dục"
      ],
      "correctIndex": 1,
      "explanation": "Đáp án đúng: B. Phát triển về kinh tế - xã hội"
    },
    {
      "id": 14,
      "question": "“Dân chủ” là gì?",
      "options": [
        "Dân chủ là một hình thức hay hình thái nhà nước",
        "Dân chủ là một nguyên tắc thực thi quyền lực",
        "Dân chủ là quyền lực thuộc về nhân dân",
        "Cả A, B, C"
      ],
      "correctIndex": 3,
      "explanation": "Đáp án đúng: D. Cả A, B, C"
    },
    {
      "id": 15,
      "question": "Cách mạng xã hội chủ nghĩa là do giai cấp, tầng lớp nào lãnh đạo?",
      "options": [
        "Giai cấp công nhân",
        "Giai cấp nông dân",
        "Tầng lớp trí thức",
        "Tầng lớp tiểu tư sản"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Giai cấp công nhân"
    },
    {
      "id": 16,
      "question": "Tổ chức chính trị lãnh đạo quá trình xây dựng CNXH ở Trung Quốc hiện nay là tổ chức nào?",
      "options": [
        "Cộng hoà Nhân dân Trung Hoa",
        "Quốc vụ viện Trung Quốc",
        "Quân ủy Trung Quốc",
        "Đảng Cộng sản Trung Quốc"
      ],
      "correctIndex": 3,
      "explanation": "Đáp án đúng: D. Đảng Cộng sản Trung Quốc"
    },
    {
      "id": 17,
      "question": "Quy luật chung, phổ biến cho sự ra đời Đảng cộng sản?",
      "options": [
        "Là sự kết hợp giữa chủ nghĩa Mác - Lênin và phong trào công nhân",
        "Là sự kết hợp giữa chủ nghĩa Mác - Lênin và phong trào công nhân với phong trào yêu nước chân chính",
        "Là sự phát triển của phong trào công nhân và chủ nghĩa xã hội",
        "Là theo chủ nghĩa Mác – Lênin và chủ nghĩa xã hội"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Là sự kết hợp giữa chủ nghĩa Mác - Lênin và phong trào công nhân"
    },
    {
      "id": 18,
      "question": "Bản chất của nhà nước xã hội chủ nghĩa về mặt chính trị là:",
      "options": [
        "Mang bản chất của giai cấp công nhân với tư cách là giai cấp có lợi ích chung phù hợp với lợi ích của quần chúng nhân dân dân.",
        "Mang bản chất của quần chúng nhân dân và chế độ xã hội chủ nghĩa",
        "Mang bản chất của giai cấp tư sản và quần chúng nhân dân",
        "Mang bản chất của giai cấp thống trị và quần chúng nhân dân"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Mang bản chất của giai cấp công nhân với tư cách là giai cấp có lợi ích chung phù hợp với lợi ích của quần chúng nhân dân dân."
    },
    {
      "id": 19,
      "question": "Dân chủ xã hội chủ nghĩa được hình thành bắt đầu bởi sự kiện lịch sử nào?",
      "options": [
        "Thắng lợi của cách mạng Trung Quốc năm 1939",
        "Cách mạng tháng Mười Nga thành công và sự ra đời của nhà nước XHCN đầu tiên (1917)",
        "Sự hình thành và phát triển của hệ thống xã hội chủ nghĩa ở Liên Xô và Đông Âu",
        "Thực tiễn đấu tranh giai cấp ở Pháp và công xã Paris 1817"
      ],
      "correctIndex": 1,
      "explanation": "Đáp án đúng: B. Cách mạng tháng Mười Nga thành công và sự ra đời của nhà nước XHCN đầu tiên (1917)"
    },
    {
      "id": 20,
      "question": "Giai cấp công nhân hiện đại đã có những khác biệt nào so với giai cấp công nhân thế kỷ 19?",
      "options": [
        "Công nhân có xu hướng trí tuệ hóa, có tính toàn cầu hóa, gia tăng nhanh về số lượng và chất lượng",
        "Công nhân đã trở thành một phần của lực lượng sản xuất hiện đại, có tính toàn cầu hóa",
        "Gia tăng nhanh về số lượng và chất lượng",
        "Công nhân có xu hướng trí tuệ hóa, gia tăng nhanh về số lượng, chất lượng và trở thành một phần của lực lượng sản xuất hiện đại, có tính toàn cầu hóa"
      ],
      "correctIndex": 3,
      "explanation": "Đáp án đúng: D. Công nhân có xu hướng trí tuệ hóa, gia tăng nhanh về số lượng, chất lượng và trở thành một phần của lực lượng sản xuất hiện đại, có tính toàn cầu hóa"
    },
    {
      "id": 21,
      "question": "Giai cấp công nhân ở các nước tư bản chủ nghĩa và xã hội chủ nghĩa có điểm khác biệt cơ bản nào?",
      "options": [
        "Quan hệ sở hữu đối với tư liệu sản xuất chủ yếu",
        "Phương thức lao động và phương thức sản xuất",
        "Nguồn gốc xuất thân của giai cấp công nhân",
        "Sản phẩm lao động do giai cấp công nhân làm ra"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Quan hệ sở hữu đối với tư liệu sản xuất chủ yếu"
    },
    {
      "id": 22,
      "question": "Chế độ dân chủ nhân dân ở Việt Nam được xác lập vào năm nào?",
      "options": [
        "Sau khi thành lập Đảng cộng sản Việt Nam 1930",
        "Sau cách mạng Tháng Tám 1945 (2/9/1945)",
        "Sau chiến thắng Điện Biên Phủ 1954",
        "Sau thắng lợi mùa xuân 1975"
      ],
      "correctIndex": 1,
      "explanation": "Đáp án đúng: B. Sau cách mạng Tháng Tám 1945 (2/9/1945)"
    },
    {
      "id": 23,
      "question": "Thế giới quan tôn giáo thuộc vào loại hình thế giới quan nào?",
      "options": [
        "Thế giới quan duy vật siêu hình",
        "Thế giới quan duy vật biện chứng",
        "Thế giới quan duy tâm",
        "Thế giới quan duy danh"
      ],
      "correctIndex": 2,
      "explanation": "Đáp án đúng: C. Thế giới quan duy tâm"
    },
    {
      "id": 24,
      "question": "Đâu là hệ giá trị gia đình Việt Nam hiện nay?",
      "options": [
        "Phát triển kinh tế - xã hội",
        "Nâng cao trình độ dân trí cho nhân dân lao động",
        "Giải phóng người phụ nữ",
        "Xây dựng gia đình ấm no, hạnh phúc, tiến bộ, văn minh"
      ],
      "correctIndex": 3,
      "explanation": "Đáp án đúng: D. Xây dựng gia đình ấm no, hạnh phúc, tiến bộ, văn minh"
    },
    {
      "id": 25,
      "question": "Nhiệm vụ của giai cấp công nhân sau khi lật đổ quyền thống trị của giai cấp tư sản là gì?",
      "options": [
        "Thay thế chế độ sở hữu tư nhân bằng chế độ sở hữu hỗn hợp",
        "Xóa bỏ chế độ sở hữu tư nhân TBCN",
        "Giành lấy lợi ích cho đai đa số trên cơ sở công hữu về tư liệu sản xuất chủ yếu",
        "Thiết lập nhà nước kiểu mới mang bản chất giai cấp công nhân"
      ],
      "correctIndex": 3,
      "explanation": "Đáp án đúng: D. Thiết lập nhà nước kiểu mới mang bản chất giai cấp công nhân"
    },
    {
      "id": 26,
      "question": "Nguyên nhân dẫn đến tình trạng nghèo khổ của giai cấp công nhân dưới chủ nghĩa tư bản?",
      "options": [
        "Sản xuất công nghiệp mở rộng",
        "Sự phát triển của khoa học – công nghệ",
        "Do sự bóc lột của giai cấp tư sản đối với giai cấp công nhân",
        "Sự hình thành các kiểu lao động mới như “chuyên gia quốc tế”, “làm việc tại nhà”."
      ],
      "correctIndex": 2,
      "explanation": "Đáp án đúng: C. Do sự bóc lột của giai cấp tư sản đối với giai cấp công nhân"
    },
    {
      "id": 27,
      "question": "Với tư cách là một hình thái nhà nước, một chế độ chính trị thì trong lịch sử nhân loại, cho đến nay có bao nhiêu nền (chế độ) dân chủ?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correctIndex": 2,
      "explanation": "Đáp án đúng: C. 3"
    },
    {
      "id": 28,
      "question": "Tổ chức nào đóng vai trò trụ cột trong hệ thống chính trị ở Việt Nam hiện nay?",
      "options": [
        "Đảng cộng sản Việt Nam",
        "Nhà nước xã hội chủ nghĩa",
        "Mặt trận Tổ quốc Việt Nam",
        "Các đoàn thể nhân dân"
      ],
      "correctIndex": 1,
      "explanation": "Đáp án đúng: B. Nhà nước xã hội chủ nghĩa"
    },
    {
      "id": 29,
      "question": "Công xã Paris 1871 – Nhà nước kiểu mới của giai cấp vô sản tồn tại trong bao nhiêu ngày?",
      "options": [
        "70 ngày",
        "71 ngày",
        "72 ngày",
        "73 ngày"
      ],
      "correctIndex": 2,
      "explanation": "Đáp án đúng: C. 72 ngày"
    },
    {
      "id": 30,
      "question": "“Chủ nghĩa xã hội thế kỷ XXI” là triết lý phát triển được ở đâu?",
      "options": [
        "Châu Mỹ Latinh",
        "Bắc Mỹ",
        "Tây Âu",
        "Liên Xô cũ"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Châu Mỹ Latinh"
    },
    {
      "id": 31,
      "question": "Đâu là công cụ điều chỉnh, chi phối để dân chủ không biến dạng thành các hành vi phản dân chủ?",
      "options": [
        "Văn hóa",
        "Pháp luật",
        "Đoàn thể",
        "Hiệp hội"
      ],
      "correctIndex": 1,
      "explanation": "Đáp án đúng: B. Pháp luật"
    },
    {
      "id": 32,
      "question": "Nền tảng tư tưởng và kim chỉ nam cho hành động của hệ thống chính trị Việt Nam là:",
      "options": [
        "Chủ nghĩa Mác và tư tưởng Hồ Chí Minh",
        "Tư tưởng Hồ Chí Minh",
        "Chủ nghĩa Mác – Lênin và tư tưởng Hồ Chí Minh",
        "Hồ Chí Minh và Đảng Cộng sản Việt Nam."
      ],
      "correctIndex": 2,
      "explanation": "Đáp án đúng: C. Chủ nghĩa Mác – Lênin và tư tưởng Hồ Chí Minh"
    },
    {
      "id": 33,
      "question": "Người kế tục xuất sắc sự nghiệp cách mạng và khoa học của C.Mác và Ph.Ănghen là ai?",
      "options": [
        "V.I.Lênin",
        "I.V.Stalin",
        "I.M.Kant",
        "Heghen"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. V.I.Lênin"
    },
    {
      "id": 34,
      "question": "Theo nghĩa hẹp, chủ nghĩa xã hội khoa học là gì?",
      "options": [
        "Toàn bộ hệ tư tưởng của chủ nghĩa Mác-Lênin.",
        "Một trong ba bộ phận hợp thành chủ nghĩa Mác-Lênin.",
        "Lý luận về đấu tranh giai cấp.",
        "Học thuyết về nhà nước pháp quyền xã hội chủ nghĩa."
      ],
      "correctIndex": 1,
      "explanation": "Đáp án đúng: B. Một trong ba bộ phận hợp thành chủ nghĩa Mác-Lênin."
    },
    {
      "id": 35,
      "question": "Đâu là nguồn gốc lý luận trực tiếp ra đời Chủ nghĩa xã hội khoa học?",
      "options": [
        "Triết học cổ điển Đức",
        "Kinh tế chính trị học cổ điển Anh",
        "Chủ nghĩa xã hội không tưởng Pháp",
        "Chủ nghĩa dân tộc"
      ],
      "correctIndex": 2,
      "explanation": "Đáp án đúng: C. Chủ nghĩa xã hội không tưởng Pháp"
    },
    {
      "id": 36,
      "question": "Nguyên nhân kinh tế - xã hội cho sự ra đời của tôn giáo là gì?",
      "options": [
        "Sự bất lực, yếu đuối của con người trước những hiện tượng của tự nhiên",
        "Sự xuất hiện giai cấp cùng những phân hóa, đối kháng, bất công... là điều không thể giải thích được",
        "Sự giới hạn trong nhận thức của con người trước tự nhiên, xã hội và chính bản thân mình.",
        "Sự sợ hãi trước những những hiện tượng tự nhiên, xã hội…."
      ],
      "correctIndex": 1,
      "explanation": "Đáp án đúng: B. Sự xuất hiện giai cấp cùng những phân hóa, đối kháng, bất công... là điều không thể giải thích được"
    },
    {
      "id": 37,
      "question": "Theo chủ nghĩa Mác - Lênin, bản chất của tôn giáo là gì?",
      "options": [
        "Là một hình thái ý thức xã hội phản ánh đúng hiện thực khách quan",
        "Là một công cụ để giai cấp thống trị áp bức quần chúng",
        "Là một yếu tố tích cực thúc đẩy sự phát triển xã hội",
        "Là một hiện tượng xã hội - văn hoá do con người sáng tạo ra"
      ],
      "correctIndex": 3,
      "explanation": "Đáp án đúng: D. Là một hiện tượng xã hội - văn hoá do con người sáng tạo ra"
    },
    {
      "id": 38,
      "question": "Quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội trải qua những hình thức nào?",
      "options": [
        "Trực tiếp và gián tiếp",
        "Tiệm tiến và trực tiếp",
        "Trực tiếp và tiếp biến",
        "Tiệm tiến và gián tiếp"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Trực tiếp và gián tiếp"
    },
    {
      "id": 39,
      "question": "Lênin đã phát triển sáng tạo Chủ nghĩa xã hội khoa học trong bối cảnh lịch sử:",
      "options": [
        "Chủ nghĩa tư bản đang trong giai đoạn tự do cạnh tranh.",
        "Chủ nghĩa tư bản đã chuyển sang giai đoạn đế quốc chủ nghĩa.",
        "Chủ nghĩa xã hội đã trở thành một hệ thống trên thế giới.",
        "Các cuộc cách mạng tư sản đang nổ ra mạnh mẽ ở châu Âu."
      ],
      "correctIndex": 1,
      "explanation": "Đáp án đúng: B. Chủ nghĩa tư bản đã chuyển sang giai đoạn đế quốc chủ nghĩa."
    },
    {
      "id": 40,
      "question": "Xã hội mà Việt Nam hướng đến trong của quá trình xây dựng chủ nghĩa xã hội là một xã hội như thế nào?",
      "options": [
        "Xã hội \"dân giàu, nước mạnh, dân chủ, công bằng, văn minh\"",
        "Xã hội có sự phát triển công nghiệp hiện đại, thu nhập trung bình cao",
        "Xã hội có tốc độ phát triển cao, thu nhập cao.",
        "Xã hội bảo đảm thu nhập cao, công bằng văn minh cho nhân dân."
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Xã hội \"dân giàu, nước mạnh, dân chủ, công bằng, văn minh\""
    },
    {
      "id": 41,
      "question": "Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa ở Việt Nam là bỏ qua những yếu tố nào?",
      "options": [
        "Bỏ qua sự thống trị về mặt kinh tế và chính trị của chủ nghĩa tư bản",
        "Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa",
        "Bỏ qua sự áp bức bốc lột và những thành tựu khoa học kỹ thuật của chủ nghĩa tư bản",
        "Bỏ qua giai đoạn phát triển cao của chủ nghĩa tư bản"
      ],
      "correctIndex": 1,
      "explanation": "Đáp án đúng: B. Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa"
    },
    {
      "id": 42,
      "question": "Mục tiêu về kinh tế của Việt Nam đến năm 2045 là:",
      "options": [
        "Là nước đang phát triển, có công nghiệp theo hướng hiện đại, vượt qua mức thu nhập trung bình thấp",
        "Là nước đang phát triển có công nghiệp hiện đại, thu nhập trung bình cao",
        "Trở thành nước phát triển, thu nhập cao.",
        "Trở thành nước phát triển, vượt qua mức thu nhập trung bình thấp"
      ],
      "correctIndex": 2,
      "explanation": "Đáp án đúng: C. Trở thành nước phát triển, thu nhập cao."
    },
    {
      "id": 43,
      "question": "Đâu là đội tiên phong của giai cấp công nhân?",
      "options": [
        "Nhà nước xã hội chủ nghĩa",
        "Đảng cộng sản",
        "Tổ chức Công Đoàn",
        "Quốc tế III"
      ],
      "correctIndex": 1,
      "explanation": "Đáp án đúng: B. Đảng cộng sản"
    },
    {
      "id": 44,
      "question": "Hình thức quá độ trực tiếp lên chủ nghĩa xã hội được áp dụng đối với những nước nào?",
      "options": [
        "Các nước có Đảng cộng sản lãnh đạo",
        "Các nước đã trải qua giai đoạn chủ nghĩa tư bản phát triển.",
        "Các nước đã tiến hành cách mạnh vô sản thành công",
        "Các nước chưa trải qua giai đoạn phát triển chủ nghĩa tư bản"
      ],
      "correctIndex": 1,
      "explanation": "Đáp án đúng: B. Các nước đã trải qua giai đoạn chủ nghĩa tư bản phát triển."
    },
    {
      "id": 45,
      "question": "Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam hoạt động trên cơ sở nào?",
      "options": [
        "Quyền lực của Quốc hội",
        "Sự hiểu biết pháp luật của nhân dân",
        "Hiến pháp và pháp luật",
        "Sự làm chủ của nhân dân"
      ],
      "correctIndex": 2,
      "explanation": "Đáp án đúng: C. Hiến pháp và pháp luật"
    },
    {
      "id": 46,
      "question": "Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam do tổ chức nào lãnh đạo?",
      "options": [
        "Đảng cộng sản Việt Nam",
        "Quốc Hội Việt Nam",
        "Mặt trận Tổ quốc Việt Nam",
        "Liên đoàn Lao động Việt Nam"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Đảng cộng sản Việt Nam"
    },
    {
      "id": 47,
      "question": "Đâu là những đặc trưng đặc biệt của giai cấp công nhân?",
      "options": [
        "Tinh thần đoàn kết và khả năng tạo ra của cải vật chất",
        "Giai cấp có địa vị chính trị - xã hội trong CNTB",
        "Có tính tổ chức, kỷ luật lao động và tâm lý lao động công nghiệp.",
        "Giai cấp giữ vai trò quản lý cao cấp trong sản xuất TBCN."
      ],
      "correctIndex": 2,
      "explanation": "Đáp án đúng: C. Có tính tổ chức, kỷ luật lao động và tâm lý lao động công nghiệp."
    },
    {
      "id": 48,
      "question": "Trong chủ nghĩa tư bản, giai cấp công nhân là giai cấp có mâu thuẫn đối kháng với:",
      "options": [
        "Giai cấp nông dân",
        "Giai cấp địa chủ",
        "Tầng lớp trí thức",
        "Giai cấp tư sản"
      ],
      "correctIndex": 3,
      "explanation": "Đáp án đúng: D. Giai cấp tư sản"
    },
    {
      "id": 49,
      "question": "Xét ở góc độ chính trị, tại sao giai cấp công nhân cần tiến hành liên minh với các giai tầng xã hội khác?",
      "options": [
        "Tạo sức mạnh tổng hợp đảm bảo cho sự thắng lợi của cách mạng xã hội chủ nghĩa",
        "Điều hòa mâu thuẫn về lợi ích giữa giai cấp công nhân với các giai tầng xã hội khác.",
        "Đẩy mạnh công nghiệp hóa, hiện đại hóa, xây dựng nền tảng vật chất – kỹ thuật cần thiết cho chủ nghĩa xã hội.",
        "Thực hiện lợi ích của giai cấp công nhân, thực hiện thành công quá trình xây dựng chủ nghĩa xã hội"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Tạo sức mạnh tổng hợp đảm bảo cho sự thắng lợi của cách mạng xã hội chủ nghĩa"
    },
    {
      "id": 50,
      "question": "Khối đại đoàn kết dân tộc ở Việt Nam được xây dựng trên nền tảng nào?",
      "options": [
        "Sự phát triển kinh tế thị trường định hướng xã hội chủ nghĩa",
        "Liên minh giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức do Đảng lãnh đạo.",
        "Thực hiện thành công chủ nghĩa xã hội ở Việt Nam",
        "Đoàn kết, tôn trọng lẫn nhau giữa các dân tộc – tộc người"
      ],
      "correctIndex": 1,
      "explanation": "Đáp án đúng: B. Liên minh giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức do Đảng lãnh đạo."
    },
    {
      "id": 51,
      "question": "Vì sao các tôn giáo có sự thay đổi về giáo lý hoặc lễ nghi khi truyền bá sang các quốc gia khác?",
      "options": [
        "Để thích nghi với văn hóa, xã hội của quốc gia đó",
        "Để tín đồ tôn giáo ở quốc gia đó di cư sang các vùng đất mới",
        "Để làm tốt chức năng đạo đức",
        "Phục vụ chức năng đền bù hư ảo"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Để thích nghi với văn hóa, xã hội của quốc gia đó"
    },
    {
      "id": 52,
      "question": "Đâu là điểm khác biệt của Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam so với các nhà nước pháp quyền khác?",
      "options": [
        "Thực hành trên cơ sở dân biết, dân bàn, dân làm, dân kiểm tra",
        "Mang bản chất giai cấp công nhân; phục vụ lợi ích cho nhân dân",
        "Quyền dân chủ của nhân được được thực hành rộng rãi",
        "Dân có quyền bầu cữ và bãi miễn đại biểu."
      ],
      "correctIndex": 2,
      "explanation": "Đáp án đúng: C. Quyền dân chủ của nhân được được thực hành rộng rãi"
    },
    {
      "id": 53,
      "question": "Mốc thời gian nào Việt Nam chính thức bình thường hóa quan hệ với Hoa Kỳ, hoàn thành việc phá thế bị bao vây cấm vận?",
      "options": [
        "Năm 1975",
        "Năm 2007",
        "Năm 1995",
        "Năm 1991"
      ],
      "correctIndex": 2,
      "explanation": "Đáp án đúng: C. Năm 1995"
    },
    {
      "id": 54,
      "question": "Sắp xếp các hình thức cộng đồng từ thấp đến cao.",
      "options": [
        "Thị tộc, bộ lạc, dân tộc, bộ tộc",
        "Bộ tộc, bộ lạc, thị tộc, dân tộc",
        "Bộ lạc, bộ tộc, thị tộc, dân tộc",
        "Thị tộc, bộ lạc, bộ tộc, dân tộc"
      ],
      "correctIndex": 3,
      "explanation": "Đáp án đúng: D. Thị tộc, bộ lạc, bộ tộc, dân tộc"
    },
    {
      "id": 55,
      "question": "Quan hệ nào là mối quan hệ tự nhiên, là yếu tố mạnh mẽ nhất gắn kết các thành viên trong gia đình với nhau?",
      "options": [
        "Quan hệ hôn nhân",
        "Quan hệ huyết thống",
        "Quan hệ dòng tộc",
        "Quan hệ nuôi dưỡng"
      ],
      "correctIndex": 1,
      "explanation": "Đáp án đúng: B. Quan hệ huyết thống"
    },
    {
      "id": 56,
      "question": "Mô hình nhà nước của Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội?",
      "options": [
        "Nhà nước dân chủ xã hội chủ nghĩa",
        "Nhà nước chủ nghĩa cộng sản.",
        "Chuyên chính vô sản",
        "Nhà nước pháp quyền xã hội chủ nghĩa"
      ],
      "correctIndex": 3,
      "explanation": "Đáp án đúng: D. Nhà nước pháp quyền xã hội chủ nghĩa"
    },
    {
      "id": 57,
      "question": "Đối với vấn đề dân tộc, đâu là nội dung có vị trí chiến lược trong sự nghiệp cách mạng của nước ta?",
      "options": [
        "Đoàn kết các dân tộc",
        "Phát triển kinh tế, giáo dục đồng bộ",
        "Phải có sự phối hợp giữa các Hội đoàn thể",
        "Thúc đẩy phát triển công nghiệp hóa, hiện đại hóa"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Đoàn kết các dân tộc"
    },
    {
      "id": 58,
      "question": "Đâu là tiêu chí cơ bản để phân biệt các tộc người khác nhau?",
      "options": [
        "Cộng đồng về ngôn ngữ",
        "Cộng đồng về văn hóa",
        "Cộng đồng về kinh tế",
        "Ý thức tự giác tộc người"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Cộng đồng về ngôn ngữ"
    },
    {
      "id": 59,
      "question": "Trách nhiệm nuôi dưỡng, dạy dỗ con cái trở thành người có ích cho gia đình, cộng đồng và xã hội là thuộc về chức năng nào của gia đình?",
      "options": [
        "Chức năng tái sản xuất ra con người",
        "Chức năng nuôi dưỡng, giáo dục",
        "Chức năng kinh tế và tổ chức tiêu dùng",
        "Chức năng thỏa mãn nhu cầu sinh lý, duy trì tình cảm gia đình"
      ],
      "correctIndex": 1,
      "explanation": "Đáp án đúng: B. Chức năng nuôi dưỡng, giáo dục"
    },
    {
      "id": 60,
      "question": "Đâu là giai cấp giữ vai trò lãnh đạo trong cơ cấu xã hội – giai cấp ở Việt Nam hiện nay?",
      "options": [
        "Giai cấp công nhân Việt Nam",
        "Giai cấp nông dân Việt Nam",
        "Tầng lớp trí thức Việt Nam",
        "Tầng lớp doanh nhân Việt Nam"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Giai cấp công nhân Việt Nam"
    },
    {
      "id": 61,
      "question": "Nhiệm vụ trung tâm về mặt kinh tế của thời kỳ quá độ lên CNXH ở Việt Nam hiện nay là gì?",
      "options": [
        "Thực hiện thành công thời kỳ quá độ lên CNXH",
        "Phát triển kinh tế, tiến hành thành công công nghiệp hóa, hiện đại hóa",
        "Xây dựng nhà nước pháp quyền XHCN, thực hiện thành công thời kỳ quá độ lên CNXH",
        "Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc"
      ],
      "correctIndex": 1,
      "explanation": "Đáp án đúng: B. Phát triển kinh tế, tiến hành thành công công nghiệp hóa, hiện đại hóa"
    },
    {
      "id": 62,
      "question": "Tính chính trị của tôn giáo xuất hiện trong điều kiện nào?",
      "options": [
        "Khi con người bắt đầu xây dựng các công trình thờ tự lớn",
        "Ngay từ thời kỳ công xã nguyên thủy khi con người mới biết thờ cúng",
        "Khi xã hội không còn xuất hiện sự phân chia giai cấp và đối kháng về lợi ích",
        "Khi xã hội xuất hiện sự phân chia giai cấp và đối kháng về lợi ích giai cấp"
      ],
      "correctIndex": 3,
      "explanation": "Đáp án đúng: D. Khi xã hội xuất hiện sự phân chia giai cấp và đối kháng về lợi ích giai cấp"
    },
    {
      "id": 63,
      "question": "Giai đoạn thấp của hình thái kinh tế - xã hội CNCS còn gọi là gì?",
      "options": [
        "Thời kỳ quá độ",
        "CNCS hoàn chỉnh",
        "Tiền chủ nghĩa cộng sản",
        "Chủ nghĩa xã hội"
      ],
      "correctIndex": 3,
      "explanation": "Đáp án đúng: D. Chủ nghĩa xã hội"
    },
    {
      "id": 64,
      "question": "Sự kiện lịch sử nào đánh dấu sự ra đời của nước Việt Nam Dân chủ Cộng hòa?",
      "options": [
        "Đại hội đại biểu toàn quốc lần thứ II của Đảng (1951)",
        "Hiến pháp năm 1980",
        "Hiệp định Genève (1954)",
        "Cách mạng Tháng Tám thành công và Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập (2/9/1945)"
      ],
      "correctIndex": 3,
      "explanation": "Đáp án đúng: D. Cách mạng Tháng Tám thành công và Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập (2/9/1945)"
    },
    {
      "id": 65,
      "question": "Đâu là hạt nhân của khối đại đoàn kết toàn dân tộc Việt Nam?",
      "options": [
        "Có sự lãnh đạo của Đảng cộng sản",
        "Có sự thống nhất lợi ích giữa các giai cấp",
        "Sự tăng trưởng và phát triển kinh tế bền vững",
        "Liên minh công - nông - trí thức"
      ],
      "correctIndex": 3,
      "explanation": "Đáp án đúng: D. Liên minh công - nông - trí thức"
    },
    {
      "id": 66,
      "question": "Vì sao tôn giáo là một phạm trù lịch sử?",
      "options": [
        "Nó ra đời và tồn tại và biến đổi trong một giai đoạn nhất đinh của lịch sử xã hội loài người",
        "Nó là sản phẩm của con người và nó ảnh hưởng đến đời sống tinh thần của con người",
        "Nó có ảnh hưởng đến sự phát triển của đời sống vật chất",
        "Vì tôn giáo là sản phẩm của sự phát triển về nhận thức của con người."
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Nó ra đời và tồn tại và biến đổi trong một giai đoạn nhất đinh của lịch sử xã hội loài người"
    },
    {
      "id": 67,
      "question": "Đâu là yếu tố gây trở ngại đối với quá trình thực hiện dân chủ ở nước ta trong giai đoạn hiện nay?",
      "options": [
        "Âm mưu “diễn biến hòa bình”, gây bạo loạn, lật đổ",
        "Âm mưc thực hiện “cách mạng màu” của các thế lực thù địch",
        "Vấn đề tự diễn biến, tự chuyển hóa",
        "Cả 3 đáp án trên"
      ],
      "correctIndex": 3,
      "explanation": "Đáp án đúng: D. Cả 3 đáp án trên"
    },
    {
      "id": 68,
      "question": "Phương châm thực hiện dân chủ ở cơ sở được quy định trong Luật dân chủ cơ sở 2022 bao gồm những thành tố nào?",
      "options": [
        "Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng",
        "Dân biết, dân bàn, dân làm, dân kiểm tra",
        "Dân biết, dân bàn, dân thụ hưởng",
        "Dân biết, dân bàn, dân làm, dân giám sát, dân thụ hưởng"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng"
    },
    {
      "id": 69,
      "question": "Vì sao trong giai đoạn hiện nay Việt Nam tiếp tục mở rộng và phát huy khối đại đoàn kết dân tộc?",
      "options": [
        "Để thực hiện thành công các nhiệm vụ trên lĩnh vực chính trị, kinh tế, văn hóa – tư tưởng",
        "Phát huy sức mạnh của mọi giai cấp, mọi tầng lớp nhân dân, mọi thành phần dân tộc, tôn giáo cho công cuộc đổi mới, xây dựng và bảo vệ tổ quốc.",
        "Giữ vững và tăng cường vai trò lãnh đạo của giai cấp công nhân Việt Nam và Đảng cộng sản Việt Nam",
        "Đảm bảo phát triển kinh tế gắn liền với lợi ích của các giai tầng, xã hội."
      ],
      "correctIndex": 1,
      "explanation": "Đáp án đúng: B. Phát huy sức mạnh của mọi giai cấp, mọi tầng lớp nhân dân, mọi thành phần dân tộc, tôn giáo cho công cuộc đổi mới, xây dựng và bảo vệ tổ quốc."
    },
    {
      "id": 70,
      "question": "Đâu là nền tảng cho việc hoàn thiện pháp luật về bầu cử?",
      "options": [
        "Cương lĩnh",
        "Đường lối",
        "Chủ trương",
        "Hiến pháp"
      ],
      "correctIndex": 3,
      "explanation": "Đáp án đúng: D. Hiến pháp"
    },
    {
      "id": 71,
      "question": "Sự ra đời và phát triển của giai cấp công nhân hiện đại gắn liền với điều kiện kinh tế nào?",
      "options": [
        "Sự ra đời nền Đại công nghiệp",
        "Công trường thủ công phát triển",
        "Sự ra đời của động cơ hơi nước",
        "Sự phát triển của sản xuất thủ công nghiệp"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Sự ra đời nền Đại công nghiệp"
    },
    {
      "id": 72,
      "question": "Nội dung cơ bản nhất mà nhờ đó chủ nghĩa xã hội từ không tưởng trở thành khoa học?",
      "options": [
        "Phát hiện ra giai cấp công nhân là lực lượng xã hội có thể thủ tiêu CNTB, xây dựng CNXH.",
        "Phản ánh đúng khát vọng của nhân dân lao động bị áp bức.",
        "Lên án mạnh mẽ chủ nghĩa tư bản.",
        "Chỉ ra sự cần thiết phải thay thế chủ nghĩa tư bản bằng chủ nghĩa xã hội."
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Phát hiện ra giai cấp công nhân là lực lượng xã hội có thể thủ tiêu CNTB, xây dựng CNXH."
    },
    {
      "id": 73,
      "question": "Biểu tượng “Búa - Liềm” trên Đảng kỳ của Đảng cộng sản có ý nghĩa gì?",
      "options": [
        "Sự lãnh đạo của Đảng cộng sản",
        "Sự thống nhất lợi ích giữa các giai cấp",
        "Sự đoàn kết, thống nhất của hai giai cấp công nhân và nông dân",
        "Liên kết để phát triển kinh tế bền vững"
      ],
      "correctIndex": 2,
      "explanation": "Đáp án đúng: C. Sự đoàn kết, thống nhất của hai giai cấp công nhân và nông dân"
    },
    {
      "id": 74,
      "question": "Trong xã hội có giai cấp, cơ cấu nào có vị trí quyết định nhất, chi phối các loại hình cơ cấu xã hội khác?",
      "options": [
        "Cơ cấu xã hội - nghề nghiệp",
        "Cơ cấu xã hội - dân số",
        "Cơ cấu xã hội - dân tộc",
        "Cơ cấu xã hội - giai cấp"
      ],
      "correctIndex": 3,
      "explanation": "Đáp án đúng: D. Cơ cấu xã hội - giai cấp"
    },
    {
      "id": 75,
      "question": "Trong các nội dung của quyền dân tộc tự quyết thì nội dung nào được coi là cơ bản nhất, tiên quyết nhất?",
      "options": [
        "Tự quyết về chính trị",
        "Tự quyết về kinh tế",
        "Tự quyết về văn hoá",
        "Tự quyết về lãnh thổ"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Tự quyết về chính trị"
    },
    {
      "id": 76,
      "question": "Đâu là điều kiện tiên quyết để xây dựng thành công nền dân chủ xã hội chủ nghĩa ở Việt Nam?",
      "options": [
        "Xây dựng Đảng cộng sản Việt Nam trong sạch, vững mạnh",
        "Xây dựng nhà nước pháp quyền XHCN vững mạnh",
        "Củng cố vai trò, chức năng của Mặt trận Tổ quốc Việt Nam",
        "Tăng cường vai trò của các tổ chức chính trị - xã hội"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Xây dựng Đảng cộng sản Việt Nam trong sạch, vững mạnh"
    },
    {
      "id": 77,
      "question": "“Đoàn kết, đoàn kết, đại đoàn kết; Thành công, thành công, đại thành công” là câu nói nổi tiếng của lãnh tụ nào?",
      "options": [
        "Chủ tịch Hồ Chí Minh",
        "Tổng bí thư Trần Phú",
        "Tổng bí thư Nguyễn Phú Trọng",
        "Chủ tịch Tôn Đức Thắng"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Chủ tịch Hồ Chí Minh"
    },
    {
      "id": 78,
      "question": "Cuộc cách mạng đầu tiên của giai cấp công nhân và nhân dân lao động trên thế giới lật đổ chính quyền của giai cấp tư sản diễn ra ở nước nào?",
      "options": [
        "Anh",
        "Pháp",
        "Đức",
        "Nga"
      ],
      "correctIndex": 3,
      "explanation": "Đáp án đúng: D. Nga"
    },
    {
      "id": 79,
      "question": "Cơ quan nào thống nhất quản lý nhà nước về tín ngưỡng, tôn giáo trong phạm vi cả nước?",
      "options": [
        "Chính phủ",
        "Bộ Tư pháp",
        "Bộ Nội vụ",
        "Ủy ban Dân tộc"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Chính phủ"
    },
    {
      "id": 80,
      "question": "Tôn giáo và tín ngưỡng khác nhau ở điểm nào?",
      "options": [
        "Tôn giáo có hệ thống giáo lý, giáo luật, lễ nghi, còn tín ngưỡng thì không.",
        "Tín ngưỡng có giáo lý, giáo luật và tính tổ chức chặt chẽ hơn tôn giáo.",
        "Tôn giáo chỉ liên quan đến các đấng siêu nhiên, còn tín ngưỡng thì không.",
        "Tôn giáo và tín ngưỡng là hoàn toàn đồng nhất."
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Tôn giáo có hệ thống giáo lý, giáo luật, lễ nghi, còn tín ngưỡng thì không."
    },
    {
      "id": 81,
      "question": "Biểu hiện của tính quần chúng trong tôn giáo là gì?",
      "options": [
        "Tôn giáo là nơi sinh hoạt văn hóa, tinh thần của tầng lớp thống trị.",
        "Tôn giáo là nơi sinh hoạt văn hóa, tinh thần của đông đảo các tầng lớp nhân dân.",
        "Tôn giáo luôn kêu gọi đấu tranh chống bất công, nghèo đói, bạo lực.",
        "Tôn giáo là nơi sinh hoạt văn hóa, tinh thần của tầng lớp nhân dân lao động."
      ],
      "correctIndex": 1,
      "explanation": "Đáp án đúng: B. Tôn giáo là nơi sinh hoạt văn hóa, tinh thần của đông đảo các tầng lớp nhân dân."
    },
    {
      "id": 82,
      "question": "Sự biến đổi trong lễ nghi của các tôn giáo trong xã hội hiện đại thể hiện tính chất nào của tôn giáo?",
      "options": [
        "Tính bảo thủ",
        "Tính lịch sử",
        "Tính chính trị",
        "Tính siêu nhiên"
      ],
      "correctIndex": 1,
      "explanation": "Đáp án đúng: B. Tính lịch sử"
    },
    {
      "id": 83,
      "question": "Khi con người chưa có khả năng nhận thức đúng đắn về tự nhiên, họ thường làm gì?",
      "options": [
        "Thần thánh hóa các hiện tượng tự nhiên",
        "Dựa vào khoa học để nghiên cứu",
        "Phủ nhận thế giới khách quan",
        "Tách rời khỏi cộng đồng"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Thần thánh hóa các hiện tượng tự nhiên"
    },
    {
      "id": 84,
      "question": "Về mặt cấu trúc, một tôn giáo hoàn chỉnh thường bao gồm các yếu tố cơ bản nào?",
      "options": [
        "Hệ thống giáo lý, giáo luật, lễ nghi và tổ chức tôn giáo",
        "Các giáo lý, giáo luật trong sinh hoạt thần thánh, lễ nghi tôn giáo.",
        "Hệ thống Thần linh, giáo luật trong sinh hoạt thần thánh, lễ nghi tôn giáo.",
        "Niềm tin, giáo luật trong sinh hoạt thần thánh, lễ nghi tôn giáo."
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Hệ thống giáo lý, giáo luật, lễ nghi và tổ chức tôn giáo"
    },
    {
      "id": 85,
      "question": "Sự kiện nào góp phần nối liền hệ thống xã hội chủ nghĩa từ Châu Âu sang Châu Á năm 1949?",
      "options": [
        "Nước Việt Nam Dân chủ Cộng hòa ra đời.",
        "Chiến tranh Triều Tiên kết thúc.",
        "Nước Cộng hòa Nhân dân Trung Hoa ra đời.",
        "Liên Xô chế tạo thành công bom nguyên tử."
      ],
      "correctIndex": 2,
      "explanation": "Đáp án đúng: C. Nước Cộng hòa Nhân dân Trung Hoa ra đời."
    },
    {
      "id": 86,
      "question": "Mê tín là gì?",
      "options": [
        "Những niềm tin, sự ngưỡng mộ đối với những người có đóng góp cho xã hội",
        "Tin vào các lực lượng siêu nhiên đến mức độ cuồng tín.",
        "Là niềm tin mê muội, viển vông, không dựa trên một cơ sở khoa học",
        "Cầu mong sự che chở của các đấng linh thiêng"
      ],
      "correctIndex": 2,
      "explanation": "Đáp án đúng: C. Là niềm tin mê muội, viển vông, không dựa trên một cơ sở khoa học"
    },
    {
      "id": 87,
      "question": "Quốc gia nào là lá cờ đầu của phong trào giải phóng dân tộc và xây dựng chủ nghĩa xã hội ở khu vực Châu Mỹ Latinh?",
      "options": [
        "Venezuela",
        "Chile",
        "Cuba",
        "Brazil"
      ],
      "correctIndex": 2,
      "explanation": "Đáp án đúng: C. Cuba"
    },
    {
      "id": 88,
      "question": "Trong số 16 tôn giáo được Nhà nước thừa nhận tư cách pháp nhân, có bao nhiêu tôn giáo từ nước ngoài du nhập vào Việt Nam?",
      "options": [
        "7",
        "8",
        "9",
        "10"
      ],
      "correctIndex": 2,
      "explanation": "Đáp án đúng: C. 9"
    },
    {
      "id": 89,
      "question": "Đâu là tiêu chí quan trọng nhất để đánh giá một gia đình văn hóa trong bối cảnh Việt Nam hiện nay?",
      "options": [
        "Gia đình có thu nhập cao và địa vị xã hội lớn.",
        "Gia đình đông con và tuân thủ mọi nghi lễ truyền thống.",
        "Gia đình hòa thuận, bình đẳng, tiến bộ, hạnh phúc và thực hiện tốt nghĩa vụ công dân.",
        "Gia đình không bao giờ xảy ra tranh luận hay mâu thuẫn."
      ],
      "correctIndex": 2,
      "explanation": "Đáp án đúng: C. Gia đình hòa thuận, bình đẳng, tiến bộ, hạnh phúc và thực hiện tốt nghĩa vụ công dân."
    },
    {
      "id": 90,
      "question": "Sự biến đổi của gia đình Việt Nam hiện nay chịu tác động mạnh mẽ nhất của yếu tố nào?",
      "options": [
        "Sự thay đổi của các quy định trong Luật Hôn nhân và Gia đình.",
        "Tác động của các phong trào đấu tranh vì nữ quyền trên thế giới.",
        "Quá trình công nghiệp hóa, hiện đại hóa và hội nhập quốc tế.",
        "Sự gia tăng của các phương tiện truyền thông đại chúng hiện đại."
      ],
      "correctIndex": 2,
      "explanation": "Đáp án đúng: C. Quá trình công nghiệp hóa, hiện đại hóa và hội nhập quốc tế."
    },
    {
      "id": 91,
      "question": "Đâu là phương hướng xây dựng gia đình Việt Nam hiện nay?",
      "options": [
        "Phục hồi nguyên vẹn mô hình gia đình truyền thống với nhiều thế hệ cùng chung sống.",
        "Xây dựng gia đình no ấm, bình đẳng, tiến bộ, hạnh phúc và phát triển bền vững.",
        "Khuyến khích lối sống tự do, không bị ràng buộc bởi các trách nhiệm gia đình.",
        "Xóa bỏ chức năng kinh tế của gia đình, để nhà nước và xã hội đảm nhiệm."
      ],
      "correctIndex": 2,
      "explanation": "Đáp án đúng: C. Khuyến khích lối sống tự do, không bị ràng buộc bởi các trách nhiệm gia đình."
    },
    {
      "id": 92,
      "question": "Ý thức tự giác tộc người là gì?",
      "options": [
        "Là ý thức về nguồn gốc và tộc danh của dân tộc mình",
        "Ý thức về sự chung lưng đấu cật, đoàn kết đấu tranh chống thiên tai, địch họa để dựng nước và giữ nước",
        "Là ý thức về tên tự gọi, về tiếng mẹ đẻ và các đặc trưng văn hóa tương đối bền vững",
        "Là ý thức của mỗi tộc người trong xây dựng và bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Là ý thức về nguồn gốc và tộc danh của dân tộc mình"
    },
    {
      "id": 93,
      "question": "Dân chủ XHCN ở Việt Nam được thực hiện thông qua hình thức nào?",
      "options": [
        "Trưng cầu dân ý là duy nhất",
        "Dân chủ đại diện và dân chủ trực tiếp",
        "Không có bầu cử",
        "Chỉ thông qua mạng xã hội"
      ],
      "correctIndex": 1,
      "explanation": "Đáp án đúng: B. Dân chủ đại diện và dân chủ trực tiếp"
    },
    {
      "id": 94,
      "question": "Việc các thành viên trong gia đình cùng nhau lao động, sản xuất, tạo ra của cải vật chất và bảo đảm đời sống vật chất là biểu hiện của chức năng nào?",
      "options": [
        "Chức năng sinh sản",
        "Chức năng văn hóa, giáo dục",
        "Chức năng kinh tế",
        "Chức năng tái tạo sức lao động"
      ],
      "correctIndex": 2,
      "explanation": "Đáp án đúng: C. Chức năng kinh tế"
    },
    {
      "id": 95,
      "question": "Tờ báo cách mạng đầu tiên của Việt Nam là:",
      "options": [
        "Báo Nhân Dân",
        "Báo Tiếng Dân",
        "Báo Búa Liềm",
        "Báo Thanh Niên"
      ],
      "correctIndex": 3,
      "explanation": "Đáp án đúng: D. Báo Thanh Niên"
    },
    {
      "id": 96,
      "question": "Việc truyền thụ các giá trị văn hóa, giữ gìn truyền thống cho thế hệ sau thuộc về chức năng nào của gia đình?",
      "options": [
        "Chức năng kinh tế",
        "Chức năng sinh sản và nuôi dưỡng",
        "Chức năng tâm sinh lý",
        "Chức năng giáo dục"
      ],
      "correctIndex": 3,
      "explanation": "Đáp án đúng: D. Chức năng giáo dục"
    },
    {
      "id": 97,
      "question": "Cơ sở hình thành nên gia đình là gì?",
      "options": [
        "Quan hệ hôn nhân",
        "Quan hệ văn hóa",
        "Quan hệ chính trị",
        "Quan hệ xã hội"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Quan hệ hôn nhân"
    },
    {
      "id": 98,
      "question": "Mô hình gia đình Việt Nam phổ biến trong bước chuyển biến từ \"xã hội nông nghiệp\" sang \"xã hội công nghiệp\" là mô hình nào?",
      "options": [
        "Gia đình hạt nhân",
        "Gia đình truyền thống",
        "Gia đình nông nghiệp",
        "Gia đình hiện đại"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Gia đình hạt nhân"
    },
    {
      "id": 99,
      "question": "Trong bối cảnh hội nhập quốc tế sâu rộng, dân tộc Việt Nam cần làm gì để giữ vững độc lập dân tộc?",
      "options": [
        "Chú trọng công tác bảo vệ toàn vẹn lãnh thổ quốc gia",
        "Tăng cường hội nhập kinh tế khu vực và thế giới",
        "Giáo dục lòng yêu nước và giữ gìn, phát huy bản sắc văn hóa dân tộc.",
        "Mở rộng tiếp tục những tinh hoa văn hóa nhân loại"
      ],
      "correctIndex": 2,
      "explanation": "Đáp án đúng: C. Giáo dục lòng yêu nước và giữ gìn, phát huy bản sắc văn hóa dân tộc."
    },
    {
      "id": 100,
      "question": "Đâu là điều kiện tiên quyết bảo đảm thành công của công cuộc đổi mới, công nghiệp hoá, hiện đại hoá đất nước?",
      "options": [
        "Sự lãnh đạo của Đảng Cộng sản Việt Nam",
        "Sự quản lý của nhà nước XHCN Việt Nam",
        "Sự đoàn kết của toàn dân",
        "Sự lớn mạnh của giai cấp công nhân"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Sự lãnh đạo của Đảng Cộng sản Việt Nam"
    },
    {
      "id": 101,
      "question": "Nguyên tắc nào được xem là \"hòn đá tảng\" trong chính sách tôn giáo của Đảng ta?",
      "options": [
        "Tôn trọng tự do tín ngưỡng",
        "Bài trừ mê tín dị đoan",
        "Đoàn kết tôn giáo",
        "Chống lợi dụng tôn giáo"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Tôn trọng tự do tín ngưỡng"
    },
    {
      "id": 102,
      "question": "Chức năng nào của gia đình có ý nghĩa quan trọng đối với sự phát triển kinh tế của 1 cộng đồng người?",
      "options": [
        "Chức năng kinh tế và tổ chức tiêu dùng",
        "Chức năng xã hội hóa",
        "Chức năng sinh sản và nuôi dưỡng",
        "Chức năng tái sản xuất ra con người"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. Chức năng kinh tế và tổ chức tiêu dùng"
    },
    {
      "id": 103,
      "question": "Tính đến 2022, ở Việt Nam, Nhà nước đã công nhận bao nhiêu tổ chức tôn giáo?",
      "options": [
        "43",
        "36",
        "38",
        "39"
      ],
      "correctIndex": 0,
      "explanation": "Đáp án đúng: A. 43"
    },
    {
      "id": 104,
      "question": "Hôn nhân tự nguyện, tiến bộ được dựa trên cơ sở chính là gì?",
      "options": [
        "Sự sắp đặt của cha mẹ và gia đình hai bên.",
        "Tình yêu chân chính giữa nam và nữ.",
        "Sự phù hợp về địa vị xã hội và tài sản.",
        "Các yếu tố về phong tục, tập quán lạc hậu"
      ],
      "correctIndex": 1,
      "explanation": "Đáp án đúng: B. Tình yêu chân chính giữa nam và nữ."
    },
    {
      "id": 105,
      "question": "Đâu là điểm tựa tinh thần vô cùng lớn lao cho mỗi người?",
      "options": [
        "Nhà trường",
        "Chính phủ",
        "Nhà nước",
        "Gia đình"
      ],
      "correctIndex": 3,
      "explanation": "Đáp án đúng: D. Gia đình"
    }
  ],
  "shortAnswer": [
    {
      "id": 1,
      "question": "Các hình thức quá độ lên Chủ nghĩa xã hội?",
      "answer": "Trực tiếp và gián tiếp"
    },
    {
      "id": 2,
      "question": "Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam mang bản chất của giai cấp nào?",
      "answer": "Giai cấp công nhân"
    },
    {
      "id": 3,
      "question": "Nền tảng tư tưởng của quá trình xây dựng Chủ nghĩa xã hội ở Việt Nam?",
      "answer": "Chủ nghĩa Mác - Lênin và Tư tưởng Hồ Chí Minh."
    },
    {
      "id": 4,
      "question": "Nhà nước dân chủ đầu tiên ra đời ở đâu?",
      "answer": "Athens (A-ten), Hy Lạp cổ đại"
    },
    {
      "id": 5,
      "question": "Việt Nam là một quốc gia đơn nhất về tôn giáo và dân tộc. Nhận định này đúng hay sai? Giải thích ngắn gọn.",
      "answer": "Sai. Vì Việt Nam là một quốc gia đa dân tộc (54 dân tộc) và đa tôn giáo"
    },
    {
      "id": 6,
      "question": "Các giai đoạn trong hình thái kinh tế - xã hội Cộng sản chủ nghĩa theo quan điểm của Chủ nghĩa Mác – Lênin?",
      "answer": "Giai đoạn thấp (Chủ nghĩa xã hội) và Giai đoạn cao (Chủ nghĩa cộng sản)"
    },
    {
      "id": 7,
      "question": "Dân chủ là dành cho tất cả nhân dân. Nhận định này đúng hay sai? Giải thích.",
      "answer": "Sai. Trong các xã hội có giai cấp, dân chủ luôn mang tính giai cấp, là quyền lực của giai cấp thống trị"
    },
    {
      "id": 8,
      "question": "Tuyên ngôn của Đảng Cộng sản được xuất bản vào năm nào?",
      "answer": "1848"
    },
    {
      "id": 9,
      "question": "Theo Hiến pháp năm 2013, nước Cộng hoà xã hội chủ nghĩa Việt Nam bao gồm những bộ phận lãnh thổ nào?",
      "answer": "Bao gồm: Đất liền, hải đảo, vùng biển và vùng trời."
    },
    {
      "id": 10,
      "question": "Vì sao giai cấp công nhân Việt Nam có thuận lợi khi thực hiện liên minh với giai cấp nông dân và tầng lớp trí thức?",
      "answer": "Vì họ đều là những người lao động bị áp bức, bóc lột bởi thực dân, phong kiến; có chung mục tiêu, lợi ích cơ bản là giải phóng dân tộc, giải phóng giai cấp và xây dựng cuộc sống ấm no."
    },
    {
      "id": 11,
      "question": "Thời kỳ quá độ lên CNXH ở VN bắt đầu lúc nào?",
      "answer": "1954 ở miền Bắc và trên phạm vi cả nước từ năm 1975"
    },
    {
      "id": 12,
      "question": "Nguồn gốc xuất thân của đại bộ phận công nhân Việt Nam?",
      "answer": "Nông dân"
    },
    {
      "id": 13,
      "question": "Trình bày ngắn gọn nội dung sứ mệnh lịch sử của giai cấp công nhân.",
      "answer": "Lãnh đạo nhân dân tiến hành CM XHCN, xóa bỏ chế độ người bóc lột người, xây dựng thành công chủ nghĩa xã hội và chủ nghĩa cộng sản trên phạm vi toàn thế giới."
    },
    {
      "id": 14,
      "question": "Hoạt động của Nhà nước được giám sát bởi nhân dân được thực hiện theo phương châm nào?",
      "answer": "\"Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng\"."
    },
    {
      "id": 15,
      "question": "Để thực hiện thành công cách mạng xã hội chủ nghĩa thì giai cấp công nhân cần liên minh với những giai tầng xã hội nào?",
      "answer": "Giai cấp nông dân và tầng lớp trí thức"
    },
    {
      "id": 16,
      "question": "Bối cảnh lịch sử dẫn đến sự ra đời của giai cấp công nhân Việt Nam?",
      "answer": "Ra đời trong cuộc khai thác thuộc địa lần thứ nhất (cuối thế kỷ XIX, đầu thế kỷ XX) của thực dân Pháp tại Việt Nam."
    },
    {
      "id": 17,
      "question": "Đường lối cơ bản, xuyên suốt của cách mạng Việt Nam?",
      "answer": "Độc lập dân tộc gắn liền với chủ nghĩa xã hội."
    },
    {
      "id": 18,
      "question": "Nhiệm vụ quan trọng nhất trên lĩnh vực kinh tế cần thực hiện trong thời kỳ quá độ lên CNXH ở Việt Nam?",
      "answer": "Công nghiệp hóa, hiện đại hóa đất nước"
    },
    {
      "id": 19,
      "question": "Sự khác biệt của dân chủ xã hội chủ nghĩa với dân chủ tư bản chủ nghĩa ở góc độ bản chất giai cấp?",
      "answer": "Dân chủ XHCN mang bản chất giai cấp công nhân và phục vụ lợi ích số đông (nhân dân lao động), còn dân chủ tư bản chủ nghĩa mang bản chất giai cấp tư sản và phục vụ lợi ích thiểu số (giai cấp tư sản)."
    },
    {
      "id": 20,
      "question": "Phạm trù nào được coi là cơ bản nhất, là xuất phát điểm của chủ nghĩa xã hội khoa học?",
      "answer": "Sứ mệnh lịch sử của giai cấp công nhân."
    },
    {
      "id": 21,
      "question": "Nêu sứ mệnh lịch sử của giai cấp công nhân trên lĩnh vực chính trị.",
      "answer": "Lật đổ quyền thống trị của giai cấp tư sản, giành lấy chính quyền, thiết lập nhà nước chuyên chính vô sản"
    },
    {
      "id": 22,
      "question": "Mục tiêu tổng quát của cách mạng Việt Nam?",
      "answer": "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh."
    },
    {
      "id": 23,
      "question": "Ai là người viết tác phẩm \"Không tưởng\" (Utopia)?",
      "answer": "Thomas More"
    },
    {
      "id": 24,
      "question": "Làm sao để nhận diện được “cách mạng màu”?",
      "answer": "Biến các bất ổn xã hội thành biểu tình; lợi dụng vỏ bọc \"phi chính trị\", \"dân chủ, nhân quyền\" để lôi kéo đám đông; kích động bạo loạn đòi lật đổ chính quyền hợp pháp."
    },
    {
      "id": 25,
      "question": "Hình thức đầu tiên của chuyên chính vô sản trên hiện thực?",
      "answer": "Công xã Pa-ri (năm 1871)."
    },
    {
      "id": 26,
      "question": "Các thế lực thù địch, phản động thường thực hiện chiến lược \"diễn biến hòa bình\" trên các lĩnh vực nào?",
      "answer": "Chính trị, tư tưởng - văn hóa, kinh tế, quốc phòng - an ninh, đối ngoại"
    },
    {
      "id": 27,
      "question": "Ba phát kiến vĩ đại của C. Mác và Ph. Ănghen?",
      "answer": "Chủ nghĩa duy vật lịch sử, Học thuyết giá trị thặng dư và Học thuyết về sứ mệnh lịch sử của giai cấp công nhân."
    },
    {
      "id": 28,
      "question": "Đảng cộng sản Việt Nam được thành lập vào lúc nào?",
      "answer": "1930"
    },
    {
      "id": 29,
      "question": "Xét về phương diện quyền lực, dân chủ là gì?",
      "answer": "Quyền lực thuộc về nhân dân"
    },
    {
      "id": 30,
      "question": "Những điều kiện chủ quan để giai cấp công nhân thực hiện thành công sứ mệnh lịch sử xóa bỏ CNTB và xây dựng Chủ nghĩa cộng sản văn minh?",
      "answer": "Sự phát triển của bản thân giai cấp công nhân (số lượng và chất lượng); đặc biệt quan trọng nhất là phải có Đảng Cộng sản lãnh đạo và xây dựng được khối liên minh giai cấp vững chắc."
    }
  ]
};
