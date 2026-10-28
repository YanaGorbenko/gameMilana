// --- НАСТРОЙКИ ---
const TASKS_PER_LEVEL = 15;
let usedQuestions = new Set();

// --- СТРУКТУРА ИГРЫ ---
const GAME_STRUCTURE = [
  {
    title: 'Мир Смысла',
    icon: '🧩',
    desc: 'Умножение как сложение',
    levels: [
      { name: 'Уровень 1', type: 1, target: 0 },
      { name: 'Уровень 2', type: 1, target: 1 },
      { name: 'Уровень 3', type: 1, target: 2 },
      { name: 'Уровень 4', type: 1, target: 3 },
      { name: 'Уровень 5', type: 1, target: 4 },
      { name: 'Уровень 6', type: 1, target: 5 },
      { name: 'Уровень 7', type: 1, target: 6 },
      { name: 'Уровень 8', type: 1, target: 7 },
      { name: 'Уровень 9', type: 1, target: 8 },
      { name: 'Уровень 10', type: 1, target: 9 },
      { name: 'Уровень 11', type: 1, target: 10 },
      { name: 'Уровень 12', type: 1, target: 11 },
      { name: 'Уровень 13', type: 1, target: 25 },
      { name: 'Уровень 14', type: 1, target: 50 },
      { name: 'Уровень 15', type: 1, target: 10 },
      { name: 'ЭКЗАМЕН', type: 'boss', target: 1 },
    ],
  },
  {
    title: 'Мир Троек',
    icon: '🔗',
    desc: 'Связь умножения и деления',
    levels: [
      { name: 'Уровень 1', type: 2, target: 1 },
      { name: 'Уровень 2', type: 2, target: 2 },
      { name: 'Уровень 3', type: 2, target: 3 },
      { name: 'Уровень 4', type: 2, target: 4 },
      { name: 'Уровень 5', type: 2, target: 5 },
      { name: 'Уровень 6', type: 2, target: 6 },
      { name: 'Уровень 7', type: 2, target: 7 },
      { name: 'Уровень 8', type: 2, target: 8 },
      { name: 'Уровень 9', type: 2, target: 9 },
      { name: 'Уровень 10', type: 2, target: 10 },
      { name: 'Уровень 11', type: 2, target: 4 },
      { name: 'Уровень 12', type: 2, target: 7 },
      { name: 'Уровень 13', type: 2, target: 9 },
      { name: 'Уровень 14', type: 2, target: 8 },
      { name: 'Уровень 15', type: 2, target: 10 },
      { name: 'ЭКЗАМЕН', type: 'boss', target: 2 },
    ],
  },
  {
    title: 'Мир Разложения',
    icon: '✂️',
    desc: 'Деление вне таблицы',
    levels: [
      { name: 'Уровень 1', type: 3, target: 50 },
      { name: 'Уровень 2', type: 3, target: 60 },
      { name: 'Уровень 3', type: 3, target: 70 },
      { name: 'Уровень 4', type: 3, target: 80 },
      { name: 'Уровень 5', type: 3, target: 90 },
      { name: 'Уровень 6', type: 3, target: 100 },
      { name: 'Уровень 7', type: 3, target: 120 },
      { name: 'Уровень 8', type: 3, target: 150 },
      { name: 'Уровень 9', type: 3, target: 200 },
      { name: 'Уровень 10', type: 3, target: 250 },
      { name: 'Уровень 11', type: 3, target: 300 },
      { name: 'Уровень 12', type: 3, target: 400 },
      { name: 'Уровень 13', type: 3, target: 500 },
      { name: 'Уровень 14', type: 3, target: 700 },
      { name: 'Уровень 15', type: 3, target: 1000 },
      { name: 'ЭКЗАМЕН', type: 'boss', target: 3 },
    ],
  },
  {
    title: 'Мир Округления',
    icon: '🎯',
    desc: 'Округление и оценка',
    levels: [
      { name: 'Уровень 1', type: 4, target: 'tens' },
      { name: 'Уровень 2', type: 4, target: 'tens' },
      { name: 'Уровень 3', type: 4, target: 'hundreds' },
      { name: 'Уровень 4', type: 4, target: 'hundreds' },
      { name: 'Уровень 5', type: 4, target: 'mixed' },
      { name: 'Уровень 6', type: 4, target: 'mixed' },
      { name: 'Уровень 7', type: 4, target: 'evaluate' },
      { name: 'Уровень 8', type: 4, target: 'evaluate' },
      { name: 'Уровень 9', type: 4, target: 'evaluate' },
      { name: 'Уровень 10', type: 4, target: 'tens' },
      { name: 'Уровень 11', type: 4, target: 'hundreds' },
      { name: 'Уровень 12', type: 4, target: 'mixed' },
      { name: 'Уровень 13', type: 4, target: 'mixed' },
      { name: 'Уровень 14', type: 4, target: 'mixed' },
      { name: 'Уровень 15', type: 4, target: 'mixed' },
      { name: 'ЭКЗАМЕН', type: 'boss', target: 4 },
    ],
  },
  {
    title: 'Мир Боссов',
    icon: '👑',
    desc: 'Деление на двузначное',
    levels: [
      { name: 'Уровень 1', type: 5, target: 11 },
      { name: 'Уровень 2', type: 5, target: 12 },
      { name: 'Уровень 3', type: 5, target: 13 },
      { name: 'Уровень 4', type: 5, target: 14 },
      { name: 'Уровень 5', type: 5, target: 15 },
      { name: 'Уровень 6', type: 5, target: 16 },
      { name: 'Уровень 7', type: 5, target: 17 },
      { name: 'Уровень 8', type: 5, target: 18 },
      { name: 'Уровень 9', type: 5, target: 19 },
      { name: 'Уровень 10', type: 5, target: 20 },
      { name: 'Уровень 11', type: 5, target: 25 },
      { name: 'Уровень 12', type: 5, target: 30 },
      { name: 'Уровень 13', type: 5, target: 40 },
      { name: 'Уровень 14', type: 5, target: 50 },
      { name: 'Уровень 15', type: 5, target: 50 },
      { name: 'ФИНАЛ', type: 'boss', target: 5 },
    ],
  },
  {
    title: 'Мир Распределения',
    icon: '🎁',
    desc: 'Умножение через разложение',
    levels: [
      { name: 'Уровень 1', type: 6, target: 2 },
      { name: 'Уровень 2', type: 6, target: 3 },
      { name: 'Уровень 3', type: 6, target: 4 },
      { name: 'Уровень 4', type: 6, target: 5 },
      { name: 'Уровень 5', type: 6, target: 6 },
      { name: 'Уровень 6', type: 6, target: 7 },
      { name: 'Уровень 7', type: 6, target: 8 },
      { name: 'Уровень 8', type: 6, target: 9 },
      { name: 'Уровень 9', type: 6, target: 10 },
      { name: 'Уровень 10', type: 6, target: 15 },
      { name: 'Уровень 11', type: 6, target: 20 },
      { name: 'Уровень 12', type: 6, target: 25 },
      { name: 'Уровень 13', type: 6, target: 30 },
      { name: 'Уровень 14', type: 6, target: 40 },
      { name: 'Уровень 15', type: 6, target: 50 },
      { name: 'ЭКЗАМЕН', type: 'boss', target: 6 },
    ],
  },
  {
    title: 'Признаки делимости',
    icon: '🔍',
    desc: 'Делится или нет?',
    levels: [
      { name: 'Уровень 1', type: 7, target: 2 },
      { name: 'Уровень 2', type: 7, target: 5 },
      { name: 'Уровень 3', type: 7, target: 10 },
      { name: 'Уровень 4', type: 7, target: 3 },
      { name: 'Уровень 5', type: 7, target: 9 },
      { name: 'Уровень 6', type: 7, target: 4 },
      { name: 'Уровень 7', type: 7, target: '2,3' },
      { name: 'Уровень 8', type: 7, target: '2,5' },
      { name: 'Уровень 9', type: 7, target: '3,9' },
      { name: 'Уровень 10', type: 7, target: '4,2' },
      { name: 'Уровень 11', type: 7, target: '5,10' },
      { name: 'Уровень 12', type: 7, target: '3,4' },
      { name: 'Уровень 13', type: 7, target: '2,3,5' },
      { name: 'Уровень 14', type: 7, target: '2,9' },
      { name: 'Уровень 15', type: 7, target: 'mix' },
      { name: 'ЭКЗАМЕН', type: 'boss', target: 7 },
    ],
  },
  {
    title: 'Числа с нулями',
    icon: '🪙',
    desc: 'Умножение и деление круглых чисел',
    levels: [
      { name: 'Уровень 1', type: 8, target: 10 },
      { name: 'Уровень 2', type: 8, target: 10 },
      { name: 'Уровень 3', type: 8, target: 100 },
      { name: 'Уровень 4', type: 8, target: 100 },
      { name: 'Уровень 5', type: 8, target: 1000 },
      { name: 'Уровень 6', type: 8, target: 1000 },
      { name: 'Уровень 7', type: 8, target: 30 },
      { name: 'Уровень 8', type: 8, target: 30 },
      { name: 'Уровень 9', type: 8, target: 50 },
      { name: 'Уровень 10', type: 8, target: 50 },
      { name: 'Уровень 11', type: 8, target: 10 },
      { name: 'Уровень 12', type: 8, target: 10 },
      { name: 'Уровень 13', type: 8, target: 20 },
      { name: 'Уровень 14', type: 8, target: 20 },
      { name: 'Уровень 15', type: 8, target: 20 },
      { name: 'ЭКЗАМЕН', type: 'boss', target: 8 },
    ],
  },
  {
    title: 'Все действия',
    icon: '🎲',
    desc: 'Сложение, вычитание, умножение, деление',
    levels: [
      { name: 'Уровень 1', type: 9, target: 'add_sub' },
      { name: 'Уровень 2', type: 9, target: 'add_sub' },
      { name: 'Уровень 3', type: 9, target: 'add_sub' },
      { name: 'Уровень 4', type: 9, target: 'add_sub' },
      { name: 'Уровень 5', type: 9, target: 'mult_add' },
      { name: 'Уровень 6', type: 9, target: 'mult_add' },
      { name: 'Уровень 7', type: 9, target: 'mult_add' },
      { name: 'Уровень 8', type: 9, target: 'mult_add' },
      { name: 'Уровень 9', type: 9, target: 'div_sub' },
      { name: 'Уровень 10', type: 9, target: 'div_sub' },
      { name: 'Уровень 11', type: 9, target: 'div_sub' },
      { name: 'Уровень 12', type: 9, target: 'brackets' },
      { name: 'Уровень 13', type: 9, target: 'brackets' },
      { name: 'Уровень 14', type: 9, target: 'three_actions' },
      { name: 'Уровень 15', type: 9, target: 'three_actions' },
      { name: 'ЭКЗАМЕН', type: 'boss', target: 9 },
    ],
  },
  {
    title: 'Магазин',
    icon: '🛒',
    desc: 'Задачи про деньги и покупки',
    levels: [
      { name: 'Уровень 1', type: 10, target: 'buy' },
      { name: 'Уровень 2', type: 10, target: 'buy' },
      { name: 'Уровень 3', type: 10, target: 'change' },
      { name: 'Уровень 4', type: 10, target: 'change' },
      { name: 'Уровень 5', type: 10, target: 'price' },
      { name: 'Уровень 6', type: 10, target: 'price' },
      { name: 'Уровень 7', type: 10, target: 'discount' },
      { name: 'Уровень 8', type: 10, target: 'discount' },
      { name: 'Уровень 9', type: 10, target: 'buy' },
      { name: 'Уровень 10', type: 10, target: 'change' },
      { name: 'Уровень 11', type: 10, target: 'price' },
      { name: 'Уровень 12', type: 10, target: 'discount' },
      { name: 'Уровень 13', type: 10, target: 'buy' },
      { name: 'Уровень 14', type: 10, target: 'change' },
      { name: 'Уровень 15', type: 10, target: 'mixed' },
      { name: 'ЭКЗАМЕН', type: 'boss', target: 10 },
    ],
  },
];

