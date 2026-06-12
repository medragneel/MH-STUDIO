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
  // Meta
  siteTitle: string;
  siteDesc: string;

  // Nav
  nav: {
    services: string;
    work: string;
    pricing: string;
    about: string;
    cta: string;
  };

  // Hero
  hero: {
    badge: string;
    line1: string;
    line2a: string;
    line2b: string;
    sub: string;
    btnServices: string;
    btnWork: string;
  };

  // Section labels
  sections: {
    whatWeDo: string;
    services: string;
    selectedProjects: string;
    ourWork: string;
    seeInstagram: string;
    ourStudio: string;
    weAre: string;
    letsBuild: string;
    haveProject: string;
    haveProjectEm: string;
    contactSub: string;
    sendMessage: string;
    dmInstagram: string;
  };

  // Services
  services: {
    s01: { num: string; title: string; desc: string; cta: string };
    s02: { num: string; title: string; desc: string; cta: string };
    s03: { num: string; title: string; desc: string; cta: string };
    s04: { num: string; title: string; desc: string; cta: string; tag: string };
  };

  // About
  about: {
    p1: string;
    p2: string;
    btnStart: string;
  };

  // Stats
  stats: {
    projects: string;
    clients: string;
    services: string;
  };

  // Footer
  footer: {
    desc: string;
    colServices: string;
    colStudio: string;
    portfolio: string;
    about: string;
    contact: string;
    rights: string;
    crafted: string;
  };

  // Pricing shared
  pricing: {
    backLink: string;
    mostPopular: string;
    getStarted: string;
    commonQuestions: string;
    faq: string;
    exploreMore: string;
    otherServices: string;
    readyTitle: string;
    readyTitleEm: string;
    readySub: string;
    sendMsg: string;
  };
}> = {
  // ════════════════════════════════════════
  // ARABIC
  // ════════════════════════════════════════
  ar: {
    siteTitle: '26.MH Studio — استوديو تصميم إبداعي',
    siteDesc: 'هوية بصرية، فيديو ذكاء اصطناعي، تصميم سوشيال ميديا ونمذجة ثلاثية الأبعاد. نصنع مرئيات جريئة تُحرّك الناس.',

    nav: {
      services: 'خدماتنا',
      work: 'أعمالنا',
      pricing: 'الأسعار',
      about: 'من نحن',
      cta: 'احصل على عرض',
    },

    hero: {
      badge: 'استوديو إبداعي — تأسس 2024',
      line1: 'تصميم',
      line2a: 'يُحرّك',
      line2b: 'الناس.',
      sub: 'هوية بصرية · فيديو بالذكاء الاصطناعي · تصميم سوشيال · نمذجة 3D (قريباً)\nنبني اللغة البصرية التي تستحقها علامتك التجارية.',
      btnServices: 'اكتشف خدماتنا',
      btnWork: 'شاهد أعمالنا',
    },

    sections: {
      whatWeDo: 'ماذا نفعل',
      services: 'خدماتنا',
      selectedProjects: 'مشاريع مختارة',
      ourWork: 'أعمالنا',
      seeInstagram: 'شاهد على إنستقرام ↗',
      ourStudio: 'استوديونا',
      weAre: 'نحن',
      letsBuild: 'لنبني معاً',
      haveProject: 'لديك مشروع',
      haveProjectEm: 'في ذهنك؟',
      contactSub: 'نقبل عدداً محدوداً من العملاء كل شهر لنضمن أن كل مشروع يحظى باهتمام كامل.',
      sendMessage: 'أرسل لنا رسالة',
      dmInstagram: 'راسلنا على إنستقرام',
    },

    services: {
      s01: {
        num: '٠١',
        title: 'الهوية البصرية',
        desc: 'أنظمة بصرية متكاملة — شعار، ألوان، طباعة، ودليل العلامة التجارية — مصممة لتجعل علامتك التجارية لا تُنسى.',
        cta: 'عرض الأسعار',
      },
      s02: {
        num: '٠٢',
        title: 'فيديو AI للمنتجات',
        desc: 'مقاطع فيديو سينمائية للمنتجات بتقنية الذكاء الاصطناعي. اعرض منتجاتك بحركة وأجواء وقصة تُحوّل المتصفحين إلى مشترين.',
        cta: 'عرض الأسعار',
      },
      s03: {
        num: '٠٣',
        title: 'تصميم سوشيال ميديا',
        desc: 'منشورات، ملصقات، كتالوجات، وقوالب ستوري — مصممة كنظام متماسك. أوقف التمرير، امتلك الفيد.',
        cta: 'عرض الأسعار',
      },
      s04: {
        num: '٠٤',
        title: 'النمذجة ثلاثية الأبعاد',
        desc: 'تصيير ثلاثي الأبعاد فائق الواقعية وتصورات للمنتجات. من المفهوم إلى الإخراج الفوتوغرافي — المستوى التالي من رواية العلامة التجارية.',
        cta: 'عرض الأسعار',
        tag: 'قريباً',
      },
    },

    about: {
      p1: 'استوديو تصميم إبداعي حيث تلتقي الاستراتيجية بالجماليات. نتعاون مع العلامات التجارية والشركات الناشئة لبناء هويات بصرية وأنظمة محتوى تخترق الضوضاء.',
      p2: 'من بناء العلامة التجارية من الصفر إلى إنتاج فيديوهات بالذكاء الاصطناعي وتصميم محتوى يهيمن على كل فيد — نقوم بالعمل الذي يجعل الناس يتوقفون وينظرون ويتذكرون.',
      btnStart: 'ابدأ مشروعك',
    },

    stats: {
      projects: 'مشروع',
      clients: 'عميل',
      services: 'خدمات',
    },

    footer: {
      desc: 'مرئيات جريئة للعلامات التجارية التي ترفض الاندماج. هوية بصرية · فيديو AI · أنظمة تصميم · 3D (قريباً).',
      colServices: 'الخدمات',
      colStudio: 'الاستوديو',
      portfolio: 'أعمالنا',
      about: 'من نحن',
      contact: 'تواصل معنا',
      rights: '© 2026 26.MH Studio. جميع الحقوق محفوظة.',
      crafted: 'صُنع بشغف ✦',
    },

    pricing: {
      backLink: 'كل الخدمات',
      mostPopular: 'الأكثر طلباً',
      getStarted: 'ابدأ الآن',
      commonQuestions: 'أسئلة شائعة',
      faq: 'الأسئلة الشائعة',
      exploreMore: 'استكشف المزيد',
      otherServices: 'خدمات أخرى',
      readyTitle: 'هل أنت مستعد',
      readyTitleEm: 'للبدء؟',
      readySub: 'أخبرنا عن مشروعك وسنرد عليك خلال 24 ساعة.',
      sendMsg: 'أرسل لنا رسالة →',
    },
  },

  // ════════════════════════════════════════
  // ENGLISH
  // ════════════════════════════════════════
  en: {
    siteTitle: '26.MH Studio — Creative Design Agency',
    siteDesc: 'Brand identity, AI video, social media design & 3D modeling. We craft bold visuals that move people.',

    nav: {
      services: 'Services',
      work: 'Work',
      pricing: 'Pricing',
      about: 'About',
      cta: 'Get a Quote',
    },

    hero: {
      badge: 'Creative Studio — Est. 2024',
      line1: 'Design that',
      line2a: 'moves',
      line2b: 'people.',
      sub: 'Brand identity · AI video · Social design · 3D (coming soon)\nWe build the visual language your brand deserves.',
      btnServices: 'Explore Services',
      btnWork: 'View Work',
    },

    sections: {
      whatWeDo: 'What We Do',
      services: 'Services',
      selectedProjects: 'Selected Projects',
      ourWork: 'Our Work',
      seeInstagram: 'See on Instagram ↗',
      ourStudio: 'Our Studio',
      weAre: 'We are',
      letsBuild: "Let's Build Together",
      haveProject: 'Have a project',
      haveProjectEm: 'in mind?',
      contactSub: 'We take on a limited number of clients each month to give every project the full focus it deserves.',
      sendMessage: 'Send Us a Message',
      dmInstagram: 'DM on Instagram',
    },

    services: {
      s01: {
        num: '01',
        title: 'Brand Identity',
        desc: 'Complete visual systems — logo, color, typography, brand guidelines — built to make your brand instantly recognizable and impossible to forget.',
        cta: 'View Pricing',
      },
      s02: {
        num: '02',
        title: 'AI Video for Products',
        desc: 'Cinematic product videos powered by AI. Showcase your products with motion, mood, and storytelling that converts browsers into buyers.',
        cta: 'View Pricing',
      },
      s03: {
        num: '03',
        title: 'Social Media Design',
        desc: 'Posts, posters, catalogs, reels covers, and story templates designed as a cohesive system. Stop the scroll, own the feed.',
        cta: 'View Pricing',
      },
      s04: {
        num: '04',
        title: '3D Modeling',
        desc: 'Hyper-realistic 3D renders and product visualizations. From concept to photorealistic output — the next level of brand storytelling.',
        cta: 'View Pricing',
        tag: 'Coming Soon',
      },
    },

    about: {
      p1: 'A creative design studio where strategy meets aesthetics. We partner with brands, startups, and entrepreneurs to build visual identities and content systems that cut through the noise.',
      p2: 'From crafting a brand from zero to producing AI-powered video and designing content that commands every feed — we do the work that makes people stop, look, and remember.',
      btnStart: 'Start a Project',
    },

    stats: {
      projects: 'Projects',
      clients: 'Clients',
      services: 'Services',
    },

    footer: {
      desc: 'Bold visuals for brands that refuse to blend in. Brand identity · AI video · Design systems · 3D (coming soon).',
      colServices: 'Services',
      colStudio: 'Studio',
      portfolio: 'Portfolio',
      about: 'About',
      contact: 'Contact',
      rights: '© 2026 26.MH Studio. All rights reserved.',
      crafted: 'Crafted with purpose ✦',
    },

    pricing: {
      backLink: 'All Services',
      mostPopular: 'Most Popular',
      getStarted: 'Get Started',
      commonQuestions: 'Common Questions',
      faq: 'FAQ',
      exploreMore: 'Explore More',
      otherServices: 'Other Services',
      readyTitle: 'Ready to get',
      readyTitleEm: 'started?',
      readySub: "Tell us about your project and we'll get back to you within 24 hours.",
      sendMsg: 'Send a Message →',
    },
  },

  // ════════════════════════════════════════
  // FRENCH
  // ════════════════════════════════════════
  fr: {
    siteTitle: '26.MH Studio — Agence de Design Créatif',
    siteDesc: 'Identité de marque, vidéo IA, design réseaux sociaux & modélisation 3D. Nous créons des visuels audacieux qui touchent les gens.',

    nav: {
      services: 'Services',
      work: 'Réalisations',
      pricing: 'Tarifs',
      about: 'À propos',
      cta: 'Devis gratuit',
    },

    hero: {
      badge: 'Studio Créatif — Fondé en 2024',
      line1: 'Un design qui',
      line2a: 'touche',
      line2b: 'les gens.',
      sub: 'Identité de marque · Vidéo IA · Design social · 3D (bientôt)\nNous construisons le langage visuel que votre marque mérite.',
      btnServices: 'Voir les services',
      btnWork: 'Nos réalisations',
    },

    sections: {
      whatWeDo: 'Ce que nous faisons',
      services: 'Services',
      selectedProjects: 'Projets sélectionnés',
      ourWork: 'Nos Réalisations',
      seeInstagram: 'Voir sur Instagram ↗',
      ourStudio: 'Notre Studio',
      weAre: 'Nous sommes',
      letsBuild: 'Construisons ensemble',
      haveProject: 'Vous avez un projet',
      haveProjectEm: 'en tête ?',
      contactSub: 'Nous acceptons un nombre limité de clients chaque mois pour garantir une attention totale à chaque projet.',
      sendMessage: 'Envoyez-nous un message',
      dmInstagram: 'Message sur Instagram',
    },

    services: {
      s01: {
        num: '01',
        title: 'Identité de Marque',
        desc: 'Systèmes visuels complets — logo, couleurs, typographie, charte graphique — conçus pour rendre votre marque inoubliable.',
        cta: 'Voir les tarifs',
      },
      s02: {
        num: '02',
        title: 'Vidéo IA pour Produits',
        desc: 'Vidéos produits cinématographiques propulsées par l\'IA. Présentez vos produits avec mouvement, ambiance et storytelling qui convertit.',
        cta: 'Voir les tarifs',
      },
      s03: {
        num: '03',
        title: 'Design Réseaux Sociaux',
        desc: 'Posts, affiches, catalogues et templates stories conçus comme un système cohérent. Arrêtez le scroll, maîtrisez le feed.',
        cta: 'Voir les tarifs',
      },
      s04: {
        num: '04',
        title: 'Modélisation 3D',
        desc: 'Rendus 3D ultra-réalistes et visualisations de produits. Du concept à l\'output photoréaliste — le prochain niveau du storytelling.',
        cta: 'Voir les tarifs',
        tag: 'Bientôt',
      },
    },

    about: {
      p1: 'Un studio de design créatif où stratégie et esthétique se rencontrent. Nous collaborons avec des marques, startups et entrepreneurs pour construire des identités visuelles percutantes.',
      p2: 'De la création d\'une marque de zéro à la production de vidéos IA et la conception de contenus qui dominent chaque feed — nous faisons le travail qui fait s\'arrêter, regarder et se souvenir.',
      btnStart: 'Démarrer un projet',
    },

    stats: {
      projects: 'Projets',
      clients: 'Clients',
      services: 'Services',
    },

    footer: {
      desc: 'Des visuels audacieux pour les marques qui refusent de se fondre dans la masse. Identité · Vidéo IA · Systèmes de design · 3D (bientôt).',
      colServices: 'Services',
      colStudio: 'Studio',
      portfolio: 'Portfolio',
      about: 'À propos',
      contact: 'Contact',
      rights: '© 2026 26.MH Studio. Tous droits réservés.',
      crafted: 'Conçu avec passion ✦',
    },

    pricing: {
      backLink: 'Tous les services',
      mostPopular: 'Le plus populaire',
      getStarted: 'Commencer',
      commonQuestions: 'Questions fréquentes',
      faq: 'FAQ',
      exploreMore: 'Explorer',
      otherServices: 'Autres services',
      readyTitle: 'Prêt à',
      readyTitleEm: 'commencer ?',
      readySub: 'Parlez-nous de votre projet et nous vous répondrons dans les 24 heures.',
      sendMsg: 'Envoyer un message →',
    },
  },
};

