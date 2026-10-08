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
  ],
  "essay": [
    {
      "id": 1,
      "title": "Thời kỳ quá độ lên CNXH, Thành tựu KT-XH Việt Nam & Trách nhiệm sinh viên",
      "question": "1. Đặc điểm của thời kỳ quá độ lên Chủ nghĩa xã hội? Phân tích một số thành tựu phát triển kinh tế - xã hội của Việt Nam trong thời kỳ quá độ lên Chủ nghĩa xã hội. Là sinh viên, anh (chị) phải làm gì để góp phần xây dựng và phát triển đất nước?",
      "tags": [
        "Thời kỳ quá độ",
        "Kinh tế - Xã hội Việt Nam",
        "Đổi mới",
        "Trách nhiệm sinh viên"
      ],
      "outline": [
        "1. Khái niệm và tính tất yếu của thời kỳ quá độ lên CNXH (Trực tiếp & Gián tiếp).",
        "2. Đặc điểm cơ bản của thời kỳ quá độ (Kinh tế, Chính trị, Tư tưởng - Văn hóa, Xã hội).",
        "3. Phân tích thành tựu KT-XH nổi bật của Việt Nam sau gần 40 năm Đổi mới (Kinh tế, Giảm nghèo, Đời sống, Vị thế quốc tế).",
        "4. Trách nhiệm, nghĩa vụ và hành động thiết thực của sinh viên đối với sự nghiệp xây dựng đất nước."
      ],
      "keyPoints": [
        "Tồn tại đan xen và đấu tranh giữa tàn dư cũ và nhân tố mới",
        "Kinh tế nhiều thành phần, định hướng XHCN",
        "Quá độ gián tiếp bỏ qua chế độ TBCN",
        "GDP vượt 430 tỷ USD, Top 35 thế giới, Top 4 ASEAN",
        "Giảm nghèo đa chiều từ >58% xuống dưới 3%",
        "Cơ đồ, tiềm lực, vị thế và uy tín quốc tế",
        "Bản lĩnh chính trị, tri thức số, sáng tạo khởi nghiệp, trách nhiệm cộng đồng"
      ],
      "contentSections": [
        {
          "heading": "I. Khái niệm và tính tất yếu của thời kỳ quá độ lên CNXH",
          "body": [
            "<strong>1. Khái niệm:</strong> Thời kỳ quá độ lên CNXH là thời kỳ cải biến cách mạng sâu sắc, toàn diện và triệt để từ xã hội cũ (TBCN hoặc tiền TBCN) sang xã hội mới XHCN. Thời kỳ này bắt đầu từ khi giai cấp công nhân và nhân dân lao động giành được chính quyền cho đến khi xây dựng thành công cơ sở vật chất - kỹ thuật và hoàn thiện các quan hệ xã hội cơ bản của CNXH.",
            "<strong>2. Tính tất yếu:</strong> Bất kỳ sự chuyển biến từ một hình thái kinh tế - xã hội này sang một hình thái khác đều cần một thời kỳ lịch sử nhất định. Đối với CNXH - một xã hội hoàn toàn mới về chất, thủ tiêu chế độ bóc lột - thì thời kỳ quá độ càng là một tất yếu khách quan.",
            "<strong>3. Hai hình thức quá độ:</strong>",
            "• <em>Quá độ trực tiếp:</em> Diễn ra từ những nước tư bản chủ nghĩa phát triển cao tiến thẳng lên CNXH (như dự báo ban đầu của C. Mác và Ph. Ăngghen).",
            "• <em>Quá độ gián tiếp:</em> Diễn ra ở những nước tiền tư bản hoặc tư bản chủ nghĩa phát triển ở trình độ trung bình - thấp, nông nghiệp lạc hậu, bỏ qua chế độ TBCN (như trường hợp của Việt Nam và các nước XHCN hiện nay theo luận điểm của V.I. Lênin)."
          ]
        },
        {
          "heading": "II. Các đặc điểm cơ bản của thời kỳ quá độ lên CNXH",
          "body": [
            "<strong>Đặc điểm bao trùm, xuyên suốt:</strong> Là sự <em>tồn tại đan xen, đan cài và đấu tranh quyết liệt</em> giữa những tàn dư, yếu tố của xã hội cũ với những mầm mống, nhân tố mới sơ khai của CNXH trên mọi phương diện của đời sống xã hội:",
            "<strong>1. Trên lĩnh vực kinh tế:</strong>",
            "• Tồn tại nền kinh tế nhiều thành phần với đa dạng hình thức sở hữu (sở hữu toàn dân, sở hữu tập thể, sở hữu tư nhân, sở hữu có vốn đầu tư nước ngoài...).",
            "• Tồn tại nhiều hình thức phân phối, trong đó <em>phân phối theo kết quả lao động</em> và hiệu quả kinh tế là chủ đạo, kết hợp với phân phối theo mức đóng góp vốn, công nghệ và phân phối qua hệ thống an sinh, phúc lợi xã hội.",
            "• Vận hành nền kinh tế thị trường định hướng XHCN, phát triển mạnh mẽ lực lượng sản xuất gắn liền với xây dựng quan hệ sản xuất tiến bộ.",
            "<strong>2. Trên lĩnh vực chính trị:</strong>",
            "• Thiết lập, củng cố và hoàn thiện Nhà nước pháp quyền XHCN mang bản chất giai cấp công nhân, do Đảng Cộng sản lãnh đạo, phục vụ lợi ích của nhân dân lao động.",
            "• Tăng cường củng cố khối liên minh giai cấp Công nhân - Nông dân - Đội ngũ trí thức.",
            "• Cuộc đấu tranh giai cấp vẫn tiếp tục diễn ra trong điều kiện mới: đấu tranh chống các thế lực thù địch thực hiện chiến lược 'diễn biến hòa bình', bạo loạn lật đổ; chống tệ quan liêu, tham nhũng, lãng phí và nguy cơ 'tự diễn biến', 'tự chuyển hóa'.",
            "<strong>3. Trên lĩnh vực tư tưởng - văn hóa:</strong>",
            "• Tồn tại nhiều tư tưởng, ý thức hệ và quan điểm khác nhau; hệ tư tưởng Mác - Lênin và tư tưởng Hồ Chí Minh giữ vai trò chủ đạo, định hướng đời sống tinh thần xã hội.",
            "• Diễn ra cuộc đấu tranh giữa tư tưởng tiến bộ xã hội chủ nghĩa với tàn dư tư tưởng phong kiến, lối sống tư sản, chủ nghĩa cá nhân thực dụng và các hủ tục lạc hậu.",
            "• Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc; tiếp thu có chọn lọc tinh hoa văn hóa nhân loại.",
            "<strong>4. Trên lĩnh vực xã hội:</strong>",
            "• Cơ cấu xã hội - giai cấp phong phú, đa dạng và phức tạp (gồm công nhân, nông dân, trí thức, đội ngũ doanh nhân, tiểu thương...).",
            "• Các giai cấp, tầng lớp vừa hợp tác chặt chẽ vừa có sự khác biệt về lợi ích kinh tế cụ thể; còn tồn tại khoảng cách giàu nghèo và bất bình đẳng do quy luật kinh tế thị trường tác động."
          ]
        },
        {
          "heading": "III. Phân tích một số thành tựu phát triển kinh tế - xã hội của Việt Nam trong thời kỳ quá độ",
          "body": [
            "Trải qua gần 40 năm thực hiện công cuộc Đổi mới (từ 1986 đến nay), Việt Nam từ một nước nghèo nàn, khủng hoảng kinh tế - xã hội nghiêm trọng đã vươn lên đạt được những thành tựu to lớn, có ý nghĩa lịch sử:",
            "<strong>1. Về phát triển kinh tế:</strong>",
            "• <em>Quy mô nền kinh tế tăng vọt:</em> Từ quy mô GDP chỉ khoảng vài tỷ USD vào năm 1986 với lạm phát phi mã lên tới 774%, đến năm 2023 - 2024 quy mô GDP của Việt Nam đã vượt <strong>430 tỷ USD</strong>, đứng thứ 35 trên thế giới và thuộc Top 4 khu vực ASEAN. GDP bình quân đầu người đạt trên <strong>4.300 USD/năm</strong>, chính thức đưa Việt Nam thoát khỏi nhóm nước nghèo để trở thành quốc gia có thu nhập trung bình.",
            "• <em>Chuyển dịch cơ cấu kinh tế theo hướng hiện đại:</em> Tỷ trọng công nghiệp - xây dựng và dịch vụ chiếm trên 85% GDP, tỷ trọng nông nghiệp giảm xuống dưới 12% nhưng phát triển theo hướng nông nghiệp công nghệ cao, nông nghiệp sinh thái. Việt Nam trở thành một trong những quốc gia xuất khẩu gạo, cà phê, hạt điều, thủy sản hàng đầu thế giới, đảm bảo vững chắc an ninh lương thực quốc gia.",
            "• <em>Hội nhập kinh tế quốc tế sâu rộng:</em> Thiết lập quan hệ ngoại giao với 193 quốc gia, ký kết và thực thi 16 Hiệp định Thương mại tự do (FTA) thế hệ mới (như CPTPP, EVFTA, RCEP...). Tổng kim ngạch xuất nhập khẩu vượt mốc <strong>700 tỷ USD</strong>, đưa Việt Nam vào Top 20 quốc gia có quy mô thương mại quốc tế lớn nhất toàn cầu. Đồng thời, Việt Nam là điểm đến hấp dẫn thu hút vốn FDI hàng đầu khu vực.",
            "<strong>2. Về phát triển xã hội và con người:</strong>",
            "• <em>Kỳ tích xóa đói giảm nghèo:</em> Tỷ lệ hộ nghèo đa chiều giảm ngoạn mục từ trên 58% (năm 1993) xuống còn <strong>dưới 3%</strong> hiện nay. Việt Nam được Liên Hợp Quốc vinh danh là một trong những điểm sáng toàn cầu về thực hiện Mục tiêu Phát triển Thiên niên kỷ (MDGs) và Mục tiêu Phát triển Bền vững (SDGs).",
            "• <em>Y tế, giáo dục và chất lượng cuộc sống không ngừng nâng cao:</em> Hoàn thành phổ cập giáo dục mầm non, tiểu học và THCS; tỷ lệ biết chữ đạt trên 97%; tuổi thọ trung bình của người dân tăng từ 65 tuổi (1990) lên <strong>73,7 tuổi</strong> (2023); diện bao phủ bảo hiểm y tế toàn dân đạt trên 93%.",
            "• <em>Chính trị - xã hội ổn định, vị thế quốc tế nâng cao:</em> Môi trường hòa bình, ổn định chính trị được giữ vững vững chắc; quốc phòng - an ninh được củng cố. Như Đại hội XIII của Đảng và Cố Tổng Bí thư Nguyễn Phú Trọng đã khẳng định: <em>'Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay'</em>."
          ]
        },
        {
          "heading": "IV. Trách nhiệm của sinh viên góp phần xây dựng và phát triển đất nước",
          "body": [
            "Là thế hệ trí thức trẻ tương lai, sinh viên đóng vai trò rường cột trong sự nghiệp công nghiệp hóa, hiện đại hóa và hội nhập quốc tế. Mỗi sinh viên cần thực hiện tốt các nhiệm vụ sau:",
            "<strong>1. Về lập trường tư tưởng và bản lĩnh chính trị:</strong>",
            "• Kiên định mục tiêu độc lập dân tộc gắn liền với Chủ nghĩa xã hội; chủ động học tập, nghiên cứu và nắm vững Chủ nghĩa Mác - Lênin, Tư tưởng Hồ Chí Minh, đường lối, chủ trương của Đảng.",
            "• Nâng cao cảnh giác cách mạng, rèn luyện sức 'đề kháng' chính trị vững vàng; tích cực tham gia đấu tranh phản bác các quan điểm sai trái, luận điệu thù địch, tin giả trên không gian mạng.",
            "<strong>2. Về học tập, nghiên cứu khoa học và phát triển năng lực:</strong>",
            "• Xác định động cơ học tập đúng đắn; nỗ lực làm chủ tri thức chuyên ngành, gắn lý thuyết với thực hành.",
            "• Tích cực trau dồi các kỹ năng cốt lõi của thời đại số: ngoại ngữ, công nghệ thông tin, kỹ năng làm việc nhóm, tư duy phản biện, kỹ năng giải quyết vấn đề phức tạp.",
            "• Tham gia nghiên cứu khoa học, đổi mới sáng tạo, nuôi dưỡng tinh thần khởi nghiệp (startup), sẵn sàng trở thành nguồn nhân lực chất lượng cao phục vụ nền kinh tế tri thức.",
            "<strong>3. Về đạo đức, lối sống và trách nhiệm cộng đồng:</strong>",
            "• Rèn luyện phẩm chất đạo đức cách mạng: Cần, kiệm, liêm, chính; sống có hoài bão, lý tưởng cao đẹp; thượng tôn pháp luật và giữ gìn nếp sống văn minh đô thị.",
            "• Tích cực tham gia các phong trào xung kích, tình nguyện vì cộng đồng như: 'Mùa hè xanh', 'Tiếp sức mùa thi', hiến máu nhân đạo, bảo vệ môi trường, hỗ trợ đồng bào vùng sâu vùng xa chịu thiên tai bão lũ.",
            "• Giữ gìn và phát huy bản sắc văn hóa dân tộc; tự hào quảng bá hình ảnh đất nước, con người Việt Nam thân thiện, năng động, văn minh tới bạn bè quốc tế."
          ]
        }
      ]
    },
    {
      "id": 2,
      "title": "Sứ mệnh lịch sử của GCCN & Những biến đổi của GCCN Việt Nam hiện nay",
      "question": "2. Phân tích sứ mệnh lịch sử của giai cấp công nhân. Những biến đổi tích cực của giai cấp công nhân Việt Nam và sứ mệnh lịch sử của giai cấp công nhân Việt Nam hiện nay?",
      "tags": [
        "Giai cấp công nhân",
        "Sứ mệnh lịch sử",
        "Công nhân Việt Nam",
        "CNH - HĐH"
      ],
      "outline": [
        "1. Khái niệm và Nội dung sứ mệnh lịch sử của giai cấp công nhân (Kinh tế, Chính trị - Xã hội, Văn hóa - Tư tưởng).",
        "2. Điều kiện khách quan và nhân tố chủ quan quy định sứ mệnh lịch sử của GCCN.",
        "3. Những biến đổi tích cực của giai cấp công nhân Việt Nam hiện nay (Số lượng, Cơ cấu, Trình độ, Tác phong công nghiệp).",
        "4. Sứ mệnh lịch sử của giai cấp công nhân Việt Nam trong thời kỳ mới."
      ],
      "keyPoints": [
        "Giải phóng giai cấp, giải phóng nhân dân lao động và toàn thể nhân loại",
        "Đại biểu cho LLSX tiên tiến, phương thức sản xuất hiện đại",
        "Đảng Cộng sản - nhân tố chủ quan quyết định nhất",
        "Công nhân tri thức, công nhân số hóa, tự động hóa",
        "Đi đầu trong CNH - HĐH gắn với kinh tế tri thức",
        "Nòng cốt giữ vững bản chất giai cấp của Đảng và Nhà nước"
      ],
      "contentSections": [
        {
          "heading": "I. Phân tích sứ mệnh lịch sử của giai cấp công nhân",
          "body": [
            "<strong>1. Khái niệm:</strong> Sứ mệnh lịch sử tổng quát của giai cấp công nhân là lãnh đạo toàn thể nhân dân lao động đấu tranh xóa bỏ chế độ tư bản chủ nghĩa, xóa bỏ chế độ người bóc lột người, giải phóng giai cấp công nhân, nhân dân lao động và toàn thể nhân loại khỏi mọi áp bức, bóc lột, bất công, xây dựng thành công xã hội xã hội chủ nghĩa và cộng sản chủ nghĩa văn minh.",
            "<strong>2. Nội dung sứ mệnh lịch sử trên các lĩnh vực cụ thể:</strong>",
            "• <em>Nội dung kinh tế:</em> Giai cấp công nhân là lực lượng sản xuất cơ bản, trực tiếp nhất, đại diện cho phương thức sản xuất tiên tiến mang tính xã hội hóa cao. Sứ mệnh của họ là phá vỡ quan hệ sản xuất tư bản chủ nghĩa chật hẹp, xác lập quan hệ sản xuất mới dựa trên chế độ công hữu về tư liệu sản xuất chủ yếu, đóng vai trò chủ thể thúc đẩy lực lượng sản xuất phát triển tạo nền tảng vật chất kỹ thuật vững chắc cho CNXH.",
            "• <em>Nội dung chính trị - xã hội:</em> Giai cấp công nhân thông qua đội tiền phong là Đảng Cộng sản lãnh đạo nhân dân lao động đứng lên lật đổ ách thống trị của giai cấp tư sản, giành lấy chính quyền nhà nước, thiết lập Nhà nước chuyên chính vô sản / Nhà nước pháp quyền XHCN. Từ đó, xây dựng nền dân chủ xã hội chủ nghĩa, bảo đảm quyền làm chủ thực sự của nhân dân lao động.",
            "• <em>Nội dung văn hóa - tư tưởng:</em> Giai cấp công nhân tiến hành cuộc cách mạng trên lĩnh vực tinh thần: đấu tranh loại bỏ hệ tư tưởng tư sản và các tàn dư lạc hậu, phản động; xác lập hệ tư tưởng của giai cấp công nhân (Chủ nghĩa Mác - Lênin) giữ vị trí chủ đạo trong đời sống tinh thần xã hội; xây dựng nền văn hóa mới và con người mới XHCN phát triển toàn diện.",
            "<strong>3. Điều kiện quy định sứ mệnh lịch sử của GCCN:</strong>",
            "• <em>Điều kiện khách quan:</em> Do địa vị kinh tế - xã hội (là con đẻ của nền đại công nghiệp, đại diện cho LLSX tiến bộ nhất, không có tư liệu sản xuất nên bị bóc lột giá trị thặng dư trực tiếp) và đặc điểm chính trị - xã hội (tính tổ chức, kỷ luật cao, tinh thần cách mạng triệt để, bản chất quốc tế chân chính).",
            "• <em>Điều kiện chủ quan:</em> Sự phát triển về số lượng và chất lượng của bản thân giai cấp công nhân; trong đó <strong>sự ra đời và lãnh đạo của Đảng Cộng sản</strong> là nhân tố chủ quan quan trọng nhất, có ý nghĩa quyết định; đồng thời phải xây dựng được khối liên minh giai cấp vững chắc với nông dân và các tầng lớp lao động khác."
          ]
        },
        {
          "heading": "II. Những biến đổi tích cực của giai cấp công nhân Việt Nam hiện nay",
          "body": [
            "Dưới tác động của sự nghiệp Đổi mới, đẩy mạnh công nghiệp hóa, hiện đại hóa và hội nhập quốc tế, giai cấp công nhân Việt Nam đã có những bước chuyển biến mạnh mẽ, tích cực:",
            "<strong>1. Tăng nhanh về số lượng và đa dạng hóa cơ cấu:</strong>",
            "• Giai cấp công nhân Việt Nam hiện có trên 17 triệu người, chiếm khoảng 15% dân số và hơn 27% lực lượng lao động xã hội, nhưng đóng góp hơn <strong>60% tổng sản phẩm quốc nội (GDP)</strong> và trên 70% ngân sách nhà nước.",
            "• Cơ cấu công nhân phát triển đa dạng theo mọi thành phần kinh tế: kinh tế nhà nước, kinh tế tư nhân và khu vực có vốn đầu tư nước ngoài (FDI) - trong đó lực lượng công nhân trong khu vực tư nhân và FDI tăng trưởng nhanh nhất.",
            "<strong>2. Trình độ học vấn, chuyên môn và kỹ năng tay nghề nâng cao rõ rệt:</strong>",
            "• Tỷ lệ công nhân qua đào tạo kỹ thuật, công nghệ ngày càng tăng cao. Đã hình thành một bộ phận đông đảo <em>'công nhân tri thức'</em>, công nhân công nghệ cao làm chủ các dây chuyền tự động hóa, công nghệ thông tin, viễn thông, cơ khí chính xác, công nghiệp bán dẫn.",
            "• Khả năng tiếp cận, ứng dụng tiến bộ khoa học kỹ thuật và chuyển đổi số được nâng lên một bước mới.",
            "<strong>3. Tác phong công nghiệp và kỷ luật lao động tiến bộ vượt bậc:</strong>",
            "• Rèn luyện được ý thức tổ chức kỷ luật, tác phong công nghiệp chuyên nghiệp, đáp ứng môi trường làm việc khắt khe của các tập đoàn đa quốc gia và chuỗi cung ứng toàn cầu.",
            "• Tinh thần năng động, sáng tạo, cải tiến kỹ thuật, nâng cao năng suất lao động được khơi dậy mạnh mẽ.",
            "<strong>4. Bản lĩnh chính trị vững vàng, phát huy vai trò làm chủ:</strong>",
            "• Tuyệt đại đa số công nhân tin tưởng vào sự lãnh đạo của Đảng Cộng sản Việt Nam và con đường đi lên CNXH; giữ vai trò nòng cốt bảo đảm an ninh chính trị, trật tự xã hội tại các khu công nghiệp.",
            "• Vai trò của tổ chức Công đoàn ngày càng được đổi mới theo hướng thực chất, đại diện bảo vệ quyền và lợi ích hợp pháp, chính đáng, chăm lo đời sống vật chất và tinh thần cho người lao động."
          ]
        },
        {
          "heading": "III. Sứ mệnh lịch sử của giai cấp công nhân Việt Nam hiện nay",
          "body": [
            "Nghị quyết số 20-NQ/TW của Ban Chấp hành Trung ương Đảng (khóa X) và Văn kiện Đại hội XIII của Đảng đã xác định rõ sứ mệnh của GCCN Việt Nam trong thời kỳ mới:",
            "<strong>1. Trên lĩnh vực kinh tế:</strong>",
            "• Là lực lượng đi đầu, nòng cốt trong sự nghiệp đẩy mạnh CNH, HĐH đất nước gắn với phát triển kinh tế tri thức, kinh tế số và kinh tế xanh.",
            "• Giữ vai trò chủ đạo trong sản xuất ra của cải vật chất chất lượng cao, nâng cao năng suất lao động, hiệu quả và sức cạnh tranh của nền kinh tế Việt Nam trên trường quốc tế, hướng tới mục tiêu đưa Việt Nam trở thành nước phát triển có thu nhập cao vào năm 2045.",
            "<strong>2. Trên lĩnh vực chính trị - xã hội:</strong>",
            "• Giữ vững và tăng cường bản chất giai cấp công nhân của Đảng và Nhà nước pháp quyền XHCN.",
            "• Là lực lượng nòng cốt củng cố khối đại đoàn kết toàn dân tộc trên cơ sở liên minh giai cấp Công nhân - Nông dân - Đội ngũ trí thức.",
            "• Tích cực tham gia xây dựng, chỉnh đốn Đảng trong sạch, vững mạnh; kiên quyết đấu tranh phòng chống tham nhũng, lãng phí, 'tự diễn biến', 'tự chuyển hóa'; làm thất bại âm mưu 'diễn biến hòa bình' của các thế lực thù địch nhằm 'phi chính trị hóa' giai cấp công nhân.",
            "<strong>3. Trên lĩnh vực văn hóa - tư tưởng:</strong>",
            "• Xây dựng và bảo vệ nền tảng tư tưởng của Đảng là Chủ nghĩa Mác - Lênin và Tư tưởng Hồ Chí Minh.",
            "• Tiên phong xây dựng văn hóa doanh nghiệp, nếp sống văn minh công nghiệp, đạo đức lao động trung thực, sáng tạo; đấu tranh đẩy lùi lối sống thực dụng, tệ nạn xã hội.",
            "• Giữ gìn và phát huy bản sắc văn hóa dân tộc, kết hợp hài hòa truyền thống tốt đẹp với tinh hoa văn hóa tiến bộ của nhân loại."
          ]
        }
      ]
    },
    {
      "id": 3,
      "title": "Đặc trưng Quốc gia – Dân tộc & Quan điểm của Đảng về vấn đề dân tộc",
      "question": "3. Phân tích các đặc trưng của quốc gia – dân tộc và các quan điểm của Đảng về vấn đề dân tộc",
      "tags": [
        "Quốc gia - Dân tộc",
        "Đặc trưng dân tộc",
        "Đường lối của Đảng",
        "Bình đẳng dân tộc"
      ],
      "outline": [
        "1. Khái niệm Quốc gia – Dân tộc (Dân tộc theo nghĩa rộng).",
        "2. Phân tích 5 đặc trưng cơ bản của Quốc gia – Dân tộc.",
        "3. Các quan điểm, nguyên tắc nhất quán của Đảng Cộng sản Việt Nam về vấn đề dân tộc.",
        "4. Ý nghĩa thực tiễn đối với sự nghiệp xây dựng và bảo vệ Tổ quốc Việt Nam."
      ],
      "keyPoints": [
        "Lãnh thổ chung ổn định, toàn vẹn",
        "Phương thức sinh hoạt kinh tế chung, thị trường thống nhất",
        "Ngôn ngữ chung của quốc gia",
        "Văn hóa và tâm lý dân tộc chung",
        "Nhà nước và pháp luật thống nhất",
        "Chiến lược cơ bản, lâu dài và cấp bách",
        "Bình đẳng, đoàn kết, tôn trọng, giúp nhau cùng phát triển",
        "Đập tan âm mưu lợi dụng vấn đề dân tộc để chia rẽ"
      ],
      "contentSections": [
        {
          "heading": "I. Khái niệm và 5 đặc trưng cơ bản của Quốc gia – Dân tộc",
          "body": [
            "<strong>1. Khái niệm:</strong> Quốc gia – Dân tộc (dân tộc theo nghĩa rộng - Nation) là hình thức cộng đồng người ổn định, bền vững nhất trong lịch sử, hình thành trên cơ sở phát triển của phương thức sản xuất tư bản chủ nghĩa hoặc hình thành sớm do yêu cầu đấu tranh dựng nước và giữ nước (như Việt Nam). Đây là cộng đồng chính trị - xã hội gắn bó chặt chẽ với thiết chế nhà nước.",
            "<strong>2. Phân tích 5 đặc trưng cơ bản của Quốc gia – Dân tộc:</strong>",
            "• <strong>Đặc trưng 1: Có chung một vùng lãnh thổ ổn định, toàn vẹn:</strong>",
            "  - Lãnh thổ là không gian sinh tồn và phát triển của dân tộc, bao gồm vùng đất, vùng trời, vùng biển, hải đảo và thềm lục địa.",
            "  - Vùng lãnh thổ có ranh giới biên giới quốc gia rõ ràng, được quốc tế công nhận, là chủ quyền thiêng liêng bất khả xâm phạm. Vận mệnh dân tộc luôn gắn liền với việc bảo vệ toàn vẹn lãnh thổ.",
            "• <strong>Đặc trưng 2: Có chung một phương thức sinh hoạt kinh tế thống nhất:</strong>",
            "  - Đây là nền tảng vật chất và là mối liên kết bền chặt nhất gắn kết các bộ phận dân cư trên toàn lãnh thổ.",
            "  - Thị trường dân tộc thống nhất xóa bỏ tình trạng cát cứ, phân tán, cô lập về kinh tế thời phong kiến, tạo thành một chỉnh thể kinh tế quốc gia thông suốt.",
            "• <strong>Đặc trưng 3: Có chung một ngôn ngữ quốc gia thống nhất:</strong>",
            "  - Ngôn ngữ chung là công cụ giao tiếp thống nhất trong toàn xã hội, phương tiện trao đổi tư tưởng, văn hóa và quản lý hành chính nhà nước.",
            "  - Ở Việt Nam, tiếng Việt (tiếng Kinh) là ngôn ngữ quốc gia chính thức, đồng thời Nhà nước tôn trọng và bảo tồn chữ viết, tiếng nói của các dân tộc thiểu số.",
            "• <strong>Đặc trưng 4: Có chung một nền văn hóa và tâm lý dân tộc:</strong>",
            "  - Được kết tinh qua chiều dài lịch sử đấu tranh dựng nước, giữ nước và lao động sản xuất, tạo nên bản sắc văn hóa dân tộc độc đáo.",
            "  - Thể hiện qua lòng yêu nước nồng nàn, ý chí độc lập tự cường, tinh thần đoàn kết cộng đồng, lối sống và tâm lý chung gắn bó máu thịt giữa các thành viên trong quốc gia.",
            "• <strong>Đặc trưng 5: Có chung một Nhà nước và hệ thống pháp luật thống nhất:</strong>",
            "  - Nhà nước là thiết chế chính trị quyền lực tối cao đại diện cho toàn thể quốc gia - dân tộc.",
            "  - Quản lý toàn diện mọi mặt đời sống xã hội bằng pháp luật thống nhất, bảo vệ quyền lợi hợp pháp của nhân dân và đại diện cho quốc gia trong quan hệ quốc tế."
          ]
        },
        {
          "heading": "II. Quan điểm và chủ trương nhất quán của Đảng Cộng sản Việt Nam về vấn đề dân tộc",
          "body": [
            "Vấn đề dân tộc luôn được Đảng Cộng sản Việt Nam xác định là vấn đề có tầm quan trọng đặc biệt đối với sự nghiệp cách mạng. Quan điểm của Đảng thể hiện qua các nội dung cốt lõi sau:",
            "<strong>1. Vị trí chiến lược:</strong>",
            "• Vấn đề dân tộc và công tác dân tộc có vị trí chiến lược cơ bản, lâu dài, đồng thời là nhiệm vụ cấp bách của cách mạng Việt Nam qua mọi thời kỳ.",
            "• Đại đoàn kết các dân tộc là cội nguồn sức mạnh, là động lực to lớn bảo đảm thắng lợi của sự nghiệp xây dựng và bảo vệ Tổ quốc XHCN.",
            "<strong>2. Nguyên tắc chỉ đạo cốt lõi:</strong>",
            "• Các dân tộc trong đại gia đình Việt Nam <strong>'Bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển'</strong>.",
            "• Kiên quyết đấu tranh chống tư tưởng phân biệt đối xử, kỳ thị dân tộc, tư tưởng dân tộc lớn cũng như tư tưởng dân tộc hẹp hòi, tự ti dân tộc.",
            "<strong>3. Phát triển toàn diện kinh tế - xã hội vùng đồng bào dân tộc thiểu số:</strong>",
            "• Đảng và Nhà nước ưu tiên nguồn lực đầu tư, triển khai hiệu quả <em>Chương trình mục tiêu quốc gia phát triển kinh tế - xã hội vùng đồng bào dân tộc thiểu số và miền núi</em>.",
            "• Tập trung phát triển hệ thống cơ sở hạ tầng giao thông, thủy lợi, mạng lưới điện, viễn thông, trường học, trạm y tế; đẩy mạnh xóa đói giảm nghèo bền vững, từng bước thu hẹp khoảng cách phát triển giữa vùng sâu, vùng xa với các đô thị.",
            "<strong>4. Nâng cao dân trí, chăm lo văn hóa, y tế và xây dựng đội ngũ cán bộ:</strong>",
            "• Thực hiện chính sách ưu tiên trong giáo dục - đào tạo: phát triển mạng lưới trường phổ thông dân tộc nội trú, thực hiện chính sách cử tuyển, miễn giảm học phí cho con em đồng bào thiểu số.",
            "• Giữ gìn, bảo tồn và phát huy các giá trị văn hóa vật thể và phi vật thể tốt đẹp của từng tộc người, đồng thời kiên quyết vận động xóa bỏ các phong tục tập quán lạc hậu, mê tín dị đoan.",
            "• Chú trọng quy hoạch, đào tạo, bồi dưỡng và bố trí đội ngũ cán bộ, công chức, viên chức là người dân tộc thiểu số tại chỗ.",
            "<strong>5. Giữ vững quốc phòng - an ninh, đập tan mọi âm mưu chia rẽ:</strong>",
            "• Giữ vững ổn định chính trị, củng cố 'thế trận lòng dân' vững chắc ở các địa bàn chiến lược, xung yếu biên giới, hải đảo, Tây Bắc, Tây Nguyên, Tây Nam Bộ.",
            "• Nâng cao cảnh giác, kiên quyết đấu tranh làm thất bại mọi âm mưu, thủ đoạn của các thế lực thù địch lợi dụng 'vấn đề dân tộc', 'nhân quyền', 'tôn giáo' để kích động ly khai, bạo loạn (như kích động thành lập 'Nhà nước Đề Ga', 'Nhà nước Mông'), phá hoại khối đại đoàn kết toàn dân tộc."
          ]
        }
      ]
    },
    {
      "id": 4,
      "title": "Quan điểm Mác-Lênin về Dân tộc, Đặc điểm Dân tộc VN & Trách nhiệm sinh viên",
      "question": "4. Trình bày quan điểm của chủ nghĩa Mác-Lênin về vấn đề dân tộc (khái niệm, xu hướng). Liên hệ thực tiễn về đặc điểm của dân tộc Việt Nam. Là một sinh viên, anh (chị) nên làm gì để góp phần xây dựng khối đại đoàn kết dân tộc?",
      "tags": [
        "Quan điểm Mác - Lênin",
        "Hai xu hướng dân tộc",
        "Đặc điểm dân tộc Việt Nam",
        "Đại đoàn kết dân tộc"
      ],
      "outline": [
        "1. Quan điểm của Chủ nghĩa Mác - Lênin về vấn đề dân tộc (Hai nghĩa của khái niệm, Hai xu hướng phát triển khách quan, Cương lĩnh dân tộc của Lênin).",
        "2. Phân tích 6 đặc điểm cơ bản của dân tộc Việt Nam trong thực tiễn.",
        "3. Trách nhiệm, thái độ và hành động thiết thực của sinh viên nhằm xây dựng và củng cố khối đại đoàn kết dân tộc."
      ],
      "keyPoints": [
        "Khái niệm: Quốc gia dân tộc (rộng) & Tộc người (hẹp)",
        "Xu hướng 1: Tách ra để thành lập quốc gia độc lập",
        "Xu hướng 2: Các dân tộc liên hiệp, xích lại gần nhau",
        "Cương lĩnh Lênin: Bình đẳng - Tự quyết - Liên hiệp công nhân",
        "Việt Nam: 54 dân tộc, cư trú xen kẽ, địa bàn chiến lược xung yếu",
        "Chênh lệch phát triển KT-XH, văn hóa thống nhất trong đa dạng",
        "Truyền thống yêu nước đoàn kết keo sơn",
        "Sinh viên: Tôn trọng đa dạng văn hóa, tình nguyện vùng cao, đấu tranh phản bác luận điệu chia rẽ"
      ],
      "contentSections": [
        {
          "heading": "I. Quan điểm của Chủ nghĩa Mác - Lênin về vấn đề dân tộc",
          "body": [
            "<strong>1. Hai cách tiếp cận khái niệm dân tộc:</strong>",
            "• <em>Theo nghĩa rộng (Nation - Quốc gia dân tộc):</em> Là cộng đồng người ổn định làm thành nhân dân một nước, có lãnh thổ quốc gia, nền kinh tế thống nhất, ngôn ngữ chung, nền văn hóa và tâm lý dân tộc, gắn với một nhà nước và pháp luật thống nhất (ví dụ: Dân tộc Việt Nam, Dân tộc Ấn Độ...).",
            "• <em>Theo nghĩa hẹp (Ethnie - Tộc người):</em> Là cộng đồng người có chung mối liên hệ về nguồn gốc xuất thân, ngôn ngữ mẹ đẻ, phong tục tập quán văn hóa và ý thức tự giác tộc người (ví dụ: Dân tộc Kinh, Tày, Thái, Mường, H'Mông, Khmer...).",
            "<strong>2. Hai xu hướng khách quan của sự phát triển quan hệ dân tộc (Do V.I. Lênin phát hiện):</strong>",
            "• <em>Xu hướng thứ nhất: Xu hướng tách ra để xác lập các cộng đồng dân tộc độc lập:</em>",
            "  - Xuất hiện trong giai đoạn đầu của chủ nghĩa tư bản khi phương thức sản xuất TBCN thức tỉnh ý thức dân tộc.",
            "  - Các bộ tộc, tộc người đấu tranh chống áp bức, bất bình đẳng dân tộc, đòi quyền tự quyết, tách ra để thành lập các nhà nước dân tộc độc lập. Trong thời đại ngày nay, xu hướng này thể hiện qua phong trào giải phóng dân tộc và bảo vệ chủ quyền quốc gia.",
            "• <em>Xu hướng thứ hai: Xu hướng các dân tộc liên hiệp lại, xích lại gần nhau:</em>",
            "  - Xuất hiện khi lực lượng sản xuất, khoa học - kỹ thuật phát triển mạnh mẽ, mở rộng phân công lao động xã hội vượt ra khỏi ranh giới từng quốc gia.",
            "  - Thúc đẩy các dân tộc xóa bỏ hàng rào ngăn cách, tăng cường giao lưu, hội nhập kinh tế, văn hóa và liên kết quốc tế (thể hiện rõ qua xu thế toàn cầu hóa và hội nhập kinh tế quốc tế hiện nay).",
            "<strong>3. Cương lĩnh dân tộc của V.I. Lênin (Kim chỉ nam giải quyết vấn đề dân tộc):</strong>",
            "• <em>Các dân tộc hoàn toàn bình đẳng:</em> Mọi dân tộc lớn hay nhỏ đều có quyền lợi và nghĩa vụ ngang nhau, không có dân tộc nào có đặc quyền, đặc lợi.",
            "• <em>Các dân tộc được quyền tự quyết:</em> Quyền tự quyết định vận mệnh của dân tộc mình (quyền tự do phân lập thành quốc gia độc lập hoặc tự nguyện liên hiệp).",
            "• <em>Liên hiệp công nhân tất cả các dân tộc:</em> Thể hiện bản chất quốc tế của giai cấp công nhân, là nền tảng bảo đảm thực hiện thắng lợi quyền bình đẳng và tự quyết dân tộc."
          ]
        },
        {
          "heading": "II. Đặc điểm cơ bản của dân tộc Việt Nam (Thực tiễn)",
          "body": [
            "Thực tiễn lịch sử và địa chính trị hình thành nên 6 đặc điểm nổi bật của dân tộc Việt Nam:",
            "• <strong>1. Có sự chênh lệch lớn về số lượng dân cư giữa các tộc người:</strong> Việt Nam có 54 dân tộc anh em; dân tộc Kinh chiếm khoảng 85% dân số, trong khi 53 dân tộc thiểu số chỉ chiếm khoảng 15% tổng dân số cả nước.",
            "• <strong>2. Các dân tộc cư trú xen kẽ nhau:</strong> Không có dân tộc nào có vùng lãnh thổ tộc người hoàn toàn biệt lập. Đặc điểm này tạo điều kiện thuận lợi to lớn cho sự hòa nhập, giao lưu văn hóa, học hỏi kinh nghiệm sản xuất, nhưng cũng dễ nảy sinh va chạm nếu không giải quyết tốt các quan hệ xã hội.",
            "• <strong>3. Địa bàn cư trú của đồng bào thiểu số có vị trí chiến lược xung yếu:</strong> Các dân tộc thiểu số cư trú chủ yếu ở vùng miền núi, biên giới, hải đảo - chiếm tới 3/4 diện tích tự nhiên của cả nước. Đây là những 'phên dậu' hiểm yếu của Tổ quốc về quốc phòng, an ninh và là đầu nguồn tài nguyên, rừng phòng hộ sinh thái quốc gia.",
            "• <strong>4. Trình độ phát triển kinh tế - xã hội giữa các dân tộc không đồng đều:</strong> Do điều kiện tự nhiên khắc nghiệt, giao thông cách trở và lịch sử để lại, đời sống của một bộ phận đồng bào thiểu số vùng sâu, vùng xa vẫn còn nhiều khó khăn, tỷ lệ hộ nghèo cao hơn mặt bằng chung.",
            "• <strong>5. Bản sắc văn hóa phong phú, đa dạng 'thống nhất trong đa dạng':</strong> Mỗi dân tộc đều sở hữu tiếng nói, trang phục, kiến trúc, lễ hội và kho tàng di sản độc đáo, hòa quyện tạo nên vườn hoa văn hóa Việt Nam rực rỡ, thống nhất về lòng yêu nước và ý thức cộng đồng.",
            "• <strong>6. Có truyền thống đoàn kết keo sơn, gắn bó máu thịt lâu đời:</strong> Trải qua hàng nghìn năm dựng nước và giữ nước chung, các dân tộc anh em luôn kề vai sát cánh, đồng cam cộng khổ chống giặc ngoại xâm và khắc phục thiên tai bão lũ, đúc kết nên truyền thống 'Đồng bào', 'Bầu ơi thương lấy bí cùng'."
          ]
        },
        {
          "heading": "III. Trách nhiệm của sinh viên góp phần xây dựng khối đại đoàn kết dân tộc",
          "body": [
            "Sinh viên là lực lượng trí thức trẻ, đóng vai trò cầu nối quan trọng trong việc thắt chặt khối đại đoàn kết toàn dân tộc:",
            "<strong>1. Về nhận thức và lập trường tư tưởng:</strong>",
            "• Nhận thức sâu sắc rằng đại đoàn kết toàn dân tộc là truyền thống quý báu, nguồn sức mạnh vô địch và là nhân tố quyết định mọi thắng lợi của cách mạng Việt Nam.",
            "• Nắm vững chủ trương, đường lối chính sách dân tộc của Đảng và pháp luật của Nhà nước; thấu hiểu tầm quan trọng của việc giữ gìn ổn định chính trị vùng đồng bào dân tộc thiểu số.",
            "<strong>2. Về thái độ ứng xử và tinh thần tôn trọng văn hóa:</strong>",
            "• Luôn có thái độ tôn trọng, bình đẳng, hòa đồng, thân thiện với bạn bè và đồng bào các dân tộc thiểu số trong học tập, sinh hoạt tại trường lớp và ký túc xá.",
            "• Tuyệt đối không có hành vi, thái độ định kiến, miệt thị vùng miền, kỳ thị sắc tộc hay tự cao tự đại; chủ động tìm hiểu, tôn trọng phong tục, tập quán, tín ngưỡng lành mạnh của các dân tộc anh em.",
            "• Tích cực chia sẻ, giúp đỡ chân thành các bạn sinh viên người dân tộc thiểu số vượt qua khó khăn về học tập, kinh tế để cùng tiến bộ.",
            "<strong>3. Về hành động thực tiễn xung kích:</strong>",
            "• Tích cực hưởng ứng và tham gia các chiến dịch tình nguyện hướng về vùng cao, vùng biên giới: 'Mùa hè xanh', 'Xuân tình nguyện', 'Áo ấm mùa đông'.",
            "• Vận dụng kiến thức đã học để hỗ trợ đồng bào: tổ chức dạy học cho trẻ em nghèo, phổ cập kỹ năng số, hướng dẫn kỹ thuật canh tác mới, khám chữa bệnh và phát thuốc miễn phí.",
            "• Nâng cao cảnh giác trên không gian mạng: không like, không share các thông tin kích động chia rẽ dân tộc; chủ động lên tiếng vạch trần, đấu tranh phản bác các luận điệu xuyên tạc, thù địch của các tổ chức phản động chống phá khối đại đoàn kết toàn dân tộc."
          ]
        }
      ]
    },
    {
      "id": 5,
      "title": "Gia đình: Khái niệm, Vị trí, Chức năng & Biến đổi Chức năng Tái sản xuất con người",
      "question": "5. Khái niệm, vị trí, chức năng của gia đình? Liên hệ thực tiễn về biến đổi trong chức năng tái sản xuất con người của gia đình Việt Nam hiện nay.",
      "tags": [
        "Gia đình",
        "Chức năng gia đình",
        "Tái sản xuất con người",
        "Biến đổi gia đình Việt Nam"
      ],
      "outline": [
        "1. Khái niệm gia đình và các mối quan hệ nền tảng (Hôn nhân, Huyết thống, Nuôi dưỡng).",
        "2. Vị trí của gia đình trong kết cấu xã hội (Tế bào xã hội, Tổ ấm hạnh phúc, Cầu nối cá nhân - xã hội).",
        "3. Các chức năng cơ bản của gia đình (Tái sản xuất con người, Nuôi dạy, Kinh tế, Thỏa mãn tâm sinh lý, Văn hóa).",
        "4. Phân tích thực tiễn những biến đổi trong chức năng tái sản xuất con người của gia đình Việt Nam hiện nay (Quy mô, Tuổi kết hôn, Mục đích sinh con, Công nghệ hỗ trợ sinh sản).",
        "5. Những tác động tích cực, thách thức (Già hóa dân số, Mất cân bằng giới tính) và giải pháp chính sách."
      ],
      "keyPoints": [
        "Tế bào của xã hội, tổ ấm yêu thương, cầu nối cá nhân - xã hội",
        "Chức năng tái sản xuất ra con người là chức năng đặc thù",
        "Chuyển từ gia đình truyền thống đông con sang gia đình hạt nhân (1-2 con)",
        "Mức sinh giảm sâu ở đô thị (TP.HCM ~1.39 con/phụ nữ)",
        "Chuyển từ 'trọng nam khinh nữ, cần sức lao động' sang 'chất lượng con cái'",
        "Thách thức: Già hóa dân số nhanh, nguy cơ thiếu hụt lao động",
        "Mất cân bằng giới tính khi sinh (~112 bé trai/100 bé gái)",
        "Chính sách khuyến sinh thay thế, an sinh xã hội"
      ],
      "contentSections": [
        {
          "heading": "I. Khái niệm, Vị trí và Các chức năng cơ bản của gia đình",
          "body": [
            "<strong>1. Khái niệm:</strong> Gia đình là một hình thức cộng đồng xã hội đặc biệt, được hình thành, duy trì và củng cố chủ yếu dựa trên cơ sở quan hệ hôn nhân, quan hệ huyết thống và quan hệ nuôi dưỡng; cùng với những quy định về quyền, nghĩa vụ pháp lý và trách nhiệm đạo đức, tình cảm thiêng liêng giữa các thành viên.",
            "<strong>2. Vị trí của gia đình trong xã hội:</strong>",
            "• <em>Gia đình là tế bào của xã hội:</em> Chủ tịch Hồ Chí Minh khẳng định: <em>'Hạt nhân của xã hội là gia đình... Nhiều gia đình cộng lại mới thành xã hội, xã hội tốt thì gia đình càng tốt, gia đình tốt thì xã hội mới tốt'</em>. Xã hội chỉ có thể tồn tại và phát triển lành mạnh khi các tế bào gia đình ổn định, vững chắc.",
            "• <em>Gia đình là tổ ấm thiêng liêng mang lại hạnh phúc cho mỗi cá nhân:</em> Là nơi mỗi con người sinh ra, lớn lên, được chở che, yêu thương vô điều kiện; là chỗ dựa tinh thần và vật chất vững chắc nhất giúp con người phục hồi thể lực và trí lực sau những áp lực của cuộc sống.",
            "• <em>Gia đình là cầu nối giữa cá nhân và xã hội:</em> Mọi quy chuẩn, đạo đức, pháp luật của xã hội phần lớn được truyền tải tới cá nhân thông qua sự uốn nắn của gia đình; ngược lại, mỗi đóng góp của cá nhân cho xã hội đều bắt nguồn từ nền tảng giáo dục gia đình.",
            "<strong>3. Các chức năng cơ bản của gia đình:</strong>",
            "• <strong>Chức năng tái sản xuất ra con người:</strong> Chức năng đặc thù chỉ riêng gia đình có nhằm duy trì nòi giống, tái tạo sức lao động cho xã hội.",
            "• <strong>Chức năng nuôi dưỡng, giáo dục con cái:</strong> Hình thành nhân cách ban đầu, truyền thụ các giá trị đạo đức, lối sống văn hóa tốt đẹp.",
            "• <strong>Chức năng kinh tế và tổ chức tiêu dùng:</strong> Tạo lập thu nhập, quản lý chi tiêu, duy trì sự ổn định vật chất cho các thành viên.",
            "• <strong>Chức năng thỏa mãn nhu cầu tâm sinh lý, duy trì tình cảm:</strong> Đảm bảo sự cân bằng tâm lý, hòa hợp tình cảm giữa vợ chồng, cha mẹ và con cái.",
            "• <strong>Chức năng lưu giữ và trao truyền các giá trị văn hóa truyền thống:</strong> Gìn giữ gia phong, gia đạo, truyền thống hiếu học, kính trên nhường dưới."
          ]
        },
        {
          "heading": "II. Liên hệ thực tiễn về biến đổi trong chức năng tái sản xuất con người của gia đình Việt Nam hiện nay",
          "body": [
            "Dưới tác động của công nghiệp hóa, hiện đại hóa, đô thị hóa, kinh tế thị trường và hội nhập quốc tế, chức năng tái sản xuất con người của gia đình Việt Nam đang diễn ra những biến đổi sâu sắc:",
            "<strong>1. Quy mô gia đình thu nhỏ, mức sinh giảm rõ rệt:</strong>",
            "• Gia đình Việt Nam chuyển đổi mạnh mẽ từ mô hình truyền thống <em>'tam đại, tứ đại đồng đường'</em> đông con sang mô hình <strong>gia đình hạt nhân</strong> (chỉ gồm cha mẹ và con cái).",
            "• Nếu như trước đây các gia đình sinh nhiều con (bình quân 4-6 con, quan niệm 'đông con nhiều của', 'trời sinh voi trời sinh cỏ'), thì hiện nay mô hình chuẩn phổ biến chỉ từ <strong>1 đến 2 con</strong>.",
            "• Đáng chú ý, tại các đô thị phát triển như TP. Hồ Chí Minh, Hà Nội, vùng Đông Nam Bộ và Đồng bằng sông Cửu Long, tỷ suất sinh đang giảm rất sâu xuống dưới mức sinh thay thế (TP.HCM chỉ đạt khoảng <strong>1,39 con/phụ nữ</strong>).",
            "<strong>2. Độ tuổi kết hôn và sinh con ngày càng muộn; xuất hiện các xu hướng sống mới:</strong>",
            "• Do áp lực công việc, học tập nâng cao, chi phí nhà ở và sinh hoạt đắt đỏ, giới trẻ có xu hướng kết hôn muộn hơn và trì hoãn thời điểm sinh con đầu lòng.",
            "• Xuất hiện ngày càng nhiều xu hướng sống hiện đại như: người độc thân tự nguyện, mẹ đơn thân (single mom), hoặc các cặp vợ chồng kết hôn nhưng không muốn sinh con (mô hình DINK - Double Income, No Kids) để tập trung phát triển sự nghiệp cá nhân và tận hưởng cuộc sống.",
            "<strong>3. Mục đích sinh con và quan niệm về con cái thay đổi căn bản:</strong>",
            "• <em>Trước kia:</em> Việc sinh con mang nặng mục đích kinh tế (cần thêm sức lao động làm nông nghiệp), nối dõi tông đường, sinh con trai để 'chống gậy' phụng dưỡng cha mẹ lúc tuổi già (chịu ảnh hưởng nặng nề của tư tưởng phong kiến trọng nam khinh nữ).",
            "• <em>Hiện nay:</em> Sinh con xuất phát từ tình yêu thương, sự gắn kết và mong muốn mang lại hạnh phúc cho con. Quan niệm 'con nào cũng là con, miễn là hiếu thảo, giỏi giang' ngày càng phổ cập.",
            "• Sự chuyển dịch dứt khoát từ coi trọng <strong>số lượng</strong> sang coi trọng <strong>chất lượng con cái</strong>: Cha mẹ hiện đại đầu tư toàn diện cho con về dinh dưỡng, y tế, giáo dục chất lượng cao, phát triển năng khiếu, ngoại ngữ và kỹ năng mềm.",
            "<strong>4. Sự can thiệp mạnh mẽ của tiến bộ khoa học kỹ thuật y tế:</strong>",
            "• Các kỹ thuật y học hỗ trợ sinh sản hiện đại (như thụ tinh trong ống nghiệm IVF, bơm tinh trùng IUI, lưu trữ trứng/tinh trùng) đã giúp hàng vạn cặp vợ chồng vô sinh, hiếm muộn thực hiện được thiên chức làm cha mẹ.",
            "• Các công nghệ sàng lọc trước sinh, sàng lọc sơ sinh, xét nghiệm di truyền giúp phát hiện sớm các dị tật bẩm sinh, góp phần nâng cao thể chất và chất lượng giống nòi."
          ]
        },
        {
          "heading": "III. Những thách thức đặt ra và giải pháp chính sách của Việt Nam",
          "body": [
            "Bên cạnh những mặt tích cực, sự biến đổi trong chức năng này đang đặt ra những thách thức rất lớn đối với sự phát triển bền vững của đất nước:",
            "<strong>1. Nguy cơ già hóa dân số nhanh chóng:</strong>",
            "• Tỷ lệ sinh giảm sâu dẫn đến tốc độ già hóa dân số của Việt Nam thuộc hàng nhanh nhất thế giới. Việt Nam có nguy cơ 'chưa giàu đã già', đối mặt với tình trạng thiếu hụt lực lượng lao động trong 10-15 năm tới, gia tăng gánh nặng lên quỹ bảo hiểm xã hội, hệ thống y tế và dịch vụ chăm sóc người cao tuổi.",
            "<strong>2. Tình trạng mất cân bằng giới tính khi sinh còn cao:</strong>",
            "• Mặc dù nhận thức đã tiến bộ, song việc lạm dụng công nghệ siêu âm chẩn đoán giới tính thai nhi khiến tỷ số giới tính khi sinh ở một số địa phương vẫn ở mức cao (khoảng <strong>112 bé trai / 100 bé gái</strong>), tiềm ẩn nguy cơ bất ổn xã hội và dư thừa nam giới trong độ tuổi kết hôn trong tương lai gần.",
            "<strong>3. Định hướng chính sách và giải pháp của Đảng, Nhà nước:</strong>",
            "• Chuyển trọng tâm chính sách dân số từ 'kế hoạch hóa gia đình' sang <strong>'Dân số và Phát triển'</strong> theo tinh thần Nghị quyết số 21-NQ/TW của Ban Chấp hành Trung ương Đảng.",
            "• Ban hành các chính sách khuyến sinh ở các vùng có mức sinh thấp: khuyến khích phụ nữ kết hôn trước 30 tuổi và sinh đủ 2 con trước 35 tuổi; hỗ trợ tài chính, giảm thuế, cải thiện chế độ thai sản cho cả cha và mẹ.",
            "• Phát triển hệ thống trường mầm non công lập, mở rộng dịch vụ chăm sóc trẻ em giá rẻ; kiểm soát chặt chẽ việc lựa chọn giới tính thai nhi, kiên quyết xử lý nghiêm các cơ sở y tế vi phạm.",
            "• Đẩy mạnh tuyên truyền bình đẳng giới, nâng cao vị thế của phụ nữ và trẻ em gái trong gia đình và xã hội."
          ]
        }
      ]
    }
  ]
};