// --- ГЕНЕРАТОРЫ ЗАДАНИЙ ---
const Generators = {
  1: (target, isBoss) => {
    let b = isBoss
      ? [0, 1, 2, 3, 4, 5, 9, 10, 11][Math.floor(Math.random() * 9)]
      : target;
    let a = Math.floor(Math.random() * 8) + 2;
    let extraText = '';
    if (b > 1) {
      let sumStr = Array(b).fill(a).join(' + ');
      extraText = `<br><small style="font-size:14px; color:#666">(${sumStr})</small>`;
    } else if (b === 0) {
      extraText = `<br><small style="font-size:14px; color:#666">(Любое число × 0 = 0)</small>`;
    }
    return {
      question: `Сколько будет <b>${a} × ${b}</b>?${extraText}`,
      answer: a * b,
      hint: `Сложи ${a} само с собой ${b} раз.`,
    };
  },
  2: (target, isBoss) => {
    let b = isBoss ? Math.floor(Math.random() * 10) + 1 : target;
    let ans = Math.floor(Math.random() * 8) + 2;
    let prod = b * ans;
    return {
      question: `<b>${prod} : ${b} = ?</b>`,
      answer: ans,
      hint: `Подумай: на какое число умножить ${b}, чтобы получить ${prod}?`,
    };
  },
  3: (target, isBoss) => {
    let maxLimit = isBoss ? 1000 : target;
    let b = Math.floor(Math.random() * 7) + 3;
    let total = 0;
    let a1 = 0;
    let a2 = 0;

    while (true) {
      b = Math.floor(Math.random() * 7) + 3;
      let candidate = Math.floor(Math.random() * (maxLimit - 10)) + 10;
      if (candidate % b !== 0 || candidate % 10 === 0 || candidate > maxLimit)
        continue;

      a1 = Math.floor(candidate / 10) * 10;
      while (a1 > 0 && a1 % b !== 0) {
        a1 -= 10;
      }
      if (a1 === 0) continue;
      a2 = candidate - a1;

      if (a2 > 0 && a2 % b === 0) {
        total = candidate;
        break;
      }
    }
    return {
      question: `<b>${total} : ${b} = ?</b><br><small style="font-size:14px; color:#666">Разложи на (${a1} + ${a2})</small>`,
      answer: total / b,
      hint: `Раздели ${a1} на ${b}, потом ${a2} на ${b}.`,
    };
  },
  4: (target, isBoss) => {
    let mode = isBoss
      ? ['tens', 'hundreds', 'evaluate'][Math.floor(Math.random() * 3)]
      : target;

    if (mode === 'tens') {
      let num = Math.floor(Math.random() * 90) + 10;
      let rounded = Math.round(num / 10) * 10;
      return {
        question: `Округли <b>${num}</b> до десятков.`,
        answer: rounded,
        hint: `Если последняя цифра 5 или больше, округляем вверх. Иначе — вниз.`,
      };
    }
    if (mode === 'hundreds') {
      let num = Math.floor(Math.random() * 900) + 100;
      let rounded = Math.round(num / 100) * 100;
      return {
        question: `Округли <b>${num}</b> до сотен.`,
        answer: rounded,
        hint: `Смотрим на десятки: 50 и больше — округляем вверх.`,
      };
    }
    if (mode === 'evaluate') {
      let a = Math.floor(Math.random() * 80) + 20;
      let b = Math.floor(Math.random() * 8) + 2;
      let exact = a * b;
      let estimateA = Math.round(a / 10) * 10;
      let estimate = estimateA * b;
      return {
        question: `Оцени примерно: <b>${a} × ${b}</b><br><small style="font-size:14px; color:#666">Округли первое число до десятков.</small>`,
        answer: estimate,
        hint: `Округли ${a} до ${estimateA}, потом умножь на ${b}. Точный ответ: ${exact}.`,
      };
    }
    let isTens = Math.random() > 0.5;
    let num = isTens
      ? Math.floor(Math.random() * 90) + 10
      : Math.floor(Math.random() * 900) + 100;
    let rounded = isTens
      ? Math.round(num / 10) * 10
      : Math.round(num / 100) * 100;
    return {
      question: `Округли <b>${num}</b> до ${isTens ? 'десятков' : 'сотен'}.`,
      answer: rounded,
      hint: `Смотри на разряд справа.`,
    };
  },
  5: (target, isBoss) => {
    let b;
    if (isBoss) {
      const allowedTargets = [
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 30, 40, 50,
      ];
      b = allowedTargets[Math.floor(Math.random() * allowedTargets.length)];
    } else {
      b = target;
    }
    let ans = Math.floor(Math.random() * 6) + 3;
    let a = b * ans;
    return {
      question: `<b>${a} : ${b} = ?</b>`,
      answer: ans,
      hint: `Проверь умножением: ${b} × ${ans} = ${a}.`,
    };
  },
  6: (target, isBoss) => {
    if (isBoss) {
      const allowedTargets = [
        2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 40, 50,
      ];
      let b = allowedTargets[Math.floor(Math.random() * allowedTargets.length)];
      let a1 = Math.floor(Math.random() * 4) + 2;
      let a2 = Math.floor(Math.random() * 8) + 1;
      let total = a1 * 10 + a2;
      return {
        question: `<b>${total} × ${b} = ?</b><br><small style="font-size:14px; color:#666">Разложи: (${a1 * 10} × ${b}) + (${a2} × ${b})</small>`,
        answer: total * b,
        hint: `Умножь ${a1 * 10} на ${b}, потом ${a2} на ${b}, и сложи.`,
      };
    } else {
      let b = target;
      let a1 = Math.floor(Math.random() * 4) + 2;
      let a2 = Math.floor(Math.random() * 8) + 1;
      let total = a1 * 10 + a2;
      return {
        question: `<b>${total} × ${b} = ?</b><br><small style="font-size:14px; color:#666">Разложи: (${a1 * 10} × ${b}) + (${a2} × ${b})</small>`,
        answer: total * b,
        hint: `Умножь ${a1 * 10} на ${b}, потом ${a2} на ${b}, и сложи.`,
      };
    }
  },
  7: (target, isBoss) => {
    let targetStr = isBoss ? 'mix' : target;
    let divisors = [];
    let questionText = '';

    if (targetStr === 'mix') {
      const mixes = ['2,3', '3,5', '2,5', '4,2', '5,10', '3,9', '2,3,5'];
      divisors = mixes[Math.floor(Math.random() * mixes.length)]
        .split(',')
        .map(Number);
    } else if (typeof targetStr === 'string' && targetStr.includes(',')) {
      divisors = targetStr.split(',').map(Number);
    } else {
      divisors = [parseInt(targetStr)];
    }

    let num = Math.floor(Math.random() * 900) + 100;
    let isDivisible = true;
    for (let d of divisors) {
      let div = false;
      if (d === 2) div = num % 2 === 0;
      if (d === 5) div = num % 5 === 0;
      if (d === 10) div = num % 10 === 0;
      if (d === 3) {
        let sum = num
          .toString()
          .split('')
          .reduce((a, b) => parseInt(a) + parseInt(b), 0);
        div = sum % 3 === 0;
      }
      if (d === 9) {
        let sum = num
          .toString()
          .split('')
          .reduce((a, b) => parseInt(a) + parseInt(b), 0);
        div = sum % 9 === 0;
      }
      if (d === 4) div = parseInt(num.toString().slice(-2)) % 4 === 0;

      if (!div) {
        isDivisible = false;
        break;
      }
    }

    questionText = `Делится ли число <b>${num}</b> ОДНОВРЕМЕННО на <b>${divisors.join(' и ')}</b>?<br><small style="font-size:14px; color:#666">Напиши 1 (Да) или 0 (Нет)</small>`;

    return {
      question: questionText,
      answer: isDivisible ? 1 : 0,
      hint: `Проверь число по правилам для каждого делителя (${divisors.join(', ')}).`,
    };
  },
  8: (target, isBoss) => {
    let t = isBoss
      ? [10, 100, 1000, 30, 50][Math.floor(Math.random() * 5)]
      : target;
    if (t === 10 || t === 100 || t === 1000) {
      let mult = Math.random() > 0.5;
      let a = Math.floor(Math.random() * 90) + 10;
      if (mult)
        return {
          question: `<b>${a} × ${t} = ?</b>`,
          answer: a * t,
          hint: `Просто припиши нули.`,
        };
      else
        return {
          question: `<b>${a * t} : ${t} = ?</b>`,
          answer: a,
          hint: `Просто убери нули.`,
        };
    } else {
      let a = (Math.floor(Math.random() * 8) + 1) * 10;
      let b = (Math.floor(Math.random() * 8) + 1) * t;
      let mult = Math.random() > 0.5;
      if (mult)
        return {
          question: `<b>${a} × ${b} = ?</b>`,
          answer: a * b,
          hint: `Умножь числа без нулей, а потом припиши все нули.`,
        };
      else
        return {
          question: `<b>${a * b} : ${a} = ?</b>`,
          answer: b,
          hint: `Убери общие нули.`,
        };
    }
  },
  9: (target, isBoss) => {
    let mode = isBoss
      ? ['add_sub', 'mult_add', 'div_sub', 'brackets', 'three_actions'][
          Math.floor(Math.random() * 5)
        ]
      : target;

    let a, b, c, d, ans;

    if (mode === 'add_sub') {
      while (true) {
        a = Math.floor(Math.random() * 50) + 10;
        b = Math.floor(Math.random() * 30) + 5;
        c = Math.floor(Math.random() * 20) + 2;
        ans = a + b - c;
        if (ans >= 0) break;
      }
      return {
        question: `<b>${a} + ${b} - ${c} = ?</b>`,
        answer: ans,
        hint: `Считай по порядку слева направо.`,
      };
    }

    if (mode === 'mult_add') {
      while (true) {
        a = Math.floor(Math.random() * 8) + 2;
        b = Math.floor(Math.random() * 8) + 2;
        c = Math.floor(Math.random() * 20) + 2;
        ans = a * b + c;
        if (ans >= 0) break;
      }
      return {
        question: `<b>${a} × ${b} + ${c} = ?</b>`,
        answer: ans,
        hint: `Сначала умножение, потом сложение.`,
      };
    }

    if (mode === 'div_sub') {
      while (true) {
        b = Math.floor(Math.random() * 8) + 2;
        c = Math.floor(Math.random() * 8) + 2;
        a = b * c;
        d = Math.floor(Math.random() * (a - 1)) + 1;
        ans = c - d;
        if (ans >= 0) break;
      }
      return {
        question: `<b>${a} : ${b} - ${d} = ?</b>`,
        answer: ans,
        hint: `Сначала деление, потом вычитание.`,
      };
    }

    if (mode === 'brackets') {
      while (true) {
        a = Math.floor(Math.random() * 10) + 2;
        b = Math.floor(Math.random() * 10) + 2;
        c = Math.floor(Math.random() * 5) + 2;
        ans = (a + b) * c;
        if (ans >= 0) break;
      }
      return {
        question: `<b>(${a} + ${b}) × ${c} = ?</b>`,
        answer: ans,
        hint: `Сначала скобки, потом умножение.`,
      };
    }

    if (mode === 'three_actions') {
      while (true) {
        a = Math.floor(Math.random() * 10) + 2;
        b = Math.floor(Math.random() * 5) + 2;
        c = Math.floor(Math.random() * 10) + 2;
        d = Math.floor(Math.random() * 5) + 2;
        ans = a + b * c - d;
        if (ans >= 0) break;
      }
      return {
        question: `<b>${a} + ${b} × ${c} - ${d} = ?</b>`,
        answer: ans,
        hint: `Сначала умножение, потом по порядку.`,
      };
    }

    return { question: `2 + 2 = ?`, answer: 4, hint: `` };
  },
  10: (target, isBoss) => {
    let mode = isBoss
      ? ['buy', 'change', 'price', 'discount'][Math.floor(Math.random() * 4)]
      : target;

    if (mode === 'buy') {
      let price = (Math.floor(Math.random() * 15) + 2) * 10;
      let count = Math.floor(Math.random() * 4) + 2;
      let total = price * count;
      return {
        question: `Товар стоит <b>${price} руб.</b> Сколько нужно заплатить за <b>${count} шт.</b>?`,
        answer: total,
        hint: `Умножь цену на количество: ${price} × ${count}.`,
      };
    }
    if (mode === 'change') {
      let price = (Math.floor(Math.random() * 20) + 3) * 10;
      let paid = Math.ceil(price / 100) * 100;
      if (paid === price) paid += 100;
      let change = paid - price;
      return {
        question: `Покупка стоит <b>${price} руб.</b> Ты дал кассиру <b>${paid} руб.</b> Сколько сдачи получишь?`,
        answer: change,
        hint: `Вычти из отданных денег стоимость покупки: ${paid} - ${price}.`,
      };
    }
    if (mode === 'price') {
      let total = (Math.floor(Math.random() * 10) + 3) * 20;
      let count = Math.floor(Math.random() * 3) + 2;
      while (total % count !== 0) {
        total += 10;
      }
      let price = total / count;
      return {
        question: `<b>${count} шт.</b> товара стоят <b>${total} руб.</b> Сколько стоит <b>1 шт.</b>?`,
        answer: price,
        hint: `Раздели общую сумму на количество: ${total} : ${count}.`,
      };
    }
    if (mode === 'discount') {
      let price = (Math.floor(Math.random() * 10) + 5) * 100;
      return {
        question: `Товар стоит <b>${price} руб.</b> На него скидка <b>50%</b>. Сколько он теперь стоит?`,
        answer: price / 2,
        hint: `Скидка 50% — это разделить цену пополам.`,
      };
    }
    let price = (Math.floor(Math.random() * 10) + 2) * 10;
    let count = Math.floor(Math.random() * 3) + 2;
    let total = price * count;
    return {
      question: `Купили <b>${count} шт.</b> по <b>${price} руб.</b> Сколько заплатили?`,
      answer: total,
      hint: `Умножь цену на количество.`,
    };
  },
};