// Helper to get translations for a locale
export function useT(locale: Locale) {
  return t[locale];
}

// Helper to build locale-aware hrefs
export function localePath(locale: Locale, path: string) {
  return `/${locale}${path}`;
}

// Pricing page translations per locale
export const pricingTranslations: Record<Locale, {
  brandIdentity: {
    eyebrow: string;
    headline: string;
    subline: string;
    tiers: Array<{
      name: string; price: string; period: string; desc: string;
      features: string[]; featured?: boolean; cta?: string;
    }>;
    faqs: Array<{ q: string; a: string }>;
    otherServices: Array<{ label: string; href: string }>;
  };
  aiVideo: {
    eyebrow: string; headline: string; subline: string;
    tiers: Array<{ name: string; price: string; period: string; desc: string; features: string[]; featured?: boolean; cta?: string }>;
    faqs: Array<{ q: string; a: string }>;
    otherServices: Array<{ label: string; href: string }>;
  };
  socialMedia: {
    eyebrow: string; headline: string; subline: string;
    tiers: Array<{ name: string; price: string; period: string; desc: string; features: string[]; featured?: boolean; cta?: string }>;
    faqs: Array<{ q: string; a: string }>;
    otherServices: Array<{ label: string; href: string }>;
  };
}> = {
  ar: {
    brandIdentity: {
      eyebrow: 'الخدمة / ٠١',
      headline: 'الهوية <em>البصرية</em>',
      subline: 'نبني أنظمة بصرية متكاملة — شعار، ألوان، طباعة، ودليل العلامة التجارية — تجعل علامتك التجارية لا تُنسى.',
      tiers: [
        { name: 'أساسي', price: '$349', period: 'دفعة واحدة', desc: 'مثالي للشركات الجديدة التي تحتاج إلى أساس بصري متين للانطلاق بثقة.', features: ['تصميم شعار (مفهومان)', 'نسخ الشعار الأساسية والثانوية', 'لوحة ألوان العلامة التجارية', 'توصية بالخطوط', 'جولتان من المراجعات', 'ملفات نهائية: AI، SVG، PNG، PDF', 'تسليم خلال 7 أيام'], cta: 'ابدأ الآن' },
        { name: 'احترافي', price: '$899', period: 'دفعة واحدة', desc: 'هوية بصرية متكاملة للشركات الجاهزة لترك انطباع دائم.', features: ['كل ما في الأساسي', 'نظام شعار كامل (4 نسخ)', 'نمط / نسيج العلامة التجارية', 'تصميم بطاقة العمل', 'ترويسة وتوقيع البريد الإلكتروني', 'دليل العلامة التجارية PDF (+20 صفحة)', 'مجموعة ملفات تعريف سوشيال ميديا', 'مراجعات غير محدودة', 'تسليم خلال 14 يوم'], featured: true, cta: 'ابدأ الآن' },
        { name: 'مميز', price: '$1,799', period: 'دفعة واحدة', desc: 'تجربة العلامة التجارية الكاملة — من الاستراتيجية إلى عالم بصري متكامل.', features: ['كل ما في الاحترافي', 'ورشة استراتيجية للعلامة التجارية', 'تحليل السوق والمنافسين', 'دليل صوت العلامة التجارية والرسائل', 'مجموعة القرطاسية الكاملة', 'تصميم تغليف (منتج واحد)', 'قالب عرض تقديمي (10 شرائح)', 'حزمة أصول إطلاق العلامة التجارية', 'تسليم أولوية خلال 10 أيام', 'دعم 30 يوم بعد التسليم'], cta: 'تحدث معنا' },
      ],
      faqs: [
        { q: 'كم عدد جولات المراجعة المتضمنة؟', a: 'يشمل الأساسي جولتين من المراجعات. الاحترافي والمميز يشملان مراجعات غير محدودة حتى تكون راضياً 100٪.' },
        { q: 'ما هي صيغ الملفات التي سأحصل عليها؟', a: 'ستحصل على جميع الملفات بصيغ الطباعة والرقمية: AI (مصدر قابل للتحرير)، SVG، PNG، PDF، وJPG.' },
        { q: 'هل أمتلك التصاميم النهائية؟', a: 'نعم — بمجرد اكتمال المشروع وإتمام الدفع، تمتلك 100٪ من حقوق هويتك البصرية.' },
        { q: 'هل يمكنني الترقية لاحقاً؟', a: 'بالتأكيد. يمكنك البدء بالأساسي والترقية لاحقاً — سنخصم مدفوعاتك الأولية من تكلفة الترقية.' },
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
      subline: 'مقاطع فيديو سينمائية للمنتجات بتقنية الذكاء الاصطناعي — حركة وأجواء وقصة تُحوّل المتصفحين إلى مشترين.',
      tiers: [
        { name: 'فيديو واحد', price: '$249', period: 'لكل فيديو', desc: 'فيديو منتج واحد متكامل — مثالي لاختبار الصيغة أو إطلاق منتج واحد.', features: ['فيديو منتج واحد (15-30 ثانية)', 'مرئيات وحركة بتقنية AI', 'موسيقى خلفية مشمولة', 'مُحسَّن لريلز إنستقرام', 'تصدير بجودة 1080p', 'جولتان من المراجعات', 'تسليم خلال 5 أيام'], cta: 'اطلب الآن' },
        { name: 'حزمة الإطلاق', price: '$599', period: 'دفعة واحدة', desc: 'مجموعة كاملة من مقاطع الفيديو تغطي كل المنصات وكل لحظات الإطلاق.', features: ['3 مقاطع فيديو (15-60 ثانية)', 'مرئيات AI + حركة + تعليق صوتي', 'تصحيح ألوان مخصص', 'نسخ للريلز وتيك توك والستوري', 'تصدير بجودة 4K', 'ترجمة مشمولة', 'مراجعات غير محدودة', 'تسليم خلال 10 أيام'], featured: true, cta: 'اطلب الحزمة' },
        { name: 'حملة متكاملة', price: '$1,299', period: 'لكل حملة', desc: 'حملة فيديو AI متكاملة لإطلاق المنتجات أو التخفيضات الموسمية أو رواية قصة العلامة التجارية.', features: ['6 مقاطع فيديو (حتى 90 ثانية)', 'توجيه إبداعي مخصص', 'كتابة نصوص وقصة مصورة', 'نمط AI مخصص للعلامة التجارية', 'فيديو رئيسي + تخفيضات مشمولة', 'تصدير لجميع المنصات', 'تصدير 4K + محسَّن للويب', 'مراجعات غير محدودة', 'تسليم أولوية خلال 12 يوم'], cta: 'تحدث معنا' },
      ],
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
      subline: 'منشورات، ملصقات، كتالوجات، وأنظمة محتوى متكاملة. نصمم اللغة البصرية التي توقف التمرير وتهيمن على الفيد.',
      tiers: [
        { name: 'حزمة منشورات', price: '$199', period: 'دفعة واحدة', desc: 'مجموعة محددة من المنشورات لتحديث فيدك بجمالية متماسكة وعلى العلامة التجارية.', features: ['10 تصاميم منشورات مخصصة', 'تخطيطات مُحسَّنة للفيد (1:1 و4:5)', 'ألوان وخطوط العلامة التجارية مطبقة', 'نصوص التعليقات مشمولة', 'PNG + ملفات Canva قابلة للتحرير', 'جولتان من المراجعات', 'تسليم خلال 5 أيام'], cta: 'اطلب الآن' },
        { name: 'نظام المحتوى', price: '$549', period: 'دفعة واحدة', desc: 'نظام تصميم سوشيال ميديا متكامل — منشورات، ستوري، أغلفة، وملصق. كل ما تحتاجه للهيمنة على فيدك.', features: ['20 تصميم منشور مخصص', '10 قوالب ستوري / غلاف ريلز', '3 تصاميم ملصقات (A4 + رقمي)', '12 أيقونة هايلايت', 'خطة تخطيط شبكة إنستقرام', 'ملفات Canva + Figma قابلة للتحرير', 'دليل ألوان وخطوط العلامة التجارية', 'مراجعات غير محدودة', 'تسليم خلال 10 أيام'], featured: true, cta: 'اطلب النظام' },
        { name: 'تصميم كتالوج', price: '$449', period: 'لكل كتالوج', desc: 'كتالوج منتجات أو خدمات مصمم بجمال — رقمي أولاً، جاهز للطباعة، وعلى العلامة التجارية.', features: ['حتى 20 صفحة كتالوج', 'نظام تخطيط وشبكة مخصص', 'موضع صور المنتج', 'تسلسل هرمي للطباعة', 'تصدير PDF جاهز للطباعة', 'نسخة PDF رقمية / ويب', 'غلاف مُعلَّم بالعلامة التجارية + صفحة خلفية', 'جولتان من المراجعات', 'تسليم خلال 10 أيام'], cta: 'اطلب كتالوجاً' },
        { name: 'اشتراك شهري', price: '$799', period: 'شهرياً', desc: 'دعم تصميم مستمر — محتوى جديد كل شهر حتى لا يتوقف تواجدك على السوشيال أبداً.', features: ['30 تصميم منشور / شهرياً', '10 قوالب ستوري / شهرياً', '2 ملصق أو بانر ترويجي', 'جدول محتوى شهري', 'طلبات تصميم غير محدودة', 'أولوية تسليم خلال 48 ساعة', 'مدير تصميم مخصص', 'إلغاء في أي وقت'], cta: 'ابدأ شهرياً' },
      ],
      faqs: [
        { q: 'هل أحصل على ملفات قابلة للتحرير؟', a: 'نعم. تُسلَّم جميع التصاميم كصور PNG جاهزة للنشر، بالإضافة إلى قوالب Canva قابلة للتحرير حتى يتمكن فريقك من تغيير النصوص والصور دون الحاجة لمصمم في كل مرة.' },
        { q: 'هل يمكنكم مطابقة أسلوب علامتي التجارية الحالي؟', a: 'بالتأكيد. أرسل لنا إرشادات علامتك التجارية، لوحة الألوان، وأسماء الخطوط وسنبني كل تصميم ليتطابق معها.' },
        { q: 'ما هو الفرق بين المنشورات والملصقات؟', a: 'المنشورات هي صيغ مربعة أو طولية مُحسَّنة لفيدات إنستقرام وفيسبوك ولينكدإن. الملصقات هي تصاميم بحجم أكبر (A3، A4) تُستخدم للطباعة أو الترويج للفعاليات أو العرض الرقمي.' },
        { q: 'كيف يعمل الاشتراك الشهري؟', a: 'كل شهر تُقدِّم ملخص محتوى أو نعده معاً بناءً على جدولك. نصمم ونُسلِّم جميع الأصول خلال أول 10 أيام ليكون معك الشهر كله للجدولة والنشر. يمكن الإلغاء في أي وقت بإشعار 7 أيام.' },
      ],
      otherServices: [
        { label: 'الهوية البصرية', href: '/ar/pricing/brand-identity' },
        { label: 'فيديو AI للمنتجات', href: '/ar/pricing/ai-video' },
        { label: 'النمذجة ثلاثية الأبعاد', href: '/ar/pricing/3d-modeling' },
      ],
    },
  },

  en: {
    brandIdentity: {
      eyebrow: 'Service / 01',
      headline: 'Brand <em>Identity</em>',
      subline: 'We build complete visual systems — logo, color, typography, and brand guidelines — that make your brand impossible to forget.',
      tiers: [
        { name: 'Starter', price: '$349', period: 'One-time payment', desc: 'Perfect for new businesses that need a solid visual foundation to launch with confidence.', features: ['Logo design (2 concepts)', 'Primary + secondary logo variants', 'Brand color palette', 'Font pairing recommendation', '2 revision rounds', 'Final files: AI, SVG, PNG, PDF', '7-day delivery'], cta: 'Get Started' },
        { name: 'Professional', price: '$899', period: 'One-time payment', desc: 'A complete brand identity system for businesses ready to make a lasting impression.', features: ['Everything in Starter', 'Full logo system (4 variants)', 'Brand pattern / texture', 'Business card design', 'Letterhead & email signature', 'Brand guidelines PDF (20+ pages)', 'Social media profile kit', 'Unlimited revisions', '14-day delivery'], featured: true, cta: 'Get Started' },
        { name: 'Premium', price: '$1,799', period: 'One-time payment', desc: 'The full brand experience — from strategy to a complete visual world your audience will live in.', features: ['Everything in Professional', 'Brand strategy workshop', 'Competitor & market analysis', 'Brand voice & messaging guide', 'Full stationery suite', 'Packaging design (1 item)', 'Pitch deck template (10 slides)', 'Brand launch assets pack', 'Priority delivery (10 days)', '30-day post-delivery support'], cta: "Let's Talk" },
      ],
      faqs: [
        { q: 'How many revision rounds are included?', a: 'Starter includes 2 revision rounds. Professional and Premium include unlimited revisions until you are 100% happy with the result.' },
        { q: 'What file formats will I receive?', a: 'You will receive all files in print-ready and digital formats: AI (editable source), SVG (vector), PNG (transparent background), PDF, and JPG.' },
        { q: 'Do I own the final designs?', a: 'Yes — once the project is complete and payment is finalized, you own 100% of the rights to your brand identity. No royalties, no restrictions.' },
        { q: 'Can I upgrade my package later?', a: 'Absolutely. You can start with Starter and upgrade to Professional or Premium at any time — we will credit your initial payment toward the upgrade.' },
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
      subline: 'Cinematic product videos powered by AI — motion, mood, and storytelling that turns viewers into buyers without a film crew.',
      tiers: [
        { name: 'Single Video', price: '$249', period: 'Per video', desc: 'One polished AI product video — ideal for testing the format or launching a single product.', features: ['1 product video (15–30 sec)', 'AI-generated visuals & motion', 'Background music included', 'Optimized for Instagram Reels', '1080p export', '2 revision rounds', '5-day delivery'], cta: 'Order Now' },
        { name: 'Launch Pack', price: '$599', period: 'One-time payment', desc: 'A full set of product videos to cover every major platform and moment in your launch.', features: ['3 product videos (15–60 sec each)', 'AI visuals + motion + voiceover', 'Custom color grading', 'Versions for Reels, TikTok & Stories', '4K export', 'Subtitle captions included', 'Unlimited revisions', '10-day delivery'], featured: true, cta: 'Get the Pack' },
        { name: 'Campaign', price: '$1,299', period: 'Per campaign', desc: 'A complete AI video campaign for product launches, seasonal drops, or brand storytelling.', features: ['6 videos (up to 90 sec each)', 'Dedicated creative direction', 'Scripting & storyboard included', 'Custom AI model style per brand', 'Hero video + cut-downs included', 'Platform-native exports (all)', '4K + web-optimized exports', 'Unlimited revisions', 'Priority 12-day delivery'], cta: "Let's Plan It" },
      ],
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
      subline: 'Posts, posters, catalogs, and full content systems. We design the visual language that stops the scroll and owns the feed.',
      tiers: [
  {
    name: 'AI Starter',
    price: '3,000 DA',
    period: 'Per month',
    desc: 'Affordable social content for small businesses wanting a professional online presence.',
    features: [
      '12 social media posts',
      'Basic product retouching',
      'Feed-ready formats',
      'Brand colors & fonts applied',
      'Caption assistance',
      '1 revision round',
      '5-day delivery',
    ],
  },
  {
    name: 'AI Business',
    price: '6,000 DA',
    period: 'Per month',
    desc: 'A complete content package combining social media designs and AI-powered product visuals.',
    features: [
      '16 custom social posts',
      '4 story designs',
      '3 AI product images',
      'Creative ad concepts',
      'Brand consistency system',
      'Priority support',
      '2 revision rounds',
      'Featured package',
    ],
    featured: true,
    cta: 'Start Growing',
  },
  {
    name: 'AI Product Ads',
    price: '10,000 DA',
    period: 'Per month',
    desc: 'Designed for brands that want premium product marketing visuals and advertisements.',
    features: [
      '20 social media posts',
      '8 story designs',
      '8 AI product advertisements',
      'Commercial-style product scenes',
      'Poster & promotional designs',
      'Content planning assistance',
      'Priority delivery',
      'Unlimited minor revisions',
    ],
    cta: 'Boost My Brand',
  },
  {
    name: 'AI Marketing Suite',
    price: '15,000 DA',
    period: 'Per month',
    desc: 'The ultimate package for businesses that need consistent content and AI-generated advertising assets.',
    features: [
      '20 social media posts',
      '8 story designs',
      '10 AI product images',
      '2 AI video ads (15s)',
      'Monthly content calendar',
      'Campaign creative direction',
      'Fast turnaround',
      'Dedicated support',
    ],
    cta: 'Scale My Marketing',
  },
      ],
      faqs: [
        { q: 'Do I get editable files?', a: 'Yes. All designs are delivered as PNG exports plus editable Canva templates so your team can swap text and images without needing a designer every time.' },
        { q: 'Can you match my existing brand style?', a: 'Absolutely. Send us your brand guidelines, color palette, and font names and we will build every design to match.' },
        { q: 'How does the Monthly Retainer work?', a: 'Each month you submit a content brief or we create one together. We deliver all assets within the first 10 days so you have the full month to schedule and post. Cancel anytime with 7 days notice.' },
      ],
      otherServices: [
        { label: 'Brand Identity', href: '/en/pricing/brand-identity' },
        { label: 'AI Video for Products', href: '/en/pricing/ai-video' },
        { label: '3D Modeling', href: '/en/pricing/3d-modeling' },
      ],
    },
  },

  fr: {
    brandIdentity: {
      eyebrow: 'Service / 01',
      headline: 'Identité de <em>Marque</em>',
      subline: 'Nous construisons des systèmes visuels complets — logo, couleurs, typographie, charte graphique — qui rendent votre marque inoubliable.',
      tiers: [
        { name: 'Starter', price: '$349', period: 'Paiement unique', desc: 'Idéal pour les nouvelles entreprises qui ont besoin de bases visuelles solides pour se lancer avec confiance.', features: ['Design du logo (2 concepts)', 'Variantes principale et secondaire du logo', 'Palette de couleurs de la marque', 'Recommandation de polices', '2 tours de révisions', 'Fichiers finaux : AI, SVG, PNG, PDF', 'Livraison en 7 jours'], cta: 'Commencer' },
        { name: 'Professionnel', price: '$899', period: 'Paiement unique', desc: 'Un système d\'identité visuelle complet pour les entreprises prêtes à laisser une impression durable.', features: ['Tout ce qui est dans Starter', 'Système de logo complet (4 variantes)', 'Motif / texture de marque', 'Design de carte de visite', 'En-tête et signature email', 'Charte graphique PDF (20+ pages)', 'Kit profils réseaux sociaux', 'Révisions illimitées', 'Livraison en 14 jours'], featured: true, cta: 'Commencer' },
        { name: 'Premium', price: '$1,799', period: 'Paiement unique', desc: "L'expérience de marque complète — de la stratégie à un univers visuel complet.", features: ['Tout ce qui est dans Professionnel', 'Atelier stratégie de marque', 'Analyse concurrentielle et marché', 'Guide de voix et messages de marque', 'Suite papeterie complète', 'Design packaging (1 élément)', 'Template pitch deck (10 slides)', "Pack d'assets lancement de marque", 'Livraison prioritaire (10 jours)', 'Support 30 jours post-livraison'], cta: 'Parlons-en' },
      ],
      faqs: [
        { q: 'Combien de tours de révisions sont inclus ?', a: 'Le Starter inclut 2 tours de révisions. Le Professionnel et le Premium incluent des révisions illimitées jusqu\'à ce que vous soyez satisfait à 100%.' },
        { q: 'Quels formats de fichiers vais-je recevoir ?', a: 'Vous recevrez tous les fichiers en formats prêts à l\'impression et numériques : AI (source modifiable), SVG, PNG (fond transparent), PDF et JPG.' },
        { q: 'Suis-je propriétaire des designs finaux ?', a: 'Oui — une fois le projet terminé et le paiement finalisé, vous êtes propriétaire à 100% des droits sur votre identité visuelle. Sans royalties, sans restrictions.' },
        { q: 'Puis-je upgrader mon pack plus tard ?', a: 'Absolument. Vous pouvez commencer avec Starter et upgrader vers Professionnel ou Premium à tout moment — nous créditerons votre paiement initial.' },
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
      tiers: [
        { name: 'Vidéo Unique', price: '$249', period: 'Par vidéo', desc: 'Une vidéo produit IA soignée — idéale pour tester le format ou lancer un seul produit.', features: ['1 vidéo produit (15-30 sec)', 'Visuels et mouvement générés par IA', 'Musique de fond incluse', 'Optimisée pour Instagram Reels', 'Export 1080p', '2 tours de révisions', 'Livraison en 5 jours'], cta: 'Commander' },
        { name: 'Pack Lancement', price: '$599', period: 'Paiement unique', desc: 'Un ensemble complet de vidéos produits couvrant toutes les plateformes principales pour votre lancement.', features: ['3 vidéos produits (15-60 sec chacune)', 'Visuels IA + mouvement + voix off', 'Étalonnage des couleurs personnalisé', 'Versions pour Reels, TikTok et Stories', 'Export 4K', 'Sous-titres inclus', 'Révisions illimitées', 'Livraison en 10 jours'], featured: true, cta: 'Obtenir le Pack' },
        { name: 'Campagne', price: '$1,299', period: 'Par campagne', desc: 'Une campagne vidéo IA complète pour les lancements produits, les offres saisonnières ou le storytelling de marque.', features: ['6 vidéos (jusqu\'à 90 sec chacune)', 'Direction créative dédiée', 'Scripting et storyboard inclus', 'Style IA personnalisé par marque', 'Vidéo principale + déclinaisons incluses', 'Exports natifs toutes plateformes', 'Exports 4K + optimisés web', 'Révisions illimitées', 'Livraison prioritaire 12 jours'], cta: 'Planifions' },
      ],
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
      subline: 'Posts, affiches, catalogues et systèmes de contenu complets. Nous créons le langage visuel qui arrête le scroll et maîtrise le feed.',
      tiers: [
        { name: 'Pack Posts', price: '$199', period: 'Paiement unique', desc: 'Un ensemble ciblé de posts sociaux pour rafraîchir votre feed avec une esthétique cohérente et fidèle à votre marque.', features: ['10 designs de posts personnalisés', 'Mises en page optimisées (1:1 et 4:5)', 'Couleurs et polices de marque appliquées', 'Texte de légende inclus', 'PNG + fichiers Canva modifiables', '2 tours de révisions', 'Livraison en 5 jours'], cta: 'Commander' },
        { name: 'Système de Contenu', price: '$549', period: 'Paiement unique', desc: 'Un système de design réseaux sociaux complet — posts, stories, couvertures et affiche. Tout ce dont vous avez besoin pour dominer votre feed.', features: ['20 designs de posts personnalisés', '10 templates Story / couverture Reel', '3 designs d\'affiches (A4 + digital)', '12 icônes de highlights', 'Plan de grille Instagram', 'Fichiers Canva + Figma modifiables', 'Guide couleurs et polices de marque', 'Révisions illimitées', 'Livraison en 10 jours'], featured: true, cta: 'Obtenir le Système' },
        { name: 'Design Catalogue', price: '$449', period: 'Par catalogue', desc: 'Un catalogue de produits ou services magnifiquement designé — digital-first, prêt à l\'impression et fidèle à votre marque.', features: ['Jusqu\'à 20 pages de catalogue', 'Système de mise en page et grille personnalisé', 'Placement des photos produits', 'Hiérarchie typographique', 'Export PDF prêt à l\'impression', 'Version PDF digitale / web', 'Couverture + 4ème de couverture brandées', '2 tours de révisions', 'Livraison en 10 jours'], cta: 'Commander un Catalogue' },
        { name: 'Abonnement Mensuel', price: '$799', period: 'Par mois', desc: 'Support design continu — du contenu frais chaque mois pour que votre présence sociale ne se tarisse jamais.', features: ['30 designs de posts / mois', '10 templates stories / mois', '2 affiches ou bannières promotionnelles', 'Calendrier de contenu mensuel', 'Demandes de design illimitées', 'Priorité 48h de livraison', 'Gestionnaire de design dédié', 'Annulation à tout moment'], cta: 'Commencer Mensuellement' },
      ],
      faqs: [
        { q: 'Est-ce que je reçois des fichiers modifiables ?', a: 'Oui. Tous les designs sont livrés en exports PNG prêts à publier, plus des templates Canva modifiables pour que votre équipe puisse changer textes et images sans avoir besoin d\'un designer.' },
        { q: 'Pouvez-vous respecter mon style de marque existant ?', a: 'Absolument. Envoyez-nous votre charte graphique, votre palette de couleurs et vos noms de polices et nous construirons chaque design en accord.' },
        { q: 'Comment fonctionne l\'abonnement mensuel ?', a: 'Chaque mois vous soumettez un brief de contenu ou nous en créons un ensemble. Nous livrons tous les assets dans les 10 premiers jours. Annulation à tout moment avec 7 jours de préavis.' },
      ],
      otherServices: [
        { label: 'Identité de Marque', href: '/fr/pricing/brand-identity' },
        { label: 'Vidéo IA pour Produits', href: '/fr/pricing/ai-video' },
        { label: 'Modélisation 3D', href: '/fr/pricing/3d-modeling' },
      ],
    },
  },
};
