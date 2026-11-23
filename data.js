// All site content lives here. Edit text, links and order in one place.

export const LINKEDIN = 'https://www.linkedin.com/in/kezia-valerine-793673411/';
export const INSTAGRAM = 'https://www.instagram.com/vale.portofolio';
export const EMAIL = 'createbykezia@gmail.com';

const seq = (prefix, n) =>
  Array.from(
    { length: n },
    (_, i) => `${prefix}-${String(i + 1).padStart(2, '0')}`,
  );

export const courses = [
  { id: 'starters', name: 'Starters', note: 'to begin with' },
  { id: 'mains', name: 'Mains', note: 'the big ones' },
  { id: 'sweets', name: 'Sweets', note: 'to end on a high' },
];

export const dishes = [
  {
    slug: 'gelang-hera',
    course: 'starters',
    title: 'Gelang Hera Buah yang Unik',
    kind: 'Children’s picture book',
    year: '2025',
    role: 'Book Illustrator & Layout Designer',
    tags: ['Illustration', 'Layout', 'Storytelling'],
    accent: '#d8a548',
    pick: true,
    cover: { src: 'gelang-02', fit: 'cover', pos: '50% 40%' },
    link: { href: 'http://bit.ly/43qNHmG', label: 'View publication' },
    desc: [
      'As the illustrator of “Gelang Hera Buah yang Unik”, I was responsible for bringing the story to life through visual storytelling. I created the character designs, environments, and illustrations while ensuring that each scene clearly communicated the emotions and events in the story.',
      'To create an engaging experience for young readers, I researched children’s book illustration styles, color usage, and page composition.',
      'Through this project, I combined illustration, storytelling, and layout design to produce a visually appealing book that promotes creativity, family values, and cultural representation while making the story easy and enjoyable for children to understand.',
    ],
    gallery: {
      type: 'hscroll',
      title: 'Turn the pages',
      ratio: 865 / 610,
      items: seq('gelang', 13).map((src, i) => ({
        src,
        alt:
          i === 0
            ? 'Book cover: Gelang Hera Buah yang Unik'
            : `Book spread ${i + 1}`,
        cap: i === 0 ? 'Cover' : `Spread ${i + 1}`,
      })),
    },
  },
  {
    slug: 'miracle-cell-7',
    course: 'starters',
    title: 'Re-design Poster into Horror Theme',
    kind: 'Miracle in Cell No. 7 · movie poster',
    year: '2026',
    role: 'Graphic Designer',
    tags: ['Poster', 'Concept', 'Horror'],
    accent: '#c4472f',
    cover: {
      src: 'poster-after',
      fit: 'contain',
      pos: '50% 50%',
      bg: 'radial-gradient(120% 90% at 50% 40%, #1d2a24, #0e1512)',
    },
    link: { href: 'https://bit.ly/4v4kI4c', label: 'View publication' },
    desc: [
      'The original poster of Miracle in Cell No. 7 focuses on the love between a father and his daughter. The poster usually uses bright colors and a warm feeling. The characters look happy or emotional, showing the family relationship and touching moments in the movie. The main goal of the original poster is to show that the movie is a sad but heartwarming story about family and love.',
      'In the redesigned poster, the concept is darker and more dramatic. The characters are placed around a hole and looking down. This makes the audience feel like they are inside the hole and everyone is looking at them. The purpose of this redesign is to make the poster look like a horror movie. The characters looking down into the hole make the audience feel like they are trapped and being watched. The dark colors and shocked expressions create a scary and mysterious atmosphere that makes people curious about the story.',
    ],
    gallery: {
      type: 'compare',
      title: 'Before & after',
      before: {
        src: 'poster-before',
        alt: 'Original Miracle in Cell No. 7 poster, bright and warm',
      },
      after: {
        src: 'poster-after',
        alt: 'Redesigned poster with a dark horror theme',
      },
      phone: {
        src: 'poster-phone',
        alt: 'Redesigned poster shown on a phone held in a hand',
      },
    },
  },
  {
    slug: 'selerine',
    course: 'mains',
    title: 'Selerine',
    kind: 'Digital banking app concept',
    year: 'Concept',
    role: 'UI Designer',
    tags: ['UI Design', 'Mobile app', 'Fintech'],
    accent: '#5fa3a6',
    pick: true,
    cover: { src: 'selerine-wide', fit: 'cover', pos: '50% 40%' },
    link: { href: 'https://selerine.vercel.app', label: 'Visit website' },
    desc: [
      'Selerine is a digital banking app concept designed to make managing money easier, simpler, and more enjoyable, especially for younger users. I created this project with a focus on modern UI design, combining a clean interface, attractive visuals, and easy-to-use features.',
      'The app allows users to manage their money, make transfers, pay with QRIS, track their expenses, and set personal savings goals in one place. My goal was to create a banking experience that feels modern, practical, and engaging, so young users can feel more comfortable managing their finances in their daily lives.',
    ],
    gallery: {
      type: 'phone',
      title: 'What’s on the plate',
      image: {
        src: 'selerine-wide',
        alt: 'Selerine app splash screen on a phone held in a hand',
      },
      features: [
        'Manage money',
        'Transfers',
        'Pay with QRIS',
        'Track expenses',
        'Savings goals',
      ],
    },
  },
  {
    slug: 'bank-mayapada',
    course: 'mains',
    title: 'Re-design Bank Mayapada Logo',
    kind: 'Brand identity',
    year: '2026',
    role: 'Graphic Designer',
    tags: ['Branding', 'Logo', 'Identity system'],
    accent: '#7c9a77',
    pick: true,
    cover: { src: 'mayapada-09', fit: 'cover', pos: '50% 50%' },
    link: { href: 'https://bit.ly/4xlIQAP', label: 'View publication' },
    desc: [
      'This project focuses on redesigning the visual identity of Bank Mayapada to create a more modern, professional, and memorable brand image. After analyzing the existing logo, I researched banking industry branding, logo design principles, color psychology, and the visual identities of other financial institutions to better understand how visual design can communicate trust, stability, and growth.',
      'Based on this research, I developed a new logo concept inspired by financial growth and continuous development, using a flowing symbol to represent progress and future opportunities. The combination of green and blue reflects growth, security, trust, and professionalism, while the clean sans-serif typography improves readability and creates a modern appearance.',
      'To ensure consistency across different applications, I also developed a complete brand identity system, including logo variations, color palettes, typography guidelines, stationery designs, and promotional merchandise. Through this project, I strengthened my skills in branding, graphic design, and visual communication while creating a cohesive visual identity that effectively represents Bank Mayapada’s values and vision.',
    ],
    gallery: {
      type: 'stack',
      title: 'The brand book',
      ratio: 1.42,
      items: [
        {
          src: 'mayapada-01',
          alt: 'Logo philosophy slide',
          cap: 'Filosofi Logo',
        },
        {
          src: 'mayapada-02',
          alt: 'Visual character slide',
          cap: 'Karakter Visual',
        },
        {
          src: 'mayapada-03',
          alt: 'Logo configuration slide',
          cap: 'Konfigurasi Logo',
        },
        {
          src: 'mayapada-04',
          alt: 'Logo proportion slide',
          cap: 'Proporsi Logo',
        },
        {
          src: 'mayapada-05',
          alt: 'Logo color variations slide',
          cap: 'Variasi Warna Logo',
        },
        {
          src: 'mayapada-06',
          alt: 'Identity typography slide',
          cap: 'Tipografi Identitas',
        },
        {
          src: 'mayapada-07',
          alt: 'Identity color palette slide',
          cap: 'Palet Warna Identitas',
        },
        {
          src: 'mayapada-08',
          alt: 'Stationery and documentation mockups',
          cap: 'Alat Perkantoran dan Perdokumentasi',
        },
        {
          src: 'mayapada-09',
          alt: 'Promotional merchandise mockups',
          cap: 'Cinderamata',
        },
      ],
    },
  },
  {
    slug: 'campus-life',
    course: 'sweets',
    title: 'Campus Life',
    kind: 'Photo series',
    year: '2026',
    role: 'Photographer & Layout Designer',
    tags: ['Photography', 'Layout', 'Cinematic'],
    accent: '#c9704f',
    cover: { src: 'campus-02', fit: 'cover', pos: '50% 50%' },
    link: { href: 'http://bit.ly/43qNHmG', label: 'View publication' },
    desc: [
      'This photography project aims to capture meaningful moments of student life and present them through a cinematic visual style inspired by streaming platform interfaces. Before taking the photos, I researched photography techniques, camera settings, and visual storytelling to understand how lighting, composition, ISO, aperture, and color can influence emotions and create atmosphere.',
      'The main goal was not only to document activities, but also to make viewers feel the emotions behind each moment, such as focus, friendship, reflection, and personal growth. To achieve this, I carefully adjusted the ISO and aperture settings to control light, depth of field, and image clarity, while using warm and dark color tones to create a dramatic and intimate mood.',
      'Through this project, I combined technical photography skills with storytelling and design principles to create images that are visually engaging and emotionally meaningful, allowing viewers to connect with the stories behind each photograph.',
    ],
    gallery: {
      type: 'hscroll',
      title: 'Now showing',
      ratio: 1500 / 1064,
      items: [
        {
          src: 'campus-01',
          alt: 'Close-up of a student’s eyes in a cinematic frame',
          cap: 'Still 1',
        },
        {
          src: 'campus-02',
          alt: 'Quiet Time Alone: a student praying',
          cap: 'Quiet Time Alone',
        },
        {
          src: 'campus-03',
          alt: 'A student working on a laptop in the library',
          cap: 'Still 3',
        },
        {
          src: 'campus-04',
          alt: 'Presentation Day: a student studying in the library',
          cap: 'Presentation Day',
        },
        {
          src: 'campus-05',
          alt: 'Two friends laughing between classes',
          cap: 'Still 5',
        },
        {
          src: 'campus-06',
          alt: 'First Day on Campus: a camera in a hand',
          cap: 'First Day on Campus',
        },
      ],
    },
  },
  {
    slug: 'final-project',
    course: 'sweets',
    title: 'Final Project',
    kind: '3D modeling & rendering',
    year: '2026',
    role: 'Graphic Designer',
    tags: ['3D', 'Product visual', 'Character'],
    accent: '#d8a548',
    cover: { src: 'final-04', fit: 'cover', pos: '50% 50%' },
    link: { href: 'https://bit.ly/4v4kI4c', label: 'View publication' },
    desc: [
      'This project was created as part of my university examination to demonstrate my skills in 3D modeling, texturing, lighting, composition, and rendering. The project consists of two different themes: a tea cup series and a Funko Pop inspired character based on Catwoman.',
      'Before creating the models, I researched product photography, toy design, materials, lighting techniques, and composition to understand how to make 3D objects look realistic and visually appealing. The main challenge was creating detailed models while maintaining a balanced composition and realistic lighting. To solve this, I carefully adjusted the materials, textures, camera angles, and lighting setup to highlight the shapes, colors, and details of each object.',
      'The tea cup series was designed to showcase elegant product visualization, while the Catwoman inspired Funko Pop focused on character design and storytelling. Through this project, I combined creativity and technical skills to create high quality renders that demonstrate my understanding of 3D design principles and visual communication.',
    ],
    gallery: {
      type: 'grid',
      title: 'Fresh out of the render',
      items: [
        {
          src: 'final-01',
          alt: 'Tea cup render, blue and white porcelain',
          w: 2,
        },
        {
          src: 'final-04',
          alt: 'Catwoman inspired Funko Pop character render',
          w: 1,
        },
        {
          src: 'final-02',
          alt: 'Glass tea cup render with a warm drink',
          w: 1,
        },
        {
          src: 'final-05',
          alt: 'Funko Pop character beside a duck figure',
          w: 2,
        },
        { src: 'final-03', alt: 'Tea set render with several cups', w: 2 },
        {
          src: 'final-06',
          alt: 'Character render with soft bokeh lights',
          w: 1,
        },
        { src: 'final-07', alt: 'Porcelain tea cup close-up', w: 1 },
        { src: 'final-08', alt: 'Character and lamp composition', w: 2 },
      ],
    },
  },
];

export const tools = [
  'Illustrator',
  'Photoshop',
  'After Effects',
  'Blender',
  'Figma',
  'Canva',
  'CapCut',
];

export const marquee = [
  'Illustration',
  'Branding',
  'UI Design',
  'Photography',
  '3D',
  'Poster',
];