// --- ТЕОРИЯ С ПОЛНЫМ НАБОРОМ ЛАЙФХАКОВ ---
function getTheoryForLevel(levelObj) {
  let t = levelObj.type;
  let target = levelObj.target;

  if (t === 'boss') {
    if (target === 4)
      return `<b>Экзамен: Мир Округления!</b><br>Проверь, как ты умеешь округлять числа и оценивать примерные результаты.`;
    if (target === 10)
      return `<b>Экзамен: Магазин!</b><br>Задачи на покупки, сдачу и скидки. Вспомни все, чему учились!`;
    if (target === 5)
      return `<b>Финальный Экзамен!</b><br>Деление на двузначные числа. Проверь свои знания лайфхаков для чисел 11-20, 25, 30, 40 и 50.`;
    if (target === 6)
      return `<b>Экзамен: Распределение!</b><br>Смешанные примеры на умножение через разложение.`;
    if (target === 9)
      return `<b>Экзамен: Все действия!</b><br>Проверь, как ты усвоил порядок действий, скобки и разные операции.`;
    return `<b>Экзамен!</b><br>Смешанные задания только из этой главы. Проверь свои силы!`;
  }

  if (t === 1) {
    if (target === 0)
      return `<b>Тема: Умножение на 0.</b><br>Любое число, умноженное на 0, равно нулю.<br><div class="example">5 × 0 = 0</div>`;
    if (target === 1)
      return `<b>Тема: Умножение на 1.</b><br>Любое число, умноженное на 1, остается собой.<br><div class="example">5 × 1 = 5</div>`;
    if (target === 10)
      return `<b>Тема: Умножение на 10.</b><br>💡 <b>Лайфхак:</b> Просто допиши ноль к числу!<br><div class="example">45 × 10 = 450</div>`;
    if (target === 9)
      return `<b>Тема: Умножение на 9.</b><br>💡 <b>Лайфхак:</b> Первая цифра = (число − 1). Вторая = (10 − число).<br><div class="example">7 × 9: (7−1)=6, (10−7)=3. Ответ: 63</div>`;
    if (target === 5)
      return `<b>Тема: Умножение на 5.</b><br>💡 <b>Лайфхак:</b> Умножь на 10 и раздели пополам.<br><div class="example">6 × 5 = 60 : 2 = 30</div>`;
    if (target === 4)
      return `<b>Тема: Умножение на 4.</b><br>💡 <b>Лайфхак:</b> Умножь на 2, а потом еще раз на 2.<br><div class="example">7 × 4 = 14 × 2 = 28</div>`;
    if (target === 11)
      return `<b>Тема: Умножение на 11.</b><br>💡 <b>Лайфхак:</b> Сложи две цифры числа и вставь сумму в середину.<br><div class="example">23 × 11 = 2 (2+3) 3 = 253</div>`;
    if (target === 25)
      return `<b>Тема: Умножение на 25.</b><br>💡 <b>Лайфхак:</b> Раздели число на 4, а потом умножь на 100.<br><div class="example">12 × 25 = (12 : 4) × 100 = 3 × 100 = 300</div>`;
    if (target === 50)
      return `<b>Тема: Умножение на 50.</b><br>💡 <b>Лайфхак:</b> Умножь число на 100 и раздели пополам.<br><div class="example">8 × 50 = 800 : 2 = 400</div>`;
    return `<b>Тема: Умножение на ${target}.</b><br>Умножение — это быстрое сложение.<br><div class="example">4 × ${target} = ${Array(target).fill(4).join(' + ')} = ${4 * target}</div>`;
  }

  if (t === 2) {
    if (target === 1)
      return `<b>Тема: Деление на 1.</b><br>💡 <b>Лайфхак:</b> При делении на 1 число не меняется.<br><div class="example">8 : 1 = 8</div>`;
    if (target === 10)
      return `<b>Тема: Деление на 10.</b><br>💡 <b>Лайфхак:</b> Просто убери один ноль справа.<br><div class="example">80 : 10 = 8</div><br><b>⚠️ Запомни: на 0 делить нельзя!</b>`;
    return `<b>Тема: Связь умножения и деления на ${target}.</b><br>Если <b>3 × ${target} = ${3 * target}</b>, то:<div class="example">${3 * target} : ${target} = 3<br>${3 * target} : 3 = ${target}</div><br><b>⚠️ На 0 делить нельзя!</b>`;
  }

  if (t === 3)
    return `<b>Тема: Разложение (деление чисел до ${target}).</b><br>Раскладывай число на удобные части, которые делятся нацело.<br>💡 <b>Пример:</b> 96 : 4 = (80 + 16) : 4 = 20 + 4 = 24.`;

  if (t === 4) {
    if (target === 'tens')
      return `<b>Тема: Округление до десятков.</b><br>Смотрим на последнюю цифру: если 0,1,2,3,4 — округляем вниз, если 5,6,7,8,9 — вверх.<br><div class="example">34 → 30<br>47 → 50</div>`;
    if (target === 'hundreds')
      return `<b>Тема: Округление до сотен.</b><br>Смотрим на цифру десятков: если 5 и больше — вверх, меньше 5 — вниз.<br><div class="example">234 → 200<br>460 → 500</div>`;
    if (target === 'evaluate')
      return `<b>Тема: Оценка результата.</b><br>Округли числа, чтобы быстро посчитать в уме. Точный ответ знать не обязательно.<br><div class="example">48 × 2 ≈ 50 × 2 = 100</div>`;
    return `<b>Тема: Округление.</b><br>Округление помогает быстро считать и проверять ответы.`;
  }

  if (t === 5) {
    if (target === 11)
      return `<b>Тема: Деление на 11.</b><br>💡 <b>Лайфхак:</b> Запомни, что 11 × 2 = 22, 11 × 3 = 33... 11 × 9 = 99. Если делишь, например, 55 на 11, просто вспомни: «Сколько раз по 11 даст 55?» (5 раз). <br><div class="example">88 : 11 = 8</div>`;
    if (target === 12)
      return `<b>Тема: Деление на 12.</b><br>💡 <b>Лайфхак:</b> Вспомни, что 12 × 5 = 60, 12 × 6 = 72. Если делишь 72 на 12, подумай, на что умножить 12.`;
    if (target === 13)
      return `<b>Тема: Деление на 13.</b><br>💡 <b>Лайфхак:</b> Вспомни таблицу: 13 × 3 = 39, 13 × 4 = 52, 13 × 5 = 65. Используй эти числа для проверки.<br><div class="example">65 : 13 = 5</div>`;
    if (target === 14)
      return `<b>Тема: Деление на 14.</b><br>💡 <b>Лайфхак:</b> Запомни, что 14 × 5 = 70, 14 × 6 = 84. Проверяй ответ умножением.`;
    if (target === 15)
      return `<b>Тема: Деление на 15.</b><br>💡 <b>Лайфхак:</b> 15 × 4 = 60, 15 × 6 = 90. Если делишь 90 на 15, просто вспомни, сколько раз по 15 даст 90.`;
    if (target === 16)
      return `<b>Тема: Деление на 16.</b><br>💡 <b>Лайфхак:</b> 16 — это 8 и 2. Можешь разделить число сначала на 8, а потом на 2. (Например, 64 : 16 = 64 : 8 : 2 = 8 : 2 = 4).`;
    if (target === 17)
      return `<b>Тема: Деление на 17.</b><br>💡 <b>Лайфхак:</b> Вспомни: 17 × 3 = 51, 17 × 4 = 68, 17 × 5 = 85. Проверяй ответ умножением.`;
    if (target === 18)
      return `<b>Тема: Деление на 18.</b><br>💡 <b>Лайфхак:</b> 18 — это 9 и 2. Раздели число на 9, а потом на 2. (Например, 90 : 18 = 90 : 9 : 2 = 10 : 2 = 5).`;
    if (target === 19)
      return `<b>Тема: Деление на 19.</b><br>💡 <b>Лайфхак:</b> 19 — это почти 20. Если делишь, например, 95 на 19, вспомни, что 20 × 5 = 100, а 19 × 5 = 100 - 5 = 95.`;
    if (target === 20)
      return `<b>Тема: Деление на 20.</b><br>💡 <b>Лайфхак:</b> 20 — это 2 и 10. Раздели число на 10 (убери ноль), а потом раздели на 2.<br><div class="example">140 : 20 = (140 : 10) : 2 = 14 : 2 = 7</div>`;
    if (target === 25)
      return `<b>Тема: Деление на 25.</b><br>💡 <b>Лайфхак:</b> 25 — это четверть от 100. Умножь число на 4 и раздели на 100.<br><div class="example">300 : 25 = (300 × 4) : 100 = 1200 : 100 = 12</div>`;
    if (target === 30)
      return `<b>Тема: Деление на 30.</b><br>💡 <b>Лайфхак:</b> 30 — это 3 и 10. Убери ноль (раздели на 10), а потом раздели на 3.<br><div class="example">120 : 30 = (120 : 10) : 3 = 12 : 3 = 4</div>`;
    if (target === 40)
      return `<b>Тема: Деление на 40.</b><br>💡 <b>Лайфхак:</b> 40 — это 4 и 10. Убери ноль, а потом раздели на 4.<br><div class="example">160 : 40 = (160 : 10) : 4 = 16 : 4 = 4</div>`;
    if (target === 50)
      return `<b>Тема: Деление на 50.</b><br>💡 <b>Лайфхак:</b> 50 — это 100 и 2. Убери два нуля (раздели на 100), а потом раздели на 2.<br><div class="example">400 : 50 = (400 : 100) : 2 = 4 : 2 = 2</div>`;
    return `<b>Тема: Деление на двузначные (на ${target}).</b><br>Подбирай число умножением. ${target} × 5 = ?, ${target} × 6 = ? Всегда проверяй ответ!`;
  }

  if (t === 6) {
    return `<b>Тема: Умножение через разложение на ${target}.</b><br>💡 <b>Лайфхак:</b> Раскладывай двузначное число на десятки и единицы, а потом умножай каждую часть на ${target}.<br><div class="example">23 × ${target} = (20 × ${target}) + (3 × ${target})</div>`;
  }

  if (t === 7) {
    if (target === 2)
      return `<b>Тема: Признак делимости на 2.</b><br>💡 <b>Лайфхак:</b> Число делится на 2, если оно **четное** (заканчивается на 0, 2, 4, 6, 8).<br><div class="example">48 : 2 = 24 (делится)<br>35 : 2 = 17.5 (не делится)</div>`;
    if (target === 3)
      return `<b>Тема: Признак делимости на 3.</b><br>💡 <b>Лайфхак:</b> Сложи все цифры числа. Если сумма делится на 3, то и само число делится.<br><div class="example">123: 1+2+3=6 (6 делится на 3). Значит, 123 : 3 = 41.</div>`;
    if (target === 5)
      return `<b>Тема: Признак делимости на 5.</b><br>💡 <b>Лайфхак:</b> Число делится на 5, если заканчивается на **0 или 5**.<br><div class="example">45 : 5 = 9<br>80 : 5 = 16</div>`;
    if (target === 9)
      return `<b>Тема: Признак делимости на 9.</b><br>💡 <b>Лайфхак:</b> Сложи все цифры числа. Если сумма делится на 9, то и само число делится.<br><div class="example">126: 1+2+6=9. Значит, 126 : 9 = 14.</div>`;
    if (target === 10)
      return `<b>Тема: Признак делимости на 10.</b><br>💡 <b>Лайфхак:</b> Число делится на 10, если заканчивается на **0**.<br><div class="example">120 : 10 = 12</div>`;
    if (target === 4)
      return `<b>Тема: Признак делимости на 4.</b><br>💡 <b>Лайфхак:</b> Смотрим на **последние две цифры**. Если они делятся на 4, то и число делится.<br><div class="example">116: 16 делится на 4. Значит, 116 : 4 = 29.</div>`;

    if (target === '2,3')
      return `<b>Тема: Делимость на 2 и 3 одновременно.</b><br>💡 <b>Правило:</b> Число должно быть четным (на 2) И сумма его цифр должна делиться на 3.<br><div class="example">24 (четное, 2+4=6 : 3) → делится.<br>14 (четное, но 1+4=5 не : 3) → не делится.</div>`;
    if (target === '2,5')
      return `<b>Тема: Делимость на 2 и 5 одновременно.</b><br>💡 <b>Правило:</b> Число должно заканчиваться на 0.<br><div class="example">30, 40, 100 → делятся.</div>`;
    if (target === '3,9')
      return `<b>Тема: Делимость на 3 и 9 одновременно.</b><br>💡 <b>Правило:</b> Если число делится на 9, оно автоматически делится на 3. Смотри на сумму цифр.<br><div class="example">18 (1+8=9) → делится на 9 и на 3.</div>`;
    if (target === '4,2')
      return `<b>Тема: Делимость на 4 и 2 одновременно.</b><br>💡 <b>Правило:</b> Если число делится на 4, оно уже четное (делится на 2). Смотри на две последние цифры.<br><div class="example">24 (24:4=6) → делится и на 4, и на 2.</div>`;
    if (target === '5,10')
      return `<b>Тема: Делимость на 5 и 10 одновременно.</b><br>💡 <b>Правило:</b> Если число делится на 10 (заканчивается на 0), оно точно делится на 5.<br><div class="example">50 : 10 = 5 и 50 : 5 = 10.</div>`;
    if (target === '3,4')
      return `<b>Тема: Делимость на 3 и 4 одновременно.</b><br>💡 <b>Правило:</b> Сумма цифр делится на 3, И две последние цифры делятся на 4.<br><div class="example">12, 24, 36, 48.</div>`;
    if (target === '2,3,5')
      return `<b>Тема: Делимость на 2, 3 и 5 одновременно.</b><br>💡 <b>Правило:</b> Число заканчивается на 0 (это дает 2 и 5), а сумма цифр делится на 3.<br><div class="example">30 (сумма 3), 60 (сумма 6), 90 (сумма 9).</div>`;
    if (target === '2,9')
      return `<b>Тема: Делимость на 2 и 9 одновременно.</b><br>💡 <b>Правило:</b> Число четное, И сумма цифр делится на 9.<br><div class="example">18, 36, 54, 72, 90.</div>`;
    if (target === 'mix')
      return `<b>Тема: Смешанные признаки.</b><br>💡 <b>Вспомни правила:</b><br>На 2: четное (0,2,4,6,8).<br>На 3: сумма цифр делится на 3.<br>На 4: две последние цифры делятся на 4.<br>На 5: заканчивается на 0 или 5.<br>На 9: сумма цифр делится на 9.<br>На 10: заканчивается на 0.`;
    return `<b>Тема: Признаки делимости.</b><br>Проверь, делится ли число на ${target}.`;
  }

  if (t === 8) {
    if (target === 10) {
      return `<b>Тема: Числа с нулями (10).</b><br>💡 <b>Лайфхак:</b> При умножении на 10 просто припиши ноль.<br>При делении на 10 просто убери ноль.<br><div class="example">30 × 10 = 300<br>300 : 10 = 30</div>`;
    }
    if (target === 100) {
      return `<b>Тема: Числа с нулями (100).</b><br>💡 <b>Лайфхак:</b> При умножении на 100 припиши два нуля.<br>При делении на 100 убери два нуля.<br><div class="example">40 × 100 = 4000<br>4000 : 100 = 40</div>`;
    }
    if (target === 1000) {
      return `<b>Тема: Числа с нулями (1000).</b><br>💡 <b>Лайфхак:</b> При умножении на 1000 припиши три нуля.<br>При делении на 1000 убери три нуля.<br><div class="example">5 × 1000 = 5000<br>8000 : 1000 = 8</div>`;
    }
    if (target === 30 || target === 50 || target === 20) {
      return `<b>Тема: Круглые числа.</b><br>💡 <b>Лайфхак:</b> Умножай или дели числа **без нулей**, а потом припиши или убери все нули в конце.<br><div class="example">30 × 40 = 3 × 4 и два нуля = 1200<br>800 : 20 = 8 : 2 и один ноль = 40</div>`;
    }
    return `<b>Тема: Числа с нулями.</b><br>Учимся умножать и делить круглые числа.`;
  }

  if (t === 9) {
    if (target === 'add_sub')
      return `<b>Тема: Сложение и вычитание.</b><br>💡 <b>Правило:</b> Считай по порядку слева направо.<br><div class="example">25 + 30 - 10 = 45</div>`;
    if (target === 'mult_add')
      return `<b>Тема: Умножение и сложение.</b><br>💡 <b>Правило:</b> Сначала делай умножение, а потом сложение.<br><div class="example">4 × 5 + 10 = 20 + 10 = 30</div>`;
    if (target === 'div_sub')
      return `<b>Тема: Деление и вычитание.</b><br>💡 <b>Правило:</b> Сначала делай деление, а потом вычитание.<br><div class="example">20 : 4 - 2 = 5 - 2 = 3</div>`;
    if (target === 'brackets')
      return `<b>Тема: Скобки.</b><br>💡 <b>Правило:</b> Сначала выполняем действия в скобках, а потом всё остальное.<br><div class="example">(10 + 5) × 2 = 15 × 2 = 30</div>`;
    if (target === 'three_actions')
      return `<b>Тема: Три действия.</b><br>💡 <b>Правило:</b> Сначала умножение/деление, потом сложение/вычитание.<br><div class="example">10 + 2 × 5 - 4 = 10 + 10 - 4 = 16</div>`;
    return `<b>Тема: Все действия.</b><br>Помни про порядок действий.`;
  }

  if (t === 10) {
    if (target === 'buy')
      return `<b>Тема: Покупки.</b><br>Чтобы узнать общую стоимость, умножь цену одной штуки на количество.<br><div class="example">3 шт. по 50 руб. = 3 × 50 = 150 руб.</div>`;
    if (target === 'change')
      return `<b>Тема: Сдача.</b><br>Чтобы узнать сдачу, вычти из денег, которые дал, стоимость покупки.<br><div class="example">Дал 500, купил на 320. Сдача = 500 - 320 = 180.</div>`;
    if (target === 'price')
      return `<b>Тема: Цена за штуку.</b><br>Чтобы узнать цену одной штуки, раздели общую стоимость на количество.<br><div class="example">4 шт. стоят 200. Цена = 200 : 4 = 50 руб.</div>`;
    if (target === 'discount')
      return `<b>Тема: Скидки.</b><br>Скидка 50% — это половина цены. Раздели цену на 2.<br><div class="example">Товар 800 руб. Скидка 50% → 800 : 2 = 400 руб.</div>`;
    return `<b>Тема: Магазин.</b><br>Решай задачи про деньги, покупки и сдачу.`;
  }
  return 'Реши задания!';
}

