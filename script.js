/* ================================================
   MOHAMED HAGALI – PORTFOLIO
   Theme + Language Enhancements
   ================================================ */

const root = document.documentElement;
const body = document.body;
const nav = document.getElementById('nav');
const metaThemeColor = document.querySelector('meta[name="theme-color"]');
const metaDescription = document.querySelector('meta[name="description"]');

const translations = {
  en: {
    meta: {
      title: 'Mohamed HagAli — Data Analyst Portfolio',
      description: 'Portfolio of Mohamed HagAli — Data Analyst focused on business reporting, performance analysis, and decision-ready dashboards using Power BI, SQL, Python, Excel, and DAX.'
    },
    typedWords: [
      'Data Analyst',
      'BI Specialist',
      'Reporting Analyst',
      'Operations Analyst',
      'Business Analyst'
    ],
    ui: {
      themeLabel: 'Light',
      themeAriaDark: 'Switch to light theme',
      themeAriaLight: 'Switch to dark theme',
      langLabel: 'AR',
      langAriaEn: 'Switch language to Arabic',
      langAriaAr: 'Switch language to English'
    },
    text: {
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.certs': 'Certs',
      'nav.contact': 'Contact',

      'hero.eyebrowText': 'Available for opportunities',
      'hero.prefix': "I'm a ",
      'hero.desc': 'Decision-ready dashboards, clean models, and practical insights for business performance.<br/>Power BI · SQL · Python · DAX · Excel',
      'hero.ctaProjects': 'View Featured Projects',
      'hero.ctaCv': 'Download CV',
      'hero.scroll': 'scroll',

      'badge.powerbi': 'Power BI',
      'badge.sql': 'SQL',
      'badge.python': 'Python',
      'badge.dax': 'DAX',
      'badge.projects': '4 Projects',

      'about.statProjects': 'Projects',
      'about.statCertificates': 'Certificates',
      'about.statCountries': 'Countries Worked In',
      'about.label': 'About Me',
      'about.title': 'Business Context.<br/>Analytics Execution.',
      'about.lead': 'I’m a <strong>Data Analyst and BI-focused professional</strong> with a practical foundation in operations, execution, and cross-functional problem solving.',
      'about.body1': 'My background in Saudi Arabia and Sudan taught me how to work close to the business itself: improve workflows, reduce waste, manage stakeholders, and deliver under pressure. Today, I bring that same mindset into data work — building dashboards, models, and reports that are clear, useful, and tied to real decisions.',
      'about.body2': 'I work with <strong>Power BI, SQL, Python, Excel, DAX, and data modeling</strong> to turn raw business data into structured reporting, KPI tracking, and actionable insights across sales, profitability, customer behavior, and operations.',
      'about.tag1': 'Dashboard Design',
      'about.tag2': 'Business Reporting',
      'about.tag3': 'Data Modeling',
      'about.tag4': 'Operations Analytics',
      'about.linkCv': 'Download CV',
      'about.linkLinkedin': 'LinkedIn',
      'about.linkRepo': 'Power BI Portfolio Repo',

      'skills.label': 'Technical Arsenal',
      'skills.title': 'Skills & Tools',
      'skills.card1': 'Analytics & BI',
      'skills.card2': 'Data & Reporting',
      'skills.card3': 'Business & Reporting Insight',
      'skills.name1': 'Power BI',
      'skills.name2': 'DAX',
      'skills.name3': 'Data Modeling',
      'skills.name4': 'Data Visualization',
      'skills.name5': 'SQL',
      'skills.name6': 'Python',
      'skills.name7': 'Excel Advanced',
      'skills.name8': 'Data Cleaning',
      'skills.name9': 'KPI Reporting',
      'skills.name10': 'Business Analysis',
      'skills.name11': 'Process Optimization',
      'skills.name12': 'Dashboard Storytelling',
      'skills.tag1': 'Power BI',
      'skills.tag2': 'SQL',
      'skills.tag3': 'Python',
      'skills.tag4': 'DAX',
      'skills.tag5': 'Excel',
      'skills.tag6': 'Data Modeling',
      'skills.tag7': 'Star Schema',
      'skills.tag8': 'Data Cleaning',
      'skills.tag9': 'KPI Reporting',
      'skills.tag10': 'Business Analysis',
      'skills.tag11': 'Dashboard Storytelling',
      'skills.tag12': 'Business Intelligence',
      'skills.tag13': 'Process Optimization',
      'skills.tag14': 'Operations Optimization',

      'exp.label': 'Professional Experience',
      'exp.title': 'Experience',
      'exp.period1': 'Jan 2024 — Jun 2025',
      'exp.period2': 'Sep 2021 — Apr 2023',
      'exp.location1': 'Riyadh, Saudi Arabia',
      'exp.location2': 'Khartoum, Sudan',
      'exp.role1': 'Tech Production Lead',
      'exp.role2': 'Creative Ops & Solutions Lead',
      'exp.company1': 'Ansaf Alhulul Advertising',
      'exp.company2': 'Darya Design Advertising',
      'exp.b1': 'Led manufacturing operations and a technical team, improving delivery consistency, execution quality, and production efficiency through standardized workflows.',
      'exp.b2': 'Designed modular execution flows and improved material usage through better planning, layout optimization, and process standardization.',
      'exp.b3': 'Reduced waste and improved workflow efficiency through more structured production planning and nesting optimization in CorelDraw.',
      'exp.b4': 'Oversaw the delivery of more than 200 premium commemorative awards for Dammam Airports Company (DACO) with high accuracy and deadline discipline.',
      'exp.b5': 'Delivered branded production and advertising solutions for clients including Al-Noj, Qimat Ikhtiyar Al Oud, and other companies in the Saudi market.',
      'exp.b6': 'Built a practical, quality-focused mindset around execution, turnaround time, stakeholder expectations, and measurable operational efficiency.',
      'exp.b7': 'Delivered custom production and creative solutions for institutional and corporate clients across signage, awards, gifts, and branded event execution.',
      'exp.b8': 'Executed commemorative awards and event products for TEDxYouth@OamkSt and TEDxSudanUST.',
      'exp.b9': 'Designed and implemented the signage system for Al-Razi Hospital and supported décor execution for DAL Group’s Al-Dawaya Ramadan tent.',
      'exp.b10': 'Managed technical execution for complex project requirements and translated design concepts into high-quality physical products using laser and CNC workflows.',
      'exp.b11': 'Worked on promotional and branded production solutions for corporate clients including Abu Sefein and other business accounts.',
      'exp.b12': 'Strengthened hands-on problem solving, delivery planning, and practical business thinking that now supports my approach to reporting and analytics.',
      'exp.tag1': 'Workflow Optimization',
      'exp.tag2': 'Team Leadership',
      'exp.tag3': 'Client Delivery',
      'exp.tag4': 'Quality Standards',
      'exp.tag5': 'Project Execution',
      'exp.tag6': 'Signage Systems',
      'exp.tag7': 'Client Solutions',
      'exp.tag8': 'Process Coordination',

      'projects.label': 'Portfolio',
      'projects.title': 'Data Projects',
      'projects.date1': 'Power BI Dashboard',
      'projects.date2': 'Power BI Dashboard',
      'projects.date3': 'Supporting Project',
      'projects.date4': 'Supporting Project',
      'projects.badge1': 'Featured',
      'projects.badge2': 'Featured',
      'projects.title1': 'E-Commerce Sales - Advanced Interactive Dashboard',
      'projects.title2': 'Superstore Sales Analytics Dashboard',
      'projects.title3': 'Cafe Sales Dashboard',
      'projects.title4': 'E-Commerce Sales - Data Modeling & Analysis',
      'projects.desc1': 'An advanced multi-page dashboard built on e-commerce transactional data to support performance tracking, time-based comparison, and executive reporting. The report combines KPI monitoring, time-intelligence analysis, customer and segment views, and interactive navigation to help users explore sales patterns and business performance more effectively.',
      'projects.desc2': 'A multi-page sales analytics dashboard designed to evaluate business performance across revenue, profitability, pricing impact, customer behavior, and regional trends. The report helps users monitor KPIs, explore discount effects, compare category performance, and identify insights that support stronger commercial decisions.',
      'projects.desc3': 'A business-focused reporting dashboard built to monitor sales, profit, cost, and quantity performance in a clean management-facing layout. The report supports KPI tracking, branch and category filtering, and quick visibility into monthly trends for day-to-day business review.',
      'projects.desc4': 'A Power BI project focused on data preparation, normalization, star-schema modeling, calendar design, and foundational DAX measures for scalable reporting. It demonstrates the analytical groundwork required to build reliable dashboards and reusable business reporting.',
      'projects.feature1': 'YOY / MOM / QOQ analysis with structured DAX measures',
      'projects.feature2': 'Interactive navigation, bookmarks, and toggle buttons',
      'projects.feature3': 'Customer, segment, and shipping performance views',
      'projects.feature4': 'Executive-ready reporting with decision support focus',
      'projects.feature5': 'Executive KPI view with year-over-year comparison',
      'projects.feature6': 'Pricing and discount impact analysis',
      'projects.feature7': 'Product, customer, and regional performance views',
      'projects.feature8': 'Structured data model with organized DAX folders',
      'projects.feature9': 'Core KPI cards for sales, profit, cost, and quantity',
      'projects.feature10': 'Interactive slicers by branch, category, and payment method',
      'projects.feature11': 'High-level monthly sales reporting',
      'projects.feature12': 'Power Query transformation and structured cleaning',
      'projects.feature13': 'Fact and dimension modeling with calendar table',
      'projects.feature14': 'Foundation for scalable analytical dashboards',
      'projects.stack1': 'Power BI',
      'projects.stack2': 'DAX',
      'projects.stack3': 'Excel',
      'projects.stack4': 'Star Schema',
      'projects.stack5': 'Time Intelligence',
      'projects.stack6': 'Power BI',
      'projects.stack7': 'DAX',
      'projects.stack8': 'Data Modeling',
      'projects.stack9': 'Profitability',
      'projects.stack10': 'Regional Analysis',
      'projects.stack11': 'Power BI',
      'projects.stack12': 'Dashboard Basics',
      'projects.stack13': 'KPIs',
      'projects.stack14': 'Power BI',
      'projects.stack15': 'Power Query',
      'projects.stack16': 'Star Schema',
      'projects.stack17': 'DAX',
      'projects.btn1': 'GitHub Repo',
      'projects.btn2': 'Live Dashboard',
      'projects.btn3': 'GitHub Repo',
      'projects.btn4': 'Live Dashboard',
      'projects.btn5': 'GitHub Repo',
      'projects.btn6': 'GitHub Repo',

      'certs.label': 'Credentials',
      'certs.title': 'Education & Certifications',
      'certs.eduTitle1': 'B.S. in Information Technology and Computing',
      'certs.eduTitle2': 'Diploma in Electrical, Electronic and Communications Engineering',
      'certs.eduInst1': 'Arab Open University',
      'certs.eduInst2': 'Sudan University of Science and Technology',
      'certs.eduDate1': 'Jun 2021 — Present',
      'certs.eduDate2': 'Oct 2014 — Aug 2018',
      'certs.platform1': 'Google',
      'certs.platform2': 'Tharaa Training',
      'certs.platform3': 'Forage Academy',
      'certs.platform4': 'Deloitte Australia / Forage',
      'certs.platform5': 'Harvard University / CS50',
      'certs.cTitle1': 'Google Data Analytics Professional Certificate',
      'certs.cTitle2': 'Data Analysis & BI Training Camp',
      'certs.cTitle3': 'Data Labeling Online Job Simulation',
      'certs.cTitle4': 'Data Analytics Job Simulation',
      'certs.cTitle5': 'CS50x: Introduction to Computer Science',
      'certs.cDate1': 'Jan 2026',
      'certs.cDate2': 'Feb 2026',
      'certs.cDate3': 'Mar 2026',
      'certs.cDate4': 'Mar 2026',
      'certs.cDate5': 'Dec 2020',
      'certs.view1': 'View Certificate',
      'certs.view2': 'View Certificate',
      'certs.view3': 'View Certificate',
      'certs.view4': 'View Certificate',
      'certs.view5': 'View Certificate',
      'certs.badge1': 'Verified',
      'certs.badge2': 'Completed',
      'certs.badge3': 'Completed',
      'certs.badge4': 'Completed',
      'certs.badge5': 'Verified',

      'contact.label': "Let's Connect",
      'contact.title': 'Open to Data and BI Opportunities',
      'contact.desc': 'I’m actively looking for roles as a <strong>Data Analyst</strong>, <strong>BI Analyst</strong>, <strong>reporting-focused analyst</strong>, or <strong>operations-focused analyst</strong>. Let’s connect.',
      'contact.email': 'moeali577@gmail.com',
      'contact.phone': '+966 50 672 8490',
      'contact.linkedin': 'linkedin.com/in/mohamedhajali95',
      'contact.github': 'github.com/MohamedHajali95/powerbi-portfolio',
      'contact.cv': 'Download CV',
      'contact.cardRole': 'Data Analyst · BI Specialist',
      'contact.rolesLabel': 'Open to roles in:',
      'contact.role1': '✅ Data Analyst',
      'contact.role2': '✅ BI Analyst',
      'contact.role3': '✅ Reporting Analyst',
      'contact.role4': '✅ Operations Analyst',
      'contact.role5': '✅ Business Analyst',
      'contact.send': 'Send me a message →',

      'footer.copy': '© 2026 Mohamed HagAli · Data, reporting, and business-focused analytics.',
      'footer.link1': 'Download CV',
      'footer.link2': 'LinkedIn',
      'footer.link3': 'Portfolio Repo',
      'footer.link4': 'Email'
    }
  },
  ar: {
    meta: {
      title: 'محمد حاج علي — ملف أعمال محلل بيانات',
      description: 'ملف أعمال محمد حاج علي — محلل بيانات يركز على تقارير الأعمال وتحليل الأداء ولوحات المعلومات الجاهزة لاتخاذ القرار باستخدام Power BI وSQL وPython وExcel وDAX.'
    },
    typedWords: [
      'محلل بيانات',
      'أخصائي ذكاء أعمال',
      'محلل تقارير',
      'محلل عمليات',
      'محلل أعمال'
    ],
    ui: {
      themeLabel: 'فاتح',
      themeAriaDark: 'التبديل إلى الوضع الفاتح',
      themeAriaLight: 'التبديل إلى الوضع الداكن',
      langLabel: 'EN',
      langAriaEn: 'التبديل إلى اللغة العربية',
      langAriaAr: 'Switch language to English'
    },
    text: {
      'nav.about': 'نبذة',
      'nav.skills': 'المهارات',
      'nav.experience': 'الخبرات',
      'nav.projects': 'المشاريع',
      'nav.certs': 'الشهادات',
      'nav.contact': 'تواصل',

      'hero.eyebrowText': 'متاح للفرص المهنية',
      'hero.prefix': 'أنا ',
      'hero.desc': 'لوحات معلومات جاهزة لاتخاذ القرار، ونماذج نظيفة، ورؤى عملية لتحسين أداء الأعمال.<br/>Power BI · SQL · Python · DAX · Excel',
      'hero.ctaProjects': 'عرض المشاريع المميزة',
      'hero.ctaCv': 'تنزيل السيرة الذاتية',
      'hero.scroll': 'مرّر',

      'badge.powerbi': 'Power BI',
      'badge.sql': 'SQL',
      'badge.python': 'Python',
      'badge.dax': 'DAX',
      'badge.projects': '4 مشاريع',

      'about.statProjects': 'مشاريع',
      'about.statCertificates': 'شهادات',
      'about.statCountries': 'دول عملت بها',
      'about.label': 'نبذة عني',
      'about.title': 'سياق الأعمال.<br/>تنفيذ تحليلي.',
      'about.lead': 'أنا <strong>محلل بيانات ومتخصص في ذكاء الأعمال</strong> أمتلك خلفية عملية في العمليات والتنفيذ وحل المشكلات عبر الفرق.',
      'about.body1': 'علمتني خبرتي في السعودية والسودان كيف أقترب من واقع الأعمال مباشرة: تحسين سير العمل، تقليل الهدر، إدارة أصحاب المصلحة، والإنجاز تحت الضغط. واليوم أطبق العقلية نفسها في العمل على البيانات — من خلال بناء لوحات معلومات ونماذج وتقارير واضحة وعملية ومرتبطة بقرارات حقيقية.',
      'about.body2': 'أعمل باستخدام <strong>Power BI وSQL وPython وExcel وDAX ونمذجة البيانات</strong> لتحويل البيانات الخام إلى تقارير منظمة، وتتبع لمؤشرات الأداء، ورؤى قابلة للتنفيذ عبر المبيعات والربحية وسلوك العملاء والعمليات.',
      'about.tag1': 'تصميم لوحات المعلومات',
      'about.tag2': 'تقارير الأعمال',
      'about.tag3': 'نمذجة البيانات',
      'about.tag4': 'تحليلات العمليات',
      'about.linkCv': 'تنزيل السيرة الذاتية',
      'about.linkLinkedin': 'لينكدإن',
      'about.linkRepo': 'مستودع مشاريع Power BI',

      'skills.label': 'الأدوات التقنية',
      'skills.title': 'المهارات والأدوات',
      'skills.card1': 'التحليلات وذكاء الأعمال',
      'skills.card2': 'البيانات وإعداد التقارير',
      'skills.card3': 'رؤى الأعمال والتقارير',
      'skills.name1': 'Power BI',
      'skills.name2': 'DAX',
      'skills.name3': 'نمذجة البيانات',
      'skills.name4': 'التصور البياني',
      'skills.name5': 'SQL',
      'skills.name6': 'Python',
      'skills.name7': 'Excel المتقدم',
      'skills.name8': 'تنظيف البيانات',
      'skills.name9': 'تقارير مؤشرات الأداء',
      'skills.name10': 'تحليل الأعمال',
      'skills.name11': 'تحسين العمليات',
      'skills.name12': 'سرد لوحات المعلومات',
      'skills.tag1': 'Power BI',
      'skills.tag2': 'SQL',
      'skills.tag3': 'Python',
      'skills.tag4': 'DAX',
      'skills.tag5': 'Excel',
      'skills.tag6': 'نمذجة البيانات',
      'skills.tag7': 'Star Schema',
      'skills.tag8': 'تنظيف البيانات',
      'skills.tag9': 'تقارير مؤشرات الأداء',
      'skills.tag10': 'تحليل الأعمال',
      'skills.tag11': 'سرد لوحات المعلومات',
      'skills.tag12': 'ذكاء الأعمال',
      'skills.tag13': 'تحسين العمليات',
      'skills.tag14': 'تحسين العمليات التشغيلية',

      'exp.label': 'الخبرة المهنية',
      'exp.title': 'الخبرات',
      'exp.period1': 'يناير 2024 — يونيو 2025',
      'exp.period2': 'سبتمبر 2021 — أبريل 2023',
      'exp.location1': 'الرياض، السعودية',
      'exp.location2': 'الخرطوم، السودان',
      'exp.role1': 'قائد إنتاج تقني',
      'exp.role2': 'قائد الحلول والعمليات الإبداعية',
      'exp.company1': 'أنصاف الحلول للدعاية والإعلان',
      'exp.company2': 'داريا ديزاين للدعاية والإعلان',
      'exp.b1': 'قدت عمليات التصنيع وفريقًا تقنيًا مع تحسين الاتساق في التسليم وجودة التنفيذ وكفاءة الإنتاج عبر سير عمل معيارية.',
      'exp.b2': 'صممت تدفقات تنفيذ معيارية وحسّنت استخدام الخامات من خلال التخطيط الأفضل وتحسين التوزيع وتوحيد العمليات.',
      'exp.b3': 'خفضت الهدر وحسّنت كفاءة سير العمل عبر تخطيط إنتاج أكثر تنظيمًا وتقنيات Nesting في CorelDraw.',
      'exp.b4': 'أشرفت على تسليم أكثر من 200 درع تكريمي فاخر لشركة مطارات الدمام (DACO) بدقة عالية والتزام صارم بالمواعيد.',
      'exp.b5': 'قدمت حلول إنتاجية وإعلانية مخصصة لعملاء منهم Al-Noj وQimat Ikhtiyar Al Oud وشركات أخرى في السوق السعودي.',
      'exp.b6': 'بنيت عقلية عملية تركز على الجودة وسرعة الإنجاز وتوقعات أصحاب المصلحة ورفع الكفاءة التشغيلية بشكل قابل للقياس.',
      'exp.b7': 'قدمت حلول إنتاجية وإبداعية مخصصة لجهات مؤسسية وشركات عبر اللوحات الإرشادية والدروع والهدايا وتنفيذ الفعاليات.',
      'exp.b8': 'نفذت دروعًا تكريمية ومنتجات للفعاليات لكل من TEDxYouth@OamkSt وTEDxSudanUST.',
      'exp.b9': 'صممت ونفذت نظام اللوحات الإرشادية لمستشفى الرازي وساهمت في تنفيذ ديكورات خيمة الضواية الرمضانية التابعة لمجموعة دال.',
      'exp.b10': 'أدرت التنفيذ الفني لمتطلبات مشاريع معقدة وحولت المفاهيم التصميمية إلى منتجات عالية الجودة باستخدام الليزر وCNC.',
      'exp.b11': 'عملت على حلول إنتاجية وترويجية مخصصة لعملاء شركات من بينهم أبو سيفين وحسابات أعمال أخرى.',
      'exp.b12': 'عززت مهارات حل المشكلات والتخطيط للتسليم والتفكير العملي في الأعمال، وهي عناصر تدعم اليوم أسلوبي في التقارير والتحليلات.',
      'exp.tag1': 'تحسين سير العمل',
      'exp.tag2': 'قيادة الفريق',
      'exp.tag3': 'تسليم العملاء',
      'exp.tag4': 'معايير الجودة',
      'exp.tag5': 'تنفيذ المشاريع',
      'exp.tag6': 'أنظمة اللوحات الإرشادية',
      'exp.tag7': 'حلول العملاء',
      'exp.tag8': 'تنسيق العمليات',

      'projects.label': 'الأعمال',
      'projects.title': 'مشاريع البيانات',
      'projects.date1': 'لوحة Power BI',
      'projects.date2': 'لوحة Power BI',
      'projects.date3': 'مشروع داعم',
      'projects.date4': 'مشروع داعم',
      'projects.badge1': 'مميز',
      'projects.badge2': 'مميز',
      'projects.title1': 'لوحة مبيعات التجارة الإلكترونية - تفاعلية متقدمة',
      'projects.title2': 'لوحة تحليلات مبيعات Superstore',
      'projects.title3': 'لوحة مبيعات المقهى',
      'projects.title4': 'تحليل ونمذجة بيانات مبيعات التجارة الإلكترونية',
      'projects.desc1': 'لوحة متعددة الصفحات مبنية على بيانات معاملات التجارة الإلكترونية لدعم متابعة الأداء والمقارنات الزمنية والتقارير التنفيذية. تجمع بين متابعة مؤشرات الأداء والتحليل الزمني ووجهات نظر العملاء والشرائح مع تنقل تفاعلي يساعد المستخدمين على استكشاف أنماط المبيعات وأداء الأعمال بفاعلية أكبر.',
      'projects.desc2': 'لوحة تحليلات مبيعات متعددة الصفحات صُممت لتقييم أداء الأعمال عبر الإيرادات والربحية وتأثير التسعير وسلوك العملاء والاتجاهات المناطقية. تساعد المستخدمين على متابعة مؤشرات الأداء واستكشاف أثر الخصومات ومقارنة أداء الفئات واستخراج رؤى تدعم قرارات تجارية أقوى.',
      'projects.desc3': 'لوحة تقارير موجهة للأعمال بُنيت لمتابعة أداء المبيعات والربح والتكلفة والكمية ضمن واجهة نظيفة موجهة للإدارة. تدعم تتبع مؤشرات الأداء والتصفية حسب الفرع والفئة وإعطاء رؤية سريعة للاتجاهات الشهرية في المراجعة اليومية للأعمال.',
      'projects.desc4': 'مشروع Power BI يركز على إعداد البيانات وتطبيعها وبناء نموذج Star Schema وتصميم جدول تقويم وقياسات DAX الأساسية لتقارير قابلة للتوسع. يوضح الأساس التحليلي المطلوب لبناء لوحات موثوقة وتقارير أعمال قابلة لإعادة الاستخدام.',
      'projects.feature1': 'تحليل YOY / MOM / QOQ باستخدام قياسات DAX منظمة',
      'projects.feature2': 'تنقل تفاعلي وBookmarks وأزرار تبديل',
      'projects.feature3': 'رؤى حول العملاء والشرائح وأداء الشحن',
      'projects.feature4': 'تقارير تنفيذية جاهزة لدعم اتخاذ القرار',
      'projects.feature5': 'عرض تنفيذي لمؤشرات الأداء مع مقارنة سنوية',
      'projects.feature6': 'تحليل تأثير التسعير والخصومات',
      'projects.feature7': 'رؤى لأداء المنتجات والعملاء والمناطق',
      'projects.feature8': 'نموذج بيانات منظم مع مجلدات DAX مرتبة',
      'projects.feature9': 'بطاقات مؤشرات أساسية للمبيعات والربح والتكلفة والكمية',
      'projects.feature10': 'Slicers تفاعلية حسب الفرع والفئة وطريقة الدفع',
      'projects.feature11': 'تقارير شهرية عالية المستوى للمبيعات',
      'projects.feature12': 'تحويل البيانات باستخدام Power Query وتنظيف منظم',
      'projects.feature13': 'نمذجة الجداول الواقعية والأبعاد مع جدول تقويم',
      'projects.feature14': 'أساس قابل للتوسع لبناء لوحات تحليلية',
      'projects.stack1': 'Power BI',
      'projects.stack2': 'DAX',
      'projects.stack3': 'Excel',
      'projects.stack4': 'Star Schema',
      'projects.stack5': 'Time Intelligence',
      'projects.stack6': 'Power BI',
      'projects.stack7': 'DAX',
      'projects.stack8': 'نمذجة البيانات',
      'projects.stack9': 'الربحية',
      'projects.stack10': 'التحليل المناطقي',
      'projects.stack11': 'Power BI',
      'projects.stack12': 'أساسيات اللوحات',
      'projects.stack13': 'KPIs',
      'projects.stack14': 'Power BI',
      'projects.stack15': 'Power Query',
      'projects.stack16': 'Star Schema',
      'projects.stack17': 'DAX',
      'projects.btn1': 'مستودع GitHub',
      'projects.btn2': 'العرض التفاعلي',
      'projects.btn3': 'مستودع GitHub',
      'projects.btn4': 'العرض التفاعلي',
      'projects.btn5': 'مستودع GitHub',
      'projects.btn6': 'مستودع GitHub',

      'certs.label': 'الاعتمادات',
      'certs.title': 'التعليم والشهادات',
      'certs.eduTitle1': 'بكالوريوس تقنية المعلومات والحوسبة',
      'certs.eduTitle2': 'دبلوم الهندسة الكهربائية والإلكترونية وهندسة الاتصالات',
      'certs.eduInst1': 'الجامعة العربية المفتوحة',
      'certs.eduInst2': 'جامعة السودان للعلوم والتكنولوجيا',
      'certs.eduDate1': 'يونيو 2021 — حتى الآن',
      'certs.eduDate2': 'أكتوبر 2014 — أغسطس 2018',
      'certs.platform1': 'Google',
      'certs.platform2': 'ثراء للتدريب',
      'certs.platform3': 'أكاديمية Forage',
      'certs.platform4': 'Deloitte Australia / Forage',
      'certs.platform5': 'جامعة هارفارد / CS50',
      'certs.cTitle1': 'الشهادة الاحترافية في تحليل البيانات من Google',
      'certs.cTitle2': 'معسكر تحليل البيانات وذكاء الأعمال',
      'certs.cTitle3': 'محاكاة عمل عبر الإنترنت في تصنيف البيانات',
      'certs.cTitle4': 'محاكاة عمل في تحليلات البيانات',
      'certs.cTitle5': 'CS50x: مقدمة في علوم الحاسوب',
      'certs.cDate1': 'يناير 2026',
      'certs.cDate2': 'فبراير 2026',
      'certs.cDate3': 'مارس 2026',
      'certs.cDate4': 'مارس 2026',
      'certs.cDate5': 'ديسمبر 2020',
      'certs.view1': 'عرض الشهادة',
      'certs.view2': 'عرض الشهادة',
      'certs.view3': 'عرض الشهادة',
      'certs.view4': 'عرض الشهادة',
      'certs.view5': 'عرض الشهادة',
      'certs.badge1': 'موثّق',
      'certs.badge2': 'مكتمل',
      'certs.badge3': 'مكتمل',
      'certs.badge4': 'مكتمل',
      'certs.badge5': 'موثّق',

      'contact.label': 'لنتواصل',
      'contact.title': 'منفتح على فرص البيانات وذكاء الأعمال',
      'contact.desc': 'أبحث حاليًا عن فرص كـ <strong>محلل بيانات</strong> أو <strong>محلل ذكاء أعمال</strong> أو <strong>محلل يركز على التقارير</strong> أو <strong>محلل يركز على العمليات</strong>. يسعدني التواصل.',
      'contact.email': 'moeali577@gmail.com',
      'contact.phone': '+966 50 672 8490',
      'contact.linkedin': 'linkedin.com/in/mohamedhajali95',
      'contact.github': 'github.com/MohamedHajali95/powerbi-portfolio',
      'contact.cv': 'تنزيل السيرة الذاتية',
      'contact.cardRole': 'محلل بيانات · أخصائي ذكاء أعمال',
      'contact.rolesLabel': 'منفتح على أدوار في:',
      'contact.role1': '✅ محلل بيانات',
      'contact.role2': '✅ محلل ذكاء أعمال',
      'contact.role3': '✅ محلل تقارير',
      'contact.role4': '✅ محلل عمليات',
      'contact.role5': '✅ محلل أعمال',
      'contact.send': 'أرسل لي رسالة ←',

      'footer.copy': '© 2026 محمد حاج علي · البيانات والتقارير والتحليلات الموجهة للأعمال.',
      'footer.link1': 'تنزيل السيرة الذاتية',
      'footer.link2': 'لينكدإن',
      'footer.link3': 'مستودع الموقع',
      'footer.link4': 'البريد الإلكتروني'
    }
  }
};

const themeButtons = [document.getElementById('themeToggle'), document.getElementById('themeToggleMobile')].filter(Boolean);
const themeIcons = [document.getElementById('themeToggleIcon'), document.getElementById('themeToggleIconMobile')].filter(Boolean);
const themeTexts = document.querySelectorAll('.nav-toggle--theme .nav-toggle__text');
const langButtons = [document.getElementById('langToggle'), document.getElementById('langToggleMobile')].filter(Boolean);
const langLabels = [document.getElementById('langToggleText'), document.getElementById('langToggleTextMobile')].filter(Boolean);
const typedEl = document.getElementById('typedText');

let currentTheme = localStorage.getItem('mh-theme') || 'dark';
let currentLang = localStorage.getItem('mh-lang') || 'en';
let typedTimeout;
let typedState = { wordIndex: 0, charIndex: 0, deleting: false };
let glowEl = null;

function applyTranslations(lang) {
  const dict = translations[lang];
  document.title = dict.meta.title;
  if (metaDescription) metaDescription.setAttribute('content', dict.meta.description);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict.text[key] !== undefined) {
      el.textContent = dict.text[key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict.text[key] !== undefined) {
      el.innerHTML = dict.text[key];
    }
  });

  root.lang = lang;
  root.dir = lang === 'ar' ? 'rtl' : 'ltr';

  langLabels.forEach(label => {
    label.textContent = lang === 'ar' ? 'EN' : 'AR';
  });

  langButtons.forEach(btn => {
    btn.setAttribute('aria-label', lang === 'ar' ? dict.ui.langAriaAr : dict.ui.langAriaEn);
  });
}

