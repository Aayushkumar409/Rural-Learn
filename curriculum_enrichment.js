// ─────────────────────────────────────────────────────────────────────────────
//  RuralLearn — Class-Tailored Curriculum Enrichment Engine
//  Provides deep-dive educational theory, step-by-step worked examples,
//  real-world rural analogies, bilingual Hinglish, formula cards, and TTS audio
//  strictly calibrated for Classes 5 through 10.
// ─────────────────────────────────────────────────────────────────────────────

export const CLASS_TIER_META = {
  'Class 5': {
    tier: 'Primary Foundations',
    subtitle: 'Relatable, visual, and intuitive fundamentals with everyday village examples',
    difficulty: 'Foundational',
    readingTime: '10–12 Mins',
    pedagogy: 'Visual storytelling, concrete counting, friendly rules, and zero jargon.'
  },
  'Class 6': {
    tier: 'Upper Primary Discovery',
    subtitle: 'Connecting physical observations to structured definitions and number systems',
    difficulty: 'Foundational',
    readingTime: '12–15 Mins',
    pedagogy: 'Hands-on comparisons, number lines, patterns, and interactive observations.'
  },
  'Class 7': {
    tier: 'Middle School Concepts',
    subtitle: 'Step-by-step mathematical procedures, scientific inquiry, and civic awareness',
    difficulty: 'Intermediate',
    readingTime: '15–18 Mins',
    pedagogy: 'Procedural problem-solving, algebraic formulations, and environmental context.'
  },
  'Class 8': {
    tier: 'Advanced Middle School',
    subtitle: 'Abstract algebraic thinking, physical laws, and national constitutional history',
    difficulty: 'Intermediate',
    readingTime: '18–20 Mins',
    pedagogy: 'Multi-step algebraic operations, scientific proofs, and analytical thinking.'
  },
  'Class 9': {
    tier: 'Secondary School Core',
    subtitle: 'Rigorous conceptual models, geometric proofs, and global historical perspectives',
    difficulty: 'Secondary Core',
    readingTime: '20–25 Mins',
    pedagogy: 'Formal definitions, derivations, SI units, and structural analysis.'
  },
  'Class 10': {
    tier: 'Board Examination Mastery',
    subtitle: 'CBSE/State Board syllabus depth, theorems, numericals, and scoring blueprints',
    difficulty: 'Board Standard',
    readingTime: '22–28 Mins',
    pedagogy: 'Exam-focused theorems, step-marking strategies, common traps, and rapid revision.'
  }
};