// --- МЕМЫ ---
const Memes = {
  success: ['🎉', '🔥', '🚀', '💪', '🥳', '🌟', '😎', '🏆'],
  fail: ['😿', '🤔', '💡', '🧐', '📖', '🤷‍♂️'],
};

// --- ГЕНЕРАЦИЯ ID ---
let globalLevelId = 1;
GAME_STRUCTURE.forEach(chapter => {
  chapter.levels.forEach(lvl => {
    lvl.id = globalLevelId++;
  });
});

// --- СОСТОЯНИЕ ---
let state = {
  score: 0,
  unlockedLevels: [1],
  currentLevelId: null,
  currentTaskIndex: 0,
  totalErrors: 0,
  isAnswerChecked: false,
  currentTaskObj: null,
};

function saveProgress() {
  localStorage.setItem('mathQuestBigSave', JSON.stringify(state));
}
function loadProgress() {
  const saved = localStorage.getItem('mathQuestBigSave');
  if (saved) {
    try {
      state = JSON.parse(saved);
      document.getElementById('continue-box').classList.remove('hidden');
      document.getElementById('btnContinue').innerText =
        `▶️ Продолжить (${state.score} ⭐)`;
    } catch (e) {}
  }
}
function resetProgress() {
  state = {
    score: 0,
    unlockedLevels: [1],
    currentLevelId: null,
    currentTaskIndex: 0,
    totalErrors: 0,
    isAnswerChecked: false,
    currentTaskObj: null,
  };
  localStorage.removeItem('mathQuestBigSave');
  document.getElementById('continue-box').classList.add('hidden');
}

