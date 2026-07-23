    /* ---- Scroll: navbar shadow ---- */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    });

    /* ---- Scroll reveal animation ---- */
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));

    /* ---- Language switcher ---- */
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    const langArrow = document.getElementById('langArrow');

    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = langDropdown.classList.toggle('open');
      langArrow.style.transform = isOpen ? 'rotate(180deg)' : '';
    });
    document.addEventListener('click', () => {
      langDropdown.classList.remove('open');
      langArrow.style.transform = '';
    });

    // ---- Translations ----
    const T = {
      en: {
        navPricing: 'Pricing', navContact: 'Contact', navCta: 'Free Quote',
        badgeText: 'Web Design Agency for Local Businesses',
        heroTitle: 'Your business deserves', heroSubtitle: 'to be online.',
        heroDesc: 'We build professional websites for local businesses that have no online presence yet, or whose site has become outdated.',
        heroDescStrong: 'More customers from Google Maps.',
        btnPrices: 'See pricing', btnTalk: 'Talk to us',
        stat1: 'Local businesses helped', stat2: 'More visits from Google', stat3: '7 days', stat3l: 'Average delivery time',
        whyTag: 'Why choose us',
        whyTitle: "We don't just build websites.", whyTitleEm: 'We get you customers.',
        whyDesc: 'Every website we build is designed to turn visits into calls, bookings and real sales.',
        b1t: 'Google Maps Presence', b1d: 'We help your business appear in the top results when someone searches for your service in your city.',
        b2t: '100% Mobile-Friendly', b2d: 'Over 70% of local searches happen on mobile. Your website will look perfect on any screen.',
        b3t: 'Ready in Record Time', b3d: 'We deliver your website in 7 days. No endless waits or complicated processes. Fast, simple and professional.',
        b4t: 'Local SEO Included', b4d: 'We optimise your site so Google shows it to local customers searching for exactly what you offer.',
        b5t: 'WhatsApp Integration', b5d: 'Your customers can reach you in one tap from any page. More contacts, more sales.',
        b6t: 'Online Bookings', b6d: 'Standard and Premium plans include a booking system so your customers can schedule without calling you.',
        pricingTag: 'Transparent pricing', pricingTitle: 'Choose your plan',
        pricingDesc: 'No surprises or hidden fees. You know exactly what each plan includes.',
        planBasicName: 'Basic', planBasicDesc: 'Ideal for businesses that need a fast and simple online presence.',
        planBasicPrice: '€400 – €900', planFee: 'one-time fee',
        pf1:'1-page website',pf2:'Mobile-friendly design',pf3:'Integrated WhatsApp button',pf4:'Google Maps integration',pf5:'Basic SEO included',pf6:'Contact form',pf7:'Booking system',pf8:'Professional copywriting',pf9:'Advanced SEO',
        btnBasic: 'Start with Basic',
        planPopular: 'MOST POPULAR',
        planStdName: 'Standard', planStdDesc: 'The most complete option to grow and attract customers from Google.',
        planStdPrice: '€900 – €2,000',
        ps1:'5 to 8-page website',ps2:'Custom professional design',ps3:'Services & pricing section',ps4:'Online booking system',ps5:'Advanced local SEO',ps6:'Google Maps integration',ps7:'WhatsApp button',ps8:'Contact form',ps9:'Professional copywriting',
        btnStd: 'Start with Standard',
        planConversion: 'MAX CONVERSION',
        planPremName: 'Premium', planPremDesc: 'Complete solution for businesses that want to stand out and turn visits into customers.',
        planPremPrice: '€2,000 – €4,000',
        pp1:'100% custom design',pp2:'Professional copywriting included',pp3:'Advanced & technical SEO',pp4:'High-conversion layout',pp5:'Online booking system',pp6:'Google Maps integration',pp7:'Local competitor analysis',pp8:'Monthly performance report',
        btnPrem: 'Start with Premium',
        maintenance: '<strong>Optional maintenance:</strong> €30 – €150/mo · Updates · SEO improvements · Technical support',
        contactTag: 'Free consultation', contactTitle: "Not sure which plan you need?",
        contactDesc: "Tell us about your business and we'll recommend the right plan. No commitment, no cost, no hassle.",
        perk1:'Response within 24 hours',perk2:'Free quote with no commitment',perk3:'We work with businesses across Spain and Bulgaria',
        howTag:'How it works',step1:"You tell us about your business and what you need",step2:"We design your website and show it to you",step3:"We publish it and you appear on Google",
        formTitle:'Get your free quote',lblName:'Name & business',phName:'E.g. John – Style Barbershop',lblEmail:'Email address',lblPhone:'Phone (optional)',lblPlan:'Plan of interest',
        optNone:"I'm not sure yet",optBasic:'Basic (€400 – €900)',optStd:'Standard (€900 – €2,000)',optPrem:'Premium (€2,000 – €4,000)',optMaint:'Maintenance only',
        lblMsg:'Tell us about your business',phMsg:'What do you do? Do you have a website? What do you need to improve?',
        btnSubmit:'Request free quote',formNote:'No commitment · Response in <24h · 100% free',
        successTitle:'Message sent!',successMsg:"We'll get back to you within 24 hours. Thank you for reaching out!",
        footerNote:'Web design for local businesses · €30 – €150/mo maintenance · Spain & Bulgaria',
        footerContact:'Contact',footerPricing:'Pricing',
      },
      es: {
        navPricing:'Precios',navContact:'Contacto',navCta:'Presupuesto gratis',
        badgeText:'Agencia de Diseño Web para Negocios Locales',
        heroTitle:'Tu negocio merece',heroSubtitle:'estar en internet.',
        heroDesc:'Creamos páginas web profesionales para negocios locales que aún no tienen presencia online o cuya web ha quedado anticuada.',
        heroDescStrong:'Más clientes desde Google Maps.',
        btnPrices:'Ver precios',btnTalk:'Hablar con nosotros',
        stat1:'Negocios locales ayudados',stat2:'Más visitas desde Google',stat3:'7 días',stat3l:'Tiempo medio de entrega',
        whyTag:'Por qué elegirnos',
        whyTitle:'No solo hacemos webs.',whyTitleEm:'Conseguimos clientes.',
        whyDesc:'Cada web que creamos está diseñada para convertir visitas en llamadas, reservas y ventas reales.',
        b1t:'Presencia en Google Maps',b1d:'Ayudamos a que tu negocio aparezca en los primeros resultados cuando alguien busca tu servicio en tu ciudad.',
        b2t:'100% adaptada a móvil',b2d:'Más del 70% de las búsquedas locales se hacen desde el teléfono. Tu web se verá perfecta en cualquier pantalla.',
        b3t:'Lista en tiempo récord',b3d:'Entregamos tu web en 7 días. Sin esperas interminables ni procesos complicados. Rápido, sencillo y profesional.',
        b4t:'SEO local incluido',b4d:'Optimizamos tu web para que Google la muestre a clientes de tu zona que buscan exactamente lo que tú ofreces.',
        b5t:'WhatsApp integrado',b5d:'Tus clientes podrán contactarte con un solo clic desde cualquier página de tu web. Más contactos, más ventas.',
        b6t:'Reservas online',b6d:'En el plan Estándar y Premium incluimos un sistema de reservas para que tus clientes puedan agendar sin llamarte.',
        pricingTag:'Tarifas transparentes',pricingTitle:'Elige tu plan',
        pricingDesc:'Sin sorpresas ni letra pequeña. Sabes exactamente lo que incluye cada plan.',
        planBasicName:'Básico',planBasicDesc:'Ideal para negocios que necesitan presencia online rápida y sencilla.',
        planBasicPrice:'400€ – 900€',planFee:'pago único',
        pf1:'Web de 1 página',pf2:'Diseño adaptado a móvil',pf3:'Botón de WhatsApp integrado',pf4:'Integración con Google Maps',pf5:'SEO básico incluido',pf6:'Formulario de contacto',pf7:'Sistema de reservas',pf8:'Copywriting profesional',pf9:'SEO avanzado',
        btnBasic:'Empezar con Básico',
        planPopular:'MÁS POPULAR',
        planStdName:'Estándar',planStdDesc:'La opción más completa para crecer y captar clientes desde Google.',
        planStdPrice:'900€ – 2.000€',
        ps1:'Web de 5 a 8 páginas',ps2:'Diseño profesional a medida',ps3:'Sección de servicios y precios',ps4:'Sistema de reservas online',ps5:'SEO local avanzado',ps6:'Integración Google Maps',ps7:'Botón de WhatsApp',ps8:'Formulario de contacto',ps9:'Copywriting profesional',
        btnStd:'Empezar con Estándar',
        planConversion:'MÁXIMA CONVERSIÓN',
        planPremName:'Premium',planPremDesc:'Solución completa para negocios que quieren destacar y convertir visitas en clientes.',
        planPremPrice:'2.000€ – 4.000€',
        pp1:'Diseño 100% personalizado',pp2:'Copywriting profesional incluido',pp3:'SEO avanzado y técnico',pp4:'Layout de alta conversión',pp5:'Sistema de reservas online',pp6:'Integración Google Maps',pp7:'Análisis de competencia local',pp8:'Informe de rendimiento mensual',
        btnPrem:'Empezar con Premium',
        maintenance:'<strong>Mantenimiento opcional:</strong> 30€ – 150€/mes · Actualizaciones · Mejoras SEO · Soporte técnico',
        contactTag:'Contacto gratuito',contactTitle:'¿No sabes qué plan necesitas?',
        contactDesc:'Cuéntanos tu negocio y te recomendamos el plan más adecuado. Sin compromiso, sin coste, sin complicaciones.',
        perk1:'Respuesta en menos de 24 horas',perk2:'Presupuesto gratuito y sin compromiso',perk3:'Trabajamos con negocios de toda España y Bulgaria',
        howTag:'Así funciona',step1:'Nos cuentas tu negocio y qué necesitas',step2:'Diseñamos tu web y te la mostramos',step3:'La publicamos y apareces en Google',
        formTitle:'Pide tu presupuesto gratis',lblName:'Nombre y negocio',phName:'Ej: Juan – Peluquería Estilo',lblEmail:'Correo electrónico',lblPhone:'Teléfono (opcional)',lblPlan:'Plan de interés',
        optNone:'No lo sé todavía',optBasic:'Básico (400€ – 900€)',optStd:'Estándar (900€ – 2.000€)',optPrem:'Premium (2.000€ – 4.000€)',optMaint:'Solo mantenimiento',
        lblMsg:'Cuéntanos sobre tu negocio',phMsg:'¿A qué te dedicas? ¿Tienes web actualmente? ¿Qué necesitas mejorar?',
        btnSubmit:'Solicitar presupuesto gratis',formNote:'Sin compromiso · Respuesta en <24h · 100% gratuito',
        successTitle:'¡Mensaje enviado!',successMsg:'Te responderemos en menos de 24 horas. ¡Gracias por contactarnos!',
        footerNote:'Diseño web para negocios locales · 30€ – 150€/mes mantenimiento · España y Bulgaria',
        footerContact:'Contacto',footerPricing:'Precios',
      },
      bg: {
        navPricing:'Цени',navContact:'Контакт',navCta:'Безплатна оферта',
        badgeText:'Агенция за уеб дизайн за местни бизнеси',
        heroTitle:'Вашият бизнес заслужава',heroSubtitle:'да е онлайн.',
        heroDesc:'Създаваме професионални уебсайтове за местни бизнеси, които нямат онлайн присъствие или чийто сайт е остарял.',
        heroDescStrong:'Повече клиенти от Google Maps.',
        btnPrices:'Виж цените',btnTalk:'Говори с нас',
        stat1:'Помогнати местни бизнеса',stat2:'Повече посещения от Google',stat3:'7 дни',stat3l:'Средно време за доставка',
        whyTag:'Защо нас',
        whyTitle:'Не само правим сайтове.',whyTitleEm:'Намираме ви клиенти.',
        whyDesc:'Всеки сайт, който създаваме, е проектиран да превръща посещенията в обаждания, резервации и реални продажби.',
        b1t:'Присъствие в Google Maps',b1d:'Помагаме на бизнеса ви да се появява в първите резултати, когато някой търси вашата услуга в града.',
        b2t:'100% адаптиран за мобилни',b2d:'Над 70% от местните търсения се правят от телефон. Сайтът ви ще изглежда перфектно на всеки екран.',
        b3t:'Готово за рекордно време',b3d:'Доставяме сайта ви за 7 дни. Без безкрайно чакане или сложни процеси.',
        b4t:'Включено местно SEO',b4d:'Оптимизираме сайта ви, за да го показва Google на местни клиенти, търсещи точно това, което предлагате.',
        b5t:'Интеграция с WhatsApp',b5d:'Клиентите ви могат да ви пишат с едно натискане от всяка страница. Повече контакти, повече продажби.',
        b6t:'Онлайн резервации',b6d:'Стандартните и Premium планове включват система за резервации, за да не се налага клиентите да ви се обаждат.',
        pricingTag:'Прозрачни цени',pricingTitle:'Изберете план',
        pricingDesc:'Без изненади или скрити такси. Знаете точно какво включва всеки план.',
        planBasicName:'Базов',planBasicDesc:'Идеален за бизнеси, нуждаещи се от бързо и просто онлайн присъствие.',
        planBasicPrice:'400€ – 900€',planFee:'еднократно плащане',
        pf1:'Едностраничен сайт',pf2:'Адаптивен дизайн',pf3:'Бутон за WhatsApp',pf4:'Интеграция с Google Maps',pf5:'Базово SEO',pf6:'Форма за контакт',pf7:'Система за резервации',pf8:'Професионален копирайтинг',pf9:'Разширено SEO',
        btnBasic:'Започнете с Базов',
        planPopular:'НАЙ-ПОПУЛЯРЕН',
        planStdName:'Стандарт',planStdDesc:'Най-пълният вариант за растеж и привличане на клиенти от Google.',
        planStdPrice:'900€ – 2.000€',
        ps1:'Сайт от 5 до 8 страници',ps2:'Персонализиран дизайн',ps3:'Секция услуги и цени',ps4:'Онлайн резервации',ps5:'Разширено местно SEO',ps6:'Интеграция с Google Maps',ps7:'Бутон за WhatsApp',ps8:'Форма за контакт',ps9:'Копирайтинг',
        btnStd:'Започнете със Стандарт',
        planConversion:'МАКСИМАЛНА КОНВЕРСИЯ',
        planPremName:'Премиум',planPremDesc:'Пълно решение за бизнеси, искащи да се откроят и превърнат посещенията в клиенти.',
        planPremPrice:'2.000€ – 4.000€',
        pp1:'100% персонализиран дизайн',pp2:'Включен копирайтинг',pp3:'Разширено и техническо SEO',pp4:'Оформление с висока конверсия',pp5:'Онлайн резервации',pp6:'Интеграция с Google Maps',pp7:'Анализ на местна конкуренция',pp8:'Месечен доклад за ефективност',
        btnPrem:'Започнете с Премиум',
        maintenance:'<strong>Незадължителна поддръжка:</strong> 30€ – 150€/мес · Актуализации · SEO подобрения · Техническа поддръжка',
        contactTag:'Безплатна консултация',contactTitle:'Не знаете кой план ви трябва?',
        contactDesc:'Разкажете ни за бизнеса си и ние ще препоръчаме подходящия план. Без ангажимент, без разходи.',
        perk1:'Отговор до 24 часа',perk2:'Безплатна оферта без ангажимент',perk3:'Работим с бизнеси в цяла Испания и България',
        howTag:'Как работи',step1:'Разказвате ни за бизнеса си и нуждите ви',step2:'Проектираме сайта и ви го показваме',step3:'Публикуваме го и се появявате в Google',
        formTitle:'Поискайте безплатна оферта',lblName:'Име и бизнес',phName:'Напр.: Иван – Фризьорски салон',lblEmail:'Имейл адрес',lblPhone:'Телефон (по желание)',lblPlan:'Интересуващ план',
        optNone:'Не съм сигурен/а',optBasic:'Базов (400€ – 900€)',optStd:'Стандарт (900€ – 2.000€)',optPrem:'Премиум (2.000€ – 4.000€)',optMaint:'Само поддръжка',
        lblMsg:'Разкажете ни за бизнеса си',phMsg:'С какво се занимавате? Имате ли сайт? Какво искате да подобрите?',
        btnSubmit:'Поискайте безплатна оферта',formNote:'Без ангажимент · Отговор до 24ч · 100% безплатно',
        successTitle:'Съобщението е изпратено!',successMsg:'Ще ви отговорим в рамките на 24 часа. Благодарим, че се свързахте!',
        footerNote:'Уеб дизайн за местни бизнеси · 30€ – 150€/мес поддръжка · Испания и България',
        footerContact:'Контакт',footerPricing:'Цени',
      }
    };

    function applyTranslation(code) {
      const t = T[code] || T.en;
      document.documentElement.lang = code;
      // Navbar
      document.querySelector('.nav-links li:nth-child(1) a').textContent = t.navPricing;
      document.querySelector('.nav-links li:nth-child(2) a').textContent = t.navContact;
      document.querySelector('.btn-cta-nav').textContent = t.navCta;
      // Hero
      document.querySelector('.badge').innerHTML = '<span class="badge-dot"></span> ' + t.badgeText;
      document.querySelector('h1.hero-title').textContent = t.heroTitle;
      document.querySelector('h2.hero-subtitle').textContent = t.heroSubtitle;
      document.querySelector('.hero-desc').innerHTML = t.heroDesc + ' <strong>' + t.heroDescStrong + '</strong>';
      document.querySelector('.hero-ctas .btn-primary').textContent = t.btnPrices;
      document.querySelector('.hero-ctas .btn-secondary').textContent = t.btnTalk;
      const statNums = document.querySelectorAll('.stat-num');
      const statLabels = document.querySelectorAll('.stat-label');
      statLabels[0].textContent = t.stat1; statLabels[1].textContent = t.stat2;
      statNums[2].textContent = t.stat3; statLabels[2].textContent = t.stat3l;
      // Benefits
      const bTags = document.querySelectorAll('.section-tag');
      bTags[0].textContent = t.whyTag;
      const secTitles = document.querySelectorAll('.section-title');
      secTitles[0].innerHTML = t.whyTitle + '<br><em>' + t.whyTitleEm + '</em>';
      const secDescs = document.querySelectorAll('.section-desc');
      secDescs[0].textContent = t.whyDesc;
      const bCards = document.querySelectorAll('.benefit-card');
      const bts = [t.b1t,t.b2t,t.b3t,t.b4t,t.b5t,t.b6t];
      const bds = [t.b1d,t.b2d,t.b3d,t.b4d,t.b5d,t.b6d];
      bCards.forEach((c,i) => { c.querySelector('.benefit-title').textContent = bts[i]; c.querySelector('.benefit-desc').textContent = bds[i]; });
      // Pricing
      bTags[1].textContent = t.pricingTag;
      secTitles[1].textContent = t.pricingTitle;
      secDescs[1].textContent = t.pricingDesc;
      const cards = document.querySelectorAll('.pricing-card');
      // Basic
      cards[0].querySelector('.plan-name').textContent = t.planBasicName;
      cards[0].querySelector('.plan-desc').textContent = t.planBasicDesc;
      const bPrice = cards[0].querySelector('.plan-price');
      bPrice.childNodes[0].textContent = t.planBasicPrice;
      bPrice.querySelector('span').textContent = t.planFee;
      const bFeats = cards[0].querySelectorAll('.plan-features li span:last-child');
      [t.pf1,t.pf2,t.pf3,t.pf4,t.pf5,t.pf6,t.pf7,t.pf8,t.pf9].forEach((f,i) => { if(bFeats[i]) bFeats[i].textContent = f; });
      cards[0].querySelector('.btn-plan').textContent = t.btnBasic;
      // Standard
      cards[1].querySelector('.plan-badge').textContent = t.planPopular;
      cards[1].querySelector('.plan-name').textContent = t.planStdName;
      cards[1].querySelector('.plan-desc').textContent = t.planStdDesc;
      const sPrice = cards[1].querySelector('.plan-price');
      sPrice.childNodes[0].textContent = t.planStdPrice;
      sPrice.querySelector('span').textContent = t.planFee;
      const sFeats = cards[1].querySelectorAll('.plan-features li span:last-child');
      [t.ps1,t.ps2,t.ps3,t.ps4,t.ps5,t.ps6,t.ps7,t.ps8,t.ps9].forEach((f,i) => { if(sFeats[i]) sFeats[i].textContent = f; });
      cards[1].querySelector('.btn-plan').textContent = t.btnStd;
      // Premium
      cards[2].querySelector('.plan-badge').textContent = t.planConversion;
      cards[2].querySelector('.plan-name').textContent = t.planPremName;
      cards[2].querySelector('.plan-desc').textContent = t.planPremDesc;
      const pPrice = cards[2].querySelector('.plan-price');
      pPrice.childNodes[0].textContent = t.planPremPrice;
      pPrice.querySelector('span').textContent = t.planFee;
      const pFeats = cards[2].querySelectorAll('.plan-features li span:last-child');
      [t.pp1,t.pp2,t.pp3,t.pp4,t.pp5,t.pp6,t.pp7,t.pp8].forEach((f,i) => { if(pFeats[i]) pFeats[i].textContent = f; });
      cards[2].querySelector('.btn-plan').textContent = t.btnPrem;
      // Maintenance
      document.querySelector('.maintenance-inner p').innerHTML = t.maintenance;
      // Contact
      bTags[2].textContent = t.contactTag;
      document.querySelector('.contact-info-title').textContent = t.contactTitle;
      document.querySelector('.contact-info-desc').textContent = t.contactDesc;
      const perks = document.querySelectorAll('.contact-perks li');
      perks[0].childNodes[perks[0].childNodes.length-1].textContent = ' ' + t.perk1;
      perks[1].childNodes[perks[1].childNodes.length-1].textContent = ' ' + t.perk2;
      perks[2].childNodes[perks[2].childNodes.length-1].textContent = ' ' + t.perk3;
      document.querySelector('.how-works-tag').textContent = t.howTag;
      const steps = document.querySelectorAll('.step-text');
      steps[0].textContent = t.step1; steps[1].textContent = t.step2; steps[2].textContent = t.step3;
      // Form
      document.querySelector('.form-title').textContent = t.formTitle;
      document.querySelector('label[for="nombre_negocio"]').textContent = t.lblName;
      document.getElementById('nombre_negocio').placeholder = t.phName;
      document.querySelector('label[for="email"]').textContent = t.lblEmail;
      document.querySelector('label[for="telefono"]').textContent = t.lblPhone;
      document.querySelector('label[for="plan_interes"]').childNodes[0].textContent = t.lblPlan;
      const opts = document.querySelectorAll('#plan_interes option');
      opts[0].textContent = t.optNone; opts[1].textContent = t.optBasic;
      opts[2].textContent = t.optStd; opts[3].textContent = t.optPrem; opts[4].textContent = t.optMaint;
      const msgLabel = document.querySelector('label[for="mensaje"]');
      msgLabel.childNodes[0].textContent = t.lblMsg + ' ';
      document.getElementById('mensaje').placeholder = t.phMsg;
      document.getElementById('submitBtn').textContent = t.btnSubmit;
      document.querySelector('.form-note').innerHTML = t.formNote;
      document.querySelector('.form-success h3').textContent = t.successTitle;
      document.querySelector('.form-success p').textContent = t.successMsg;
      // Footer
      document.querySelector('.footer-note').textContent = t.footerNote;
      const footerLinks = document.querySelectorAll('.footer-links a');
      footerLinks[0].textContent = t.footerContact; footerLinks[1].textContent = t.footerPricing;
      // Highlight active option
      document.querySelectorAll('.lang-option').forEach(o => o.style.fontWeight = '');
      const activeOpt = document.getElementById('opt-' + code);
      if (activeOpt) activeOpt.style.fontWeight = '700';
    }

    const flagMap = { en: 'fi-gb', es: 'fi-es', bg: 'fi-bg' };
    function setLang(code, flagSrc, label) {
      const flagEl = document.getElementById('langFlag');
      flagEl.className = 'fi ' + (flagMap[code] || 'fi-gb');
      document.getElementById('langCode').textContent = label;
      langDropdown.classList.remove('open');
      langArrow.style.transform = '';
      applyTranslation(code);
    }

    /* ---- Textarea char counter ---- */
    const textarea = document.getElementById('mensaje');
    const charCount = document.getElementById('charCount');
    textarea.addEventListener('input', () => {
      charCount.textContent = textarea.value.length + '/500';
    });

        /* ---- Form submit via Formspree ---- */
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formSuccess = document.getElementById('formSuccess');

    // IMPORTANTE: Sustituye mzdylznl por el ID que obtengas en https://formspree.io
    // Regístrate con weblocaldesigns@gmail.com y crea un formulario para obtener tu ID.
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mzdylznl';

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      submitBtn.style.background = '#374151';

      const data = {
        nombre_negocio: document.getElementById('nombre_negocio').value.trim(),
        email:          document.getElementById('email').value.trim(),
        telefono:       document.getElementById('telefono').value.trim() || 'No indicado',
        plan_interes:   document.getElementById('plan_interes').value || 'No especificado',
        mensaje:        document.getElementById('mensaje').value.trim(),
      };

      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          submitBtn.textContent = '\u2713 Request sent';
          submitBtn.style.background = '#16a34a';
          submitBtn.style.opacity = '1';
          setTimeout(() => {
            form.style.display = 'none';
            formSuccess.style.display = 'block';
          }, 800);
        } else {
          throw new Error('Error en el servidor');
        }
      } catch (err) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Request free quote';
        submitBtn.style.background = '';
        alert('There was an error sending your message. Please try again or email us at weblocaldesigns@gmail.com');
      }
    });

    // Apply default language on load
    applyTranslation('en');

    /* ---- Smooth scroll for anchor links ---- */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });