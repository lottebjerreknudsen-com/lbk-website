import { sections } from './sections';

export type Locale = 'en' | 'da';

export interface NavItem {
  href: string;
  label: string;
}

export interface LinkRef {
  label: string;
  href: string;
}

export interface Credit {
  prefix: string;
  label: string;
  href: string;
}

export interface Entry {
  title: string;
  meta?: string;
  year?: string;
  tag?: string;
  links?: LinkRef[];
  /** Anchors a photo or video to this entry, so the images stay attached to the
   *  right award however the list is grouped or ordered. */
  slot?: 'lasker' | 'breakthrough' | 'fnlm' | 'academy';
}

export interface MediaGroup {
  head: string;
  items: Entry[];
}

export interface PageContent {
  htmlLang: string;
  meta: { title: string; description: string };
  langAria: string;
  nav: NavItem[];
  callouts: { label: string; items: { text: string }[] };
  about: {
    label: string;
    heading: string;
    body: string[];
    facts: { value: string; label: string }[];
  };
  mission: { label: string; statement: string };
  speaking: {
    label: string;
    heading: string;
    lead: string;
    body: string;
    questionsIntro: string;
    questions: string[];
  };
  mentor: {
    label: string;
    heading: string;
    body: string;
    details: string[];
    ctaText: string;
    mailSubject: string;
  };
  recognition: { label: string; heading: string; groups: MediaGroup[] };
  media: { label: string; heading: string; groups: MediaGroup[] };
  contact: {
    label: string;
    heading: string;
    lead: string;
    email: string;
    ctaText: string;
    links: LinkRef[];
  };
  footer: { credits: Credit[]; entities: string[] };
}

export const scholar = 'https://scholar.google.com/citations?user=s-0BmrMAAAAJ&hl=en';
const ANDREW_SITE = 'https://andrewdenty.com';
const LEGAL_ENTITIES = [
  'Lotte Bjerre Knudsen ApS · CVR 46695763',
];