// --- НАВИГАЦИЯ ---
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  document.getElementById(screenId).classList.remove('hidden');
  document.getElementById('scoreDisplay').innerText = `${state.score} ⭐`;
}
function startGame(continueSave) {
  if (!continueSave) resetProgress();
  showScreen('screen-chapters');
  renderChapters();
}
function goHome() {
  showScreen('screen-home');
  if (state.score > 0)
    document.getElementById('continue-box').classList.remove('hidden');
}
function goToChapters() {
  showScreen('screen-chapters');
  renderChapters();
}

function renderChapters() {
  const container = document.getElementById('chaptersList');
  container.innerHTML = '';
  GAME_STRUCTURE.forEach(chapter => {
    const isUnlocked = chapter.levels.some(l =>
      state.unlockedLevels.includes(l.id),
    );
    const btn = document.createElement('div');
    btn.className = `chapter-btn ${isUnlocked ? '' : 'locked'}`;
    btn.innerHTML = `<div class="chapter-icon">${chapter.icon}</div><div class="chapter-info"><div class="chapter-title">${chapter.title}</div><div class="chapter-desc">${chapter.desc}</div></div>`;
    if (isUnlocked) btn.onclick = () => openChapter(chapter);
    container.appendChild(btn);
  });
}

let currentChapter = null;
function openChapter(chapter) {
  currentChapter = chapter;
  document.getElementById('chapterTitle').innerText = chapter.title;
  const grid = document.getElementById('levelsGrid');
  grid.innerHTML = '';
  chapter.levels.forEach(lvl => {
    const isUnlocked = state.unlockedLevels.includes(lvl.id);
    const btn = document.createElement('button');
    btn.className = `level-btn ${isUnlocked ? '' : 'locked'} ${lvl.type === 'boss' ? 'boss' : ''}`;
    btn.innerHTML = `<span>${lvl.type === 'boss' ? '👑' : '📖'}</span> ${lvl.name}`;
    if (isUnlocked) btn.onclick = () => openTheory(lvl);
    grid.appendChild(btn);
  });
  showScreen('screen-levels');
}