function updateThemeControls() {
  const isLight = currentTheme === 'light';
  const ui = translations[currentLang].ui;
  themeIcons.forEach(icon => {
    icon.textContent = isLight ? '🌙' : '☀';
  });
  themeTexts.forEach(text => {
    text.textContent = isLight
      ? (currentLang === 'ar' ? 'داكن' : 'Dark')
      : (currentLang === 'ar' ? 'فاتح' : 'Light');
  });
  themeButtons.forEach(btn => {
    btn.setAttribute('aria-label', isLight ? ui.themeAriaLight : ui.themeAriaDark);
  });
}

function applyTheme(theme) {
  currentTheme = theme;
  body.setAttribute('data-theme', theme);
  if (metaThemeColor) metaThemeColor.setAttribute('content', theme === 'light' ? '#f4f8fc' : '#060b14');
  localStorage.setItem('mh-theme', theme);
  updateThemeControls();
  if (glowEl) {
    glowEl.style.background = theme === 'light'
      ? 'radial-gradient(circle, rgba(15,159,152,0.08) 0%, transparent 70%)'
      : 'radial-gradient(circle, rgba(0,229,195,0.06) 0%, transparent 70%)';
  }
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('mh-lang', lang);
  applyTranslations(lang);
  updateThemeControls();
  resetTyped();
}