export const CLASS_SUBJECT_OVERVIEWS = {
  mathematics: {
    'Class 5': {
      focus: 'Numbers up to Lakhs, Basic Fractions, and Shape Geometry',
      tagline: 'Building rock-solid arithmetic confidence using market trades and visual fractions.',
      goals: ['Read and write 5-digit numbers with Indian place values', 'Master carry and borrow operations effortlessly', 'Understand fractions as equal parts of whole items', 'Identify angles, lines, and 2D geometric shapes']
    },
    'Class 6': {
      focus: 'Number Systems, Whole Numbers, Integers & Geometry',
      tagline: 'Moving from counting numbers to negative integers and coordinate geometry.',
      goals: ['Compare Indian vs International large number systems', 'Master number lines with positive and negative integers', 'Understand factors, multiples, prime factorization', 'Explore ratios, proportions, and basic polygons']
    },
    'Class 7': {
      focus: 'Integers, Rational Decimals, Simple Equations & Triangle Properties',
      tagline: 'Bridging arithmetic into linear algebra and geometric proofs.',
      goals: ['Perform signed integer and fractional operations (+, −, ×, ÷)', 'Set up and solve single-variable linear equations', 'Apply the Triangle Inequality and Angle Sum property (180°)', 'Compute 2D perimeter and area for standard land plots']
    },
    'Class 8': {
      focus: 'Rational Numbers, Linear Equations, Mensuration & Exponents',
      tagline: 'Formalizing algebraic structures and multi-dimensional calculations.',
      goals: ['Understand properties of rational numbers (closure, commutative, associative)', 'Solve multi-step linear equations with brackets and fractions', 'Calculate surface areas and volumes of 3D solids', 'Analyze frequency distributions and pie charts']
    },
    'Class 9': {
      focus: 'Irrational Numbers, Polynomials, Coordinate Geometry & Congruence',
      tagline: 'Rigorous mathematical rigor preparing students for higher secondary science & tech.',
      goals: ['Locate irrational numbers like √2, √3 on the real number line', 'Factorize polynomials using Factor Theorem & Remainder Theorem', 'Master Cartesian coordinates (x, y) quadrants', 'Prove triangle congruence using SAS, ASA, SSS, and RHS theorems']
    },
    'Class 10': {
      focus: 'Real Numbers, Quadratic Equations, Arithmetic Progressions & Trigonometry',
      tagline: 'High-yield board syllabus focusing on theorem proofs, discriminant, and trigonometry.',
      goals: ['Apply Euclid\'s Division Lemma and prove irrationality (√5 is irrational)', 'Find quadratic roots using Sridharacharya formula and factorization', 'Compute nth term and sum of Arithmetic Progressions (AP)', 'Master trigonometric ratios (sin, cos, tan) and standard identities']
    }
  },
  science: {
    'Class 5': {
      focus: 'Living vs Non-Living, Human Nutrition & Water Cycle',
      tagline: 'Observing nature, food nutrients, and water conservation around the village.',
      goals: ['Distinguish living organisms by respiration, growth, and reproduction', 'Identify carbohydrates, proteins, fats, vitamins, and minerals', 'Understand water evaporation, condensation, and rain collection', 'Practice hygienic habits for community health']
    },
    'Class 6': {
      focus: 'Plant Sources of Food, Material Properties & Skeletal Movement',
      tagline: 'Scientific observation of plant parts, animal products, and material separation.',
      goals: ['Classify herbivores, carnivores, omnivores, and plant edible parts', 'Separate mixtures using winnowing, sieving, filtration, and decantation', 'Understand how bones, joints, and muscles create movement', 'Identify transparent, translucent, and opaque materials']
    },
    'Class 7': {
      focus: 'Plant Autotrophic Nutrition, Heat Conduction & Acids-Bases',
      tagline: 'Investigating chemical changes, thermal energy flow, and pH indicators.',
      goals: ['Detail the photosynthesis chemical reaction and stomatal gas exchange', 'Differentiate conduction, convection, and radiation with everyday examples', 'Test acids and bases using natural indicators like turmeric and litmus', 'Understand neutralization reactions in digestion and soil farming']
    },
    'Class 8': {
      focus: 'Modern Crop Production, Cell Biology & Pressure Mechanics',
      tagline: 'Connecting agricultural technology with microscopic biology and force physics.',
      goals: ['Explore Kharif/Rabi crops, drip irrigation, and bio-fertilizers', 'Compare plant vs animal cell structures under light microscopy', 'Define force, friction, and pressure (P = F / A) with hydraulic examples', 'Understand sound vibration, frequency, and amplitude']
    },
    'Class 9': {
      focus: 'Particulate Nature of Matter, Atoms & Newton\'s Laws of Motion',
      tagline: 'Foundations of physical chemistry and classical mechanics with vectors.',
      goals: ['Explain states of matter via kinetic molecular theory and latent heat', 'Write chemical formulas using valencies and the Mole Concept', 'Master Newton\'s 3 Laws of Motion with momentum conservation (p = mv)', 'Apply Archimedes\' Principle and Universal Gravitation (G)']
    },
    'Class 10': {
      focus: 'Chemical Reactions, Life Processes & Optics (Reflection/Refraction)',
      tagline: 'Board-level bio-chemistry and optics with ray diagrams and balanced equations.',
      goals: ['Balance redox, precipitation, and neutralization chemical equations', 'Detail human digestion, double circulation, respiration, and excretion', 'Draw ray diagrams for concave/convex mirrors and lenses (1/f = 1/v - 1/u)', 'Apply Ohm\'s Law (V = IR), Joule\'s heating law, and parallel circuits']
    }
  },
  english: {
    'Class 5': {
      focus: 'Nouns, Action Verbs, Capitalization & Simple Sentence Construction',
      tagline: 'Expressing thoughts clearly in English with confident vocabulary and grammar.',
      goals: ['Identify proper, common, collective, and abstract nouns', 'Use present, past, and future tense action verbs correctly', 'Punctuate sentences with full stops, commas, and question marks', 'Write short 5-sentence personal paragraphs']
    },
    'Class 6': {
      focus: '8 Parts of Speech, Continuous Tenses & Story Comprehension',
      tagline: 'Expanding grammatical fluency and active reading of short stories.',
      goals: ['Recognize adjectives, adverbs, prepositions, and conjunctions', 'Form present continuous and past continuous sentences', 'Read passages and answer factual/inferential questions', 'Write descriptive paragraphs about village festivals and family']
    },
    'Class 7': {
      focus: 'Active vs Passive Voice, Direct to Indirect Speech & Formal Composition',
      tagline: 'Transforming sentences and writing coherent narrative essays.',
      goals: ['Convert active sentences into passive voice using past participles (V3)', 'Report dialogues accurately using indirect speech rules', 'Write organized letters to school principals and village authorities', 'Expand vocabulary with antonyms, synonyms, and prefixes/suffixes']
    },
    'Class 8': {
      focus: 'Reported Speech Mastery, Modal Auxiliaries & Formal Letter Formats',
      tagline: 'Polishing persuasive writing, grammatical accuracy, and official correspondence.',
      goals: ['Master modal verbs (can, could, may, might, must, should) with nuances', 'Convert interrogative and imperative sentences into reported speech', 'Draft formal complaint and application letters following standard CBSE layouts', 'Write analytical paragraph summaries']
    },
    'Class 9': {
      focus: 'Complex Clauses, Subject-Verb Concord & Debate Writing',
      tagline: 'Refining stylistic maturity, debate arguments, and complex syntactic structures.',
      goals: ['Master noun, adjective, and adverbial dependent clauses', 'Ensure rigorous Subject-Verb Concord in tricky compound sentences', 'Draft persuasive speeches and debates with strong thesis statements', 'Analyze figurative literary devices (metaphors, similes, personification)']
    },
    'Class 10': {
      focus: 'Advanced Grammar Editing, Poetic Meter/Themes & Board Examination Writing',
      tagline: 'Acing CBSE Board English with flawless error-spotting and thematic essays.',
      goals: ['Detect grammatical omission and editing errors in board-style passages', 'Interpret deeper symbolism and philosophical themes in prescribed poetry', 'Compose high-scoring analytical paragraphs and formal editorial letters', 'Demonstrate rich vocabulary with idiom and phrasing precision']
    }
  },
  computer: {
    'Class 5': {
      focus: 'Introduction to Computers, Hardware vs Software & Safe Mouse/Keyboard Usage',
      tagline: 'Demystifying computers, typing skills, and digital literacy basics.',
      goals: ['Identify CPU, Monitor, Keyboard, Mouse, and Storage devices', 'Distinguish operating system software from application programs', 'Master folder creation, saving files, and typing accurately', 'Practice good screen posture and digital hygiene']
    },
    'Class 6': {
      focus: 'Input-Output Units, Memory Units (KB, MB, GB) & Block Programming',
      tagline: 'Understanding computer architecture and beginning algorithmic thinking.',
      goals: ['Classify primary memory (RAM/ROM) vs secondary storage (SSD/HDD)', 'Convert between bits, bytes, KB, MB, and GB', 'Create step-by-step sequential instructions for solving tasks', 'Understand basic internet concepts and web browsers']
    },
    'Class 7': {
      focus: 'The Internet, Search Techniques & HTML Web Page Structuring',
      tagline: 'Learning how the World Wide Web operates and writing first HTML tags.',
      goals: ['Understand URLs, IP addresses, client-server models, and search queries', 'Write HTML documents using heading, paragraph, image, and link tags', 'Style basic web text with bold, italic, lists, and tables', 'Identify online security risks and strong password practices']
    },
    'Class 8': {
      focus: 'Python Basics: Variables, Data Types & Conditional If-Else Logic',
      tagline: 'Writing real code in Python to automate calculations and logical decisions.',
      goals: ['Write clean Python syntax with proper 4-space indentation', 'Use integers, floats, strings, and boolean values', 'Implement branching with if, elif, and else logic', 'Create automated arithmetic solvers for school math problems']
    },
    'Class 9': {
      focus: 'Python Loops, Custom Functions, Lists & Cyber Safety Laws',
      tagline: 'Building modular programs with loops, functions, lists, and digital ethics.',
      goals: ['Iterate through sequences using for loops and while loops', 'Define custom reusable functions with parameters and return values', 'Manipulate Python lists with indexing, slicing, and built-in methods', 'Understand cyberbullying, phishing, copyright, and IT ethics']
    },
    'Class 10': {
      focus: 'Advanced Python (Dictionaries/Tuples) & Relational Databases (SQL)',
      tagline: 'Mastering real-world data structures and writing SQL queries for database tables.',
      goals: ['Work with Python dictionaries (key-value pairs) and immutable tuples', 'Understand relational database concepts: tables, rows, columns, primary keys', 'Write SQL queries: SELECT, INSERT, UPDATE, DELETE with WHERE filters', 'Connect Python applications to database storage']
    }
  },
  social: {
    'Class 5': {
      focus: 'Physical Geography of India, 28 States & National Symbols',
      tagline: 'Discovering the magnificent landscapes, culture, and unity of India.',
      goals: ['Locate the Himalayas, Northern Plains, Thar Desert, and Peninsular Plateau', 'Name key Indian states, union territories, and capital cities', 'Understand the historical significance of the National Flag and Anthem', 'Appreciate the rich cultural and linguistic diversity across regions']
    },
    'Class 6': {
      focus: 'Historical Sources (Manuscripts/Coins), Diversity & Earth Coordinates',
      tagline: 'Learning how historians reconstruct the ancient past and how Earth rotates.',
      goals: ['Differentiate manuscripts, stone inscriptions, and archaeological artifacts', 'Understand why diversity strengthens India and how prejudice harms communities', 'Explain how Earth rotation causes day/night and revolution causes seasons', 'Read latitude, longitude, and map scale legends']
    },
    'Class 7': {
      focus: 'Medieval Sultanates & Mughals, Democratic Equality & Natural Resources',
      tagline: 'Exploring medieval Indian history, constitutional equality, and ecosystems.',
      goals: ['Trace political and cultural developments under Delhi Sultans and Mughals', 'Analyze Akbar\'s policy of religious harmony (Sulh-i-Kul)', 'Examine Article 15 of the Constitution prohibiting discrimination', 'Classify renewable vs non-renewable resources and water conservation']
    },
    'Class 8': {
      focus: 'The Indian Constitution, Land/Soil Resources & Freedom Movement',
      tagline: 'Mastering the pillars of Indian democracy, fundamental rights, and Gandhi\'s struggle.',
      goals: ['Explain the Preamble, Fundamental Rights, and separation of powers', 'Analyze soil degradation, terrace farming, and forest conservation', 'Trace the freedom struggle from the 1857 revolt to 1947 independence', 'Understand the role of the judiciary and rule of law']
    },
    'Class 9': {
      focus: 'The French Revolution, Modern World Democracy & Indian Geographical Location',
      tagline: 'Investigating global democratic revolutions and India\'s strategic geopolitical position.',
      goals: ['Analyze the social hierarchy, Bastille storming, and Declaration of Rights (1789)', 'Define universal adult franchise, free/fair elections, and constitutional democracy', 'Explain India\'s central location on the Indian Ocean and maritime trade routes', 'Examine standard meridian (82°30\' E) and time zone differences']
    },
    'Class 10': {
      focus: 'Nationalism in India, Federal Power Sharing & Global Economic Integration',
      tagline: 'High-yield board topics: Gandhian mass movements, 3-tier federalism, and MNC trade.',
      goals: ['Analyze the Non-Cooperation (1920), Civil Disobedience (1930), and Quit India (1942) movements', 'Explain India\'s 3-tier federal system (Union, State, Concurrent Lists & Panchayats)', 'Assess how multinational corporations (MNCs) and WTO impact Indian farmers and markets', 'Master board-exam map pointing for freedom struggle sites and major ports']
    }
  }
};