let currentLevelObj = null;
function openTheory(levelObj) {
  currentLevelObj = levelObj;
  document.getElementById('theoryTitle').innerText = levelObj.name;
  document.getElementById('theoryContent').innerHTML =
    getTheoryForLevel(levelObj);
  showScreen('screen-theory');
}
function startTheoryTasks() {
  startLevel(currentLevelObj);
}

function startLevel(levelObj) {
  if (state.currentLevelId !== levelObj.id) {
    state.currentTaskIndex = 0;
    state.currentTaskObj = null;
    state.currentLevelId = levelObj.id;
    usedQuestions.clear();
  }
  showScreen('screen-game');
  loadTask(levelObj);
}

function loadTask(levelObj) {
  if (state.currentTaskIndex >= TASKS_PER_LEVEL) {
    completeLevel(levelObj);
    return;
  }

  let attempts = 0;
  let newTask = null;
  let isBoss = levelObj.type === 'boss';

  while (attempts < 50) {
    if (isBoss) {
      newTask = Generators[levelObj.target](0, true);
    } else {
      newTask = Generators[levelObj.type](levelObj.target, false);
    }

    if (!usedQuestions.has(newTask.question)) {
      usedQuestions.add(newTask.question);
      break;
    }
    attempts++;
  }

  state.currentTaskObj = newTask;
  state.isAnswerChecked = false;

  document.getElementById('taskTitle').innerText =
    `${levelObj.name} (${state.currentTaskIndex + 1}/${TASKS_PER_LEVEL})`;
  document.getElementById('taskContent').innerHTML =
    state.currentTaskObj.question;

  const input = document.getElementById('answerInput');
  input.value = '';
  input.disabled = false;
  input.focus();

  const feedback = document.getElementById('feedbackBox');
  feedback.innerHTML = '';
  feedback.className = 'feedback';

  const btn = document.getElementById('checkBtn');
  btn.innerText = 'Проверить';
  btn.className = 'btn-primary';
  btn.onclick = checkAnswer;

  const progress = (state.currentTaskIndex / TASKS_PER_LEVEL) * 100;
  document.getElementById('gameProgress').style.width = `${progress}%`;
}