function toggleTheme() {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

function toggleLanguage() {
  applyLanguage(currentLang === 'en' ? 'ar' : 'en');
}

/* -------- NAV SCROLL EFFECT -------- */
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, { passive: true });

/* -------- MOBILE NAV -------- */
const burger = document.getElementById('navBurger');
const mobileNav = document.getElementById('navMobile');

burger.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

mobileNav.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => mobileNav.classList.remove('open'));
});

langButtons.forEach(btn => btn.addEventListener('click', toggleLanguage));
themeButtons.forEach(btn => btn.addEventListener('click', toggleTheme));

/* -------- HERO CANVAS – ANIMATED GRID -------- */
(function initCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, dots = [], animId;

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function createDots(count) {
    dots = [];
    for (let i = 0; i < count; i++) {
      dots.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.6 + 0.2
      });
    }
  }

  function getPalette() {
    return body.getAttribute('data-theme') === 'light'
      ? {
          grid: 'rgba(15, 23, 42, 0.045)',
          lineBase: 'rgba(15, 159, 152, OPACITY)',
          dotBase: 'rgba(15, 159, 152, ALPHA)'
        }
      : {
          grid: 'rgba(0, 229, 195, 0.04)',
          lineBase: 'rgba(0, 229, 195, OPACITY)',
          dotBase: 'rgba(0, 229, 195, ALPHA)'
        };
  }

  function draw() {
    const palette = getPalette();
    ctx.clearRect(0, 0, W, H);

    ctx.strokeStyle = palette.grid;
    ctx.lineWidth = 1;
    const gridSize = 60;
    for (let x = 0; x < W; x += gridSize) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y < H; y += gridSize) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }

    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x;
        const dy = dots[i].y - dots[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          const opacity = (1 - dist / 140) * 0.18;
          ctx.strokeStyle = palette.lineBase.replace('OPACITY', opacity.toFixed(3));
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.stroke();
        }
      }
    }

    dots.forEach(d => {
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = palette.dotBase.replace('ALPHA', d.alpha.toFixed(3));
      ctx.fill();

      d.x += d.vx;
      d.y += d.vy;

      if (d.x < 0 || d.x > W) d.vx *= -1;
      if (d.y < 0 || d.y > H) d.vy *= -1;
    });

    animId = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animId);
    resize();
    createDots(70);
    draw();
  }, { passive: true });

  resize();
  createDots(70);
  draw();
})();

/* -------- TYPED TEXT -------- */
function runTyped() {
  clearTimeout(typedTimeout);
  if (!typedEl) return;
  const words = translations[currentLang].typedWords;
  const current = words[typedState.wordIndex];

  if (!typedState.deleting) {
    typedEl.textContent = current.slice(0, typedState.charIndex + 1);
    typedState.charIndex += 1;
    if (typedState.charIndex === current.length) {
      typedState.deleting = true;
      typedTimeout = setTimeout(runTyped, 1600);
      return;
    }
    typedTimeout = setTimeout(runTyped, currentLang === 'ar' ? 95 : 85);
  } else {
    typedEl.textContent = current.slice(0, typedState.charIndex - 1);
    typedState.charIndex -= 1;
    if (typedState.charIndex === 0) {
      typedState.deleting = false;
      typedState.wordIndex = (typedState.wordIndex + 1) % words.length;
      typedTimeout = setTimeout(runTyped, 260);
      return;
    }
    typedTimeout = setTimeout(runTyped, 40);
  }
}

function resetTyped() {
  typedState = { wordIndex: 0, charIndex: 0, deleting: false };
  if (typedEl) typedEl.textContent = '';
  clearTimeout(typedTimeout);
  typedTimeout = setTimeout(runTyped, 300);
}

