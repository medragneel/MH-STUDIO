export const locales = ['ar', 'en', 'fr'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'ar';

export const localeLabels: Record<Locale, string> = {
  ar: 'العربية',
  en: 'English',
  fr: 'Français',
};

export const rtlLocales: Locale[] = ['ar'];
export const isRTL = (locale: Locale) => rtlLocales.includes(locale);

// ─────────────────────────────────────────────
// TRANSLATIONS
// ─────────────────────────────────────────────
export const t: Record<Locale, {
  siteTitle: string;
  siteDesc: string;
  nav: { services: string; work: string; pricing: string; about: string; cta: string; };
  hero: { badge: string; line1: string; line2a: string; line2b: string; sub: string; btnServices: string; btnWork: string; };
  sections: {
    whatWeDo: string; services: string; selectedProjects: string; ourWork: string; seeInstagram: string;
    ourStudio: string; weAre: string; letsBuild: string; haveProject: string; haveProjectEm: string;
    contactSub: string; sendMessage: string; dmInstagram: string;
  };
  services: {
    s01: { num: string; title: string; desc: string; cta: string };
    s02: { num: string; title: string; desc: string; cta: string };
    s03: { num: string; title: string; desc: string; cta: string };
    s04: { num: string; title: string; desc: string; cta: string; tag: string };
  };
  about: { p1: string; p2: string; btnStart: string; };
  stats: { projects: string; clients: string; services: string; };
  footer: { desc: string; colServices: string; colStudio: string; portfolio: string; about: string; contact: string; rights: string; crafted: string; };
  pricing: { backLink: string; mostPopular: string; getStarted: string; commonQuestions: string; faq: string; exploreMore: string; otherServices: string; readyTitle: string; readyTitleEm: string; readySub: string; sendMsg: string; };
}> = {
  // ════════════════════════════════════════
  // ARABIC
  // ════════════════════════════════════════
  ar: {
    siteTitle: '26.MH Studio — استوديو تصميم إبداعي',
    siteDesc: 'هوية بصرية، فيديو ذكاء اصطناعي، تصميم سوشيال ميديا ونمذجة ثلاثية الأبعاد. نصنع مرئيات جريئة تُحرّك الناس.',
    nav: { services: 'خدماتنا', work: 'أعمالنا', pricing: 'الأسعار', about: 'من نحن', cta: 'احصل على عرض' },
    hero: {
      badge: 'استوديو إبداعي — تأسس 2024',
      line1: 'تصميم', line2a: 'يُحرّك', line2b: 'الناس.',
      sub: 'هوية بصرية · فيديو بالذكاء الاصطناعي · تصميم سوشيال · نمذجة 3D (قريباً)\nنبني اللغة البصرية التي تستحقها علامتك التجارية.',
      btnServices: 'اكتشف خدماتنا', btnWork: 'شاهد أعمالنا',
    },
    sections: {
      whatWeDo: 'ماذا نفعل', services: 'خدماتنا', selectedProjects: 'مشاريع مختارة', ourWork: 'أعمالنا',
      seeInstagram: 'شاهد على إنستقرام ↗', ourStudio: 'استوديونا', weAre: 'نحن', letsBuild: 'لنبني معاً',
      haveProject: 'لديك مشروع', haveProjectEm: 'في ذهنك؟',
      contactSub: 'نقبل عدداً محدوداً من العملاء كل شهر لنضمن أن كل مشروع يحظى باهتمام كامل.',
      sendMessage: 'أرسل لنا رسالة', dmInstagram: 'راسلنا على إنستقرام',
    },
    services: {
      s01: { num: '٠١', title: 'الهوية البصرية', desc: 'أنظمة بصرية متكاملة — شعار، ألوان، طباعة، ودليل العلامة التجارية — مصممة لتجعل علامتك التجارية لا تُنسى.', cta: 'عرض الأسعار' },
      s02: { num: '٠٢', title: 'فيديو AI للمنتجات', desc: 'مقاطع فيديو سينمائية للمنتجات بتقنية الذكاء الاصطناعي. اعرض منتجاتك بحركة وأجواء وقصة تُحوّل المتصفحين إلى مشترين.', cta: 'عرض الأسعار' },
      s03: { num: '٠٣', title: 'تصميم سوشيال ميديا', desc: 'منشورات، ملصقات، كتالوجات، وقوالب ستوري — مصممة كنظام متماسك. أوقف التمرير، امتلك الفيد.', cta: 'عرض الأسعار' },
      s04: { num: '٠٤', title: 'النمذجة ثلاثية الأبعاد', desc: 'تصيير ثلاثي الأبعاد فائق الواقعية وتصورات للمنتجات. من المفهوم إلى الإخراج الفوتوغرافي — المستوى التالي من رواية العلامة التجارية.', cta: 'عرض الأسعار', tag: 'قريباً' },
    },
    about: {
      p1: 'استوديو تصميم إبداعي حيث تلتقي الاستراتيجية بالجماليات. نتعاون مع العلامات التجارية والشركات الناشئة لبناء هويات بصرية وأنظمة محتوى تخترق الضوضاء.',
      p2: 'من بناء العلامة التجارية من الصفر إلى إنتاج فيديوهات بالذكاء الاصطناعي وتصميم محتوى يهيمن على كل فيد — نقوم بالعمل الذي يجعل الناس يتوقفون وينظرون ويتذكرون.',
      btnStart: 'ابدأ مشروعك',
    },
    stats: { projects: 'مشروع', clients: 'عميل', services: 'خدمات' },
    footer: {
      desc: 'مرئيات جريئة للعلامات التجارية التي ترفض الاندماج. هوية بصرية · فيديو AI · أنظمة تصميم · 3D (قريباً).',
      colServices: 'الخدمات', colStudio: 'الاستوديو', portfolio: 'أعمالنا', about: 'من نحن', contact: 'تواصل معنا',
      rights: '© 2026 26.MH Studio. جميع الحقوق محفوظة.', crafted: 'صُنع بشغف ✦',
    },
    pricing: {
      backLink: 'كل الخدمات', mostPopular: 'الأكثر طلباً', getStarted: 'ابدأ الآن',
      commonQuestions: 'أسئلة شائعة', faq: 'الأسئلة الشائعة', exploreMore: 'استكشف المزيد', otherServices: 'خدمات أخرى',
      readyTitle: 'هل أنت مستعد', readyTitleEm: 'للبدء؟',
      readySub: 'أخبرنا عن مشروعك وسنرد عليك خلال 24 ساعة.', sendMsg: 'أرسل لنا رسالة →',
    },
  },

  // ════════════════════════════════════════
  // ENGLISH
  // ════════════════════════════════════════
  en: {
    siteTitle: '26.MH Studio — Creative Design Agency',
    siteDesc: 'Brand identity, AI video, social media design & 3D modeling. We craft bold visuals that move people.',
    nav: { services: 'Services', work: 'Work', pricing: 'Pricing', about: 'About', cta: 'Get a Quote' },
    hero: {
      badge: 'Creative Studio — Est. 2024',
      line1: 'Design that', line2a: 'moves', line2b: 'people.',
      sub: 'Brand identity · AI video · Social design · 3D (coming soon)\nWe build the visual language your brand deserves.',
      btnServices: 'Explore Services', btnWork: 'View Work',
    },
    sections: {
      whatWeDo: 'What We Do', services: 'Services', selectedProjects: 'Selected Projects', ourWork: 'Our Work',
      seeInstagram: 'See on Instagram ↗', ourStudio: 'Our Studio', weAre: 'We are', letsBuild: "Let's Build Together",
      haveProject: 'Have a project', haveProjectEm: 'in mind?',
      contactSub: 'We take on a limited number of clients each month to give every project the full focus it deserves.',
      sendMessage: 'Send Us a Message', dmInstagram: 'DM on Instagram',
    },
    services: {
      s01: { num: '01', title: 'Brand Identity', desc: 'Complete visual systems — logo, color, typography, brand guidelines — built to make your brand instantly recognizable and impossible to forget.', cta: 'View Pricing' },
      s02: { num: '02', title: 'AI Video for Products', desc: 'Cinematic product videos powered by AI. Showcase your products with motion, mood, and storytelling that converts browsers into buyers.', cta: 'View Pricing' },
      s03: { num: '03', title: 'Social Media Design', desc: 'Posts, posters, catalogs, reels covers, and story templates designed as a cohesive system. Stop the scroll, own the feed.', cta: 'View Pricing' },
      s04: { num: '04', title: '3D Modeling', desc: 'Hyper-realistic 3D renders and product visualizations. From concept to photorealistic output — the next level of brand storytelling.', cta: 'View Pricing', tag: 'Coming Soon' },
    },
    about: {
      p1: 'A creative design studio where strategy meets aesthetics. We partner with brands, startups, and entrepreneurs to build visual identities and content systems that cut through the noise.',
      p2: 'From crafting a brand from zero to producing AI-powered video and designing content that commands every feed — we do the work that makes people stop, look, and remember.',
      btnStart: 'Start a Project',
    },
    stats: { projects: 'Projects', clients: 'Clients', services: 'Services' },
    footer: {
      desc: 'Bold visuals for brands that refuse to blend in. Brand identity · AI video · Design systems · 3D (coming soon).',
      colServices: 'Services', colStudio: 'Studio', portfolio: 'Portfolio', about: 'About', contact: 'Contact',
      rights: '© 2026 26.MH Studio. All rights reserved.', crafted: 'Crafted with purpose ✦',
    },
    pricing: {
      backLink: 'All Services', mostPopular: 'Most Popular', getStarted: 'Get Started',
      commonQuestions: 'Common Questions', faq: 'FAQ', exploreMore: 'Explore More', otherServices: 'Other Services',
      readyTitle: 'Ready to get', readyTitleEm: 'started?',
      readySub: "Tell us about your project and we'll get back to you within 24 hours.", sendMsg: 'Send a Message →',
    },
  },

  // ════════════════════════════════════════
  // FRENCH
  // ════════════════════════════════════════
  fr: {
    siteTitle: '26.MH Studio — Agence de Design Créatif',
    siteDesc: 'Identité de marque, vidéo IA, design réseaux sociaux & modélisation 3D. Nous créons des visuels audacieux qui touchent les gens.',
    nav: { services: 'Services', work: 'Réalisations', pricing: 'Tarifs', about: 'À propos', cta: 'Devis gratuit' },
    hero: {
      badge: 'Studio Créatif — Fondé en 2024',
      line1: 'Un design qui', line2a: 'touche', line2b: 'les gens.',
      sub: 'Identité de marque · Vidéo IA · Design social · 3D (bientôt)\nNous construisons le langage visuel que votre marque mérite.',
      btnServices: 'Voir les services', btnWork: 'Nos réalisations',
    },
    sections: {
      whatWeDo: 'Ce que nous faisons', services: 'Services', selectedProjects: 'Projets sélectionnés', ourWork: 'Nos Réalisations',
      seeInstagram: 'Voir sur Instagram ↗', ourStudio: 'Notre Studio', weAre: 'Nous sommes', letsBuild: 'Construisons ensemble',
      haveProject: 'Vous avez un projet', haveProjectEm: 'en tête ?',
      contactSub: 'Nous acceptons un nombre limité de clients chaque mois pour garantir une attention totale à chaque projet.',
      sendMessage: 'Envoyez-nous un message', dmInstagram: 'Message sur Instagram',
    },
    services: {
      s01: { num: '01', title: 'Identité de Marque', desc: 'Systèmes visuels complets — logo, couleurs, typographie, charte graphique — conçus pour rendre votre marque inoubliable.', cta: 'Voir les tarifs' },
      s02: { num: '02', title: 'Vidéo IA pour Produits', desc: "Vidéos produits cinématographiques propulsées par l'IA. Présentez vos produits avec mouvement, ambiance et storytelling qui convertit.", cta: 'Voir les tarifs' },
      s03: { num: '03', title: 'Design Réseaux Sociaux', desc: 'Posts, affiches, catalogues et templates stories conçus comme un système cohérent. Arrêtez le scroll, maîtrisez le feed.', cta: 'Voir les tarifs' },
      s04: { num: '04', title: 'Modélisation 3D', desc: "Rendus 3D ultra-réalistes et visualisations de produits. Du concept à l'output photoréaliste — le prochain niveau du storytelling.", cta: 'Voir les tarifs', tag: 'Bientôt' },
    },
    about: {
      p1: 'Un studio de design créatif où stratégie et esthétique se rencontrent. Nous collaborons avec des marques, startups et entrepreneurs pour construire des identités visuelles percutantes.',
      p2: "De la création d'une marque de zéro à la production de vidéos IA et la conception de contenus qui dominent chaque feed — nous faisons le travail qui fait s'arrêter, regarder et se souvenir.",
      btnStart: 'Démarrer un projet',
    },
    stats: { projects: 'Projets', clients: 'Clients', services: 'Services' },
    footer: {
      desc: 'Des visuels audacieux pour les marques qui refusent de se fondre dans la masse. Identité · Vidéo IA · Systèmes de design · 3D (bientôt).',
      colServices: 'Services', colStudio: 'Studio', portfolio: 'Portfolio', about: 'À propos', contact: 'Contact',
      rights: '© 2026 26.MH Studio. Tous droits réservés.', crafted: 'Conçu avec passion ✦',
    },
    pricing: {
      backLink: 'Tous les services', mostPopular: 'Le plus populaire', getStarted: 'Commencer',
      commonQuestions: 'Questions fréquentes', faq: 'FAQ', exploreMore: 'Explorer', otherServices: 'Autres services',
      readyTitle: 'Prêt à', readyTitleEm: 'commencer ?',
      readySub: 'Parlez-nous de votre projet et nous vous répondrons dans les 24 heures.', sendMsg: 'Envoyer un message →',
    },
  },
};

export function useT(locale: Locale) { return t[locale]; }
export function localePath(locale: Locale, path: string) { return `/${locale}${path}`; }

// ─────────────────────────────────────────────
// PRICING — all amounts in DA (Algerian Dinar)
// ─────────────────────────────────────────────
// ─────────────────────────────────────────────
// AI VIDEO — matrix pricing type
// (duration × quantity grid, different shape from tiers)
// ─────────────────────────────────────────────
export interface VideoMatrixRow {
  duration: string;       // e.g. "15 sec" / "15 secondes" / "١٥ ثانية"
  single: string;         // e.g. "2,000 DA"
  pack5: string;          // e.g. "9,000 DA"
  pack5Discount: string;  // e.g. "-10%"
  pack10: string;         // e.g. "16,000 DA"
  pack10Discount: string; // e.g. "-20%"
}

export interface AIVideoPricing {
  eyebrow: string;
  headline: string;
  subline: string;
  colLabels: { duration: string; single: string; pack5: string; pack10: string };
  rows: VideoMatrixRow[];
  includedTitle: string;
  included: string[];
  deliveryTitle: string;
  delivery: string;
  faqs: Array<{ q: string; a: string }>;
  otherServices: Array<{ label: string; href: string }>;
}

export const pricingTranslations: Record<Locale, {
  brandIdentity: {
    eyebrow: string; headline: string; subline: string;
    tiers: Array<{ name: string; price: string; period: string; desc: string; features: string[]; featured?: boolean; cta?: string }>;
    faqs: Array<{ q: string; a: string }>;
    otherServices: Array<{ label: string; href: string }>;
  };
  aiVideo: AIVideoPricing;
  socialMedia: {
    eyebrow: string; headline: string; subline: string;
    tiers: Array<{ name: string; price: string; period: string; desc: string; features: string[]; featured?: boolean; cta?: string }>;
    faqs: Array<{ q: string; a: string }>;
    otherServices: Array<{ label: string; href: string }>;
  };
}> = {
  // ════════════════════════════════════════
  // ARABIC PRICING
  // ════════════════════════════════════════
  ar: {
    brandIdentity: {
      eyebrow: 'الخدمة / ٠١',
      headline: 'الهوية <em>البصرية</em>',
      subline: 'نبني أنظمة بصرية متكاملة — شعار، ألوان، طباعة، ودليل العلامة التجارية — تجعل علامتك التجارية لا تُنسى.',
      tiers: [
        {
          name: 'باقة الشعار',
          price: '6,000 دج',
          period: 'دفعة واحدة',
          desc: 'شعار مخصص مع مفهومين للاختيار — أساس متين لعلامتك التجارية.',
          features: ['تصميم شعار مخصص', 'مفهومان', 'ملفات PNG و JPG', '3 مراجعات'],
          cta: 'ابدأ الآن',
        },
        {
          name: 'بداية العلامة التجارية',
          price: '12,000 دج',
          period: 'دفعة واحدة',
          desc: 'حزمة هوية أساسية تغطي شعارك وألوانك وحضورك الأساسي على السوشيال ميديا.',
          features: ['تصميم الشعار', 'لوحة الألوان', 'الطباعة', 'بطاقة العمل', 'مجموعة ملفات تعريف سوشيال ميديا', '5 مراجعات'],
          featured: true,
          cta: 'ابدأ الآن',
        },
        {
          name: 'علامة تجارية برو',
          price: '20,000 دج',
          period: 'دفعة واحدة',
          desc: 'نظام هوية بصرية متكامل، جاهز للاستخدام المهني اليومي.',
          features: ['هوية بصرية كاملة', 'نظام الشعار', 'ألوان العلامة التجارية', 'نظام الطباعة', 'بطاقة العمل', 'ترويسة', 'مجموعة سوشيال ميديا', 'دليل مصغر للعلامة التجارية', 'عرض mockup'],
          cta: 'ابدأ الآن',
        },
        {
          name: 'علامة تجارية بريميوم',
          price: '35,000 دج',
          period: 'دفعة واحدة',
          desc: 'تجربة العلامة التجارية الكاملة — استراتيجية، دليل العلامة التجارية، وأصول جاهزة للإطلاق.',
          features: ['هوية علامة تجارية كاملة', 'جلسة استراتيجية للعلامة التجارية', 'نظام الشعار', 'دليل العلامة التجارية', 'mockups للتغليف', 'حزمة إطلاق سوشيال ميديا', 'حزمة القرطاسية', 'عرض تقديمي تجاري'],
          cta: 'تواصل معنا',
        },
      ],
      faqs: [
        { q: 'كم عدد جولات المراجعة المتضمنة؟', a: 'يختلف عدد المراجعات حسب الباقة — من 3 جولات لباقة الشعار حتى 5 جولات لبداية العلامة التجارية. تواصل معنا إذا احتجت مراجعات إضافية.' },
        { q: 'ما هي صيغ الملفات التي سأحصل عليها؟', a: 'ستحصل على ملفات PNG و JPG، وللباقات الأعلى نوفر أيضاً ملفات مصدر قابلة للتحرير.' },
        { q: 'هل أمتلك التصاميم النهائية؟', a: 'نعم — بمجرد اكتمال المشروع وإتمام الدفع، تمتلك 100٪ من حقوق هويتك البصرية. بدون رسوم إضافية أو قيود.' },
        { q: 'هل يمكنني الترقية لاحقاً؟', a: 'بالتأكيد. يمكنك البدء بأي باقة والترقية في أي وقت — سنخصم مدفوعاتك الأولية من تكلفة الترقية.' },
      ],
      otherServices: [
        { label: 'فيديو AI للمنتجات', href: '/ar/pricing/ai-video' },
        { label: 'تصميم سوشيال ميديا', href: '/ar/pricing/social-media' },
        { label: 'النمذجة ثلاثية الأبعاد', href: '/ar/pricing/3d-modeling' },
      ],
    },

    aiVideo: {
      eyebrow: 'الخدمة / ٠٢',
      headline: 'فيديو AI <em>للمنتجات</em>',
      subline: 'مقاطع فيديو سينمائية للمنتجات بتقنية الذكاء الاصطناعي — حركة وأجواء وقصة تُحوّل الزوار إلى مشترين.',
      colLabels: { duration: 'المدة', single: 'فيديو واحد', pack5: 'حزمة 5', pack10: 'حزمة 10' },
      rows: [
        { duration: '15 ثانية', single: '2,000 دج', pack5: '9,000 دج', pack5Discount: '-10٪', pack10: '16,000 دج', pack10Discount: '-20٪' },
        { duration: '30 ثانية', single: '4,000 دج', pack5: '18,000 دج', pack5Discount: '-10٪', pack10: '32,000 دج', pack10Discount: '-20٪' },
      ],
      includedTitle: 'مُضمَّن في كل فيديو',
      included: [
        'مرئيات وحركة مولّدة بالذكاء الاصطناعي',
        'موسيقى خلفية مشمولة',
        'مُحسَّن لريلز إنستقرام و تيك توك',
        'تصدير بجودة 1080p (4K متوفر لحزم 30 ثانية)',
        'جولتان من المراجعات للفيديوهات الفردية',
        'حقوق استخدام تجاري كاملة، بما في ذلك الإعلانات المدفوعة',
      ],
      deliveryTitle: 'مواعيد التسليم',
      delivery: 'فيديو واحد: 5 أيام. حزمة 5: 10 أيام. حزمة 10: 12 يوم.',
      faqs: [
        { q: 'ما هي المنتجات الأنسب لفيديو AI؟', a: 'مقاطع فيديو المنتجات بتقنية AI تعمل بشكل استثنائي مع مستحضرات التجميل والأزياء والمشروبات والإكسسوارات التقنية والأغذية ومنتجات نمط الحياة.' },
        { q: 'هل أحتاج إلى تقديم لقطات أو صور؟', a: 'يمكنك تقديم صور المنتج للحصول على أفضل النتائج، لكن هذا ليس إلزامياً. يمكننا العمل من صور مرجعية وإرشادات العلامة التجارية.' },
        { q: 'هل يمكنني استخدام الفيديوهات للإعلانات المدفوعة؟', a: 'بالتأكيد. تُسلَّم جميع الفيديوهات مع حقوق الاستخدام التجاري الكاملة ومُحسَّنة للأداء في حملات السوشيال ميديا المدفوعة.' },
      ],
      otherServices: [
        { label: 'الهوية البصرية', href: '/ar/pricing/brand-identity' },
        { label: 'تصميم سوشيال ميديا', href: '/ar/pricing/social-media' },
        { label: 'النمذجة ثلاثية الأبعاد', href: '/ar/pricing/3d-modeling' },
      ],
    },

    socialMedia: {
      eyebrow: 'الخدمة / ٠٣',
      headline: 'تصميم <em>سوشيال ميديا</em>',
      subline: 'منشورات، ستوري، وأنظمة محتوى متكاملة. نصمم اللغة البصرية التي توقف التمرير وتهيمن على الفيد.',
      tiers: [
        {
          name: 'أساسي',
          price: '3,500 دج',
          period: 'شهرياً',
          desc: 'محتوى سوشيال ميديا بسعر مناسب للشركات الصغيرة التي تريد حضوراً مهنياً على الإنترنت.',
          features: ['10 منشورات', '10 ستوري', 'تصاميم مخصصة', 'دمج ألوان العلامة التجارية', '2 مراجعتان'],
          featured: true,
          cta: 'ابدأ الآن',
        },
        {
          name: 'نمو',
          price: '6,000 دج',
          period: 'شهرياً',
          desc: 'حجم محتوى أكبر مع تسليم أسرع للعلامات التجارية المتنامية.',
          features: ['20 منشور', '20 ستوري', 'تصاميم مخصصة', 'تسليم بأولوية', '5 مراجعات'],
          cta: 'ابدأ النمو',
        },
        {
          name: 'أعمال',
          price: '8,000 دج',
          period: 'شهرياً',
          desc: 'إدارة محتوى كاملة الحجم مع جدول مخطط للعلامات التجارية الراسخة.',
          features: ['30 منشور', '30 ستوري', 'جدول محتوى', 'تسليم بأولوية', 'مراجعات بسيطة غير محدودة'],
          cta: 'طوّر محتواي',
        },
      ],
      faqs: [
        { q: 'هل أحصل على ملفات قابلة للتحرير؟', a: 'تُسلَّم جميع التصاميم جاهزة للنشر. إذا احتاج فريقك ملفات مصدر قابلة للتحرير، أخبرنا وسنرتب ذلك حسب باقتك.' },
        { q: 'هل يمكنكم مطابقة أسلوب علامتي التجارية الحالي؟', a: 'بالتأكيد. أرسل لنا إرشادات علامتك التجارية، لوحة الألوان، وأسماء الخطوط وسنبني كل تصميم ليتطابق معها.' },
        { q: 'ما الفرق بين الباقات؟', a: 'الفرق الأساسي هو حجم المحتوى الشهري، سرعة التسليم، وعدد المراجعات — الباقات الأعلى تقدم منشورات أكثر، ستوري أكثر، وتسليماً بأولوية.' },
        { q: 'كيف يعمل الاشتراك الشهري؟', a: 'كل شهر تُقدِّم ملخص محتوى أو نعده معاً. نسلّم جميع الأصول خلال أول أيام الشهر لنترك لك باقي الشهر للتخطيط والنشر.' },
      ],
      otherServices: [
        { label: 'الهوية البصرية', href: '/ar/pricing/brand-identity' },
        { label: 'فيديو AI للمنتجات', href: '/ar/pricing/ai-video' },
        { label: 'النمذجة ثلاثية الأبعاد', href: '/ar/pricing/3d-modeling' },
      ],
    },
  },

  // ════════════════════════════════════════
  // ENGLISH PRICING
  // ════════════════════════════════════════
  en: {
    brandIdentity: {
      eyebrow: 'Service / 01',
      headline: 'Brand <em>Identity</em>',
      subline: 'We build complete visual systems — logo, color, typography, and brand guidelines — that make your brand unforgettable.',
      tiers: [
        {
          name: 'Logo Pack',
          price: '6,000 DA',
          period: 'One-time payment',
          desc: 'A custom logo with two concepts to choose from — a solid foundation for your brand.',
          features: ['Custom logo design', '2 concepts', 'PNG & JPG files', '3 revisions'],
          cta: 'Get Started',
        },
        {
          name: 'Brand Starter',
          price: '12,000 DA',
          period: 'One-time payment',
          desc: 'A basic identity kit covering your logo, colors, and essential social presence.',
          features: ['Logo design', 'Color palette', 'Typography', 'Business card', 'Social media profile kit', '5 revisions'],
          featured: true,
          cta: 'Get Started',
        },
        {
          name: 'Brand Pro',
          price: '20,000 DA',
          period: 'One-time payment',
          desc: 'A complete visual identity system, ready for everyday professional use.',
          features: ['Complete visual identity', 'Logo system', 'Brand colors', 'Typography system', 'Business card', 'Letterhead', 'Social media kit', 'Mini brand guide', 'Mockup presentation'],
          cta: 'Get Started',
        },
        {
          name: 'Brand Premium',
          price: '35,000 DA',
          period: 'One-time payment',
          desc: 'The full brand experience — strategy, brand guidelines, and launch-ready assets.',
          features: ['Complete brand identity', 'Brand strategy session', 'Logo system', 'Brand guidelines', 'Packaging mockups', 'Social media launch kit', 'Stationery pack', 'Business presentation'],
          cta: "Let's Talk",
        },
      ],
      faqs: [
        { q: 'How many revision rounds are included?', a: 'The number of revisions varies by package — from 3 rounds for the Logo Pack up to 5 rounds for Brand Starter. Contact us if you need additional revisions.' },
        { q: 'What file formats will I receive?', a: 'You will receive PNG and JPG files, and for higher packages we also provide editable source files.' },
        { q: 'Do I own the final designs?', a: 'Yes — once the project is complete and payment is finalized, you own 100% of the rights to your brand identity. No royalties, no restrictions.' },
        { q: 'Can I upgrade my package later?', a: 'Absolutely. You can start with any package and upgrade at any time — we will credit your initial payment toward the upgrade.' },
      ],
      otherServices: [
        { label: 'AI Video for Products', href: '/en/pricing/ai-video' },
        { label: 'Social Media Design', href: '/en/pricing/social-media' },
        { label: '3D Modeling', href: '/en/pricing/3d-modeling' },
      ],
    },

    aiVideo: {
      eyebrow: 'Service / 02',
      headline: 'AI Video for <em>Products</em>',
      subline: 'Cinematic product videos powered by AI — motion, mood, and storytelling that turns visitors into buyers.',
      colLabels: { duration: 'Duration', single: 'Single Video', pack5: 'Pack of 5', pack10: 'Pack of 10' },
      rows: [
        { duration: '15 sec', single: '2,000 DA', pack5: '9,000 DA', pack5Discount: '-10%', pack10: '16,000 DA', pack10Discount: '-20%' },
        { duration: '30 sec', single: '4,000 DA', pack5: '18,000 DA', pack5Discount: '-10%', pack10: '32,000 DA', pack10Discount: '-20%' },
      ],
      includedTitle: 'Included in Every Video',
      included: [
        'AI-generated visuals & motion',
        'Background music included',
        'Optimized for Instagram Reels & TikTok',
        '1080p export (4K available on 30-second packs)',
        '2 revision rounds on single videos',
        'Full commercial usage rights, including paid advertising',
      ],
      deliveryTitle: 'Delivery Times',
      delivery: 'Single Video: 5 days. Pack of 5: 10 days. Pack of 10: 12 days.',
      faqs: [
        { q: 'What kind of products work best for AI video?', a: 'AI product videos work exceptionally well for cosmetics, fashion, beverages, tech accessories, food, and lifestyle products.' },
        { q: 'Do I need to provide footage or photos?', a: 'You can provide product photos for the best results, but it is not required. We can work from reference images and brand guidelines.' },
        { q: 'Can I use the videos for paid ads?', a: 'Absolutely. All videos are delivered with full commercial usage rights and are optimized for performance in paid social campaigns.' },
      ],
      otherServices: [
        { label: 'Brand Identity', href: '/en/pricing/brand-identity' },
        { label: 'Social Media Design', href: '/en/pricing/social-media' },
        { label: '3D Modeling', href: '/en/pricing/3d-modeling' },
      ],
    },

    socialMedia: {
      eyebrow: 'Service / 03',
      headline: 'Social Media <em>Design</em>',
      subline: 'Posts, stories, and full content systems. We design the visual language that stops the scroll and owns the feed.',
      tiers: [
        {
          name: 'Starter',
          price: '3,500 DA',
          period: 'Per month',
          desc: 'Affordable social content for small businesses wanting a professional online presence.',
          features: ['10 posts', '10 stories', 'Custom designs', 'Brand color integration', '2 revisions'],
          featured: true,
          cta: 'Get Started',
        },
        {
          name: 'Growth',
          price: '6,000 DA',
          period: 'Per month',
          desc: 'Higher content volume with faster delivery for growing brands.',
          features: ['20 posts', '20 stories', 'Custom designs', 'Priority delivery', '5 revisions'],
          cta: 'Start Growing',
        },
        {
          name: 'Business',
          price: '8,000 DA',
          period: 'Per month',
          desc: 'Full-volume content management with a planned calendar for established brands.',
          features: ['30 posts', '30 stories', 'Content calendar', 'Priority delivery', 'Unlimited minor revisions'],
          cta: 'Scale My Content',
        },
      ],
      faqs: [
        { q: 'Do I get editable files?', a: 'All designs are delivered ready to publish. If your team needs editable source files, let us know and we will arrange that based on your plan.' },
        { q: 'Can you match my existing brand style?', a: 'Absolutely. Send us your brand guidelines, color palette, and font names and we will build every design to match.' },
        { q: "What's the difference between plans?", a: 'The main difference is monthly content volume, delivery speed, and number of revisions — higher plans offer more posts, more stories, and priority delivery.' },
        { q: 'How does the monthly subscription work?', a: 'Each month you submit a content brief or we create one together. We deliver all assets within the first days of the month, leaving you the rest of the month to schedule and post.' },
      ],
      otherServices: [
        { label: 'Brand Identity', href: '/en/pricing/brand-identity' },
        { label: 'AI Video for Products', href: '/en/pricing/ai-video' },
        { label: '3D Modeling', href: '/en/pricing/3d-modeling' },
      ],
    },
  },

  // ════════════════════════════════════════
  // FRENCH PRICING — Source of truth (matches PDFs exactly)
  // ════════════════════════════════════════
  fr: {
    brandIdentity: {
      eyebrow: 'Service / 01',
      headline: 'Identité de <em>Marque</em>',
      subline: 'Nous construisons des systèmes visuels complets — logo, couleurs, typographie, charte graphique — qui rendent votre marque inoubliable.',
      tiers: [
        {
          name: 'Pack Logo',
          price: '6,000 DA',
          period: 'Paiement unique',
          desc: 'Un logo personnalisé avec deux concepts au choix — une base solide pour votre marque.',
          features: ['Design de logo personnalisé', '2 concepts', 'Fichiers PNG & JPG', '3 révisions'],
          cta: 'Commencer',
        },
        {
          name: 'Brand Starter',
          price: '12,000 DA',
          period: 'Paiement unique',
          desc: 'Un kit d\'identité de base couvrant votre logo, vos couleurs et votre présence sociale essentielle.',
          features: ['Design du logo', 'Palette de couleurs', 'Typographie', 'Carte de visite', 'Kit de profils réseaux sociaux', '5 révisions'],
          featured: true,
          cta: 'Commencer',
        },
        {
          name: 'Brand Pro',
          price: '20,000 DA',
          period: 'Paiement unique',
          desc: 'Un système d\'identité visuelle complet, prêt pour un usage professionnel quotidien.',
          features: ['Identité visuelle complète', 'Système de logo', 'Couleurs de marque', 'Système typographique', 'Carte de visite', 'En-tête de lettre', 'Kit réseaux sociaux', 'Mini guide de marque', 'Présentation mockup'],
          cta: 'Commencer',
        },
        {
          name: 'Brand Premium',
          price: '35,000 DA',
          period: 'Paiement unique',
          desc: 'L\'expérience de marque complète — stratégie, charte graphique et assets prêts au lancement.',
          features: ['Identité de marque complète', 'Session de stratégie de marque', 'Système de logo', 'Charte graphique', 'Mockups de packaging', 'Kit de lancement réseaux sociaux', 'Pack papeterie', 'Présentation commerciale'],
          cta: 'Nous Contacter',
        },
      ],
      faqs: [
        { q: 'Combien de tours de révisions sont inclus ?', a: 'Le nombre de révisions varie selon le pack — de 3 tours pour le Pack Logo jusqu\'à 5 tours pour Brand Starter. Contactez-nous si vous avez besoin de révisions supplémentaires.' },
        { q: 'Quels formats de fichiers vais-je recevoir ?', a: 'Vous recevrez des fichiers PNG et JPG, et pour les packs supérieurs nous fournissons également des fichiers sources modifiables.' },
        { q: 'Suis-je propriétaire des designs finaux ?', a: 'Oui — une fois le projet terminé et le paiement finalisé, vous êtes propriétaire à 100% des droits sur votre identité visuelle. Sans royalties, sans restrictions.' },
        { q: 'Puis-je upgrader mon pack plus tard ?', a: 'Absolument. Vous pouvez commencer avec n\'importe quel pack et upgrader à tout moment — nous créditerons votre paiement initial.' },
      ],
      otherServices: [
        { label: 'Vidéo IA pour Produits', href: '/fr/pricing/ai-video' },
        { label: 'Design Réseaux Sociaux', href: '/fr/pricing/social-media' },
        { label: 'Modélisation 3D', href: '/fr/pricing/3d-modeling' },
      ],
    },

    aiVideo: {
      eyebrow: 'Service / 02',
      headline: 'Vidéo IA pour <em>Produits</em>',
      subline: 'Vidéos produits cinématographiques propulsées par l\'IA — mouvement, ambiance et storytelling qui transforme les visiteurs en acheteurs.',
      colLabels: { duration: 'Durée', single: 'Vidéo Unique', pack5: 'Pack de 5', pack10: 'Pack de 10' },
      rows: [
        { duration: '15 secondes', single: '2,000 DA', pack5: '9,000 DA', pack5Discount: '-10%', pack10: '16,000 DA', pack10Discount: '-20%' },
        { duration: '30 secondes', single: '4,000 DA', pack5: '18,000 DA', pack5Discount: '-10%', pack10: '32,000 DA', pack10Discount: '-20%' },
      ],
      includedTitle: 'Inclus dans Chaque Vidéo',
      included: [
        'Visuels et mouvement générés par IA',
        'Musique de fond incluse',
        'Optimisée pour Instagram Reels & TikTok',
        'Export 1080p (4K disponible sur les packs 30 secondes)',
        '2 tours de révisions sur les vidéos à l\'unité',
        'Droits d\'utilisation commerciale complets, y compris pour la publicité payante',
      ],
      deliveryTitle: 'Délais de Livraison',
      delivery: 'Vidéo unique : 5 jours. Pack de 5 : 10 jours. Pack de 10 : 12 jours.',
      faqs: [
        { q: 'Quels types de produits fonctionnent le mieux pour la vidéo IA ?', a: 'Les vidéos produits IA fonctionnent exceptionnellement bien pour les cosmétiques, la mode, les boissons, les accessoires tech, les aliments et les produits lifestyle.' },
        { q: 'Dois-je fournir des photos ou vidéos ?', a: 'Vous pouvez fournir des photos produits pour les meilleurs résultats, mais ce n\'est pas obligatoire. Nous pouvons travailler à partir d\'images de référence et de charte graphique.' },
        { q: 'Puis-je utiliser les vidéos pour des publicités payantes ?', a: 'Absolument. Toutes les vidéos sont livrées avec tous les droits d\'utilisation commerciale et sont optimisées pour les campagnes sociales payantes.' },
      ],
      otherServices: [
        { label: 'Identité de Marque', href: '/fr/pricing/brand-identity' },
        { label: 'Design Réseaux Sociaux', href: '/fr/pricing/social-media' },
        { label: 'Modélisation 3D', href: '/fr/pricing/3d-modeling' },
      ],
    },

    socialMedia: {
      eyebrow: 'Service / 03',
      headline: 'Design Réseaux <em>Sociaux</em>',
      subline: 'Posts, stories et systèmes de contenu complets. Nous créons le langage visuel qui arrête le scroll et maîtrise le feed.',
      tiers: [
        {
          name: 'Starter',
          price: '3,500 DA',
          period: 'Par mois',
          desc: 'Du contenu social abordable pour les petites entreprises voulant une présence professionnelle en ligne.',
          features: ['10 posts', '10 stories', 'Designs personnalisés', 'Intégration des couleurs de marque', '2 révisions'],
          featured: true,
          cta: 'Commencer',
        },
        {
          name: 'Growth',
          price: '6,000 DA',
          period: 'Par mois',
          desc: 'Un volume de contenu plus important avec une livraison plus rapide pour les marques en croissance.',
          features: ['20 posts', '20 stories', 'Designs personnalisés', 'Livraison prioritaire', '5 révisions'],
          cta: 'Démarrer la Croissance',
        },
        {
          name: 'Business',
          price: '8,000 DA',
          period: 'Par mois',
          desc: 'Une gestion de contenu à volume complet avec un calendrier planifié pour les marques établies.',
          features: ['30 posts', '30 stories', 'Calendrier de contenu', 'Livraison prioritaire', 'Révisions mineures illimitées'],
          cta: 'Faire Évoluer mon Contenu',
        },
      ],
      faqs: [
        { q: 'Est-ce que je reçois des fichiers modifiables ?', a: 'Tous les designs sont livrés prêts à publier. Si votre équipe a besoin de fichiers sources modifiables, dites-le nous et nous nous organiserons selon votre formule.' },
        { q: 'Pouvez-vous respecter mon style de marque existant ?', a: 'Absolument. Envoyez-nous votre charte graphique, votre palette de couleurs et vos noms de polices et nous construirons chaque design en accord.' },
        { q: 'Quelle est la différence entre les formules ?', a: 'La principale différence est le volume de contenu mensuel, la vitesse de livraison et le nombre de révisions — les formules supérieures offrent plus de posts, plus de stories et une livraison prioritaire.' },
        { q: 'Comment fonctionne l\'abonnement mensuel ?', a: 'Chaque mois vous soumettez un brief de contenu ou nous en créons un ensemble. Nous livrons tous les assets dans les premiers jours du mois pour vous laisser le reste du mois pour planifier et publier.' },
      ],
      otherServices: [
        { label: 'Identité de Marque', href: '/fr/pricing/brand-identity' },
        { label: 'Vidéo IA pour Produits', href: '/fr/pricing/ai-video' },
        { label: 'Modélisation 3D', href: '/fr/pricing/3d-modeling' },
      ],
    },
  },
};