function showMeme(type) {
  const meme = document.getElementById('floatingMeme');
  if (!meme) return;
  let arr = type === 'success' ? Memes.success : Memes.fail;
  let randomMeme = arr[Math.floor(Math.random() * arr.length)];
  meme.innerText = randomMeme;
  meme.classList.remove('hidden');
  meme.style.animation = 'none';
  meme.offsetHeight;
  meme.style.animation = null;
  setTimeout(() => {
    meme.classList.add('hidden');
  }, 1500);
}

function checkAnswer() {
  const input = document.getElementById('answerInput');
  const feedback = document.getElementById('feedbackBox');
  const btn = document.getElementById('checkBtn');

  if (!state.isAnswerChecked) {
    const userAnswer = parseInt(input.value);
    if (isNaN(userAnswer)) return;

    if (userAnswer === state.currentTaskObj.answer) {
      feedback.innerText = 'Верно! 🎉';
      feedback.className = 'feedback success';
      input.disabled = true;
      state.score += 10;
      state.isAnswerChecked = true;
      btn.innerText = 'Дальше →';
      btn.className = 'btn-success';
      showMeme('success');
      saveProgress();
    } else {
      feedback.innerHTML = `❌ Ошибка. <br><b>Подсказка:</b> ${state.currentTaskObj.hint}`;
      feedback.className = 'feedback hint';
      input.value = '';
      input.focus();
      state.totalErrors++;
      showMeme('fail');
      saveProgress();
    }
  } else {
    state.currentTaskIndex++;
    loadTask(currentChapter.levels.find(l => l.id === state.currentLevelId));
  }
}