export const content: Record<Locale, PageContent> = {
  en: {
    htmlLang: 'en',
    meta: {
      title: 'Lotte Bjerre Knudsen — Scientist & Keynote Speaker',
      description:
        'Lotte Bjerre Knudsen — the scientist whose three decades of work helped unlock the GLP-1 medicines reshaping how the world treats obesity and diabetes. Scientist, communicator, and keynote speaker.',
    },
    langAria: 'Language',
    nav: [
      { href: '#about', label: 'About' },
      ...(sections.mission ? [{ href: '#mission', label: 'Mission' }] : []),
      { href: '#awards', label: 'Awards & Media' },
      { href: '#contact', label: sections.speaking ? 'Work with Lotte' : 'Contact' },
    ],
    callouts: {
      label: 'In brief',
      items: [
        {
          text: 'Lotte Bjerre Knudsen spent three decades quietly transforming how the world treats obesity and diabetes — and the medicines she helped bring to life are now changing millions of lives.',
        },
        {
          text: 'One of the architects of the GLP-1 revolution, Lotte Bjerre Knudsen is a Lasker Award–winning scientist, and one of the most decorated figures in contemporary drug discovery.',
        },
      ],
    },
    about: {
      label: 'About',
      heading: 'About Lotte',
      body: [
        'Lotte Bjerre Knudsen is a pioneer of obesity medicines. One of the few people who saw the potential in treating obesity with GLP-1 and stayed tuned on it for 30 years. She graduated from the Danish Technical University (DTU) in 1989 and joined Novo Nordisk where she worked for 36 years. Her first job included creating what became the very first color detergents. She then went on to become a pioneer in GLP-1 and worked diligently for decades to help unfold the biology of the now so famous medicines for diabetes and obesity. Copenhagen University made her a Doctor of Scientific Medicine in 2014. Her latest role at Novo Nordisk was Chief Scientific Advisor and Head of IDEA, Innovation and Data Experimentation Advancement, where she worked to advance the combination of biology, AI and entrepreneurship.',
        'She is currently an Honorary Professor in Translational Medicine at Aarhus University.',
        'Lotte is one of the world\'s most decorated scientists. The only Dane to ever win a Lasker Award – the Lasker Award is often called America\'s Nobel Prize. Other prestigious awards include The Breakthrough Prize of Life Sciences. The American Association for the Advancement of Science and the Journal Science has also awarded Lotte their Breakthrough Prize.',
      ],
      facts: [
        { value: '36 years', label: 'at Novo Nordisk' },
        { value: '30 years', label: 'pioneering GLP-1' },
        { value: 'Honorary Professor', label: 'Aarhus University' },
      ],
    },
    mission: {
      label: 'My Mission',
      statement:
        'Having helped unlock one of medicine’s most transformative discoveries, my mission is to use that platform — as a scientist, communicator, and leader — to confront the world’s addiction crisis, starting with food and extending to alcohol, drugs, and the digital world, and to inspire the next generation of scientists and leaders to take the science further than we ever imagined possible.',
    },
    speaking: {
      label: 'Work with Lotte',
      heading: 'Invite Lotte to Speak',
      lead: 'Lotte is an internationally recognised keynote speaker who speaks with great passion and knowledge — and always leaves her audiences both wiser and happier.',
      body: 'From the first experiments in the laboratory to medicines now changing the world, Lotte has been part of the entire journey. Talks are tailored to each audience — more or less formal, more or less scientific — so they work just as well for those new to the subject as for specialists.',
      questionsIntro: 'A talk can take you inside:',
      questions: [
        'The biology and history behind these medicines — and how and why they actually work.',
        'How you work patiently on something for decades without ever losing motivation or passion.',
        'How you keep dreaming about solutions to the world’s biggest problems.',
        'Why, in scientific circles, Lotte is known as “The Lady in Pink”.',
      ],
    },
    mentor: {
      label: 'Mentoring',
      heading: 'Advice & sparring',
      body: 'One-on-one advice and sparring on your journey in science.',
      details: ['30-minute sessions', 'Select days, 16:00–17:00 (Copenhagen time)'],
      ctaText: 'Enquire about mentoring',
      mailSubject: 'Mentoring enquiry',
    },
    recognition: {
      label: 'Awards',
      heading: 'Honoured across medicine and science',
      groups: [
        {
          head: 'Major awards',
          items: [
            {
              year: '2024',
              title: 'Lasker~DeBakey Clinical Medical Research Award',
              slot: 'lasker',
              meta: 'Lasker Foundation · shared with Svetlana Mojsov and Joel Habener',
              links: [
                {
                  label: 'Citation',
                  href: 'https://laskerfoundation.org/winners/glp-1-based-therapy-for-obesity/',
                },
                {
                  label: 'Acceptance remarks',
                  href: 'https://laskerfoundation.org/winners/glp-1-based-therapy-for-obesity/#tab-58427e5064503b905c8',
                },
              ],
            },
            {
              year: '2025',
              title: 'Breakthrough Prize in Life Sciences',
              slot: 'breakthrough',
              meta: 'Breakthrough Prize Foundation · shared with Jens Juul Holst, Joel Habener, Svetlana Mojsov and Daniel Drucker',
              links: [
                { label: 'Laureate', href: 'https://breakthroughprize.org/Laureates/L3974' },
                { label: 'Ceremony', href: 'https://breakthroughprize.org/Ceremonies/11' },
                { label: 'Film', href: 'https://www.youtube.com/watch?v=gSPuYhmHtXA' },
              ],
            },
            {
              year: '2024',
              title: 'Mani L. Bhaumik Breakthrough of the Year Award',
              meta: 'Science / AAAS · shared with Richard DiMarchi',
              links: [
                {
                  label: 'Announcement',
                  href: 'https://www.aaas.org/news/innovators-glp-1-obesity-bhaumik-breakthrough',
                },
              ],
            },
          ],
        },
        {
          head: 'More awards',
          items: [
            {
              year: '2026',
              title: 'Cameron Prize for Therapeutics',
              meta: 'University of Edinburgh',
              links: [
                {
                  label: 'Announcement',
                  href: 'https://web.archive.org/web/20260309215102/https://www.ed.ac.uk/news/trio-honoured-for-transformational-obesity-treatment',
                },
                {
                  label: 'Wikipedia',
                  href: 'https://en.wikipedia.org/wiki/Cameron_Prize_for_Therapeutics_of_the_University_of_Edinburgh',
                },
              ],
            },
            {
              year: '2024',
              title: 'Fierce 50',
              meta: 'Fierce Pharma',
              links: [
                {
                  label: 'Interview',
                  href: 'https://www.fiercepharma.com/pharma/lotte-bjerre-knudsen',
                },
              ],
            },
            {
              year: '2025',
              title: 'Friends of the National Library of Medicine Award',
              slot: 'fnlm',
              meta: 'FNLM Annual Gala',
              links: [{ label: 'Gala', href: 'https://www.fnlm.org/2025-fnlm-annual-gala/' }],
            },
            {
              year: '2024',
              title: 'Golden Plate Award',
              slot: 'academy',
              meta: 'American Academy of Achievement',
              links: [
                { label: 'Summit gallery', href: 'https://achievement.org/summit/2024/#gallery' },
              ],
            },
            {
              year: '2023',
              title: 'Paul Langerhans Medal',
              meta: 'German Diabetes Society (DDG)',
              links: [
                {
                  label: 'Wikipedia',
                  href: 'https://de.wikipedia.org/wiki/Paul-Langerhans-Medaille',
                },
              ],
            },
            {
              year: '2023',
              title: 'STAT Biomedical Innovation Award',
              meta: 'STAT',
              links: [
                {
                  label: 'Profile',
                  href: 'https://www.statnews.com/status-list/2024/lotte-knudsen/',
                },
                {
                  label: 'Video',
                  href: 'https://www.facebook.com/statnews/videos/lotte-knudsen-who-pushed-novo-nordisk-into-the-ozempic-era-won-the-2023-stat-inn/1060482181802275/',
                },
              ],
            },
          ],
        },
      ],
    },
    media: {
      label: 'Media',
      heading: 'In print, on<br>film, and on air',
      groups: [
        {
          head: 'Press',
          items: [
            {
              title: 'Monocle',
              meta: 'The scientist behind the weight-loss jabs',
              tag: 'Magazine',
              links: [
                {
                  label: 'Read',
                  href: 'https://monocle.com/affairs/health/ozempic-wegovy-weight-loss-jabs-glp1-scientist-novo-nordisk/',
                },
              ],
            },
            {
              title: 'Der Spiegel',
              meta: 'Interview with the inventor of the weight-loss drugs',
              tag: 'Interview',
              links: [
                {
                  label: 'Read',
                  href: 'https://www.spiegel.de/international/business/interview-with-weight-loss-drugs-inventor-lotte-bjerre-knudsen-a-f2815950-ff24-4e87-b7e9-b6d6c1982d57',
                },
              ],
            },
          ],
        },
        {
          head: 'Film & TV',
          items: [
            {
              title: '60 Minutes',
              meta: 'CBS — the GLP-1 story',
              tag: 'Television',
              links: [{ label: 'Watch', href: 'https://www.youtube.com/watch?v=oHI1Dkqdujc' }],
            },
            {
              title: 'The Story of GLP-1',
              meta: 'Novo Nordisk Foundation · a four-part film series',
              tag: 'Film',
              links: [
                {
                  label: 'Episode 1',
                  href: 'https://novonordiskfonden.dk/en/video/the-story-of-glp-1-a-diabetes-doctors-dream-episode-1/',
                },
                {
                  label: 'Episode 2',
                  href: 'https://novonordiskfonden.dk/en/video/the-story-of-glp-1-if-you-dont-fix-this-episode-2/',
                },
                {
                  label: 'Episode 3',
                  href: 'https://novonordiskfonden.dk/en/video/the-story-of-glp-1-a-steak-well-done-episode-3/',
                },
                {
                  label: 'Episode 4',
                  href: 'https://novonordiskfonden.dk/en/video/the-story-of-glp-1-the-next-really-good-idea-episode-4/',
                },
              ],
            },
          ],
        },
        {
          head: 'Podcasts',
          items: [
            {
              title: 'Acquired',
              meta: 'The scientific journey behind Ozempic',
              tag: 'Podcast',
              links: [
                {
                  label: 'ACQ2 interview',
                  href: 'https://www.acquired.fm/acq2-episodes/the-scientific-journey-behind-ozempic-with-lotte-bjerre-knudsen-novo-nordisks-chief-scientific-advisor',
                },
                {
                  label: 'Novo Nordisk episode',
                  href: 'https://www.acquired.fm/episodes/novo-nordisk-ozempic',
                },
              ],
            },
            {
              title: 'JAMA — A Healthy Dialogue',
              meta: 'GLP-1s: from gut hormone discovery to a public health revolution · with Jens Juul Holst',
              tag: 'Podcast',
              links: [
                {
                  label: 'Listen',
                  href: 'https://jamanetwork.com/journals/jama/fullarticle/2853149',
                },
              ],
            },
            {
              title: 'Shivering with Curiosity',
              meta: 'American Academy of Achievement',
              tag: 'Podcast',
              links: [
                {
                  label: 'Listen',
                  href: 'https://podcasts.apple.com/us/podcast/lotte-bjerre-knudsen-shivering-with-curiosity/id1025864075?i=1000714989363',
                },
              ],
            },
            {
              title: 'Ground Truths — Eric Topol',
              meta: 'The scientist behind the GLP-1 drugs',
              tag: 'Podcast',
              links: [
                {
                  label: 'Listen',
                  href: 'https://erictopol.substack.com/p/lotte-bjerre-knudsen-the-scientist',
                },
              ],
            },
            {
              title: 'Mother of Molecules',
              meta: 'On the discovery of GLP-1',
              tag: 'Podcast',
              links: [
                { label: 'Listen', href: 'https://open.spotify.com/episode/63BSiJujEVUfz9BQRPSR2O' },
              ],
            },
          ],
        },
        {
          head: 'Talks and research',
          items: [
            {
              year: '2026',
              title: 'AGM Webinar Series',
              meta: 'NIH · National Center for Advancing Translational Sciences',
              tag: 'Lecture',
              links: [
                {
                  label: 'Series',
                  href: 'https://sites.google.com/ncats.nih.gov/agm-webinar-series/2026-webinars',
                },
                { label: 'Film', href: 'https://www.youtube.com/watch?v=nX0QAlql8O4' },
              ],
            },
            {
              year: '2025',
              title: 'Stanford Drug Discovery Symposium',
              meta: 'Lifetime Achievement Award lecture',
              tag: 'Lecture',
              links: [
                {
                  label: 'Recordings',
                  href: 'https://med.stanford.edu/cvi/events/sdds2025-stanford-drug-discovery-symposium/2025-day2-event-recordings.html',
                },
              ],
            },
            {
              title: 'Google Scholar',
              meta: 'Peer-reviewed publications and citations',
              tag: 'Profile',
              links: [{ label: 'View profile', href: scholar }],
            },
          ],
        },
      ],
    },
    contact: {
      label: 'Contact',
      heading: 'Contact Lotte',
      lead: 'For speaking, advisory, and research enquiries, write to Lotte’s office.',
      email: 'PA@lottebjerreknudsen.com',
      ctaText: 'Email Lotte',
      links: [{ label: 'Google Scholar', href: scholar }],
    },
    footer: {
      credits: [
        { prefix: 'Web design by', label: 'Andrew Denty', href: ANDREW_SITE },
        { prefix: 'Photography by', label: 'Petra Kleis', href: 'https://petrakleis.com' },
      ],
      entities: LEGAL_ENTITIES,
    },
  },

  da: {
    htmlLang: 'da',
    meta: {
      title: 'Lotte Bjerre Knudsen — Forsker & Foredragsholder',
      description:
        'Lotte Bjerre Knudsen — forskeren, hvis tre årtiers arbejde var med til at åbne for GLP-1-lægemidlerne, der ændrer behandlingen af fedme og diabetes verden over. Forsker, formidler og foredragsholder.',
    },
    langAria: 'Sprog',
    nav: [
      { href: '#about', label: 'Om' },
      ...(sections.mission ? [{ href: '#mission', label: 'Mission' }] : []),
      { href: '#awards', label: 'Priser & Medier' },
      { href: '#contact', label: sections.speaking ? 'Connect med Lotte' : 'Kontakt' },
    ],
    callouts: {
      label: 'Kort fortalt',
      items: [
        {
          text: 'Lotte Bjerre Knudsen brugte tre årtier på at transformere den måde verden behandler fedme og diabetes — og de lægemidler, hun var med til at skabe, ændrer nu millioner af liv.',
        },
        {
          text: 'Som en af arkitekterne bag GLP-1-revolutionen er Lotte Bjerre Knudsen en Lasker Award-vindende forsker og en af de mest dekorerede skikkelser inden for moderne lægemiddeludvikling.',
        },
      ],
    },
    about: {
      label: 'Om',
      heading: 'Om Lotte',
      body: [
        'Lotte Bjerre Knudsen er en pioner inden for fedmemedicin. Hun er en af de meget få, der så potentialet i at behandle fedme med GLP-1 og holdt fast i det i 30 år. Hun dimitterede fra Danmarks Tekniske Universitet (DTU) i 1989 og begyndte hos Novo Nordisk, hvor hun arbejdede i 36 år. Hendes første job var at identificere det enzym, der blev til verdens allerførste vaskemiddel til farvet tøj. Herefter blev hun en pioner inden for GLP-1 og arbejdede målrettet i årtier på at afdække biologien bag de nu så berømte lægemidler mod diabetes og fedme. I 2014 forsvarede hun sin doktordisputats i medicinsk videnskab på Københavns Universitet. Hendes seneste rolle hos Novo Nordisk var Chief Scientific Advisor og leder af IDEA, Innovation and Data Experimentation Advancement, hvor hun arbejdede på at fremme kombinationen af biologi, kunstig intelligens og iværksætteri.',
        'Hun er i dag æresprofessor i translationel medicin ved Aarhus Universitet.',
        'Lotte er en af verdens mest dekorerede forskere. Hun er den eneste dansker, der nogensinde har vundet en Lasker Award, som populært kaldes Amerikas Nobelpris. Andre prestigefyldte priser inkluderer The Breakthrough Prize of Life Science. American Association for the Advancement of Science og tidsskriftet Science har ligeledes tildelt Lotte deres Breakthrough Prize.',
      ],
      facts: [
        { value: '36 år', label: 'hos Novo Nordisk' },
        { value: '30 år', label: 'som GLP-1-pioner' },
        { value: 'Æresprofessor', label: 'Aarhus Universitet' },
      ],
    },
    mission: {
      label: 'Min mission',
      statement:
        'Efter at have været med til at skabe den måske mest revolutionerende nye medicin nogensinde er det min mission at bruge den platform – som forsker, formidler og leder – til at hjælpe med at bekæmpe afhængighed i alle former: mad, alkohol, stoffer, digitale medier og overforbrug, samt at inspirere en hel generation af unge forskere til at føre videnskaben længere end vi hidtil har troet muligt.',
    },
    speaking: {
      label: 'Connect med Lotte',
      heading: 'Book Lotte til et foredrag',
      lead: 'Lotte er en internationalt anerkendt foredragsholder, der taler med stor passion og viden — og efterlader sit publikum både klogere og gladere.',
      body: 'Fra de første forsøg i laboratoriet til de lægemidler, der i dag forandrer verden, har Lotte været med hele vejen. Foredragene tilpasses det enkelte publikum — mere eller mindre formelle, mere eller mindre videnskabelige — så de også er for dig, der ikke kender emnet i forvejen.',
      questionsIntro: 'Et foredrag kan tage dig med ind i:',
      questions: [
        'Biologien og historien bag lægemidlerne — og hvordan og hvorfor de egentlig virker.',
        'Hvordan man arbejder tålmodigt med noget i årtier uden at miste motivationen eller passionen.',
        'Hvordan man bliver ved med at drømme om løsninger på verdens største problemer.',
        'Hvorfor Lotte i videnskabelige kredse er kendt som “The Lady in Pink”.',
      ],
    },
    mentor: {
      label: 'Mentoring',
      heading: 'Rådgivning & sparring',
      body: 'Personlig rådgivning og sparring på din rejse i videnskaben.',
      details: ['30-minutters sessioner', 'Udvalgte dage, kl. 16.00–17.00 (dansk tid)'],
      ctaText: 'Skriv om mentoring',
      mailSubject: 'Forespørgsel om mentoring',
    },
    recognition: {
      label: 'Priser',
      heading: 'Anerkendt på tværs af medicin og videnskab',
      groups: [
        {
          head: 'de største priser',
          items: [
            {
              year: '2024',
              title: 'Lasker~DeBakey Clinical Medical Research Award',
              slot: 'lasker',
              meta: 'Lasker Foundation · sammen med Svetlana Mojsov og Joel Habener',
              links: [
                {
                  label: 'Begrundelse',
                  href: 'https://laskerfoundation.org/winners/glp-1-based-therapy-for-obesity/',
                },
                {
                  label: 'Takketale',
                  href: 'https://laskerfoundation.org/winners/glp-1-based-therapy-for-obesity/#tab-58427e5064503b905c8',
                },
              ],
            },
            {
              year: '2025',
              title: 'Breakthrough Prize in Life Sciences',
              slot: 'breakthrough',
              meta: 'Breakthrough Prize Foundation · sammen med Jens Juul Holst, Joel Habener, Svetlana Mojsov og Daniel Drucker',
              links: [
                { label: 'Begrundelse', href: 'https://breakthroughprize.org/Laureates/L3974' },
                { label: 'Ceremoni', href: 'https://breakthroughprize.org/Ceremonies/11' },
                { label: 'Film', href: 'https://www.youtube.com/watch?v=gSPuYhmHtXA' },
              ],
            },
            {
              year: '2024',
              title: 'Mani L. Bhaumik Breakthrough of the Year Award',
              meta: 'Science / AAAS · delt med Richard DiMarchi',
              links: [
                {
                  label: 'Omtale',
                  href: 'https://www.aaas.org/news/innovators-glp-1-obesity-bhaumik-breakthrough',
                },
              ],
            },
          ],
        },
        {
          head: 'Flere priser',
          items: [
            {
              year: '2026',
              title: 'Cameron Prize for Therapeutics',
              meta: 'University of Edinburgh',
              links: [
                {
                  label: 'Omtale',
                  href: 'https://web.archive.org/web/20260309215102/https://www.ed.ac.uk/news/trio-honoured-for-transformational-obesity-treatment',
                },
                {
                  label: 'Wikipedia',
                  href: 'https://en.wikipedia.org/wiki/Cameron_Prize_for_Therapeutics_of_the_University_of_Edinburgh',
                },
              ],
            },
            {
              year: '2024',
              title: 'Fierce 50',
              meta: 'Fierce Pharma',
              links: [
                {
                  label: 'Interview',
                  href: 'https://www.fiercepharma.com/pharma/lotte-bjerre-knudsen',
                },
              ],
            },
            {
              year: '2025',
              title: 'Friends of the National Library of Medicine Award',
              slot: 'fnlm',
              meta: 'FNLM Annual Gala',
              links: [{ label: 'Gala', href: 'https://www.fnlm.org/2025-fnlm-annual-gala/' }],
            },
            {
              year: '2024',
              title: 'Golden Plate Award',
              slot: 'academy',
              meta: 'American Academy of Achievement',
              links: [{ label: 'Galleri', href: 'https://achievement.org/summit/2024/#gallery' }],
            },
            {
              year: '2023',
              title: 'Paul Langerhans medaljen',
              meta: 'Deutsche Diabetes Gesellschaft (DDG)',
              links: [
                {
                  label: 'Wikipedia',
                  href: 'https://de.wikipedia.org/wiki/Paul-Langerhans-Medaille',
                },
              ],
            },
            {
              year: '2023',
              title: 'STAT Biomedical Innovation Award',
              meta: 'STAT',
              links: [
                {
                  label: 'Profil',
                  href: 'https://www.statnews.com/status-list/2024/lotte-knudsen/',
                },
                {
                  label: 'Video',
                  href: 'https://www.facebook.com/statnews/videos/lotte-knudsen-who-pushed-novo-nordisk-into-the-ozempic-era-won-the-2023-stat-inn/1060482181802275/',
                },
              ],
            },
          ],
        },
      ],
    },
    media: {
      label: 'Medier',
      heading: 'På tryk,<br>på film og i æteren',
      groups: [
        {
          head: 'Presse',
          items: [
            {
              title: 'Monocle',
              meta: 'Forskeren bag vægttabsmidlerne',
              tag: 'Magasin',
              links: [
                {
                  label: 'Læs',
                  href: 'https://monocle.com/affairs/health/ozempic-wegovy-weight-loss-jabs-glp1-scientist-novo-nordisk/',
                },
              ],
            },
            {
              title: 'Der Spiegel',
              meta: 'Interview med opfinderen af vægttabsmidlerne',
              tag: 'Interview',
              links: [
                {
                  label: 'Læs',
                  href: 'https://www.spiegel.de/international/business/interview-with-weight-loss-drugs-inventor-lotte-bjerre-knudsen-a-f2815950-ff24-4e87-b7e9-b6d6c1982d57',
                },
              ],
            },
          ],
        },
        {
          head: 'Film og TV',
          items: [
            {
              title: '60 Minutes',
              meta: 'CBS — historien om GLP-1',
              tag: 'Tv',
              links: [{ label: 'Se', href: 'https://www.youtube.com/watch?v=oHI1Dkqdujc' }],
            },
            {
              title: 'The Story of GLP-1',
              meta: 'Novo Nordisk Fonden · en filmserie i fire dele',
              tag: 'Film',
              links: [
                {
                  label: 'Afsnit 1',
                  href: 'https://novonordiskfonden.dk/en/video/the-story-of-glp-1-a-diabetes-doctors-dream-episode-1/',
                },
                {
                  label: 'Afsnit 2',
                  href: 'https://novonordiskfonden.dk/en/video/the-story-of-glp-1-if-you-dont-fix-this-episode-2/',
                },
                {
                  label: 'Afsnit 3',
                  href: 'https://novonordiskfonden.dk/en/video/the-story-of-glp-1-a-steak-well-done-episode-3/',
                },
                {
                  label: 'Afsnit 4',
                  href: 'https://novonordiskfonden.dk/en/video/the-story-of-glp-1-the-next-really-good-idea-episode-4/',
                },
              ],
            },
          ],
        },
        {
          head: 'Podcasts',
          items: [
            {
              title: 'Jagten på det evige liv',
              meta: 'DR · fra idé til verdenssucces',
              tag: 'Podcast',
              links: [
                {
                  label: 'Lyt',
                  href: 'https://www.dr.dk/lyd/special-radio/jagten-paa-det-evige-liv/jagten-paa-det-evige-liv-2/fra-ide-til-verdenssucces-lotte-bjerre-knudsen-om-glp-1-revolutionen-16122593024',
                },
              ],
            },
            {
              title: 'Hjernekassen på P1',
              meta: 'DR P1 · om GLP-1',
              tag: 'Podcast',
              links: [
                {
                  label: 'Lyt',
                  href: 'https://www.dr.dk/lyd/p1/hjernekassen-paa-p1/hjernekassen-paa-p1-2025/glp-1-11032522242',
                },
              ],
            },
            {
              title: 'Acquired',
              meta: 'Den videnskabelige rejse bag Ozempic',
              tag: 'Podcast',
              links: [
                {
                  label: 'ACQ2-interview',
                  href: 'https://www.acquired.fm/acq2-episodes/the-scientific-journey-behind-ozempic-with-lotte-bjerre-knudsen-novo-nordisks-chief-scientific-advisor',
                },
                {
                  label: 'Novo Nordisk-afsnit',
                  href: 'https://www.acquired.fm/episodes/novo-nordisk-ozempic',
                },
              ],
            },
            {
              title: 'JAMA — A Healthy Dialogue',
              meta: 'GLP-1: fra opdagelsen af et tarmhormon til en revolution i folkesundheden · med Jens Juul Holst',
              tag: 'Podcast',
              links: [
                {
                  label: 'Lyt',
                  href: 'https://jamanetwork.com/journals/jama/fullarticle/2853149',
                },
              ],
            },
            {
              title: 'Shivering with Curiosity',
              meta: 'American Academy of Achievement',
              tag: 'Podcast',
              links: [
                {
                  label: 'Lyt',
                  href: 'https://podcasts.apple.com/us/podcast/lotte-bjerre-knudsen-shivering-with-curiosity/id1025864075?i=1000714989363',
                },
              ],
            },
            {
              title: 'Ground Truths — Eric Topol',
              meta: 'Forskeren bag GLP-1-lægemidlerne',
              tag: 'Podcast',
              links: [
                {
                  label: 'Lyt',
                  href: 'https://erictopol.substack.com/p/lotte-bjerre-knudsen-the-scientist',
                },
              ],
            },
            {
              title: 'Mother of Molecules',
              meta: 'Om opdagelsen af GLP-1',
              tag: 'Podcast',
              links: [
                { label: 'Lyt', href: 'https://open.spotify.com/episode/63BSiJujEVUfz9BQRPSR2O' },
              ],
            },
          ],
        },
        {
          head: 'Foredrag og forskning',
          items: [
            {
              year: '2026',
              title: 'AGM Webinar Series',
              meta: 'NIH · National Center for Advancing Translational Sciences',
              tag: 'Foredrag',
              links: [
                {
                  label: 'Serie',
                  href: 'https://sites.google.com/ncats.nih.gov/agm-webinar-series/2026-webinars',
                },
                { label: 'Film', href: 'https://www.youtube.com/watch?v=nX0QAlql8O4' },
              ],
            },
            {
              year: '2025',
              title: 'Stanford Drug Discovery Symposium',
              meta: 'Foredrag ved Lifetime Achievement Award',
              tag: 'Foredrag',
              links: [
                {
                  label: 'Optagelser',
                  href: 'https://med.stanford.edu/cvi/events/sdds2025-stanford-drug-discovery-symposium/2025-day2-event-recordings.html',
                },
              ],
            },
            {
              title: 'Google Scholar',
              meta: 'Peer-reviewede publikationer og citationer',
              tag: 'Profil',
              links: [{ label: 'Se profil', href: scholar }],
            },
          ],
        },
      ],
    },
    contact: {
      label: 'Kontakt',
      heading: 'Kontakt Lotte',
      lead: 'For foredrag, rådgivning og forskningshenvendelser, skriv til Lottes kontor.',
      email: 'PA@lottebjerreknudsen.com',
      ctaText: 'Skriv til Lotte',
      links: [{ label: 'Google Scholar', href: scholar }],
    },
    footer: {
      credits: [
        { prefix: 'Webdesign af', label: 'Andrew Denty', href: ANDREW_SITE },
        { prefix: 'Fotografi af', label: 'Petra Kleis', href: 'https://petrakleis.com' },
      ],
      entities: LEGAL_ENTITIES,
    },
  },
};