/* -------- SCROLL REVEAL -------- */
(function initReveal() {
  const items = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const siblings = entry.target.parentElement.querySelectorAll('.reveal:not(.visible)');
        let delay = 0;
        siblings.forEach((sib, i) => { if (sib === entry.target) delay = i * 80; });
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });
  items.forEach(item => observer.observe(item));
})();

/* -------- SKILL BAR ANIMATION -------- */
(function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar__fill');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const level = entry.target.dataset.level;
        entry.target.style.width = level + '%';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  bars.forEach(bar => observer.observe(bar));
})();

/* -------- SMOOTH SCROLL FOR ANCHOR LINKS -------- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* -------- ACTIVE NAV LINK HIGHLIGHT -------- */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav__links a, .nav__mobile > a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        links.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + id) {
            link.style.color = 'var(--accent)';
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(section => observer.observe(section));
})();

/* -------- CURSOR GLOW EFFECT -------- */
(function initCursorGlow() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  glowEl = document.createElement('div');
  glowEl.style.cssText = `
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.1s ease;
    top: 0;
    left: 0;
    background: radial-gradient(circle, rgba(0,229,195,0.06) 0%, transparent 70%);
  `;
  document.body.appendChild(glowEl);

  document.addEventListener('mousemove', e => {
    glowEl.style.left = e.clientX + 'px';
    glowEl.style.top = e.clientY + 'px';
  }, { passive: true });
})();

/* -------- COUNTER ANIMATION FOR STATS -------- */
(function initCounters() {
  const counters = document.querySelectorAll('.stat-num');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const text = el.textContent;
      const num = parseInt(text, 10);
      if (Number.isNaN(num)) return;
      const suffix = text.replace(String(num), '');
      let start = 0;
      const duration = 1200;
      const step = timestamp => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * num) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      observer.unobserve(el);
    });
  }, { threshold: 0.8 });
  counters.forEach(counter => observer.observe(counter));
})();

/* -------- INITIALIZE -------- */
applyTranslations(currentLang);
applyTheme(currentTheme);
resetTyped();
