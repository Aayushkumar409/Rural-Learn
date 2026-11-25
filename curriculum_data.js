// ─────────────────────────────────────────────────────────────────────
//  RuralLearn — Full Class-wise Curriculum Data (Classes 5–10)
//  Each entry: [title, description, [points...], [[q, [opts], ansIdx]...]]
//  Lessons are keyed: curriculum[subject][className] = [...lessons]
// ─────────────────────────────────────────────────────────────────────

export const curriculum = {
  mathematics: {
    'Class 5': [
      ['Numbers and Place Value', 'Learn large numbers and place value up to lakhs.', [
        'Indian place value system: Ones, Tens, Hundreds, Thousands, Ten-thousands, Lakhs.',
        'Expanded form breaks a number into place values.',
        'Comparing numbers: check the highest place value first.',
        'Predecessor is 1 less; successor is 1 more than a number.'
      ], [
        ['What comes after the thousands place in the Indian system?', ['Lakhs', 'Ten-thousands', 'Crores', 'Hundreds'], 1],
        ['Expanded form of 4523 is:', ['4000+500+20+3', '4+5+2+3', '4523+0', '45+23'], 0],
        ['Which is greater: 56,789 or 56,798?', ['56,789', '56,798', 'Both are equal', 'Cannot tell'], 1],
        ['The predecessor of 1000 is:', ['999', '1001', '1100', '900'], 0],
        ['The successor of 9999 is:', ['10000', '9998', '10001', '9990'], 0]
      ]],
      ['Addition and Subtraction', 'Add and subtract numbers up to 5 digits.', [
        'Carry forward when a column sum exceeds 9.',
        'Borrow from the next higher place value when subtracting.',
        'Always add or subtract from the ones place first.',
        'Estimation rounds numbers to the nearest ten or hundred before computing.'
      ], [
        ['456 + 378 = ?', ['824', '834', '844', '814'], 1],
        ['5000 − 2345 = ?', ['2655', '2755', '2665', '2555'], 0],
        ['When adding, if a column gives 15, you write ___ and carry ___:', ['5 and 1', '1 and 5', '15 and 0', '0 and 15'], 0],
        ['Estimate 489 + 311 to nearest hundred:', ['700', '800', '900', '1000'], 1],
        ['What is 10000 − 1?', ['9999', '9990', '9900', '9000'], 0]
      ]],
      ['Multiplication and Division', 'Multiply and divide 2–3 digit numbers.', [
        'Multiplication is repeated addition.',
        'Division splits a number into equal groups.',
        'Quotient × Divisor + Remainder = Dividend.',
        'Multiplying any number by 0 gives 0.'
      ], [
        ['24 × 5 = ?', ['100', '120', '130', '110'], 1],
        ['144 ÷ 12 = ?', ['10', '11', '12', '13'], 2],
        ['If 56 ÷ 7 = 8, then 7 × 8 = ?', ['54', '55', '56', '57'], 2],
        ['25 × 0 = ?', ['25', '0', '1', '250'], 1],
        ['What is the remainder when 17 is divided by 5?', ['2', '3', '1', '4'], 0]
      ]],
      ['Fractions', 'Understand fractions and compare like fractions.', [
        'A fraction has a numerator (top) and a denominator (bottom).',
        'Like fractions have the same denominator.',
        'In like fractions, the one with the bigger numerator is greater.',
        'A whole can be written as a fraction where numerator equals denominator.'
      ], [
        ['In the fraction 3/7, the denominator is:', ['3', '7', '10', '21'], 1],
        ['Which is greater: 4/9 or 7/9?', ['4/9', '7/9', 'Both are equal', 'Cannot tell'], 1],
        ['1 whole = ?/5', ['1', '5', '0', '10'], 1],
        ['A fraction with numerator 0 equals:', ['1', '0', 'The denominator', 'Undefined'], 1],
        ['3/8 + 2/8 = ?', ['5/8', '5/16', '6/8', '1'], 0]
      ]],
      ['Geometry: Shapes and Angles', 'Identify 2D shapes and understand angles.', [
        'A triangle has 3 sides and 3 angles.',
        'A rectangle has 4 right angles and opposite sides are equal.',
        'A right angle measures 90°.',
        'A circle has no corners and no straight sides.'
      ], [
        ['How many sides does a rectangle have?', ['3', '4', '5', '6'], 1],
        ['A right angle is:', ['45°', '90°', '180°', '360°'], 1],
        ['A triangle has ___ angles.', ['2', '3', '4', '5'], 1],
        ['Which shape has no corners?', ['Square', 'Triangle', 'Circle', 'Rectangle'], 2],
        ['Opposite sides of a rectangle are:', ['Different', 'Equal', 'Curved', 'None'], 1]
      ]]
    ],
    'Class 6': [
      ['Knowing Our Numbers', 'Explore numbers up to crores using Indian and International systems.', [
        'Indian system: Ones, Tens, Hundreds, Thousands, Ten Thousands, Lakhs, Ten Lakhs, Crores.',
        'International system: Ones, Tens, Hundreds, Thousands, Ten Thousands, Hundred Thousands, Millions.',
        '1 million = 10 lakhs; 1 crore = 10 million.',
        'Roman numerals use I, V, X, L, C, D, M.'
      ], [
        ['1 crore = ___ lakhs', ['10', '100', '1000', '1'], 0],
        ['1 million = ___ lakhs', ['1', '10', '100', '1000'], 1],
        ['The Roman numeral for 50 is:', ['L', 'C', 'D', 'X'], 0],
        ['In the Indian system, the period after thousands is:', ['Lakhs', 'Millions', 'Crores', 'Hundreds'], 0],
        ['Which is the largest: 99,999 or 1,00,000?', ['99,999', '1,00,000', 'Both are equal', 'Cannot tell'], 1]
      ]],
      ['Whole Numbers', 'Properties and operations on whole numbers.', [
        'Whole numbers start from 0: {0, 1, 2, 3, …}.',
        'Every natural number is a whole number, but 0 is not a natural number.',
        'Addition and multiplication of whole numbers are commutative.',
        'Distributive property: a × (b + c) = a×b + a×c.'
      ], [
        ['The smallest whole number is:', ['0', '1', '-1', 'None'], 0],
        ['Is 0 a natural number?', ['Yes', 'No', 'Sometimes', 'Only in some systems'], 1],
        ['5 × (3 + 2) = ?', ['25', '20', '15', '30'], 0],
        ['Commutative property means:', ['Order does not matter', 'Grouping does not matter', 'Zero has no effect', 'One has no effect'], 0],
        ['What is the successor of the largest 3-digit number?', ['999', '1000', '1001', '100'], 1]
      ]],
      ['Integers', 'Introduction to negative numbers and the number line.', [
        'Integers include positive numbers, negative numbers, and zero.',
        'On a number line, numbers increase to the right.',
        'Adding a positive number moves right; adding negative moves left.',
        'The absolute value of a number is its distance from zero.'
      ], [
        ['Which of these is an integer?', ['1/2', '-3', '0.5', '√2'], 1],
        ['-5 + 3 = ?', ['-2', '2', '-8', '8'], 0],
        ['On the number line, -7 is to the ___ of -3.', ['Left', 'Right', 'Same position', 'Above'], 0],
        ['The absolute value of -9 is:', ['9', '-9', '0', '1'], 0],
        ['0 is:', ['Positive', 'Negative', 'Neither positive nor negative', 'Both'], 2]
      ]],
      ['Basic Geometry', 'Points, lines, rays, and angles.', [
        'A point has no size; it marks a position.',
        'A line extends infinitely in both directions.',
        'A ray has one endpoint and extends infinitely in one direction.',
        'An angle is formed when two rays share a common endpoint.'
      ], [
        ['A line segment has:', ['No endpoints', 'One endpoint', 'Two endpoints', 'Three endpoints'], 2],
        ['An angle less than 90° is called:', ['Acute', 'Right', 'Obtuse', 'Straight'], 0],
        ['A ray has ___ endpoint(s).', ['0', '1', '2', '3'], 1],
        ['An angle of 180° is called:', ['Right', 'Acute', 'Obtuse', 'Straight'], 3],
        ['Two lines that never meet are:', ['Parallel', 'Perpendicular', 'Intersecting', 'Curved'], 0]
      ]],
      ['Ratio and Proportion', 'Compare quantities using ratios.', [
        'A ratio compares two quantities of the same kind.',
        'Ratio a:b can be written as a/b.',
        'A proportion states two ratios are equal.',
        'The cross-product method checks if two ratios form a proportion.'
      ], [
        ['The ratio of 4 to 8 in simplest form is:', ['1:2', '2:4', '4:8', '2:1'], 0],
        ['If 2:3 = 4:x, then x = ?', ['5', '6', '7', '8'], 1],
        ['A ratio compares quantities of ___ kind.', ['Same', 'Different', 'Any', 'No'], 0],
        ['Simplify the ratio 15:25:', ['3:5', '5:3', '1:5', '5:1'], 0],
        ['If the ratio of boys to girls is 3:4, and there are 12 boys, how many girls?', ['12', '14', '16', '18'], 2]
      ]]
    ],
    'Class 7': [
      ['Integers – Operations', 'Add, subtract, multiply and divide integers.', [
        'Positive × Positive = Positive; Negative × Negative = Positive.',
        'Positive × Negative = Negative.',
        'Division rules follow the same sign rules as multiplication.',
        'Additive inverse of a is -a (a + (-a) = 0).'
      ], [
        ['(-6) × (-4) = ?', ['24', '-24', '10', '-10'], 0],
        ['(-3) × 5 = ?', ['-15', '15', '-8', '8'], 0],
        ['(-20) ÷ 4 = ?', ['5', '-5', '4', '-4'], 1],
        ['Additive inverse of -7 is:', ['7', '-7', '0', '1'], 0],
        ['(-1) × (-1) × (-1) = ?', ['1', '-1', '0', '3'], 1]
      ]],
      ['Fractions and Decimals', 'Multiply and divide fractions and decimals.', [
        'To multiply fractions: multiply numerators and multiply denominators.',
        'To divide by a fraction, multiply by its reciprocal.',
        'The reciprocal of a/b is b/a.',
        'Decimals can be converted to fractions by using the place value.'
      ], [
        ['2/3 × 3/4 = ?', ['6/12 = 1/2', '5/7', '6/7', '2/4'], 0],
        ['5/6 ÷ 2/3 = ?', ['5/4', '10/18', '3/6', '15/12'], 0],
        ['The reciprocal of 7/9 is:', ['9/7', '7/9', '1', '0'], 0],
        ['0.25 as a fraction is:', ['1/2', '1/4', '1/5', '2/5'], 1],
        ['3/5 of 25 = ?', ['10', '15', '20', '5'], 1]
      ]],
      ['Algebraic Expressions', 'Form and simplify algebraic expressions.', [
        'A variable is a letter that represents an unknown value.',
        'A term is a product of a number (coefficient) and variable(s).',
        'Like terms have the same variable parts.',
        'Add/subtract like terms by combining their coefficients.'
      ], [
        ['In 5x, the coefficient is:', ['x', '5', '5x', '1'], 1],
        ['Simplify: 3a + 2a = ?', ['5a', '6a', '5a²', '5'], 0],
        ['Which are like terms?', ['2x and 3y', '4x and 7x', 'x and x²', '2 and 2x'], 1],
        ['If x = 3, then 2x + 1 = ?', ['5', '6', '7', '8'], 2],
        ['An expression has ___ equal sign(s).', ['0', '1', '2', 'Many'], 0]
      ]],
      ['Triangles and Properties', 'Angle sum property and types of triangles.', [
        'Sum of angles in a triangle = 180°.',
        'Equilateral triangle: all sides and angles are equal (each 60°).',
        'Isosceles triangle: two sides are equal.',
        'Scalene triangle: all sides are different.'
      ], [
        ['Sum of angles of a triangle is:', ['90°', '180°', '270°', '360°'], 1],
        ['Each angle of an equilateral triangle is:', ['45°', '60°', '90°', '120°'], 1],
        ['A triangle with all different sides is:', ['Equilateral', 'Isosceles', 'Scalene', 'Right'], 2],
        ['If two angles of a triangle are 50° and 60°, the third is:', ['60°', '70°', '80°', '90°'], 1],
        ['An isosceles triangle has ___ equal sides.', ['0', '1', '2', '3'], 2]
      ]],
      ['Perimeter and Area', 'Calculate perimeter and area of rectangles, triangles and circles.', [
        'Perimeter of a rectangle = 2 × (length + breadth).',
        'Area of a rectangle = length × breadth.',
        'Area of a triangle = ½ × base × height.',
        'Circumference of a circle = 2πr; Area = πr².'
      ], [
        ['Perimeter of a rectangle with l=10, b=5 is:', ['30', '50', '15', '25'], 0],
        ['Area of a triangle with base 6 and height 4 is:', ['24', '10', '12', '8'], 2],
        ['Area of a rectangle 8 × 3 is:', ['11', '22', '24', '16'], 2],
        ['If radius = 7, circumference ≈ (use π ≈ 22/7):', ['22', '44', '14', '154'], 1],
        ['Unit of area is:', ['cm', 'cm²', 'cm³', 'm'], 1]
      ]]
    ],
    'Class 8': [
      ['Rational Numbers', 'Operations and properties of rational numbers.', [
        'A rational number can be written as p/q where q ≠ 0.',
        'Rational numbers are closed under addition, subtraction, and multiplication.',
        'The additive identity is 0; the multiplicative identity is 1.',
        'Between any two rational numbers, there are infinitely many rational numbers.'
      ], [
        ['Which is a rational number?', ['√2', '3/4', 'π', '√3'], 1],
        ['Additive identity for rational numbers is:', ['0', '1', '-1', '∞'], 0],
        ['(-3/5) + (3/5) = ?', ['6/5', '0', '1', '-6/5'], 1],
        ['Multiplicative identity is:', ['0', '1', '-1', '2'], 1],
        ['Between 1/3 and 2/3, how many rational numbers exist?', ['None', 'One', 'Ten', 'Infinite'], 3]
      ]],
      ['Linear Equations in One Variable', 'Solve equations with variables on both sides.', [
        'Move all variable terms to one side and constant terms to the other.',
        'Transposing changes the sign of the term.',
        'Cross-multiplication helps solve equations with fractions.',
        'Always verify the solution by substituting back.'
      ], [
        ['Solve: 2x + 3 = 11', ['x = 3', 'x = 4', 'x = 5', 'x = 6'], 1],
        ['Solve: 5x - 2 = 3x + 6', ['x = 2', 'x = 3', 'x = 4', 'x = 5'], 2],
        ['Transposing +5 to the other side makes it:', ['+5', '-5', '×5', '÷5'], 1],
        ['Solve: x/3 = 4', ['x = 7', 'x = 12', 'x = 1', 'x = 4/3'], 1],
        ['If 3(x - 1) = 12, then x = ?', ['3', '4', '5', '6'], 2]
      ]],
      ['Exponents and Powers', 'Laws of exponents and their applications.', [
        'aᵐ × aⁿ = aᵐ⁺ⁿ.',
        'aᵐ ÷ aⁿ = aᵐ⁻ⁿ.',
        '(aᵐ)ⁿ = aᵐⁿ.',
        'a⁰ = 1 for any non-zero a.'
      ], [
        ['2³ × 2⁴ = ?', ['2⁷', '2¹²', '4⁷', '2¹'], 0],
        ['5⁰ = ?', ['0', '5', '1', '50'], 2],
        ['(3²)³ = ?', ['3⁵', '3⁶', '3⁸', '9³'], 1],
        ['10⁶ ÷ 10² = ?', ['10³', '10⁴', '10⁸', '10¹²'], 1],
        ['Express 0.00045 in standard form:', ['4.5 × 10⁻⁴', '45 × 10⁻⁵', '4.5 × 10⁴', '0.45 × 10⁻³'], 0]
      ]],
      ['Mensuration', 'Area and perimeter of trapezium, quadrilaterals; surface area & volume of cube and cuboid.', [
        'Area of trapezium = ½ × (sum of parallel sides) × height.',
        'Surface area of cuboid = 2(lb + bh + hl).',
        'Volume of cuboid = l × b × h.',
        'Volume of cube = side³.'
      ], [
        ['Volume of a cube with side 4 cm is:', ['16 cm³', '48 cm³', '64 cm³', '12 cm³'], 2],
        ['Surface area of a cube with side 3 is:', ['27', '54', '36', '18'], 1],
        ['Area of trapezium with parallel sides 5 and 7, height 4:', ['24', '48', '12', '20'], 0],
        ['Volume of cuboid 2×3×5 is:', ['30', '10', '25', '15'], 0],
        ['Unit of volume is:', ['cm', 'cm²', 'cm³', 'm'], 2]
      ]],
      ['Data Handling', 'Organize data, bar graphs, pie charts, probability.', [
        'Data can be organized using frequency tables.',
        'A pie chart shows data as sectors of a circle.',
        'Probability of an event = Number of favorable outcomes / Total outcomes.',
        'Probability ranges from 0 (impossible) to 1 (certain).'
      ], [
        ['Probability of getting heads when tossing a coin is:', ['0', '1/2', '1', '1/4'], 1],
        ['A pie chart uses:', ['Bars', 'Lines', 'Sectors of a circle', 'Dots'], 2],
        ['If a die is rolled, the probability of getting 6 is:', ['1', '1/2', '1/6', '1/3'], 2],
        ['Probability of an impossible event is:', ['0', '1', '1/2', '-1'], 0],
        ['Frequency means:', ['How large a number is', 'How often a value occurs', 'The biggest value', 'The average'], 1]
      ]]
    ],
    'Class 9': [
      ['Number Systems', 'Rational and irrational numbers, real number line.', [
        'Rational numbers have terminating or repeating decimal expansions.',
        'Irrational numbers have non-terminating, non-repeating decimals (e.g., √2, π).',
        'Together, rationals and irrationals form the Real Numbers.',
        'Every real number has a unique point on the number line.'
      ], [
        ['√2 is:', ['Rational', 'Irrational', 'Integer', 'Whole number'], 1],
        ['0.333… is:', ['Irrational', 'Rational', 'Neither', 'An integer'], 1],
        ['Real numbers = Rational ∪ ___', ['Whole', 'Natural', 'Irrational', 'Integer'], 2],
        ['π is:', ['Rational', 'Irrational', '22/7 exactly', 'An integer'], 1],
        ['Between two rationals, there are ___ irrationals.', ['None', 'One', 'Finite', 'Infinite'], 3]
      ]],
      ['Polynomials', 'Classify polynomials, remainder and factor theorems.', [
        'A polynomial in x has terms with non-negative integer exponents.',
        'Degree is the highest power of the variable.',
        'Remainder Theorem: p(a) is the remainder when p(x) is divided by (x - a).',
        'Factor Theorem: (x - a) is a factor of p(x) if p(a) = 0.'
      ], [
        ['Degree of 3x² + 5x + 1 is:', ['1', '2', '3', '5'], 1],
        ['A polynomial with degree 1 is called:', ['Constant', 'Linear', 'Quadratic', 'Cubic'], 1],
        ['If p(x) = x² - 4, then p(2) = ?', ['0', '4', '-4', '8'], 0],
        ['If p(2) = 0, then (x - 2) is a ___ of p(x).', ['Remainder', 'Quotient', 'Factor', 'Term'], 2],
        ['A cubic polynomial has degree:', ['1', '2', '3', '4'], 2]
      ]],
      ['Linear Equations in Two Variables', 'Graph linear equations and find solutions.', [
        'A linear equation in two variables: ax + by + c = 0.',
        'Every solution (x, y) is a point on the line.',
        'A linear equation has infinitely many solutions.',
        'The graph of a linear equation in two variables is always a straight line.'
      ], [
        ['The graph of y = 2x + 1 is a:', ['Curve', 'Straight line', 'Circle', 'Parabola'], 1],
        ['How many solutions does x + y = 5 have?', ['One', 'Two', 'Five', 'Infinite'], 3],
        ['If x = 0 in y = 3x - 2, then y = ?', ['0', '-2', '2', '3'], 1],
        ['The equation y = 5 represents a ___ line.', ['Vertical', 'Horizontal', 'Diagonal', 'Curved'], 1],
        ['In ax + by + c = 0, a and b are both ≠ 0 when:', ['Always', 'It is a linear equation in two variables', 'It is a constant', 'Never'], 1]
      ]],
      ['Triangles – Congruence', 'Congruence criteria: SSS, SAS, ASA, AAS, RHS.', [
        'Two triangles are congruent if they are exactly the same shape and size.',
        'SSS: all three sides of one equal three sides of the other.',
        'SAS: two sides and the included angle are equal.',
        'ASA: two angles and the included side are equal.'
      ], [
        ['SSS stands for:', ['Side-Side-Side', 'Sum-Side-Sum', 'Side-Sum-Side', 'Side-Side-Sum'], 0],
        ['In SAS, the angle must be:', ['Any angle', 'The included angle', 'The largest angle', 'A right angle'], 1],
        ['If △ABC ≅ △DEF, then AB = ?', ['DE', 'EF', 'DF', 'Cannot tell'], 0],
        ['How many congruence criteria are there for triangles?', ['3', '4', '5', '6'], 2],
        ['RHS criterion applies to ___ triangles.', ['Equilateral', 'Right-angled', 'Isosceles', 'Scalene'], 1]
      ]],
      ['Statistics', 'Mean, median, mode and data representation.', [
        'Mean = Sum of all values / Number of values.',
        'Median is the middle value when data is arranged in order.',
        'Mode is the value that occurs most frequently.',
        'For grouped data, we use class intervals and frequency tables.'
      ], [
        ['Mean of 2, 4, 6, 8, 10 is:', ['4', '5', '6', '7'], 2],
        ['Median of 3, 5, 7, 9, 11 is:', ['5', '7', '9', '3'], 1],
        ['Mode of 2, 3, 3, 5, 5, 5, 8 is:', ['2', '3', '5', '8'], 2],
        ['If all values are equal, the mode is:', ['0', 'Undefined', 'That value', 'The mean'], 2],
        ['Mean is affected by:', ['Extreme values (outliers)', 'The middle value', 'The most common value', 'None'], 0]
      ]]
    ],
    'Class 10': [
      ['Real Numbers', 'Euclid\'s division algorithm, Fundamental Theorem of Arithmetic.', [
        'Euclid\'s Division Lemma: a = bq + r, where 0 ≤ r < b.',
        'HCF can be found using Euclid\'s division algorithm.',
        'Fundamental Theorem of Arithmetic: every composite number has a unique prime factorisation.',
        'LCM × HCF = Product of the two numbers.'
      ], [
        ['HCF of 12 and 18 is:', ['3', '6', '12', '36'], 1],
        ['LCM of 4 and 6 is:', ['2', '12', '24', '4'], 1],
        ['In a = bq + r, r must satisfy:', ['r > b', '0 ≤ r < b', 'r = b', 'r < 0'], 1],
        ['LCM × HCF of two numbers equals:', ['Sum of numbers', 'Product of numbers', 'Difference', 'Quotient'], 1],
        ['The prime factorisation of 60 is:', ['2²×3×5', '2×3²×5', '2×3×5²', '2³×5'], 0]
      ]],
      ['Polynomials', 'Zeros, relationships between zeros and coefficients.', [
        'The zero of a polynomial p(x) is the value of x for which p(x) = 0.',
        'A quadratic polynomial has at most 2 zeros.',
        'Sum of zeros of ax² + bx + c = -b/a.',
        'Product of zeros of ax² + bx + c = c/a.'
      ], [
        ['Zeros of x² - 5x + 6 are:', ['2, 3', '1, 6', '-2, -3', '5, 1'], 0],
        ['Sum of zeros of 2x² + 3x - 5 is:', ['3/2', '-3/2', '5/2', '-5/2'], 1],
        ['Product of zeros of x² - 4 is:', ['4', '-4', '2', '0'], 1],
        ['A cubic polynomial has at most ___ zeros.', ['1', '2', '3', '4'], 2],
        ['If one zero of x² - 7x + k is 3, then k = ?', ['10', '12', '14', '21'], 1]
      ]],
      ['Pair of Linear Equations in Two Variables', 'Graphical and algebraic methods of solving.', [
        'A pair of linear equations can be solved graphically, by substitution, or by elimination.',
        'If lines intersect: unique solution (consistent).',
        'If lines are parallel: no solution (inconsistent).',
        'If lines coincide: infinitely many solutions (dependent).'
      ], [
        ['Intersecting lines give ___ solution(s).', ['No', 'One', 'Infinite', 'Two'], 1],
        ['Parallel lines give ___ solution(s).', ['No', 'One', 'Infinite', 'Two'], 0],
        ['Solve: x + y = 5, x - y = 1. Then x = ?', ['2', '3', '4', '5'], 1],
        ['Coincident lines are:', ['Parallel', 'The same line', 'Perpendicular', 'Intersecting'], 1],
        ['Substitution method involves:', ['Replacing one variable', 'Drawing graphs', 'Guessing', 'Using matrices'], 0]
      ]],
      ['Quadratic Equations', 'Solve using factorisation, formula; discriminant.', [
        'Standard form: ax² + bx + c = 0.',
        'Quadratic formula: x = (-b ± √(b²-4ac)) / 2a.',
        'Discriminant D = b² - 4ac determines nature of roots.',
        'D > 0: two distinct real roots; D = 0: equal roots; D < 0: no real roots.'
      ], [
        ['Solve x² - 5x + 6 = 0:', ['x = 2, 3', 'x = 1, 6', 'x = -2, -3', 'x = 5, 6'], 0],
        ['If D = 0, the roots are:', ['Distinct', 'Equal', 'No real roots', 'Complex'], 1],
        ['Discriminant of x² + 4x + 4 is:', ['0', '4', '8', '16'], 0],
        ['Quadratic formula uses:', ['b² - 4ac', 'b² + 4ac', '2b - ac', 'a² - bc'], 0],
        ['If D < 0, the equation has:', ['Two real roots', 'One root', 'No real roots', 'Infinite roots'], 2]
      ]],
      ['Trigonometry', 'Trigonometric ratios and identities.', [
        'sin θ = Opposite / Hypotenuse.',
        'cos θ = Adjacent / Hypotenuse.',
        'tan θ = Opposite / Adjacent = sin θ / cos θ.',
        'sin²θ + cos²θ = 1 is the fundamental identity.'
      ], [
        ['sin 30° = ?', ['1', '1/2', '√3/2', '0'], 1],
        ['cos 60° = ?', ['1', '1/2', '√3/2', '0'], 1],
        ['tan 45° = ?', ['0', '1', '√3', '1/√3'], 1],
        ['sin²θ + cos²θ = ?', ['0', '1', '2', 'sin θ'], 1],
        ['If sin θ = 3/5, then cos θ = ?', ['4/5', '3/4', '5/3', '5/4'], 0]
      ]]
    ]
  },

  science: {
    'Class 5': [
      ['Living and Non-living Things', 'Differentiate living from non-living things.', [
        'Living things grow, breathe, eat, and reproduce.',
        'Non-living things do not grow or breathe.',
        'Animals need food, water, and air to survive.',
        'Plants make their own food through photosynthesis.'
      ], [
        ['Which is a living thing?', ['Rock', 'Tree', 'Chair', 'Water'], 1],
        ['Plants make food using:', ['Photosynthesis', 'Digestion', 'Breathing', 'Sleeping'], 0],
        ['Which is non-living?', ['Dog', 'Fish', 'Stone', 'Flower'], 2],
        ['Living things need ___ to survive.', ['Only water', 'Food, water, and air', 'Only sunlight', 'Only soil'], 1],
        ['Do non-living things reproduce?', ['Yes', 'No', 'Sometimes', 'Only in water'], 1]
      ]],
      ['Food and Nutrition', 'Understand food groups and balanced diet.', [
        'Carbohydrates give us energy (rice, bread, potatoes).',
        'Proteins help build our body (milk, eggs, pulses).',
        'Vitamins and minerals protect us from diseases.',
        'A balanced diet has all nutrients in the right amounts.'
      ], [
        ['Which food gives energy?', ['Rice', 'Water', 'Salt', 'Medicine'], 0],
        ['Proteins are found in:', ['Milk and eggs', 'Sugar only', 'Oil only', 'Water'], 0],
        ['A balanced diet contains:', ['Only carbohydrates', 'Only proteins', 'All nutrients', 'Only vitamins'], 2],
        ['Vitamins protect us from:', ['Hunger', 'Diseases', 'Cold weather', 'Heat'], 1],
        ['Which is a source of calcium?', ['Milk', 'Oil', 'Sugar', 'Salt'], 0]
      ]],
      ['Water and Its Uses', 'Learn about the water cycle and water conservation.', [
        'Water exists in three states: solid (ice), liquid (water), gas (steam).',
        'The water cycle: evaporation → condensation → precipitation.',
        'Water conservation means using water wisely.',
        'About 71% of Earth is covered with water.'
      ], [
        ['Ice is the ___ form of water.', ['Liquid', 'Solid', 'Gas', 'Plasma'], 1],
        ['Evaporation turns water into:', ['Ice', 'Steam/vapour', 'Solid', 'Oil'], 1],
        ['Rain is a type of:', ['Evaporation', 'Condensation', 'Precipitation', 'Filtration'], 2],
        ['We should ___ water.', ['Waste', 'Conserve', 'Pollute', 'Ignore'], 1],
        ['How much of Earth is covered by water?', ['About 50%', 'About 71%', 'About 30%', 'About 90%'], 1]
      ]]
    ],
    'Class 6': [
      ['Food: Where Does It Come From?', 'Sources of food and food materials.', [
        'Plants and animals are the main sources of our food.',
        'Herbivores eat only plants; carnivores eat animals; omnivores eat both.',
        'Different parts of plants are edible: roots, stems, leaves, fruits, seeds.',
        'Sprouting is the process of germinating seeds for food.'
      ], [
        ['Herbivores eat:', ['Only plants', 'Only animals', 'Both', 'Neither'], 0],
        ['Which part of a plant is a carrot?', ['Leaf', 'Root', 'Stem', 'Fruit'], 1],
        ['Humans are:', ['Herbivores', 'Carnivores', 'Omnivores', 'Autotrophs'], 2],
        ['Honey is produced by:', ['Cows', 'Bees', 'Hens', 'Fish'], 1],
        ['Sprouting involves:', ['Cooking seeds', 'Germinating seeds', 'Drying seeds', 'Grinding seeds'], 1]
      ]],
      ['Sorting Materials into Groups', 'Properties of materials and classification.', [
        'Materials can be grouped by appearance, hardness, transparency, and solubility.',
        'Transparent materials allow light to pass through completely.',
        'Translucent materials allow partial light.',
        'Opaque materials block all light.'
      ], [
        ['Glass is usually:', ['Opaque', 'Transparent', 'Translucent', 'None'], 1],
        ['Wood is:', ['Transparent', 'Translucent', 'Opaque', 'Soluble'], 2],
        ['Salt dissolves in water, so it is:', ['Insoluble', 'Soluble', 'Transparent', 'Opaque'], 1],
        ['A material that blocks all light is:', ['Transparent', 'Translucent', 'Opaque', 'Reflective'], 2],
        ['Butter paper is:', ['Transparent', 'Translucent', 'Opaque', 'Magnetic'], 1]
      ]],
      ['Body Movements', 'Understand bones, joints and movement.', [
        'The skeleton gives shape and support to the body.',
        'Joints are where two bones meet.',
        'Ball-and-socket joints allow movement in all directions (e.g., shoulder).',
        'Hinge joints allow movement in one direction (e.g., elbow, knee).'
      ], [
        ['The shoulder joint is a:', ['Hinge joint', 'Ball-and-socket joint', 'Fixed joint', 'Gliding joint'], 1],
        ['The knee joint is a:', ['Ball-and-socket', 'Hinge joint', 'Pivot joint', 'Fixed joint'], 1],
        ['Bones are connected at:', ['Muscles', 'Joints', 'Nerves', 'Skin'], 1],
        ['Skull bones have ___ joints.', ['Hinge', 'Ball-and-socket', 'Fixed (immovable)', 'Gliding'], 2],
        ['The human body has about ___ bones.', ['106', '206', '306', '406'], 1]
      ]]
    ],
    'Class 7': [
      ['Nutrition in Plants', 'Photosynthesis and other modes of nutrition.', [
        'Autotrophs make their own food; heterotrophs depend on others.',
        'Photosynthesis: CO₂ + H₂O + sunlight → glucose + O₂.',
        'Chlorophyll in leaves captures sunlight.',
        'Insectivorous plants like Venus flytrap trap insects for nutrients.'
      ], [
        ['Green plants are:', ['Heterotrophs', 'Autotrophs', 'Parasites', 'Decomposers'], 1],
        ['Photosynthesis occurs mainly in:', ['Roots', 'Leaves', 'Stems', 'Flowers'], 1],
        ['The green pigment in leaves is:', ['Melanin', 'Chlorophyll', 'Haemoglobin', 'Keratin'], 1],
        ['Photosynthesis releases:', ['Carbon dioxide', 'Nitrogen', 'Oxygen', 'Hydrogen'], 2],
        ['Venus flytrap is an ___ plant.', ['Parasitic', 'Insectivorous', 'Saprophytic', 'Epiphytic'], 1]
      ]],
      ['Heat and Temperature', 'Heat transfer, conductors and insulators.', [
        'Heat flows from a hotter object to a cooler object.',
        'Temperature is measured using a thermometer in °C or °F.',
        'Conduction: heat transfer through direct contact.',
        'Conductors transfer heat easily; insulators do not.'
      ], [
        ['Heat flows from ___ to ___ objects.', ['Cold to hot', 'Hot to cold', 'Equal temperature', 'Not at all'], 1],
        ['A thermometer measures:', ['Weight', 'Temperature', 'Length', 'Speed'], 1],
        ['Metals are usually:', ['Insulators', 'Conductors', 'Neither', 'Transparent'], 1],
        ['Wool is a:', ['Conductor', 'Insulator', 'Metal', 'Liquid'], 1],
        ['The unit of temperature is:', ['Meter', 'Kilogram', 'Degree Celsius', 'Litre'], 2]
      ]],
      ['Acids, Bases and Salts', 'Natural indicators and properties of acids and bases.', [
        'Acids taste sour (e.g., lemon, vinegar).',
        'Bases taste bitter and feel slippery (e.g., soap, baking soda).',
        'Indicators like litmus paper change colour in acids or bases.',
        'Acid + Base → Salt + Water (neutralisation).'
      ], [
        ['Lemon juice is:', ['Acidic', 'Basic', 'Neutral', 'Salty'], 0],
        ['Soap solution is:', ['Acidic', 'Basic', 'Neutral', 'Salty'], 1],
        ['Litmus paper is a/an:', ['Acid', 'Base', 'Indicator', 'Salt'], 2],
        ['Acid + Base = ?', ['More acid', 'Salt + Water', 'Gas', 'Nothing'], 1],
        ['Turmeric turns ___ in basic solutions.', ['Yellow', 'Red', 'Blue', 'Green'], 1]
      ]]
    ],
    'Class 8': [
      ['Crop Production and Management', 'Agricultural practices and crop types.', [
        'Kharif crops are sown in the rainy season (e.g., paddy, maize).',
        'Rabi crops are sown in winter (e.g., wheat, mustard).',
        'Steps: soil preparation → sowing → adding manure → irrigation → harvesting → storage.',
        'Crop rotation helps maintain soil fertility.'
      ], [
        ['Paddy is a ___ crop.', ['Rabi', 'Kharif', 'Zaid', 'Cash'], 1],
        ['Wheat is sown in:', ['Rainy season', 'Winter', 'Summer', 'All year'], 1],
        ['The first step in farming is:', ['Sowing', 'Soil preparation', 'Irrigation', 'Harvesting'], 1],
        ['Crop rotation helps:', ['Increase pests', 'Maintain soil fertility', 'Waste water', 'Nothing'], 1],
        ['Weeds are:', ['Useful plants', 'Unwanted plants', 'Crops', 'Insects'], 1]
      ]],
      ['Cell — Structure and Functions', 'The basic unit of life and its organelles.', [
        'The cell is the basic structural and functional unit of life.',
        'Cell membrane controls what enters and leaves the cell.',
        'The nucleus contains DNA and controls cell activities.',
        'Plant cells have a cell wall and chloroplasts; animal cells do not.'
      ], [
        ['The basic unit of life is:', ['Atom', 'Cell', 'Organ', 'Tissue'], 1],
        ['Which organelle contains DNA?', ['Mitochondria', 'Nucleus', 'Ribosome', 'Cell wall'], 1],
        ['Plant cells have ___ that animal cells lack.', ['Nucleus', 'Cell wall', 'Cell membrane', 'Cytoplasm'], 1],
        ['Chloroplasts are found in:', ['Animal cells', 'Plant cells', 'Both', 'Neither'], 1],
        ['Cell membrane controls:', ['What enters and leaves', 'Cell division', 'Photosynthesis', 'Movement'], 0]
      ]],
      ['Force and Pressure', 'Types of forces, friction, and pressure.', [
        'A force can change the speed, direction, or shape of an object.',
        'Friction is a force that opposes motion.',
        'Pressure = Force / Area.',
        'Atmospheric pressure is exerted by air on all objects.'
      ], [
        ['Friction ___ motion.', ['Helps', 'Opposes', 'Has no effect on', 'Creates'], 1],
        ['Pressure = Force / ___', ['Mass', 'Area', 'Volume', 'Speed'], 1],
        ['A force can change the ___ of an object.', ['Color', 'Shape', 'Weight', 'Temperature'], 1],
        ['If force increases and area stays same, pressure:', ['Decreases', 'Stays same', 'Increases', 'Becomes zero'], 2],
        ['Atmospheric pressure is exerted by:', ['Water', 'Soil', 'Air', 'Fire'], 2]
      ]]
    ],
    'Class 9': [
      ['Matter in Our Surroundings', 'States of matter, change of state, evaporation.', [
        'Matter exists in three states: solid, liquid, and gas.',
        'Particles of matter are in continuous motion.',
        'Solids have fixed shape and volume; liquids have fixed volume but not shape; gases have neither.',
        'Change of state occurs due to changes in temperature or pressure.'
      ], [
        ['Solids have:', ['Fixed shape only', 'Fixed volume only', 'Fixed shape and volume', 'Neither'], 2],
        ['Boiling point of water is:', ['50°C', '100°C', '0°C', '212°C'], 1],
        ['Sublimation is the change from:', ['Solid to liquid', 'Liquid to gas', 'Solid to gas', 'Gas to liquid'], 2],
        ['Particles in a gas are:', ['Very close together', 'Moderately spaced', 'Far apart', 'Not moving'], 2],
        ['Evaporation causes:', ['Heating', 'Cooling', 'Melting', 'Freezing'], 1]
      ]],
      ['Atoms and Molecules', 'Dalton\'s theory, atomic mass, molecular formula.', [
        'An atom is the smallest particle of an element.',
        'A molecule is formed when two or more atoms bond together.',
        'Atomic mass is measured in atomic mass units (amu).',
        'Chemical formula represents the composition of a molecule (e.g., H₂O).'
      ], [
        ['The smallest particle of an element is:', ['Molecule', 'Atom', 'Ion', 'Compound'], 1],
        ['H₂O represents:', ['Hydrogen only', 'Oxygen only', 'Water', 'Hydrogen peroxide'], 2],
        ['CO₂ has ___ atoms of oxygen.', ['1', '2', '3', '4'], 1],
        ['NaCl is the formula for:', ['Water', 'Salt', 'Sugar', 'Vinegar'], 1],
        ['Atomic mass is measured in:', ['grams', 'kg', 'amu', 'litres'], 2]
      ]],
      ['Force and Laws of Motion', 'Newton\'s three laws of motion.', [
        'First Law: An object remains at rest or in uniform motion unless acted upon by an external force.',
        'Second Law: Force = Mass × Acceleration (F = ma).',
        'Third Law: For every action, there is an equal and opposite reaction.',
        'Inertia is the tendency of a body to resist change in its state of motion.'
      ], [
        ['F = m × a is Newton\'s ___ law.', ['First', 'Second', 'Third', 'Fourth'], 1],
        ['Inertia is related to Newton\'s ___ law.', ['First', 'Second', 'Third', 'Fourth'], 0],
        ['If mass = 5 kg and acceleration = 2 m/s², force = ?', ['3 N', '7 N', '10 N', '2.5 N'], 2],
        ['"Every action has an equal and opposite reaction" is the ___ law.', ['First', 'Second', 'Third', 'Fourth'], 2],
        ['Unit of force is:', ['Joule', 'Newton', 'Watt', 'Pascal'], 1]
      ]]
    ],
    'Class 10': [
      ['Chemical Reactions and Equations', 'Balancing equations, types of reactions.', [
        'A chemical equation represents a chemical reaction using symbols and formulas.',
        'Reactants are on the left; products are on the right.',
        'Types: Combination, Decomposition, Displacement, Double Displacement, Redox.',
        'A balanced equation has equal atoms on both sides.'
      ], [
        ['In a chemical equation, products are on the:', ['Left', 'Right', 'Top', 'Bottom'], 1],
        ['Rusting of iron is an example of:', ['Combination', 'Oxidation', 'Decomposition', 'Displacement'], 1],
        ['A balanced equation must have:', ['Equal atoms on both sides', 'More reactants', 'More products', 'No products'], 0],
        ['2H₂ + O₂ → 2H₂O is a ___ reaction.', ['Decomposition', 'Combination', 'Displacement', 'Neutralisation'], 1],
        ['Decomposition is the ___ of combination.', ['Same as', 'Opposite', 'Not related to', 'Subset of'], 1]
      ]],
      ['Life Processes', 'Nutrition, respiration, transportation, excretion.', [
        'Nutrition provides energy for life processes.',
        'Autotrophic nutrition uses photosynthesis; heterotrophic depends on other organisms.',
        'Respiration breaks down glucose to release energy.',
        'The circulatory system transports blood throughout the body.'
      ], [
        ['Photosynthesis is ___ nutrition.', ['Heterotrophic', 'Autotrophic', 'Parasitic', 'Saprophytic'], 1],
        ['Respiration releases:', ['Oxygen', 'Energy', 'Food', 'Water only'], 1],
        ['Blood is transported by the ___ system.', ['Nervous', 'Digestive', 'Circulatory', 'Skeletal'], 2],
        ['Kidneys are responsible for:', ['Digestion', 'Excretion', 'Respiration', 'Circulation'], 1],
        ['Stomata in leaves are used for:', ['Gas exchange', 'Movement', 'Reproduction', 'Support'], 0]
      ]],
      ['Light – Reflection and Refraction', 'Laws of reflection and refraction, mirrors and lenses.', [
        'Angle of incidence = Angle of reflection.',
        'Concave mirrors converge light; convex mirrors diverge light.',
        'Convex lenses converge light; concave lenses diverge light.',
        'Refractive index = Speed of light in vacuum / Speed of light in medium.'
      ], [
        ['Angle of incidence equals:', ['Angle of refraction', 'Angle of reflection', '90°', '0°'], 1],
        ['A concave mirror ___ light.', ['Diverges', 'Converges', 'Blocks', 'Absorbs'], 1],
        ['A convex lens is used in:', ['Magnifying glass', 'Car rear-view mirror', 'Flashlight', 'Periscope'], 0],
        ['Snell\'s law relates to:', ['Reflection', 'Refraction', 'Diffraction', 'Polarisation'], 1],
        ['Speed of light is fastest in:', ['Water', 'Glass', 'Vacuum', 'Diamond'], 2]
      ]]
    ]
  },

  english: {
    'Class 5': [
      ['Nouns and Pronouns', 'Identify and use nouns and pronouns correctly.', [
        'A noun names a person, place, animal, or thing.',
        'Proper nouns name specific things and start with a capital letter.',
        'Common nouns are general names (book, city, girl).',
        'Pronouns replace nouns (he, she, it, they).'
      ], [
        ['Which is a proper noun?', ['city', 'dog', 'India', 'river'], 2],
        ['A pronoun replaces a:', ['Verb', 'Noun', 'Adjective', 'Adverb'], 1],
        ['"She" is a:', ['Noun', 'Pronoun', 'Verb', 'Adjective'], 1],
        ['Which is a common noun?', ['Delhi', 'Ganga', 'book', 'Rahul'], 2],
        ['"The cat sat on the mat." The noun is:', ['sat', 'on', 'the', 'cat'], 3]
      ]],
      ['Verbs and Tenses', 'Use present, past and future tense correctly.', [
        'A verb shows action or a state of being.',
        'Present tense: the action is happening now.',
        'Past tense: the action already happened.',
        'Future tense: the action will happen.'
      ], [
        ['"He plays football." What tense is this?', ['Past', 'Present', 'Future', 'None'], 1],
        ['"She went to school." What tense?', ['Past', 'Present', 'Future', 'None'], 0],
        ['"They will come tomorrow." What tense?', ['Past', 'Present', 'Future', 'None'], 2],
        ['Which is a verb?', ['Beautiful', 'Quickly', 'Run', 'Happy'], 2],
        ['Past tense of "go" is:', ['Goes', 'Going', 'Went', 'Gone'], 2]
      ]],
      ['Sentences and Punctuation', 'Form complete sentences with correct punctuation.', [
        'A sentence begins with a capital letter and ends with a full stop, question mark, or exclamation mark.',
        'A statement ends with a full stop (.).',
        'A question ends with a question mark (?).',
        'An exclamation ends with an exclamation mark (!).'
      ], [
        ['A question ends with:', ['.', '?', '!', ','], 1],
        ['Which is a complete sentence?', ['Running fast', 'The dog barks.', 'Very happy', 'Under the tree'], 1],
        ['A sentence starts with a:', ['Small letter', 'Capital letter', 'Number', 'Symbol'], 1],
        ['"What a wonderful day!" ends with:', ['.', '?', '!', ','], 2],
        ['A statement ends with:', ['.', '?', '!', ':'], 0]
      ]]
    ],
    'Class 6': [
      ['Parts of Speech', 'Nouns, verbs, adjectives, adverbs, prepositions.', [
        'A noun names a person, place, or thing.',
        'An adjective describes a noun (big, red, happy).',
        'An adverb modifies a verb, adjective, or another adverb (quickly, very).',
        'A preposition shows relationship (in, on, at, under, between).'
      ], [
        ['Which is an adjective?', ['Run', 'Beautiful', 'Quickly', 'School'], 1],
        ['Which is an adverb?', ['Happy', 'Fast (modifying a verb)', 'Table', 'Red'], 1],
        ['"The cat is under the table." "Under" is a:', ['Noun', 'Verb', 'Adjective', 'Preposition'], 3],
        ['Which word is a verb?', ['Slowly', 'Jump', 'Blue', 'Big'], 1],
        ['"She sings beautifully." "Beautifully" is a/an:', ['Noun', 'Verb', 'Adjective', 'Adverb'], 3]
      ]],
      ['Tenses in Detail', 'Simple present, past, and continuous tenses.', [
        'Simple present: I eat, he eats.',
        'Simple past: I ate, she walked.',
        'Present continuous: I am eating (action happening now).',
        'Past continuous: I was eating (action was happening in the past).'
      ], [
        ['"I am reading a book." What tense?', ['Simple present', 'Present continuous', 'Past continuous', 'Simple past'], 1],
        ['"They were playing." What tense?', ['Simple past', 'Present continuous', 'Past continuous', 'Future'], 2],
        ['Simple past of "write" is:', ['Writes', 'Writing', 'Wrote', 'Written'], 2],
        ['"He runs every morning." What tense?', ['Simple present', 'Present continuous', 'Past', 'Future'], 0],
        ['Which sentence is past continuous?', ['I eat.', 'I was eating.', 'I will eat.', 'I eat now.'], 1]
      ]],
      ['Reading Comprehension', 'Read and understand paragraphs, answer questions.', [
        'Read the passage carefully before answering.',
        'The main idea is the most important point of the passage.',
        'Supporting details give more information about the main idea.',
        'Context clues help understand the meaning of unknown words.'
      ], [
        ['The main idea of a passage is:', ['The first sentence always', 'The most important point', 'The last word', 'A random detail'], 1],
        ['Context clues help you:', ['Spell words', 'Find meaning of unknown words', 'Count words', 'Write stories'], 1],
        ['Supporting details:', ['Contradict the main idea', 'Give more information', 'Are always in the first paragraph', 'Are unimportant'], 1],
        ['Before answering questions, you should:', ['Read quickly', 'Read carefully', 'Skip the passage', 'Guess'], 1],
        ['A paragraph usually has:', ['One main idea', 'No main idea', 'Many main ideas', 'Only questions'], 0]
      ]]
    ],
    'Class 7': [
      ['Active and Passive Voice', 'Convert sentences between active and passive voice.', [
        'Active voice: Subject performs the action (The cat caught the mouse).',
        'Passive voice: Subject receives the action (The mouse was caught by the cat).',
        'In passive voice, the verb form changes to "was/were + past participle".',
        'Only transitive verbs (with objects) can be changed to passive.'
      ], [
        ['"The book was read by her." This is ___ voice.', ['Active', 'Passive', 'Imperative', 'Exclamatory'], 1],
        ['Active: "She writes a letter." Passive:', ['"A letter is written by her."', '"She is written."', '"A letter writes her."', '"Written by she."'], 0],
        ['In passive voice, the subject ___ the action.', ['Performs', 'Receives', 'Ignores', 'Creates'], 1],
        ['Which cannot be changed to passive?', ['He ate the cake.', 'She sang a song.', 'He slept.', 'They built a house.'], 2],
        ['"The window was broken." This sentence lacks:', ['Verb', 'Subject', 'The doer of the action', 'An adjective'], 2]
      ]],
      ['Direct and Indirect Speech', 'Report what someone said.', [
        'Direct speech uses the exact words of the speaker within quotation marks.',
        'Indirect speech reports what was said without quotation marks.',
        'Tense usually shifts back one step in indirect speech.',
        'Pronouns may change when converting to indirect speech.'
      ], [
        ['Direct speech uses:', ['Quotation marks', 'Brackets', 'Dashes', 'No punctuation'], 0],
        ['He said, "I am happy." Indirect: He said that he ___ happy.', ['is', 'was', 'will be', 'has been'], 1],
        ['In indirect speech, "today" changes to:', ['Tomorrow', 'That day', 'Yesterday', 'Now'], 1],
        ['She said, "I will come." Indirect: She said she ___ come.', ['will', 'would', 'can', 'shall'], 1],
        ['Indirect speech does NOT use:', ['Conjunctions', 'Quotation marks', 'Pronouns', 'Verbs'], 1]
      ]],
      ['Story Writing and Composition', 'Structure a story with beginning, middle, and end.', [
        'A good story has a clear beginning, middle, and end.',
        'Characters are the people or animals in the story.',
        'The setting tells where and when the story takes place.',
        'The plot is the sequence of events in the story.'
      ], [
        ['A story needs a:', ['Beginning, middle, end', 'Only an end', 'Only a beginning', 'No characters'], 0],
        ['The setting of a story describes:', ['Characters only', 'Where and when it takes place', 'The moral only', 'The title'], 1],
        ['The sequence of events is called the:', ['Setting', 'Character', 'Plot', 'Moral'], 2],
        ['Characters are:', ['Places in a story', 'People/animals in a story', 'Events only', 'Titles'], 1],
        ['A good ending should:', ['Be sudden without resolution', 'Resolve the conflict', 'Leave everything unexplained', 'Repeat the beginning'], 1]
      ]]
    ],
    'Class 8': [
      ['Reported Speech Advanced', 'Complex reporting of commands, requests, questions.', [
        'Commands in indirect speech: "told/ordered + to + verb".',
        'Requests: "requested/asked + to + verb".',
        'Questions in indirect speech use "if/whether" for yes/no questions.',
        'Wh-questions keep their question word in indirect speech.'
      ], [
        ['"Shut the door," he said. Indirect:', ['He said to shut the door.', 'He ordered to shut the door.', 'He told the door.', 'He shut the door.'], 0],
        ['"Do you like tea?" Indirect uses:', ['What', 'If/Whether', 'Why', 'How'], 1],
        ['"Where do you live?" In indirect speech, the question word:', ['Is removed', 'Stays', 'Changes to "that"', 'Is doubled'], 1],
        ['A request in indirect speech uses:', ['"demanded"', '"requested/asked + to"', '"shouted"', '"whispered"'], 1],
        ['"Please help me," she said. Indirect:', ['She told to help.', 'She requested to help her.', 'She said help.', 'She helps.'], 1]
      ]],
      ['Modals and Conditionals', 'Use can, could, may, might, should, would, must.', [
        'Modals are helping verbs that express ability, permission, possibility, or obligation.',
        'Can = ability; May = permission or possibility.',
        'Must = strong obligation; Should = advice.',
        'Conditional sentences often use if + would/could.'
      ], [
        ['"You ___ brush your teeth daily." (advice)', ['can', 'might', 'should', 'may'], 2],
        ['"___ I come in?" (asking permission)', ['Should', 'Must', 'Will', 'May'], 3],
        ['"She ___ speak three languages." (ability)', ['must', 'can', 'may', 'should'], 1],
        ['"You ___ not steal." (strong obligation)', ['can', 'may', 'might', 'must'], 3],
        ['"If it rains, I ___ stay home."', ['will', 'must always', 'never', 'can\'t'], 0]
      ]],
      ['Letter Writing', 'Formal and informal letter formats.', [
        'Formal letters are written to officials, editors, or employers.',
        'Informal letters are written to friends and family.',
        'A formal letter has: sender\'s address, date, receiver\'s address, subject, body, closing.',
        'Use polite and professional language in formal letters.'
      ], [
        ['A formal letter is written to:', ['Friends', 'Officials/employers', 'Pets', 'Yourself'], 1],
        ['An informal letter is written to:', ['Principal', 'Friends and family', 'Editor', 'Police'], 1],
        ['Formal letters must include:', ['Jokes', 'Sender\'s address and subject', 'Drawings', 'Slang'], 1],
        ['The correct closing for a formal letter is:', ['Love, Me', 'Yours faithfully,', 'See ya!', 'XOXO'], 1],
        ['Informal letters use ___ language.', ['Very formal', 'Casual and friendly', 'Legal', 'Technical'], 1]
      ]]
    ],
    'Class 9': [
      ['Tenses – All Forms', 'Master all 12 tenses of English.', [
        'Simple tenses: present, past, future (basic action).',
        'Continuous tenses: present/past/future + "be + verb-ing" (ongoing action).',
        'Perfect tenses: "has/have/had + past participle" (completed action).',
        'Perfect continuous: "has been + verb-ing" (action started in past, continuing).'
      ], [
        ['"She has been working for 3 hours." Tense:', ['Simple present', 'Present perfect continuous', 'Past perfect', 'Future perfect'], 1],
        ['"They had left before I arrived." Tense:', ['Past perfect', 'Simple past', 'Past continuous', 'Present perfect'], 0],
        ['"I will have finished by tomorrow." Tense:', ['Simple future', 'Future continuous', 'Future perfect', 'Future perfect continuous'], 2],
        ['How many tenses are there in English?', ['6', '8', '10', '12'], 3],
        ['"He was reading when I called." "Was reading" is:', ['Simple past', 'Past continuous', 'Past perfect', 'Present continuous'], 1]
      ]],
      ['Clauses and Complex Sentences', 'Main clauses, subordinate clauses, relative clauses.', [
        'A main clause can stand alone as a complete sentence.',
        'A subordinate clause depends on the main clause.',
        'Relative clauses start with who, which, that, where, when.',
        'Complex sentences have at least one main clause and one subordinate clause.'
      ], [
        ['A subordinate clause:', ['Stands alone', 'Depends on main clause', 'Has no verb', 'Is always first'], 1],
        ['"The boy who won the race is my friend." "Who won the race" is a:', ['Main clause', 'Relative clause', 'Phrase', 'Sentence'], 1],
        ['Relative clauses often begin with:', ['But, and, or', 'Who, which, that', 'Very, much, too', 'Is, am, are'], 1],
        ['A complex sentence has:', ['Only one clause', 'Two main clauses', 'Main + subordinate clause(s)', 'No verbs'], 2],
        ['"Because it rained, the match was cancelled." "Because it rained" is:', ['Main clause', 'Subordinate clause', 'A phrase', 'An interjection'], 1]
      ]],
      ['Writing Skills – Essay and Debate', 'Structure essays and debates effectively.', [
        'An essay has an introduction, body paragraphs, and conclusion.',
        'Each body paragraph should focus on one main point.',
        'Use transitional words to connect ideas (however, therefore, moreover).',
        'In a debate, present arguments for or against a motion.'
      ], [
        ['An essay introduction should:', ['Summarise everything', 'Introduce the topic', 'List all points', 'Be the longest section'], 1],
        ['A body paragraph focuses on:', ['One main point', 'All points', 'Only the conclusion', 'The title'], 0],
        ['"However" is a:', ['Noun', 'Transitional word', 'Verb', 'Pronoun'], 1],
        ['A conclusion should:', ['Add new points', 'Summarise and close', 'Be the longest part', 'Repeat the introduction exactly'], 1],
        ['In a debate, you present:', ['Stories only', 'Arguments for or against', 'Poetry', 'Songs'], 1]
      ]]
    ],
    'Class 10': [
      ['Grammar Revision – Advanced', 'Comprehensive grammar including all topics.', [
        'Subject-verb agreement: singular subjects take singular verbs.',
        'Dangling modifiers cause confusion when not placed near the word they modify.',
        'Parallel structure: list items should be in the same grammatical form.',
        'The semicolon connects two related independent clauses.'
      ], [
        ['"Either the boys or the girl ___ going." Correct verb:', ['are', 'is', 'were', 'have'], 1],
        ['"Running down the street, the dog was seen." This has a:', ['Parallel structure', 'Dangling modifier', 'Correct structure', 'Semicolon error'], 1],
        ['Parallel: "She likes reading, ___, and swimming."', ['to write', 'writes', 'writing', 'written'], 2],
        ['A semicolon is used to:', ['End a sentence', 'Connect related independent clauses', 'Start a list', 'Show surprise'], 1],
        ['"Neither he nor they ___ ready."', ['is', 'was', 'are', 'has'], 2]
      ]],
      ['Literature – Poetry Analysis', 'Understand literary devices and interpret poems.', [
        'A simile compares using "like" or "as" (e.g., brave as a lion).',
        'A metaphor directly equates two things (e.g., Time is money).',
        'Alliteration is the repetition of initial consonant sounds.',
        'The theme is the central message or lesson of a poem.'
      ], [
        ['"She is as brave as a lion." This is a:', ['Metaphor', 'Simile', 'Personification', 'Hyperbole'], 1],
        ['"Time is money." This is a:', ['Simile', 'Metaphor', 'Alliteration', 'Onomatopoeia'], 1],
        ['"Peter Piper picked..." is an example of:', ['Metaphor', 'Simile', 'Alliteration', 'Irony'], 2],
        ['The central message of a poem is the:', ['Rhyme', 'Theme', 'Title', 'Stanza'], 1],
        ['Personification gives ___ qualities to non-human things.', ['Animal', 'Human', 'Plant', 'Mechanical'], 1]
      ]],
      ['Writing – Formal Communication', 'Notices, reports, articles and formal emails.', [
        'A notice should include: heading, date, body, and signature with designation.',
        'A report follows: headline, byline, dateline, and body.',
        'An article has: title, introduction, body, and conclusion.',
        'Formal emails use professional language and clear subject lines.'
      ], [
        ['A notice must include:', ['Heading, date, body, signature', 'Only the date', 'Only the heading', 'A drawing'], 0],
        ['A report starts with:', ['A question', 'A headline', 'A story', 'A joke'], 1],
        ['An article needs a:', ['Title and body', 'Only a title', 'Only a conclusion', 'Drawing'], 0],
        ['A formal email should have:', ['Slang', 'Professional language', 'Emojis', 'Abbreviations like LOL'], 1],
        ['The byline of a report tells:', ['The date', 'Who wrote it', 'Where it happened', 'The word count'], 1]
      ]]
    ]
  },

  computer: {
    'Class 5': [
      ['Introduction to Computers', 'Know the parts and uses of a computer.', [
        'A computer is an electronic device that processes data.',
        'Input devices: keyboard, mouse. Output devices: monitor, printer.',
        'CPU is the brain of the computer.',
        'Software tells the computer what to do; hardware is the physical parts.'
      ], [
        ['CPU stands for:', ['Central Processing Unit', 'Computer Personal Unit', 'Central Power Unit', 'Computer Processing Unit'], 0],
        ['A keyboard is an ___ device.', ['Input', 'Output', 'Storage', 'Processing'], 0],
        ['A monitor is an ___ device.', ['Input', 'Output', 'Storage', 'Processing'], 1],
        ['Software is:', ['A physical part', 'Instructions for the computer', 'A type of hardware', 'A cable'], 1],
        ['Which is NOT a part of a computer?', ['Monitor', 'Keyboard', 'CPU', 'Textbook'], 3]
      ]],
      ['Using a Computer', 'Learn about files, folders and basic operations.', [
        'Files store data like documents, images, and videos.',
        'Folders organize files into groups.',
        'You can create, rename, copy, move, and delete files.',
        'The Desktop is the main screen you see after the computer starts.'
      ], [
        ['Files store:', ['Only text', 'Data like documents and images', 'Only games', 'Nothing'], 1],
        ['Folders help to:', ['Delete files', 'Organize files', 'Create hardware', 'Install cables'], 1],
        ['The first screen after starting a computer is:', ['File Manager', 'Desktop', 'Settings', 'Browser'], 1],
        ['To organize files, you use:', ['A pen', 'Folders', 'A printer', 'A mouse pad'], 1],
        ['Which operation can you do on a file?', ['Eat it', 'Rename it', 'Touch it', 'Fold it'], 1]
      ]]
    ],
    'Class 6': [
      ['Components of Computer', 'Hardware and software, types of memory.', [
        'RAM (Random Access Memory) is temporary storage — lost when power is off.',
        'ROM (Read Only Memory) stores permanent startup instructions.',
        'Hard disk / SSD provides permanent storage for files.',
        'System software (OS) manages hardware; application software does specific tasks.'
      ], [
        ['RAM is ___ memory.', ['Permanent', 'Temporary', 'Read Only', 'Output'], 1],
        ['ROM stands for:', ['Random Only Memory', 'Read Only Memory', 'Run Only Memory', 'Read Output Memory'], 1],
        ['An operating system is a type of:', ['Hardware', 'System software', 'Application software', 'Input device'], 1],
        ['MS Word is an example of:', ['System software', 'Application software', 'Hardware', 'Operating system'], 1],
        ['Data on a hard disk is ___ when power is off.', ['Lost', 'Kept safely', 'Doubled', 'Deleted'], 1]
      ]],
      ['Introduction to Programming', 'Understand algorithms, flowcharts, and simple coding.', [
        'An algorithm is a step-by-step procedure to solve a problem.',
        'A flowchart uses shapes to represent steps in an algorithm.',
        'Programming languages let us write instructions computers can follow.',
        'Scratch is a visual programming language for beginners.'
      ], [
        ['An algorithm is:', ['A random guess', 'A step-by-step procedure', 'A hardware device', 'A type of cable'], 1],
        ['A flowchart uses:', ['Text only', 'Shapes and arrows', 'Only numbers', 'Videos'], 1],
        ['Scratch is a:', ['Hardware', 'Operating system', 'Visual programming language', 'Game'], 2],
        ['The diamond shape in flowcharts represents:', ['Start/End', 'Process', 'Decision', 'Input/Output'], 2],
        ['Why do we use algorithms?', ['To confuse computers', 'To solve problems step by step', 'To break computers', 'For decoration'], 1]
      ]]
    ],
    'Class 7': [
      ['Internet and Web', 'Understand the internet, browsers, and safe usage.', [
        'The internet is a global network connecting millions of computers.',
        'A web browser (Chrome, Firefox) is used to access websites.',
        'A URL is the address of a webpage (e.g., www.example.com).',
        'Online safety: never share passwords or personal information with strangers.'
      ], [
        ['The internet connects:', ['Only two computers', 'Millions of computers worldwide', 'Only phones', 'Only schools'], 1],
        ['A browser is used to:', ['Type documents', 'Access websites', 'Print photos', 'Save hardware'], 1],
        ['URL stands for:', ['Uniform Resource Locator', 'Universal Running Link', 'Unique Resource Line', 'Unified Record Locator'], 0],
        ['You should ___ share your password online.', ['Always', 'Sometimes', 'Never', 'Often'], 2],
        ['Which is a web browser?', ['MS Word', 'Chrome', 'Paint', 'Calculator'], 1]
      ]],
      ['Introduction to HTML', 'Create simple web pages using HTML tags.', [
        'HTML stands for HyperText Markup Language.',
        'HTML uses tags like <h1>, <p>, <img> to structure a webpage.',
        'Every HTML page starts with <!DOCTYPE html> and has <html>, <head>, <body>.',
        'Tags usually come in pairs: opening <tag> and closing </tag>.'
      ], [
        ['HTML stands for:', ['Hyper Tool Markup Language', 'HyperText Markup Language', 'High Text Making Language', 'Hyper Transfer Markup Line'], 1],
        ['The <h1> tag creates:', ['A paragraph', 'A heading', 'An image', 'A link'], 1],
        ['HTML tags come in:', ['Singles only', 'Pairs (opening and closing)', 'Triples', 'No structure'], 1],
        ['The <p> tag creates:', ['A heading', 'A paragraph', 'A picture', 'A table'], 1],
        ['The body of an HTML page contains:', ['CSS only', 'The visible content', 'Only the title', 'Nothing'], 1]
      ]]
    ],
    'Class 8': [
      ['Introduction to Python', 'Variables, data types, and basic operations.', [
        'Python is a popular, easy-to-learn programming language.',
        'Variables store data values (e.g., name = "Ravi").',
        'Data types: int (integer), float (decimal), str (text), bool (True/False).',
        'print() displays output on the screen.'
      ], [
        ['Python is a:', ['Hardware', 'Programming language', 'Browser', 'Operating system'], 1],
        ['In Python, x = 5 means:', ['x is always 5', 'x stores the value 5', '5 equals x', 'x is deleted'], 1],
        ['print("Hello") displays:', ['print', '"Hello"', 'Hello', 'Error'], 2],
        ['Which is a string data type?', ['42', '3.14', '"Hello"', 'True'], 2],
        ['A boolean value can be:', ['True or False', 'Any number', 'Only text', 'None of these'], 0]
      ]],
      ['Control Structures', 'if-else conditions and loops in Python.', [
        'if statement checks a condition and runs code if true.',
        'else runs code when the if condition is false.',
        'A for loop repeats code a specific number of times.',
        'A while loop repeats as long as a condition is true.'
      ], [
        ['An if statement checks a:', ['Loop', 'Condition', 'Function', 'Variable name'], 1],
        ['else runs when the if condition is:', ['True', 'False', 'Missing', 'Repeated'], 1],
        ['for i in range(5) runs ___ times.', ['4', '5', '6', '1'], 1],
        ['A while loop continues as long as the condition is:', ['False', 'True', 'Missing', 'Zero'], 1],
        ['What does "break" do in a loop?', ['Starts the loop', 'Exits the loop', 'Pauses the loop', 'Continues the loop'], 1]
      ]]
    ],
    'Class 9': [
      ['Python Functions and Modules', 'Define functions, use parameters and return values.', [
        'A function is a reusable block of code defined with def.',
        'Parameters are inputs to a function.',
        'The return statement sends a value back from the function.',
        'Modules are files containing Python code that can be imported.'
      ], [
        ['Functions are defined using:', ['class', 'def', 'func', 'var'], 1],
        ['A parameter is:', ['An output', 'An input to a function', 'A loop', 'An error'], 1],
        ['return in a function:', ['Stops the program', 'Sends back a value', 'Prints output', 'Deletes data'], 1],
        ['To use a module, you use:', ['download', 'import', 'install', 'include'], 1],
        ['def greet(name): ... "name" is a:', ['Function', 'Parameter', 'Module', 'Return value'], 1]
      ]],
      ['Data Structures in Python', 'Lists, tuples, dictionaries.', [
        'A list is an ordered, mutable collection: [1, 2, 3].',
        'A tuple is an ordered, immutable collection: (1, 2, 3).',
        'A dictionary stores key-value pairs: {"name": "Anu", "age": 15}.',
        'Lists use index starting from 0.'
      ], [
        ['A list in Python is:', ['Immutable', 'Mutable', 'A number', 'A function'], 1],
        ['A tuple is:', ['Mutable', 'Immutable', 'A loop', 'A module'], 1],
        ['In a list [10, 20, 30], index of 20 is:', ['0', '1', '2', '3'], 1],
        ['A dictionary stores:', ['Only numbers', 'Key-value pairs', 'Only strings', 'Only lists'], 1],
        ['To add an item to a list, use:', ['.add()', '.append()', '.insert_end()', '.push()'], 1]
      ]],
      ['Cyber Safety', 'Online threats, safe practices, and digital ethics.', [
        'Malware includes viruses, worms, and trojans that harm computers.',
        'Phishing tricks you into revealing personal information through fake emails or websites.',
        'Strong passwords have 8+ characters with letters, numbers, and symbols.',
        'Cyberbullying is using technology to harass or threaten others.'
      ], [
        ['Malware includes:', ['Hardware', 'Viruses and trojans', 'Good software', 'USB cables'], 1],
        ['Phishing tries to:', ['Fix your computer', 'Steal personal information', 'Speed up internet', 'Install updates'], 1],
        ['A strong password should have:', ['Only letters', 'Only numbers', 'Mix of letters, numbers, symbols', 'Your name'], 2],
        ['Cyberbullying is:', ['Using tech to help others', 'Using tech to harass others', 'A computer virus', 'A type of software'], 1],
        ['You should ___ click links in suspicious emails.', ['Always', 'Sometimes', 'Never', 'Quickly'], 2]
      ]]
    ],
    'Class 10': [
      ['Advanced Python Programming', 'File handling, error handling, and OOP basics.', [
        'Files can be opened in read ("r"), write ("w"), or append ("a") mode.',
        'Try-except blocks handle errors without crashing the program.',
        'A class is a blueprint for creating objects.',
        'An object is an instance of a class with attributes and methods.'
      ], [
        ['To read a file in Python, use mode:', ['"w"', '"r"', '"a"', '"d"'], 1],
        ['try-except is used to:', ['Create files', 'Handle errors', 'Write loops', 'Define classes'], 1],
        ['A class is a:', ['Variable', 'Blueprint for objects', 'Type of loop', 'Module'], 1],
        ['An object is:', ['A class name', 'An instance of a class', 'A module', 'A keyword'], 1],
        ['To add to an existing file without overwriting, use mode:', ['"r"', '"w"', '"a"', '"x"'], 2]
      ]],
      ['Database Concepts', 'Relational databases, SQL basics, keys.', [
        'A database is an organized collection of data.',
        'A table has rows (records) and columns (fields).',
        'A primary key uniquely identifies each record.',
        'SQL (Structured Query Language) is used to manage databases.'
      ], [
        ['A database is:', ['A random file', 'An organized collection of data', 'A programming language', 'A hardware device'], 1],
        ['Rows in a table are also called:', ['Fields', 'Records', 'Keys', 'Queries'], 1],
        ['A primary key:', ['Can be duplicated', 'Uniquely identifies a record', 'Is optional', 'Is always a name'], 1],
        ['SQL stands for:', ['Simple Query Language', 'Structured Query Language', 'System Query Line', 'Standard Query Logic'], 1],
        ['SELECT * FROM students; does what?', ['Deletes all students', 'Shows all student records', 'Creates a table', 'Updates a record'], 1]
      ]]
    ]
  },

  social: {
    'Class 5': [
      ['Our Country India', 'Learn about India\'s geography and states.', [
        'India is located in South Asia.',
        'India has 28 states and 8 union territories.',
        'The capital of India is New Delhi.',
        'The Himalayas are in the north; the Indian Ocean is in the south.'
      ], [
        ['The capital of India is:', ['Mumbai', 'New Delhi', 'Kolkata', 'Chennai'], 1],
        ['India has ___ states.', ['25', '28', '30', '32'], 1],
        ['The Himalayas are in the ___ of India.', ['South', 'East', 'North', 'West'], 2],
        ['India is in which continent?', ['Europe', 'Africa', 'Asia', 'Australia'], 2],
        ['The Indian Ocean is to the ___ of India.', ['North', 'South', 'East', 'West'], 1]
      ]],
      ['Our National Symbols', 'Know about India\'s national symbols.', [
        'National flag: Tiranga (saffron, white, green with Ashoka Chakra).',
        'National bird: Peacock. National animal: Tiger.',
        'National anthem: Jana Gana Mana (written by Rabindranath Tagore).',
        'National flower: Lotus. National fruit: Mango.'
      ], [
        ['India\'s national bird is:', ['Sparrow', 'Peacock', 'Eagle', 'Parrot'], 1],
        ['India\'s national animal is:', ['Lion', 'Elephant', 'Tiger', 'Bear'], 2],
        ['Who wrote the national anthem?', ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Rabindranath Tagore', 'Subhas Chandra Bose'], 2],
        ['India\'s national flower is:', ['Rose', 'Sunflower', 'Lotus', 'Jasmine'], 2],
        ['The Indian flag has ___ colours.', ['2', '3', '4', '5'], 1]
      ]]
    ],
    'Class 6': [
      ['What, Where, How and When?', 'Introduction to history: sources and evidence.', [
        'History is the study of the past.',
        'We learn about the past from manuscripts, inscriptions, and archaeological finds.',
        'Manuscripts were written by hand on palm leaves or bark.',
        'Archaeology involves the study of objects and structures from the past.'
      ], [
        ['History is the study of:', ['The future', 'The past', 'Only science', 'Only geography'], 1],
        ['Manuscripts were written on:', ['Paper', 'Palm leaves or bark', 'Computer', 'Stone only'], 1],
        ['Inscriptions are writings on:', ['Paper', 'Hard surfaces like stone', 'Cloth', 'Sand'], 1],
        ['Archaeology studies:', ['Living animals', 'Objects and structures from the past', 'Modern technology', 'Outer space'], 1],
        ['History helps us understand:', ['Only dates', 'How people lived in the past', 'Only wars', 'Only kings'], 1]
      ]],
      ['Diversity and Discrimination', 'Understand India\'s diversity and why discrimination is wrong.', [
        'India is diverse in languages, religions, food, and clothing.',
        'Prejudice is a preconceived opinion without reason.',
        'Discrimination means treating someone unfairly because of their group.',
        'The Constitution guarantees equality for all citizens.'
      ], [
        ['India is known for its:', ['Uniformity', 'Diversity', 'Small size', 'Single language'], 1],
        ['Prejudice is:', ['Fair judgment', 'An opinion without reason', 'A scientific fact', 'A law'], 1],
        ['Discrimination means:', ['Treating everyone equally', 'Treating someone unfairly', 'Helping others', 'Being kind'], 1],
        ['The Indian Constitution guarantees:', ['Only freedom', 'Equality for all', 'Only education', 'Only voting'], 1],
        ['How many major languages does India have?', ['2', '5', '22 (scheduled languages)', '50'], 2]
      ]],
      ['The Earth – Our Habitat', 'Continents, oceans, and Earth\'s movements.', [
        'Earth has 7 continents and 5 oceans.',
        'Earth rotates on its axis (causes day and night).',
        'Earth revolves around the Sun (causes seasons).',
        'The equator divides Earth into Northern and Southern hemispheres.'
      ], [
        ['How many continents are there?', ['5', '6', '7', '8'], 2],
        ['Earth\'s rotation causes:', ['Seasons', 'Day and night', 'Earthquakes', 'Rain'], 1],
        ['Earth revolves around:', ['The Moon', 'The Sun', 'Mars', 'Itself only'], 1],
        ['The largest ocean is:', ['Indian', 'Atlantic', 'Pacific', 'Arctic'], 2],
        ['The equator divides Earth into:', ['East and West', 'Northern and Southern hemispheres', 'Land and water', 'Hot and cold'], 1]
      ]]
    ],
    'Class 7': [
      ['Medieval India', 'Delhi Sultanate and Mughal Empire.', [
        'The Delhi Sultanate was established in 1206 CE.',
        'The Mughal Empire was founded by Babur in 1526 CE.',
        'Akbar was known for his policy of religious tolerance (Sulh-i-Kul).',
        'The Taj Mahal was built by Shah Jahan in memory of Mumtaz Mahal.'
      ], [
        ['Who founded the Mughal Empire?', ['Akbar', 'Babur', 'Shah Jahan', 'Aurangzeb'], 1],
        ['The Delhi Sultanate began in:', ['1100 CE', '1206 CE', '1526 CE', '1600 CE'], 1],
        ['Akbar is known for:', ['Building Taj Mahal', 'Religious tolerance', 'Invading England', 'Discovering India'], 1],
        ['Taj Mahal was built by:', ['Akbar', 'Babur', 'Shah Jahan', 'Humayun'], 2],
        ['The Mughal Empire was founded in:', ['1206 CE', '1526 CE', '1600 CE', '1947 CE'], 1]
      ]],
      ['Democracy and Equality', 'Understand democracy, voting, and equal rights.', [
        'Democracy means government by the people.',
        'In India, citizens 18 and above can vote.',
        'Universal adult suffrage means every adult has the right to vote.',
        'The Constitution of India was adopted on 26 January 1950.'
      ], [
        ['Democracy means:', ['Rule by king', 'Government by the people', 'Rule by army', 'No government'], 1],
        ['Voting age in India is:', ['14', '16', '18', '21'], 2],
        ['Universal adult suffrage means:', ['Only men can vote', 'Only educated can vote', 'Every adult can vote', 'Nobody can vote'], 2],
        ['India\'s Constitution was adopted on:', ['15 August 1947', '26 January 1950', '2 October 1950', '14 November 1947'], 1],
        ['The right to vote is a ___ right.', ['Fundamental', 'Constitutional', 'Legal', 'Moral'], 1]
      ]],
      ['Environment and Natural Resources', 'Conservation and sustainable development.', [
        'Natural resources include air, water, soil, minerals, and forests.',
        'Renewable resources can be replenished (solar, wind).',
        'Non-renewable resources are limited (coal, petroleum).',
        'Conservation means using resources wisely to preserve them.'
      ], [
        ['Coal is a ___ resource.', ['Renewable', 'Non-renewable', 'Infinite', 'Man-made'], 1],
        ['Solar energy is:', ['Non-renewable', 'Renewable', 'Finite', 'Polluting'], 1],
        ['Conservation means:', ['Using resources carelessly', 'Using resources wisely', 'Wasting resources', 'Ignoring resources'], 1],
        ['Forests are important because they:', ['Cause pollution', 'Provide oxygen and habitats', 'Waste water', 'Block sunlight'], 1],
        ['Water is a ___ resource.', ['Non-renewable', 'Natural and renewable', 'Man-made', 'Unlimited'], 1]
      ]]
    ],
    'Class 8': [
      ['The Indian Constitution', 'Preamble, fundamental rights, and duties.', [
        'The Indian Constitution is the longest written constitution in the world.',
        'The Preamble begins with "We, the people of India…".',
        'Fundamental Rights protect individual freedom (Right to Equality, Right to Freedom, etc.).',
        'Fundamental Duties are responsibilities of citizens towards the nation.'
      ], [
        ['India\'s Constitution is:', ['Unwritten', 'The shortest', 'The longest written constitution', 'Borrowed entirely'], 2],
        ['The Preamble starts with:', ['"The Government"', '"We, the people of India"', '"The President"', '"India is"'], 1],
        ['Right to Equality is a:', ['Directive Principle', 'Fundamental Right', 'Fundamental Duty', 'Preamble provision'], 1],
        ['Fundamental Duties are:', ['Rights of citizens', 'Responsibilities of citizens', 'Powers of Parliament', 'Election rules'], 1],
        ['How many Fundamental Rights are listed?', ['4', '5', '6', '7'], 2]
      ]],
      ['Resources and Development', 'Types of resources and their conservation.', [
        'Resources are things that satisfy human needs.',
        'Human-made resources: buildings, roads, machines.',
        'Human resources: people and their skills.',
        'Sustainable development meets present needs without harming future generations.'
      ], [
        ['Buildings are ___ resources.', ['Natural', 'Human-made', 'Renewable', 'Infinite'], 1],
        ['Sustainable development:', ['Ignores the future', 'Meets present needs without harming future', 'Uses all resources now', 'Stops development'], 1],
        ['Human resources refer to:', ['Machines', 'People and their skills', 'Natural minerals', 'Buildings'], 1],
        ['Which is a natural resource?', ['Bridge', 'Computer', 'River', 'Factory'], 2],
        ['Resources that can be renewed are called:', ['Non-renewable', 'Renewable', 'Exhaustible', 'Finite'], 1]
      ]],
      ['The Making of the National Movement', 'Indian freedom struggle and key leaders.', [
        'The Indian National Congress was founded in 1885.',
        'Mahatma Gandhi led non-violent movements like the Salt March (1930).',
        'India gained independence on 15 August 1947.',
        'Jawaharlal Nehru became the first Prime Minister of India.'
      ], [
        ['INC was founded in:', ['1857', '1885', '1905', '1947'], 1],
        ['The Salt March was led by:', ['Nehru', 'Tagore', 'Gandhi', 'Bose'], 2],
        ['India became independent on:', ['26 January 1950', '15 August 1947', '2 October 1947', '14 November 1947'], 1],
        ['First Prime Minister of India:', ['Gandhi', 'Nehru', 'Patel', 'Ambedkar'], 1],
        ['Gandhi\'s method of protest was:', ['Violence', 'Non-violence', 'War', 'Boycott only'], 1]
      ]]
    ],
    'Class 9': [
      ['The French Revolution', 'Causes, events, and impact of the French Revolution.', [
        'The French Revolution began in 1789.',
        'The slogan was "Liberty, Equality, Fraternity".',
        'King Louis XVI was overthrown and later executed.',
        'The Revolution led to the rise of Napoleon Bonaparte.'
      ], [
        ['The French Revolution began in:', ['1776', '1789', '1804', '1815'], 1],
        ['The slogan of the French Revolution was:', ['"In God We Trust"', '"Liberty, Equality, Fraternity"', '"Veni, Vidi, Vici"', '"Power to the People"'], 1],
        ['Who was the king during the Revolution?', ['Napoleon', 'Louis XIV', 'Louis XVI', 'Charles'], 2],
        ['The Revolution led to the rise of:', ['Queen Victoria', 'Napoleon', 'Caesar', 'Alexander'], 1],
        ['The Bastille was:', ['A palace', 'A prison', 'A church', 'A university'], 1]
      ]],
      ['Democracy in the Contemporary World', 'Meaning and features of democracy.', [
        'Democracy is a form of government where people choose their representatives.',
        'Features: free and fair elections, universal adult franchise, rule of law.',
        'India is the largest democracy in the world.',
        'Democracy ensures political equality — one person, one vote.'
      ], [
        ['In a democracy, leaders are chosen by:', ['The army', 'The king', 'The people through elections', 'Inheritance'], 2],
        ['India is the ___ democracy.', ['Smallest', 'Oldest', 'Largest', 'Newest'], 2],
        ['"One person, one vote" ensures:', ['Economic equality', 'Political equality', 'Social equality', 'No equality'], 1],
        ['Free and fair elections are a feature of:', ['Dictatorship', 'Democracy', 'Monarchy', 'Anarchy'], 1],
        ['Universal adult franchise means:', ['Only men vote', 'Only rich vote', 'All adults can vote', 'No one votes'], 2]
      ]],
      ['India – Size and Location', 'India\'s geographical position, neighbours and extent.', [
        'India is located in the Northern and Eastern hemispheres.',
        'The Tropic of Cancer passes through the middle of India.',
        'India shares borders with 7 countries.',
        'India has a coastline of about 7,516 km.'
      ], [
        ['Tropic of Cancer passes through:', ['South India', 'Middle of India', 'North Pole', 'Equator'], 1],
        ['India shares borders with ___ countries.', ['5', '6', '7', '8'], 2],
        ['India\'s coastline is about:', ['5,000 km', '7,516 km', '10,000 km', '3,000 km'], 1],
        ['India is in the ___ hemisphere.', ['Southern', 'Northern', 'Western only', 'None'], 1],
        ['The southernmost point of mainland India is:', ['Kanyakumari', 'Mumbai', 'Chennai', 'Goa'], 0]
      ]]
    ],
    'Class 10': [
      ['Nationalism in India', 'The rise of Indian nationalism and Gandhian movements.', [
        'The Non-Cooperation Movement (1920) called for boycotting British institutions.',
        'The Civil Disobedience Movement (1930) began with the Dandi March.',
        'The Quit India Movement (1942) demanded an end to British rule.',
        'Various communities, workers, and peasants participated in the freedom struggle.'
      ], [
        ['The Dandi March was part of:', ['Non-Cooperation', 'Civil Disobedience', 'Quit India', 'Swadeshi'], 1],
        ['Quit India Movement was in:', ['1920', '1930', '1942', '1947'], 2],
        ['Non-Cooperation Movement called for:', ['Armed revolt', 'Boycotting British institutions', 'Joining British army', 'Going to England'], 1],
        ['"Do or Die" was the slogan of:', ['Non-Cooperation', 'Civil Disobedience', 'Quit India', 'Salt March'], 2],
        ['Who led the Civil Disobedience Movement?', ['Nehru', 'Bose', 'Gandhi', 'Tagore'], 2]
      ]],
      ['Federalism', 'Power sharing, levels of government, decentralisation.', [
        'Federalism divides power between central and state governments.',
        'India has a three-tier government: Centre, State, Local (Panchayat/Municipality).',
        'The Union List has subjects on which only the Centre can make laws.',
        'Decentralisation gives power to local governments.'
      ], [
        ['Federalism divides power between:', ['Two parties', 'Centre and states', 'Only states', 'Only centre'], 1],
        ['India has ___ tiers of government.', ['2', '3', '4', '5'], 1],
        ['The Union List is for:', ['State laws', 'Central laws', 'Local laws', 'No laws'], 1],
        ['Decentralisation means:', ['Centralising power', 'Giving power to local governments', 'Removing government', 'Military rule'], 1],
        ['Panchayats are:', ['Central government bodies', 'Local self-government bodies', 'Courts', 'Banks'], 1]
      ]],
      ['Globalisation and the Indian Economy', 'Trade, MNCs, and impact of globalisation.', [
        'Globalisation is the integration of economies across the world.',
        'MNCs (Multinational Corporations) operate in multiple countries.',
        'Foreign trade connects markets of different countries.',
        'WTO (World Trade Organization) establishes rules for international trade.'
      ], [
        ['Globalisation means:', ['Isolation of economies', 'Integration of economies worldwide', 'Only trade within India', 'Only government trade'], 1],
        ['MNC stands for:', ['Multi National Corporation', 'Main National Company', 'Modern National Centre', 'Multiple Node Computer'], 0],
        ['WTO deals with:', ['Education', 'International trade rules', 'Sports', 'Weather'], 1],
        ['Foreign trade connects:', ['Only local markets', 'Markets of different countries', 'Only rural areas', 'Only banks'], 1],
        ['An example of an MNC is:', ['Local grocery store', 'Samsung', 'Village shop', 'Panchayat office'], 1]
      ]]
    ]
  }
};

export const subjects = {
  mathematics: ['Mathematics', '📐', 'Build your mathematical skills step by step.'],
  science: ['Science', '🔬', 'Explore science through simple concepts and examples.'],
  english: ['English', '📖', 'Improve grammar, vocabulary and reading skills.'],
  computer: ['Computer Science', '💻', 'Learn programming and core computer concepts.'],
  social: ['Social Science', '🌍', 'Explore history, geography, civics and economics.']
};

export const resources = [
  // Official Board Textbooks
  ['NCERT Class 10 Mathematics Complete e-Textbook', 'Mathematics', 'Textbook', 'https://ncert.nic.in/textbook.php?jemh1=0-14', 'Official NCERT e-Textbook with full chapters: Real Numbers, Polynomials, Trigonometry, and Statistics.'],
  ['NCERT Class 10 Science Complete e-Textbook', 'Science', 'Textbook', 'https://ncert.nic.in/textbook.php?jesc1=0-13', 'Official NCERT Science book covering Life Processes, Chemical Reactions, Electricity, and Light.'],
  ['NCERT First Flight English Literature (Class 10)', 'English', 'Textbook', 'https://ncert.nic.in/textbook.php?jeff1=0-9', 'Prescribed English textbook with prose, poetry, comprehension and analytical writing.'],
  ['NCERT Social Science: Democratic Politics & Contemporary India', 'Social Science', 'Textbook', 'https://ncert.nic.in/textbook.php?jess3=0-5', 'Comprehensive Social Science textbook for Civics, History, Geography, and Economics.'],
  ['NCERT Information Technology (Skill Subject 402)', 'Computer Science', 'Textbook', 'https://cbseacademic.nic.in/skill-education.html', 'Official handbook on Web Applications, Digital Documentation, Spreadsheets, and Database.'],
  ['NCERT Class 9 Mathematics & Science e-Textbooks', 'Mathematics', 'Textbook', 'https://ncert.nic.in/textbook.php?iemh1=0-12', 'Foundation e-textbooks for Class 9 CBSE and State Board curriculum.'],
  ['NCERT Middle School Textbooks (Classes 5-8)', 'All Subjects', 'Textbook', 'https://ncert.nic.in/textbook.php', 'Digital e-books for upper primary classes across Math, Science, Social and Languages.'],

  // Official Board Circulars & Annual Syllabus Documents
  ['CBSE Secondary Curriculum Circular 2026-27', 'All Subjects', 'Circular', 'https://cbseacademic.nic.in/curriculum_2027.html', 'Official CBSE Academic Circular detailing prescribed curriculum guidelines, subject weightages, and course structure.'],
  ['CBSE Board Examination Question Paper Blueprint & 80+20 Scheme', 'All Subjects', 'Circular', 'https://cbseacademic.nic.in/sqp_classx_2027.html', 'Assessment scheme with 80 marks board exam format, internal assessments (20 marks), and rubrics.'],
  ['State Board / SCERT Annual Academic Framework & Weightage Matrix', 'All Subjects', 'Circular', 'https://ncert.nic.in/syllabus.php', 'State-level examination guidelines, chapter-wise marks distribution, and local syllabus adaptations.'],
  ['NCERT Learning Outcomes & Competency-Based Assessment Manual', 'All Subjects', 'Circular', 'https://ncert.nic.in/pdf/publication/otherpublications/learning_outcomes.pdf', 'National Education Policy guidelines on experiential learning, practical viva, and problem solving.'],
  ['State Board Rationalized & Deleted Syllabus Notification', 'All Subjects', 'Circular', 'https://ncert.nic.in/rationalised_curriculum.php', 'Official notification regarding core mandatory chapters and rationalized topics for the academic session.'],

  // Reference & Interactive Learning
  ['NCERT Official Digital Portal (ePathshala)', 'All Subjects', 'Website', 'https://epathshala.nic.in/', 'Government portal providing free access to audiobooks, flipbooks, and learning resources in Hindi and English.'],
  ['Khan Academy NCERT Mapped Math & Science', 'Mathematics', 'Practice', 'https://www.khanacademy.org/math', 'Free interactive practice aligned to standard school curriculum with instant explanations.']
];