// Curated in-depth lesson knowledge base indexed by subject + class + normalized title key
const DEEP_LESSON_DATABASE = {
  // ── MATHEMATICS CLASS 5 ────────────────────────────────────────────────────
  'mathematics_class-5_numbers-and-place-value': {
    learningObjectives: [
      'Read and write 5-digit and 6-digit numbers in the Indian Place Value System up to Lakhs.',
      'Express any large number in expanded form (breaking down by place value).',
      'Compare and arrange large numbers in ascending and descending order.',
      'Identify the predecessor (1 less) and successor (1 more) of any given number.'
    ],
    deepDive: {
      introduction: 'In our everyday village life—whether counting sacks of wheat produced during the Rabi harvest, calculating rupees deposited in the village Gramin Bank, or counting the population of our Gram Panchayat—we deal with numbers bigger than thousands. The Indian Place Value System helps us read, write, and calculate large numbers easily by grouping digits into periods.',
      coreSections: [
        {
          heading: '1. The Indian Place Value System & Periods',
          body: 'In the Indian system, digits are organized from right to left into periods: Ones period, Thousands period, and Lakhs period. Notice how we place commas: the first comma is placed after 3 digits from the right (Ones period), and every subsequent comma is placed after every 2 digits.',
          highlight: 'Periods layout: [Lakhs] , [Ten-Thousands | Thousands] , [Hundreds | Tens | Ones]',
          formula: 'Example: 4,75,238 = Four Lakh Seventy-Five Thousand Two Hundred Thirty-Eight'
        },
        {
          heading: '2. Face Value vs Place Value',
          body: 'The Face Value of a digit is the number itself, no matter where it sits. But the Place Value depends entirely on the position (room) it occupies. Place Value = Face Value × Value of the Place.',
          highlight: 'In 3,84,520: The face value of 8 is 8, but its place value is 8 × 10,000 = 80,000!',
          formula: 'Place Value = Face Value × Position Weight'
        },
        {
          heading: '3. Expanded Form of a Number',
          body: 'Expanded form shows the number as a grand sum of the place values of all its digits. It breaks down the number so you can clearly see what each digit contributes.',
          highlight: '74,615 = 70,000 + 4,000 + 600 + 10 + 5',
          formula: 'Expanded Form = Sum of (Digit × Place Weight)'
        }
      ]
    },
    workedExamples: [
      {
        title: 'Example 1: Expanding and Reading Harvest Records',
        question: 'A cooperative society in the village collected 65,482 kg of wheat. Write this number in words and in expanded form.',
        given: 'Number = 65,482',
        steps: [
          { stepNumber: 1, title: 'Identify place of each digit', explanation: '2 is at Ones (2), 8 is at Tens (80), 4 is at Hundreds (400), 5 is at Thousands (5,000), 6 is at Ten-Thousands (60,000).' },
          { stepNumber: 2, title: 'Write in words', explanation: 'Sixty-Five Thousand Four Hundred Eighty-Two.' },
          { stepNumber: 3, title: 'Write in expanded form', explanation: '60,000 + 5,000 + 400 + 80 + 2.' }
        ],
        finalAnswer: 'Sixty-Five Thousand Four Hundred Eighty-Two (Expanded: 60,000 + 5,000 + 400 + 80 + 2)',
        tip: 'Always place commas from right to left (3 digits first, then 2 digits).'
      },
      {
        title: 'Example 2: Finding Predecessor & Successor',
        question: 'Find the predecessor and successor of the largest 4-digit number.',
        given: 'Largest 4-digit number = 9,999',
        steps: [
          { stepNumber: 1, title: 'Predecessor (1 less)', explanation: 'Subtract 1: 9,999 − 1 = 9,998.' },
          { stepNumber: 2, title: 'Successor (1 more)', explanation: 'Add 1: 9,999 + 1 = 10,000 (Smallest 5-digit number!).' }
        ],
        finalAnswer: 'Predecessor = 9,998; Successor = 10,000',
        tip: 'Adding 1 to the greatest number of n digits always gives the smallest number of (n+1) digits.'
      }
    ],
    ruralContext: {
      title: 'Village Gram Panchayat Census',
      scenario: 'Imagine your village Sarpanch is updating the annual census. Village Rampur has a population of 14,872 people, while neighboring village Surajpur has 14,789 people.',
      explanation: 'To see which village has more people, compare digit by digit from the highest place (left). Both have 1 at Ten-Thousands and 4 at Thousands. Looking at the Hundreds place: Rampur has 8 hundreds (800) while Surajpur has 7 hundreds (700). Since 8 > 7, Rampur is larger!',
      takeaway: 'Comparing highest place values first saves time in counting village populations, seeds, or cattle.'
    },
    hinglish: {
      title: 'Aasan Bhasha Me Samjhein (Numbers & Place Value)',
      summary: 'Bade numbers ko samajhne ke liye Indian Place Value system use karte hain. Isme pehla comma 3 ank (digits) ke baad lagta hai, fir har 2 ank ke baad lagta hai (Hazaar aur Lakh).',
      keyPoints: [
        'Place Value ka matlab hai us number ki jagah ki keemat. Jaise 5,420 me 5 ki place value 5,000 hai.',
        'Predecessor = 1 pehle wala number (Subtract 1).',
        'Successor = 1 aage wala number (Add 1).'
      ]
    },
    formulaBox: [
      { label: 'Indian Comma Rule', formula: 'Lakhs, Thousands, Hundreds Tens Ones (e.g., 2,45,670)', explanation: 'First comma after 3 digits from right; then every 2 digits.' },
      { label: 'Successor', formula: 'Successor = Number + 1', explanation: 'Immediate next number.' },
      { label: 'Predecessor', formula: 'Predecessor = Number − 1', explanation: 'Immediate preceding number.' }
    ],
    examTips: [
      { tip: 'Never put commas from left to right. Always count 3 digits from the right, then 2, then 2.', type: 'common_mistake' },
      { tip: 'In expanded form, do not skip zeroes, or simply omit them (e.g., 50,203 = 50,000 + 200 + 3).', type: 'pro_tip' }
    ],
    quickSummary: 'The Indian place value system groups numbers into Ones, Thousands, and Lakhs. Comparing digits starting from the highest place value allows rapid calculation of large quantities.'
  },

  // ── MATHEMATICS CLASS 10 ───────────────────────────────────────────────────
  'mathematics_class-10_real-numbers': {
    learningObjectives: [
      'Master Euclid\'s Division Lemma: a = bq + r with 0 ≤ r < b.',
      'Compute HCF of large integers using Euclid\'s Division Algorithm.',
      'Understand the Fundamental Theorem of Arithmetic (uniqueness of prime factorization).',
      'Prove mathematically that √2, √3, and √5 are irrational numbers using proof by contradiction.',
      'Determine whether a rational number p/q has a terminating or non-terminating repeating decimal expansion.'
    ],
    deepDive: {
      introduction: 'Class 10 starts with Real Numbers—the master family that unites rational and irrational numbers. The two foundational pillars here are Euclid\'s Division Lemma (which formalizes how division with remainder works) and the Fundamental Theorem of Arithmetic (which states every composite number is built from unique prime bricks). These concepts are heavily tested on CBSE and State Board examinations.',
      coreSections: [
        {
          heading: '1. Euclid\'s Division Lemma & Algorithm',
          body: 'Given positive integers a and b, there exist unique integers q (quotient) and r (remainder) satisfying: a = bq + r, where 0 ≤ r < b. If r = 0, then b is a factor of a. When repeatedly applied, this algorithm rapidly finds the Highest Common Factor (HCF) of any two massive numbers.',
          highlight: 'Condition: 0 ≤ r < b. The remainder can NEVER be equal to or greater than the divisor.',
          formula: 'Dividend = (Divisor × Quotient) + Remainder  ⟹  a = bq + r'
        },
        {
          heading: '2. The Fundamental Theorem of Arithmetic',
          body: 'Every composite number can be expressed (factorized) as a product of primes, and this factorization is unique, apart from the order in which the prime factors occur. This theorem gives us the golden relationship between HCF and LCM for any two positive integers a and b.',
          highlight: 'Golden Formula: HCF(a, b) × LCM(a, b) = a × b',
          formula: 'Composite N = p₁^a₁ · p₂^a₂ · ... · pₖ^aₖ'
        },
        {
          heading: '3. Proof of Irrationality (Proof by Contradiction)',
          body: 'A number is irrational if it cannot be written in the form p/q, where p and q are integers and q ≠ 0. To prove that √5 is irrational, we assume the opposite (that √5 = a/b in coprime form). We then prove that both a and b share a common factor of 5, contradicting our coprime assumption.',
          highlight: 'Theorem: If prime p divides a², then p must also divide a (where a is a positive integer).',
          formula: 'Assume √p = a/b  ⟹  p·b² = a²  ⟹  Contradiction!'
        },
        {
          heading: '4. Decimal Expansions of Rational Numbers',
          body: 'Let x = p/q be a rational number in simplest form (p and q are coprime). x has a terminating decimal expansion IF AND ONLY IF the prime factorization of the denominator q is of the form 2ⁿ · 5ᵐ (where n and m are non-negative integers). If any other prime factor (like 3 or 7) exists, it is non-terminating repeating.',
          highlight: 'Terminating condition: Denominator q = 2ⁿ × 5ᵐ only!',
          formula: 'p / (2ⁿ · 5ᵐ)  ⟹  Terminating Decimal'
        }
      ]
    },
    workedExamples: [
      {
        title: 'Board Example 1: Finding HCF using Euclid\'s Algorithm',
        question: 'Use Euclid\'s Division Algorithm to find the HCF of 135 and 225.',
        given: 'a = 225, b = 135 (since 225 > 135)',
        steps: [
          { stepNumber: 1, title: 'First Division', explanation: 'Divide 225 by 135: 225 = 135 × 1 + 90. (Remainder r = 90 ≠ 0).' },
          { stepNumber: 2, title: 'Second Division', explanation: 'Apply lemma to divisor 135 and remainder 90: 135 = 90 × 1 + 45. (Remainder r = 45 ≠ 0).' },
          { stepNumber: 3, title: 'Third Division', explanation: 'Apply lemma to 90 and 45: 90 = 45 × 2 + 0. Remainder is now 0!' }
        ],
        finalAnswer: 'The divisor at this terminal stage is 45. Therefore, HCF(135, 225) = 45.',
        tip: 'The HCF is the DIVISOR at the step where the remainder becomes zero, NOT the quotient.'
      },
      {
        title: 'Board Example 2: Checking Decimal Termination Without Division',
        question: 'Without actual division, determine if 17/8 and 64/455 have terminating decimal expansions.',
        given: 'Fractions: 17/8 and 64/455',
        steps: [
          { stepNumber: 1, title: 'Analyze 17/8', explanation: 'Denominator 8 = 2³. This is of the form 2ⁿ · 5ᵐ (with n=3, m=0). Thus, 17/8 is TERMINATING.' },
          { stepNumber: 2, title: 'Analyze 64/455', explanation: 'Denominator 455 = 5 × 7 × 13. Since it contains prime factors 7 and 13 (not just 2 and 5), it is NON-TERMINATING REPEATING.' }
        ],
        finalAnswer: '17/8 terminates; 64/455 is non-terminating repeating.',
        tip: 'Always ensure the fraction is in lowest reduced terms before checking the denominator\'s prime factors.'
      }
    ],
    ruralContext: {
      title: 'Optimizing Village Mandi Grain Storage',
      scenario: 'A rural farmer cooperative has two harvest lots: 420 sacks of wheat and 130 sacks of basmati rice. They need to stack them in equal rows having the maximum possible number of sacks, such that wheat and rice are in separate stacks.',
      explanation: 'The problem asks for the "maximum number of sacks per stack" with no leftover. This is an HCF problem! By Euclid\'s division: 420 = 130 × 3 + 30; 130 = 30 × 4 + 10; 30 = 10 × 3 + 0. The HCF is 10. The cooperative should make stacks of 10 sacks each!',
      takeaway: 'Whenever an agricultural or trading problem asks for the "maximum equal grouping" or "largest common container", compute HCF.'
    },
    hinglish: {
      title: 'Board Special: Real Numbers in Hinglish',
      summary: 'Real Numbers chapter me do main theorems hain: Euclid\'s Division Lemma (a = bq + r) aur Fundamental Theorem of Arithmetic (HCF × LCM = a × b).',
      keyPoints: [
        'Euclid Lemma: a = bq + r, jisme remainder r hamesha 0 se b ke beech hota hai.',
        'Agar kisi fraction ke denominator ke prime factors sirf 2 aur 5 ke roop me hain (2ⁿ × 5ᵐ), toh uska decimal expansion terminating hoga.',
        '√2, √3, √5 ko irrational prove karne ke liye "Contradiction Method" use kiya jata hai.'
      ]
    },
    formulaBox: [
      { label: 'Euclid\'s Lemma', formula: 'a = bq + r  (0 ≤ r < b)', explanation: 'Used to find HCF step-by-step until r = 0.' },
      { label: 'HCF-LCM Product Rule', formula: 'HCF(a, b) × LCM(a, b) = a × b', explanation: 'Valid for ANY two positive integers a and b.' },
      { label: 'Terminating Fraction Condition', formula: 'Denominator q = 2ⁿ · 5ᵐ', explanation: 'Guarantees finite terminating decimal expansion.' }
    ],
    examTips: [
      { tip: 'In Board exams, writing the condition "0 ≤ r < b" carries 1/2 mark in Euclid lemma questions.', type: 'pro_tip' },
      { tip: 'Do not forget to state that a and b are "coprime integers" when writing the contradiction proof for √p.', type: 'common_mistake' }
    ],
    quickSummary: 'Euclid\'s division algorithm allows rapid computation of HCF, while the Fundamental Theorem of Arithmetic governs prime factorization, irrationality proofs, and decimal termination.'
  },

  // ── SCIENCE CLASS 10 ───────────────────────────────────────────────────────
  'science_class-10_chemical-reactions-and-equations': {
    learningObjectives: [
      'Identify chemical changes vs physical changes with observable indicators (color, gas, temperature, precipitate).',
      'Write and balance skeletal chemical equations to satisfy the Law of Conservation of Mass.',
      'Classify chemical reactions: Combination, Decomposition, Displacement, Double Displacement, and Redox.',
      'Understand exothermic vs endothermic reactions with real biological/agricultural examples.',
      'Explain everyday oxidation effects: Corrosion of metals and Rancidity of oily foods.'
    ],
    deepDive: {
      introduction: 'Whenever chemical bonds break and new bonds form to create substances with completely new properties, a chemical reaction has taken place. In rural life, when quicklime (chuna) is mixed with water for whitewashing house walls, immense heat is released and slaked lime is formed—this is a real combination and exothermic reaction. Writing and balancing chemical equations is the primary language of chemistry.',
      coreSections: [
        {
          heading: '1. Writing & Balancing Chemical Equations',
          body: 'According to Antoine Lavoisier\'s Law of Conservation of Mass, matter can neither be created nor destroyed in a chemical reaction. Therefore, the total number of atoms of each element on the Reactants side (left) MUST equal the total number of atoms on the Products side (right).',
          highlight: 'Always balance by changing coefficients in front of formulas, NEVER alter the subscripts!',
          formula: 'Unbalanced: Fe + H₂O → Fe₃O₄ + H₂  ⟹  Balanced: 3Fe + 4H₂O → Fe₃O₄ + 4H₂'
        },
        {
          heading: '2. The 5 Master Types of Chemical Reactions',
          body: '• Combination: Two or more reactants combine to form a single product (A + B → AB).\n• Decomposition: A single reactant breaks down into two or more simpler products (AB → A + B), triggered by Heat (Thermal), Light (Photolytic), or Electricity (Electrolytic).\n• Displacement: A more reactive metal displaces a less reactive metal from its salt solution (Zn + CuSO₄ → ZnSO₄ + Cu).\n• Double Displacement: Mutual exchange of ions between two compounds, often forming an insoluble precipitate (Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl).\n• Redox: Simultaneous Oxidation (gain of oxygen / loss of hydrogen) and Reduction (loss of oxygen / gain of hydrogen).',
          highlight: 'Displacement follows the Reactivity Series: K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au',
          formula: 'Exothermic: Reactants → Products + Heat  |  Endothermic: Reactants + Heat → Products'
        },
        {
          heading: '3. Corrosion and Rancidity in Daily Life',
          body: 'Corrosion is the slow eating away of metals by air, moisture, or acids. Rusting of iron forms hydrated ferric oxide (Fe₂O₃ · xH₂O). Rancidity occurs when fats and oils in food oxidize upon exposure to air, producing foul smell and taste. We prevent rancidity by flushing snack packets with inert Nitrogen gas.',
          highlight: 'Rusting requires BOTH oxygen and water vapor simultaneously.',
          formula: '4Fe + 3O₂ + 2xH₂O → 2Fe₂O₃ · xH₂O (Rust)'
        }
      ]
    },
    workedExamples: [
      {
        title: 'Board Example: Step-by-Step Equation Balancing',
        question: 'Balance the chemical equation for the reaction of burning methane gas (biogas) in oxygen: CH₄ + O₂ → CO₂ + H₂O.',
        given: 'Unbalanced: CH₄ + O₂ → CO₂ + H₂O',
        steps: [
          { stepNumber: 1, title: 'Count atoms on both sides', explanation: 'Reactants: C=1, H=4, O=2. Products: C=1, H=2, O=3.' },
          { stepNumber: 2, title: 'Balance Hydrogen atoms first', explanation: 'Put coefficient 2 before H₂O on products side: CH₄ + O₂ → CO₂ + 2H₂O. Now H=4 on both sides.' },
          { stepNumber: 3, title: 'Balance Oxygen atoms', explanation: 'Products now have 2 (from CO₂) + 2 (from 2H₂O) = 4 Oxygen atoms. Put coefficient 2 before O₂ on reactants side: CH₄ + 2O₂ → CO₂ + 2H₂O.' },
          { stepNumber: 4, title: 'Verify final atom count', explanation: 'Reactants: C=1, H=4, O=4. Products: C=1, H=4, O=4. Perfectly balanced!' }
        ],
        finalAnswer: 'CH₄ + 2O₂ → CO₂ + 2H₂O',
        tip: 'Balance polyatomic ions and metals first, then carbons, hydrogens, and leave pure diatomic gases (O₂, H₂) for last.'
      }
    ],
    ruralContext: {
      title: 'Whitewashing Village Houses (Chuna Reaction)',
      scenario: 'Before Diwali or harvest festivals, villagers mix quicklime (Calcium Oxide, CaO) in earthen pots with water for whitewashing house walls.',
      explanation: 'When water is added to quicklime, a vigorous boiling exothermic reaction occurs: CaO (s) + H₂O (l) → Ca(OH)₂ (aq) + Heat. The resulting slaked lime is applied to walls. Over the next 2–3 days, it reacts with atmospheric CO₂ to form a shiny, hard layer of Calcium Carbonate: Ca(OH)₂ + CO₂ → CaCO₃ (s) + H₂O.',
      takeaway: 'Chemistry is alive in village traditions—the brilliant white shine of walls is pure calcium carbonate formed by atmospheric carbonation!'
    },
    hinglish: {
      title: 'Chemical Reactions in Simple Hinglish',
      summary: 'Chemical reaction me puraane bonds tootkar naye padarth (products) bante hain. Law of Conservation of Mass ke mutabik reactants aur products ke atoms barabar hone chahiye.',
      keyPoints: [
        'Combination Reaction: Do cheezein milkar ek nayi cheez banati hain (CaO + H2O → Ca(OH)2).',
        'Displacement Reaction: Zyada taaqatvar metal kam taaqatvar metal ko hata deta hai (Reactivity series).',
        'Corrosion: Hawa aur nami se lohe par zang lagna. Rancidity: Tel wale khane ka kharab hona.'
      ]
    },
    formulaBox: [
      { label: 'Combination (Quicklime)', formula: 'CaO + H₂O → Ca(OH)₂ + Heat', explanation: 'Exothermic combination producing slaked lime.' },
      { label: 'Wall Whitewash Shine', formula: 'Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O', explanation: 'Forms marble-like calcium carbonate sheen.' },
      { label: 'Rusting of Iron', formula: '4Fe + 3O₂ + 2xH₂O → 2Fe₂O₃·xH₂O', explanation: 'Hydrated iron(III) oxide (rust).' }
    ],
    examTips: [
      { tip: 'Always write the physical states (s, l, g, aq) in board examination reactions for full marks.', type: 'pro_tip' },
      { tip: 'Remember: Oxidation is GAIN of Oxygen or LOSS of Hydrogen. Reduction is LOSS of Oxygen or GAIN of Hydrogen.', type: 'common_mistake' }
    ],
    quickSummary: 'Chemical reactions conserve mass through stoichiometric balancing. They are categorized into combination, decomposition, displacement, double displacement, and redox mechanisms.'
  }
};

