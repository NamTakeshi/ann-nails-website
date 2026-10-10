const TRANSLATIONS = {
  en: {
    /* ── Navigation ── */
    'nav.services':    'Services',
    'nav.gallery':     'Gallery',
    'nav.about':       'About',
    'nav.contact':     'Contact',
    'nav.cta':         'Call to Book',

    /* ── Homepage – Hero ── */
    'hero.eyebrow':    'Upper Marlboro, Maryland',
    'hero.title':      'Beautiful Nails,<br><em>Flawless Results.</em>',
    'hero.sub':        "Ann's Nails Salon has been the go-to nail destination in Upper Marlboro for years. Expert care, stunning designs, and a relaxing experience — every visit.",
    'hero.gallery':    'View Our Work',
    'hero.hours':      'Mon–Fri 10–7 · Sat 9–7 · Sun 10–5 · Walk-ins welcome',

    /* ── Homepage – Services Preview ── */
    'idx.svc.label':      'What We Offer',
    'idx.svc.h2':         'Services for Every Style',
    'idx.svc.link':       'All Services & Prices →',
    'idx.svc.all':        'See All Services & Prices',
    'svc.mani.name':      'Manicure',
    'svc.mani.desc':      'Classic, gel, French, and specialty manicures tailored to your taste.',
    'svc.pedi.name':      'Pedicure',
    'svc.pedi.desc':      'Relaxing pedicures with exfoliation, massage, and flawless polish.',
    'svc.acrylic.name':   'Acrylic & Gel Nails',
    'svc.acrylic.desc':   'Long-lasting acrylic extensions and gel overlays for any length.',
    'svc.art.name':       'Nail Art',
    'svc.art.desc':       'From minimalist designs to intricate nail art — we bring your ideas to life.',
    'svc.wax.name':       'Waxing',
    'svc.wax.desc':       'Brazilian waxing and full-body hair removal by experienced technicians.',
    'svc.lash.name':      'Lash Extensions',
    'svc.lash.desc':      'Natural to dramatic lash extensions for every occasion.',

    /* ── Homepage – Gallery Preview ── */
    'idx.gal.label':  'Our Work',
    'idx.gal.h2':     'Crafted with Precision',
    'idx.gal.link':   'Full Gallery →',
    'idx.gal.all':    'View All Photos',

    /* ── Homepage – About Teaser ── */
    'idx.about.label':  'About Us',
    'idx.about.h2':     'Years of Passion, <br>One Perfect Nail at a Time',
    'idx.about.p1':     "Ann's Nails Salon has been a trusted name in Upper Marlboro for years. We combine skilled craftsmanship with a warm, welcoming atmosphere — so every visit feels like a treat.",
    'idx.about.p2':     'From classic manicures to intricate nail art, our experienced team is dedicated to making you look and feel your best.',
    'idx.about.s1l':    'Years Experience',
    'idx.about.s2l':    'Happy Clients',
    'idx.about.s3l':    'Services Offered',
    'idx.about.link':   'Our Story →',

    /* ── Homepage – Reviews ── */
    'idx.rev.label':  'What Clients Say',
    'idx.rev.h2':     'Loved by the Community',

    /* ── Homepage – FAQ ── */
    'idx.faq.label':  'FAQ',
    'idx.faq.h2':     'Frequently Asked Questions',
    'idx.faq.q1':     'Do I need an appointment?',
    'idx.faq.a1':     'Walk-ins are always welcome! For busy times like weekends, we recommend calling ahead to check wait times: <a href="tel:+13014990940" style="color:var(--gold);">(301) 499-0940</a>.',
    'idx.faq.q2':     'How do I book?',
    'idx.faq.a2':     'Simply give us a call at <a href="tel:+13014990940" style="color:var(--gold);">(301) 499-0940</a> to book or check wait times. We\'re happy to answer any questions.',
    'idx.faq.q3':     'Where are you located?',
    'idx.faq.a3':     'We\'re at 10676 Campus Way S, Upper Marlboro, MD 20774. Convenient parking is available on-site.',
    'idx.faq.q4':     'What are your hours?',
    'idx.faq.a4':     'Monday–Friday: 10:00 AM – 7:00 PM · Saturday: 9:00 AM – 7:00 PM · Sunday: 10:00 AM – 5:00 PM',
    'idx.faq.q5':     'Do you offer services for men?',
    'idx.faq.a5':     'Absolutely! We offer manicures for men and all other services are open to everyone. We want everyone to feel welcome.',

    /* ── Homepage – CTA Banner ── */
    'idx.cta.label':  'Ready for Beautiful Nails?',
    'idx.cta.h2':     'Book Your Appointment Today',
    'idx.cta.p':      'Call us or just walk in — we\'d love to see you.',

    /* ── Footer ── */
    'footer.desc':        'Your trusted nail salon in Upper Marlboro, MD.<br>Professional care, beautiful results.',
    'footer.nav.h4':      'Navigate',
    'footer.hours.h4':    'Hours',
    'footer.mon-fri':     'Mon–Fri: 10:00 AM – 7:00 PM',
    'footer.sat':         'Saturday: 9:00 AM – 7:00 PM',
    'footer.sun':         'Sunday: 10:00 AM – 5:00 PM',
    'footer.copy':        '© 2025 Ann\'s Nails Salon · All rights reserved.',

    /* ── Services Page ── */
    'sp.label':       'Transparent Pricing',
    'sp.h1':          'Services & Prices',
    'sp.sub':         'Everything you need for beautiful nails and more — all in one place.',
    'sp.cat.nails':   'Nails',
    'sp.cat.pedi':    'Pedicure',
    'sp.cat.beauty':  'Beauty & Waxing',
    'sp.cat.well':    'Wellness',
    'sp.cta.h3':      'Ready to Book?',
    'sp.cta.p':       "Questions about a service? Just give us a call — we're happy to help.",

    /* ── Service Items ── */
    'item.classic-mani':    'Classic Manicure',
    'item.gel-mani':        'Gel Manicure',
    'item.french-mani':     'French Manicure',
    'item.mens-mani':       "Men's Manicure",
    'item.acrylic-full':    'Acrylic Full Set',
    'item.acrylic-fill':    'Acrylic Fill',
    'item.gel-ext':         'Gel Extensions',
    'item.dip':             'Nail Powder (Dip)',
    'item.nail-art':        'Nail Art (per nail)',
    'item.decals':          'Nail Decals / Stickers',
    'item.design':          'Nail Design',
    'item.repair':          'Nail Repair (per nail)',
    'item.trim':            'Trim & File',
    'item.polish-change':   'Polish Change',
    'item.polish-remove':   'Polish Removal',
    'item.sculptured':      'Sculptured Nails',
    'item.classic-pedi':    'Classic Pedicure',
    'item.gel-pedi':        'Gel Pedicure',
    'item.callus':          'Callus Removal',
    'item.deluxe-pedi':     'Deluxe Pedicure',
    'item.brazilian':       'Brazilian Waxing',
    'item.full-leg':        'Full Leg Waxing',
    'item.half-leg':        'Half Leg Waxing',
    'item.eyebrow':         'Eyebrow Waxing',
    'item.lash-classic':    'Lash Extensions — Classic',
    'item.lash-volume':     'Lash Extensions — Volume',
    'item.relax-pkg':       'Relaxation Package (Mani + Pedi)',
    'item.spa-pkg':         'Spa Package (Gel Mani + Deluxe Pedi)',

    /* ── Gallery Page ── */
    'gp.label':         'Our Portfolio',
    'gp.h1':            'Our Work',
    'gp.sub':           'Every set is crafted with precision and care. Browse our latest designs below.',
    'gp.filter.all':    'All',
    'gp.filter.art':    'Nail Art',
    'gp.filter.gel':    'Gel Nails',
    'gp.filter.acrylic':'Acrylic',
    'gp.filter.french': 'French',
    'gp.cta.h2':        'Like What You See?',
    'gp.cta.p':         "Call us to book your appointment and tell us what style you'd love.",

    /* ── About Page ── */
    'ap.label':         'Our Story',
    'ap.h1':            "About Ann's Nails",
    'ap.sub':           "A passion for beauty, a commitment to quality, and a community we're proud to serve.",
    'ap.story.label':   'Where It All Began',
    'ap.story.h2':      'Built on Skill, <br>Driven by Passion',
    'ap.story.p1':      "Ann's Nails Salon was born out of a simple belief: everyone deserves to feel confident and beautiful. What started as a small studio in Upper Marlboro has grown into a trusted destination for clients across Maryland.",
    'ap.story.quote':   '"We don\'t just do nails — we create experiences that make our clients feel their absolute best."',
    'ap.story.p2':      'Over the years, our team has honed their craft through continuous training and a genuine love for nail artistry. From classic manicures to intricate nail art, every service is delivered with attention to detail and care for our clients.',
    'ap.story.cta':     'Visit Us Today →',
    'ap.s1l':           'Years in Business',
    'ap.s2l':           'Happy Clients',
    'ap.s3l':           'Services Offered',
    'ap.s4l':           'Passion for the Craft',
    'ap.val.label':     'What We Stand For',
    'ap.val.h2':        'Our Values',
    'ap.v1.h3':         'Quality First',
    'ap.v1.p':          'We use only premium products and take the time needed to get every detail right — no rushing, no shortcuts.',
    'ap.v2.h3':         'Personal Service',
    'ap.v2.p':          "You're not a number here. We listen to what you want and make sure you leave exactly as you imagined.",
    'ap.v3.h3':         'Clean & Safe',
    'ap.v3.p':          'We maintain strict hygiene standards. All tools are sterilized for every client — your safety is our priority.',
    'ap.v4.h3':         'Community Rooted',
    'ap.v4.p':          "Upper Marlboro is our home. We're proud to serve our community and grateful for every client who walks through our door.",
    'ap.v5.h3':         'Creative Excellence',
    'ap.v5.p':          'Our nail artists stay up-to-date with the latest trends so we can bring your Pinterest board to life.',
    'ap.v6.h3':         'Your Time Matters',
    'ap.v6.p':          'We respect your schedule. Walk-ins are welcome, and we do our best to keep wait times reasonable.',
    'ap.cta.label':     'Come Say Hello',
    'ap.cta.h2':        "We'd Love to Meet You",
    'ap.cta.p':         'Walk in anytime or give us a call to plan your visit.',

    /* ── Contact Page ── */
    'cp.label':         'Get In Touch',
    'cp.h1':            'Find Us',
    'cp.sub':           "We're conveniently located in Upper Marlboro. Walk-ins always welcome.",
    'cp.phone.label':   'Call to Book or Ask a Question',
    'cp.loc.h3':        'Location',
    'cp.hours.h3':      'Opening Hours',
    'cp.info.h3':       'Good to Know',
    'cp.info.p':        'Walk-ins are welcome anytime. For weekend visits we recommend calling ahead to check wait times. On-site parking available.',
    'cp.faq.h3':        'Quick Answers',
    'cp.faq.q1':        'Do I need an appointment?',
    'cp.faq.a1':        'No appointment needed — walk right in! For weekends, calling ahead helps us prepare for you.',
    'cp.faq.q2':        'How do I know wait times?',
    'cp.faq.a2':        'Give us a quick call at <a href="tel:+13014990940" style="color:var(--gold)">(301) 499-0940</a> and we\'ll let you know the current wait.',
    'cp.faq.q3':        'Is parking available?',
    'cp.faq.a3':        'Yes, free on-site parking is available right in front of the salon.',
    'cp.faq.q4':        'What payment methods do you accept?',
    'cp.faq.a4':        'We accept cash, all major credit/debit cards, and Zelle.',
  },

  vi: {
    /* ── Navigation ── */
    'nav.services':    'Dịch Vụ',
    'nav.gallery':     'Thư Viện',
    'nav.about':       'Giới Thiệu',
    'nav.contact':     'Liên Hệ',
    'nav.cta':         'Gọi Đặt Lịch',

    /* ── Homepage – Hero ── */
    'hero.eyebrow':    'Upper Marlboro, Maryland',
    'hero.title':      'Móng Đẹp,<br><em>Kết Quả Hoàn Hảo.</em>',
    'hero.sub':        "Ann's Nails Salon là địa chỉ làm móng được tin yêu tại Upper Marlboro. Tay nghề chuyên nghiệp, mẫu đẹp ấn tượng, trải nghiệm thư giãn — mỗi lần ghé thăm.",
    'hero.gallery':    'Xem Tác Phẩm',
    'hero.hours':      'T2–T6: 10–7 · Thứ 7: 9–7 · CN: 10–5 · Luôn chào đón khách vãng lai',

    /* ── Homepage – Services Preview ── */
    'idx.svc.label':      'Dịch Vụ Của Chúng Tôi',
    'idx.svc.h2':         'Dịch Vụ Cho Mọi Phong Cách',
    'idx.svc.link':       'Tất Cả Dịch Vụ & Giá →',
    'idx.svc.all':        'Xem Tất Cả Dịch Vụ & Giá',
    'svc.mani.name':      'Làm Móng Tay',
    'svc.mani.desc':      'Sơn móng cơ bản, gel, kiểu Pháp và các mẫu đặc biệt theo sở thích của bạn.',
    'svc.pedi.name':      'Làm Móng Chân',
    'svc.pedi.desc':      'Pedicure thư giãn với tẩy tế bào chết, massage và sơn hoàn hảo.',
    'svc.acrylic.name':   'Móng Acrylic & Gel',
    'svc.acrylic.desc':   'Nối móng acrylic và gel bền đẹp theo mọi độ dài.',
    'svc.art.name':       'Vẽ Móng Nghệ Thuật',
    'svc.art.desc':       'Từ họa tiết tối giản đến vẽ móng phức tạp — chúng tôi biến ý tưởng của bạn thành hiện thực.',
    'svc.wax.name':       'Tẩy Lông',
    'svc.wax.desc':       'Tẩy lông bikini và toàn thân bởi kỹ thuật viên giàu kinh nghiệm.',
    'svc.lash.name':      'Nối Mi',
    'svc.lash.desc':      'Nối mi tự nhiên đến ấn tượng cho mọi dịp.',

    /* ── Homepage – Gallery Preview ── */
    'idx.gal.label':  'Tác Phẩm Của Chúng Tôi',
    'idx.gal.h2':     'Chế Tác Tỉ Mỉ',
    'idx.gal.link':   'Thư Viện Đầy Đủ →',
    'idx.gal.all':    'Xem Tất Cả Ảnh',

    /* ── Homepage – About Teaser ── */
    'idx.about.label':  'Về Chúng Tôi',
    'idx.about.h2':     'Nhiều Năm Đam Mê, <br>Từng Chiếc Móng Hoàn Hảo',
    'idx.about.p1':     "Ann's Nails Salon là cái tên đáng tin cậy tại Upper Marlboro nhiều năm qua. Chúng tôi kết hợp tay nghề điêu luyện với không gian ấm áp, thân thiện — mỗi lần đến là một trải nghiệm đáng nhớ.",
    'idx.about.p2':     'Từ sơn móng cơ bản đến vẽ móng nghệ thuật phức tạp, đội ngũ giàu kinh nghiệm của chúng tôi tận tâm giúp bạn tỏa sáng.',
    'idx.about.s1l':    'Năm Kinh Nghiệm',
    'idx.about.s2l':    'Khách Hài Lòng',
    'idx.about.s3l':    'Dịch Vụ Cung Cấp',
    'idx.about.link':   'Câu Chuyện Của Chúng Tôi →',

    /* ── Homepage – Reviews ── */
    'idx.rev.label':  'Khách Hàng Nói Gì',
    'idx.rev.h2':     'Được Yêu Mến Bởi Cộng Đồng',

    /* ── Homepage – FAQ ── */
    'idx.faq.label':  'Câu Hỏi Thường Gặp',
    'idx.faq.h2':     'Những Thắc Mắc Phổ Biến',
    'idx.faq.q1':     'Tôi có cần đặt lịch trước không?',
    'idx.faq.a1':     'Luôn chào đón khách vãng lai! Vào cuối tuần, bạn nên gọi trước để kiểm tra thời gian chờ: <a href="tel:+13014990940" style="color:var(--gold);">(301) 499-0940</a>.',
    'idx.faq.q2':     'Làm thế nào để đặt lịch?',
    'idx.faq.a2':     'Chỉ cần gọi cho chúng tôi tại <a href="tel:+13014990940" style="color:var(--gold);">(301) 499-0940</a> để đặt lịch hoặc kiểm tra thời gian chờ. Chúng tôi luôn sẵn sàng giải đáp.',
    'idx.faq.q3':     'Salon ở đâu?',
    'idx.faq.a3':     'Chúng tôi tại 10676 Campus Way S, Upper Marlboro, MD 20774. Có bãi đỗ xe miễn phí ngay tại chỗ.',
    'idx.faq.q4':     'Giờ làm việc là khi nào?',
    'idx.faq.a4':     'Thứ 2–6: 10:00 SA – 7:00 CH · Thứ 7: 9:00 SA – 7:00 CH · Chủ Nhật: 10:00 SA – 5:00 CH',
    'idx.faq.q5':     'Có dịch vụ cho nam không?',
    'idx.faq.a5':     'Hoàn toàn có! Chúng tôi cung cấp dịch vụ sơn móng tay cho nam và mọi dịch vụ khác đều mở cho tất cả mọi người.',

    /* ── Homepage – CTA Banner ── */
    'idx.cta.label':  'Sẵn Sàng Cho Đôi Móng Đẹp?',
    'idx.cta.h2':     'Đặt Lịch Ngay Hôm Nay',
    'idx.cta.p':      'Gọi cho chúng tôi hoặc ghé thăm trực tiếp — chúng tôi rất vui được đón bạn.',

    /* ── Footer ── */
    'footer.desc':        'Salon làm móng uy tín tại Upper Marlboro, MD.<br>Chuyên nghiệp, tận tâm, kết quả hoàn hảo.',
    'footer.nav.h4':      'Điều Hướng',
    'footer.hours.h4':    'Giờ Mở Cửa',
    'footer.mon-fri':     'T2–T6: 10:00 SA – 7:00 CH',
    'footer.sat':         'Thứ 7: 9:00 SA – 7:00 CH',
    'footer.sun':         'Chủ Nhật: 10:00 SA – 5:00 CH',
    'footer.copy':        '© 2025 Ann\'s Nails Salon · Bảo lưu mọi quyền.',

    /* ── Services Page ── */
    'sp.label':       'Bảng Giá Minh Bạch',
    'sp.h1':          'Dịch Vụ & Giá',
    'sp.sub':         'Tất cả những gì bạn cần cho đôi móng đẹp — tất cả ở một nơi.',
    'sp.cat.nails':   'Móng Tay',
    'sp.cat.pedi':    'Móng Chân',
    'sp.cat.beauty':  'Làm Đẹp & Tẩy Lông',
    'sp.cat.well':    'Gói Chăm Sóc',
    'sp.cta.h3':      'Sẵn Sàng Đặt Lịch?',
    'sp.cta.p':       'Thắc mắc về dịch vụ? Hãy gọi cho chúng tôi — luôn sẵn sàng hỗ trợ.',

    /* ── Service Items ── */
    'item.classic-mani':    'Sơn Móng Tay Cơ Bản',
    'item.gel-mani':        'Sơn Gel Móng Tay',
    'item.french-mani':     'Sơn Kiểu Pháp',
    'item.mens-mani':       'Sơn Móng Nam',
    'item.acrylic-full':    'Đắp Bột Acrylic Nguyên Bộ',
    'item.acrylic-fill':    'Trám Bột Acrylic',
    'item.gel-ext':         'Nối Gel',
    'item.dip':             'Bột Nhúng (Dip)',
    'item.nail-art':        'Vẽ Móng (mỗi móng)',
    'item.decals':          'Dán Sticker Móng',
    'item.design':          'Thiết Kế Mẫu Móng',
    'item.repair':          'Sửa Móng (mỗi móng)',
    'item.trim':            'Cắt & Giũa Móng',
    'item.polish-change':   'Đổi Màu Sơn',
    'item.polish-remove':   'Tẩy Sơn',
    'item.sculptured':      'Móng Điêu Khắc',
    'item.classic-pedi':    'Sơn Móng Chân Cơ Bản',
    'item.gel-pedi':        'Sơn Gel Móng Chân',
    'item.callus':          'Tẩy Chai Chân',
    'item.deluxe-pedi':     'Pedicure Cao Cấp',
    'item.brazilian':       'Tẩy Lông Vùng Bikini',
    'item.full-leg':        'Tẩy Lông Chân Toàn Bộ',
    'item.half-leg':        'Tẩy Lông Chân Nửa Người',
    'item.eyebrow':         'Tẩy Lông Mày',
    'item.lash-classic':    'Nối Mi Cơ Bản',
    'item.lash-volume':     'Nối Mi Volume',
    'item.relax-pkg':       'Gói Thư Giãn (Móng Tay + Chân)',
    'item.spa-pkg':         'Gói Spa (Gel Tay + Pedi Cao Cấp)',

    /* ── Gallery Page ── */
    'gp.label':         'Bộ Sưu Tập',
    'gp.h1':            'Tác Phẩm Của Chúng Tôi',
    'gp.sub':           'Từng bộ móng được chế tác tỉ mỉ và tận tâm. Xem các mẫu mới nhất bên dưới.',
    'gp.filter.all':    'Tất Cả',
    'gp.filter.art':    'Vẽ Móng',
    'gp.filter.gel':    'Móng Gel',
    'gp.filter.acrylic':'Móng Acrylic',
    'gp.filter.french': 'Kiểu Pháp',
    'gp.cta.h2':        'Thích Những Gì Bạn Thấy?',
    'gp.cta.p':         'Gọi cho chúng tôi để đặt lịch và cho biết phong cách bạn muốn.',

    /* ── About Page ── */
    'ap.label':         'Câu Chuyện Của Chúng Tôi',
    'ap.h1':            "Về Ann's Nails",
    'ap.sub':           'Đam mê làm đẹp, cam kết chất lượng, và cộng đồng chúng tôi tự hào phục vụ.',
    'ap.story.label':   'Khởi Đầu Của Chúng Tôi',
    'ap.story.h2':      'Xây Dựng Từ Tay Nghề, <br>Nuôi Dưỡng Bởi Đam Mê',
    'ap.story.p1':      "Ann's Nails Salon ra đời từ một niềm tin đơn giản: mọi người đều xứng đáng cảm thấy tự tin và xinh đẹp. Từ một studio nhỏ tại Upper Marlboro, chúng tôi đã trở thành điểm đến tin cậy cho khách hàng khắp Maryland.",
    'ap.story.quote':   '"Chúng tôi không chỉ làm móng — chúng tôi tạo ra những trải nghiệm giúp khách hàng cảm thấy tuyệt vời nhất."',
    'ap.story.p2':      'Qua nhiều năm, đội ngũ của chúng tôi không ngừng trau dồi kỹ năng với niềm đam mê nghệ thuật móng tay thực sự. Từ sơn móng cơ bản đến vẽ móng phức tạp, mỗi dịch vụ đều được thực hiện với sự tỉ mỉ và quan tâm đến từng khách hàng.',
    'ap.story.cta':     'Ghé Thăm Chúng Tôi →',
    'ap.s1l':           'Năm Kinh Doanh',
    'ap.s2l':           'Khách Hài Lòng',
    'ap.s3l':           'Dịch Vụ Cung Cấp',
    'ap.s4l':           'Đam Mê Nghề Nghiệp',
    'ap.val.label':     'Những Gì Chúng Tôi Cam Kết',
    'ap.val.h2':        'Giá Trị Của Chúng Tôi',
    'ap.v1.h3':         'Chất Lượng Hàng Đầu',
    'ap.v1.p':          'Chúng tôi chỉ dùng sản phẩm cao cấp và dành đủ thời gian để hoàn thiện từng chi tiết — không vội vàng, không cắt giảm.',
    'ap.v2.h3':         'Phục Vụ Tận Tâm',
    'ap.v2.p':          'Bạn không chỉ là một con số ở đây. Chúng tôi lắng nghe và đảm bảo bạn ra về đúng như tưởng tượng.',
    'ap.v3.h3':         'Sạch Sẽ & An Toàn',
    'ap.v3.p':          'Chúng tôi duy trì tiêu chuẩn vệ sinh nghiêm ngặt. Tất cả dụng cụ được khử trùng cho mỗi khách hàng — sự an toàn của bạn là ưu tiên hàng đầu.',
    'ap.v4.h3':         'Gắn Bó Cộng Đồng',
    'ap.v4.p':          'Upper Marlboro là ngôi nhà của chúng tôi. Chúng tôi tự hào phục vụ cộng đồng và trân trọng mỗi khách hàng bước vào cửa.',
    'ap.v5.h3':         'Sáng Tạo Xuất Sắc',
    'ap.v5.p':          'Các nghệ nhân của chúng tôi luôn cập nhật xu hướng mới nhất để biến bảng ý tưởng Pinterest của bạn thành hiện thực.',
    'ap.v6.h3':         'Trân Trọng Thời Gian Của Bạn',
    'ap.v6.p':          'Chúng tôi tôn trọng lịch trình của bạn. Khách vãng lai luôn được chào đón và chúng tôi cố gắng giảm thiểu thời gian chờ.',
    'ap.cta.label':     'Ghé Thăm Chúng Tôi',
    'ap.cta.h2':        'Chúng Tôi Rất Vui Được Gặp Bạn',
    'ap.cta.p':         'Ghé thăm bất cứ lúc nào hoặc gọi trước để lên kế hoạch.',

    /* ── Contact Page ── */
    'cp.label':         'Liên Hệ',
    'cp.h1':            'Tìm Chúng Tôi',
    'cp.sub':           'Chúng tôi tọa lạc thuận tiện tại Upper Marlboro. Luôn chào đón khách vãng lai.',
    'cp.phone.label':   'Gọi Để Đặt Lịch Hoặc Hỏi Thêm',
    'cp.loc.h3':        'Địa Chỉ',
    'cp.hours.h3':      'Giờ Mở Cửa',
    'cp.info.h3':       'Lưu Ý',
    'cp.info.p':        'Luôn chào đón khách vãng lai. Cuối tuần nên gọi trước để kiểm tra thời gian chờ. Có bãi đỗ xe miễn phí tại chỗ.',
    'cp.faq.h3':        'Giải Đáp Nhanh',
    'cp.faq.q1':        'Tôi có cần đặt lịch trước không?',
    'cp.faq.a1':        'Không cần — cứ ghé thăm trực tiếp! Cuối tuần, gọi trước để chúng tôi chuẩn bị tốt hơn cho bạn.',
    'cp.faq.q2':        'Làm sao biết thời gian chờ?',
    'cp.faq.a2':        'Gọi nhanh cho chúng tôi tại <a href="tel:+13014990940" style="color:var(--gold)">(301) 499-0940</a> và chúng tôi sẽ thông báo ngay.',
    'cp.faq.q3':        'Có bãi đỗ xe không?',
    'cp.faq.a3':        'Có, bãi đỗ xe miễn phí ngay trước cửa salon.',
    'cp.faq.q4':        'Chấp nhận những hình thức thanh toán nào?',
    'cp.faq.a4':        'Chúng tôi nhận tiền mặt, tất cả thẻ tín dụng/ghi nợ chính và Zelle.',
  }
};

/* ── Core i18n helpers ── */

function applyLang(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  localStorage.setItem('ann-lang', lang);
  document.documentElement.lang = lang === 'vi' ? 'vi' : 'en';
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function initLang() {
  const saved = localStorage.getItem('ann-lang') || 'en';
  applyLang(saved);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
}

document.addEventListener('DOMContentLoaded', initLang);