function completeLevel(levelObj) {
  let allLevels = GAME_STRUCTURE.flatMap(c => c.levels);
  let currentIndex = allLevels.findIndex(l => l.id === levelObj.id);

  if (currentIndex < allLevels.length - 1) {
    let nextLvlId = allLevels[currentIndex + 1].id;
    if (!state.unlockedLevels.includes(nextLvlId)) {
      state.unlockedLevels.push(nextLvlId);
    }
  }
  state.currentTaskObj = null;
  state.currentTaskIndex = 0;
  saveProgress();
  showScreen('screen-congrats');
}

function quitLevel() {
  saveProgress();
  goToChapters();
}

function showReport() {
  const report = document.getElementById('reportText');
  let openLvlsCount = state.unlockedLevels.length;
  let totalLvls = GAME_STRUCTURE.flatMap(c => c.levels).length;
  report.innerHTML = `
        <b>Всего открыто уровней:</b> ${openLvlsCount} из ${totalLvls}<br>
        <b>Заработано звезд:</b> ${state.score}<br>
        <b>Сделано ошибок:</b> ${state.totalErrors}<br><br>
        <i>Сделай скриншот этого экрана и отправь!</i>
    `;
  showScreen('screen-report');
}

document
  .getElementById('answerInput')
  .addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      if (state.isAnswerChecked) {
        state.currentTaskIndex++;
        loadTask(
          currentChapter.levels.find(l => l.id === state.currentLevelId),
        );
      } else checkAnswer();
    }
  });

window.onload = () => {
  loadProgress();
  if (state.currentLevelId) {
    currentChapter = GAME_STRUCTURE.find(c =>
      c.levels.some(l => l.id === state.currentLevelId),
    );
  }
};