// Procedural generator to provide rich, comprehensive class-tailored content for ANY topic
export function getLessonEnrichment(lesson, subjectSlug, className) {
  const normSubject = String(subjectSlug || 'general').toLowerCase().replace(/\s+/g, '-');
  const normClass = String(className || 'Class 10').trim();
  const normTitle = String(lesson.title || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  const specificKey = `${normSubject}_${normClass.toLowerCase().replace(/\s+/g, '-')}_${normTitle}`;
  if (DEEP_LESSON_DATABASE[specificKey]) {
    const data = DEEP_LESSON_DATABASE[specificKey];
    const meta = CLASS_TIER_META[normClass] || CLASS_TIER_META['Class 10'];
    return {
      ...data,
      className: normClass,
      gradeTier: meta.tier,
      difficulty: meta.difficulty,
      readingTime: meta.readingTime,
      pedagogyNote: meta.pedagogy,
      audioScript: generateAudioScript(lesson.title, normClass, data.deepDive, data.ruralContext)
    };
  }

  // Smart dynamic generator calibrated to the student's exact class level
  const meta = CLASS_TIER_META[normClass] || CLASS_TIER_META['Class 10'];
  const title = lesson.title || 'Curriculum Concept';
  const desc = lesson.description || '';
  const points = Array.isArray(lesson.points) && lesson.points.length > 0 ? lesson.points : [
    'Master the fundamental principles and underlying definitions.',
    'Follow systematic procedural steps to solve textbook problems.',
    'Connect the theoretical concept to practical everyday situations.',
    'Prepare high-yield answers tailored for examinations.'
  ];

  // Grade-calibrated wording
  const isPrimary = normClass === 'Class 5' || normClass === 'Class 6';
  const isMiddle = normClass === 'Class 7' || normClass === 'Class 8';
  const isBoard = normClass === 'Class 9' || normClass === 'Class 10';

  const introText = isPrimary
    ? `Welcome to ${title}! In ${normClass}, we explore this topic through fun observations, simple everyday examples, and easy-to-follow rules. Whether looking at objects around our village, counting items at home, or observing the weather, ${title} helps us understand the world clearly.`
    : isMiddle
    ? `In ${normClass}, the study of ${title} moves beyond simple observation into structured logical procedures, mathematical formulas, and scientific laws. Mastering this chapter gives you strong analytical problem-solving skills.`
    : `In ${normClass}, ${title} is a core academic topic central to the state and national curriculum. A complete grasp of its formal definitions, derivations, theorems, and multi-step numericals is crucial for scoring top marks in examinations.`;

  const sections = points.map((p, idx) => {
    return {
      heading: `${idx + 1}. ${p.split(':')[0].replace(/\.$/, '')}`,
      body: isPrimary
        ? `Let us look closely at this idea: ${p} When you practice this step by step, you will notice how simple patterns emerge. Always take your time to understand each part before moving forward.`
        : isMiddle
        ? `Key Principle: ${p} To apply this concept, identify the given values, check the relevant units, and follow systematic calculation steps.`
        : `Formal Academic Concept: ${p} In board examinations, questions on this concept frequently evaluate rigorous conceptual definitions, conditions of applicability, and multi-step derivations.`,
      highlight: `Core Takeaway: ${p}`,
      formula: isBoard ? `Standard Rule / Formula for ${title}: Apply verified theorem conditions.` : undefined
    };
  });

  const workedExamples = [
    {
      title: `Worked Problem: Applying ${title}`,
      question: `Demonstrate how to solve a standard ${normClass} curriculum problem based on "${title}".`,
      given: `Topic: ${title} (${normClass} Level)`,
      steps: [
        {
          stepNumber: 1,
          title: 'Understand Given Information',
          explanation: `Carefully read the question and note down the given facts and what needs to be calculated for ${title}.`
        },
        {
          stepNumber: 2,
          title: 'Apply the Fundamental Method',
          explanation: `Use the core rule: ${points[0] || 'Apply the standard definition and appropriate formula.'}`
        },
        {
          stepNumber: 3,
          title: 'Compute and Verify',
          explanation: `Perform the calculation systematically. Double check your steps and write the final answer with correct units.`
        }
      ],
      finalAnswer: `Verified solution for ${title} following ${normClass} standard methodology.`,
      tip: isBoard ? 'Write each step clearly on a new line; board evaluators award step-marks for formula, substitution, and final unit.' : 'Check your answer twice to avoid simple calculation slips.'
    }
  ];

  const ruralContext = {
    title: `Everyday & Rural Application of ${title}`,
    scenario: `How does "${title}" appear in daily Indian rural and community life?`,
    explanation: isPrimary
      ? `Whether sharing food equally among friends, calculating change at the village grocery shop, or observing crops grow in the field, ${title} is in action all around us every single day!`
      : isMiddle
      ? `From measuring farm land boundaries and calculating harvest yields to understanding solar irrigation pumps and local village Panchayat decisions, ${title} provides practical tools used by farmers, artisans, and families.`
      : `From modern agricultural mechanization and soil nutrient analysis to infrastructure development and economic planning, the principles of ${title} drive technological and social advancement across rural India.`,
    takeaway: `Understanding ${title} connects classroom learning directly with real-world practicality.`
  };

  const hinglish = {
    title: `${title} - Saral Hinglish Samjhauta`,
    summary: `${title} ko aasan shabdon me samjhein: Ye topic ${normClass} ke syllabus ka ek mahatvapurna hissa hai jo hume buniyadi niyam aur unka upyog sikhata hai.`,
    keyPoints: points.slice(0, 3).map(p => `${p} - Is niyam ko dhyan se padhein aur yaad rakhein.`)
  };

  const formulaBox = points.slice(0, 3).map((p, i) => ({
    label: `Rule ${i + 1}`,
    formula: p.length > 50 ? p.slice(0, 48) + '...' : p,
    explanation: `Essential principle for ${normClass} curriculum.`
  }));

  const examTips = [
    {
      tip: isBoard
        ? 'In board exams, underline final answers, always state the formula first, and write units (e.g., cm², m/s, Rs).'
        : 'Read the question carefully twice before attempting the answer to avoid silly mistakes.',
      type: 'pro_tip'
    },
    {
      tip: isBoard
        ? 'Do not skip steps in numerical or theorem proofs; jumping directly to the final answer causes deduction of marks.'
        : 'Do not rush through calculations; write neatly and keep rough work in a separate right-hand margin.',
      type: 'common_mistake'
    }
  ];

  const deepDive = {
    introduction: introText,
    coreSections: sections
  };

  return {
    className: normClass,
    gradeTier: meta.tier,
    difficulty: meta.difficulty,
    readingTime: meta.readingTime,
    pedagogyNote: meta.pedagogy,
    learningObjectives: points.slice(0, 4).map(p => `Understand and master: ${p}`),
    deepDive,
    workedExamples,
    ruralContext,
    hinglish,
    formulaBox,
    examTips,
    quickSummary: `${title} teaches the key principles of ${desc || 'the chapter'} designed specifically for ${normClass} students.`,
    audioScript: generateAudioScript(title, normClass, deepDive, ruralContext)
  };
}

function generateAudioScript(title, className, deepDive, ruralContext) {
  const intro = deepDive?.introduction || '';
  const firstSection = deepDive?.coreSections?.[0]?.body || '';
  const rural = ruralContext?.explanation || '';
  return `Hello and welcome to your ${className} lesson on ${title}. ${intro} Let us understand the core concept: ${firstSection} In our daily life and village environment: ${rural} Keep practicing, and ask your AI tutor if you have any questions!`;
}

export function getSubjectClassOverview(subjectSlug, className) {
  const normSubject = String(subjectSlug || 'mathematics').toLowerCase().replace(/\s+/g, '-');
  const normClass = String(className || 'Class 10').trim();

  const subMap = CLASS_SUBJECT_OVERVIEWS[normSubject];
  if (subMap && subMap[normClass]) {
    const data = subMap[normClass];
    const meta = CLASS_TIER_META[normClass] || CLASS_TIER_META['Class 10'];
    return {
      className: normClass,
      tier: meta.tier,
      difficulty: meta.difficulty,
      ...data
    };
  }

  const meta = CLASS_TIER_META[normClass] || CLASS_TIER_META['Class 10'];
  return {
    className: normClass,
    tier: meta.tier,
    difficulty: meta.difficulty,
    focus: `${normClass} Curriculum & Concepts`,
    tagline: `Comprehensive grade-appropriate learning for ${normClass} students.`,
    goals: [
      'Master core concepts and definitions with clarity',
      'Follow step-by-step problem solving methods',
      'Connect lessons to everyday life and practical applications',
      'Excel in school and board examinations'
    ]
  };
}
