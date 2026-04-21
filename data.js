// ============================================================
// data.js — Synchronous data payload for NC‑RAM Dashboard
// This file is loaded BEFORE index.html app logic
// Replace contents anytime (e.g., via Power Automate)
// ============================================================

window.__DATA__ = {

  KPI: {
    jan: [
      { rank: 1, n: 'Sierra Ford', bd: 2, chain: 1, reach: 32, equip: 31, pipe: 6, vend: 350, score: 28 },
      { rank: 2, n: 'Jenny Lynch', bd: 1, chain: 2, reach: 28, equip: 5,  pipe: 3, vend: 1100, score: 32 }
    ],

    feb: [
      { rank: 1, n: 'Sierra Ford',  bd: 1, chain: 0, reach: 21, equip: 26, pipe: 5, vend: 318, score: 30 },
      { rank: 2, n: 'Amy Quinet',   bd: 1, chain: 1, reach: 9,  equip: 5,  pipe: 3, vend: 978, score: 32 }
    ],

    ytd_feb: [
      { rank: 1, n: 'Sierra Ford', bd: 3, chain: 1, reach: 53, equip: 57, pipe: 11, vend: 668,  score: 42 },
      { rank: 2, n: 'Amy Quinet',  bd: 2, chain: 2, reach: 19, equip: 11, pipe: 6,  vend: 1958, score: 49 }
    ]
  },

  VOL: [
    { ram: 'Sierra Ford', reg: 'Central', seg: 'Big3', month: 'jan', py: 5241,  act: 5870,  bp: 6027,  goal: 0.15 },
    { ram: 'Sierra Ford', reg: 'Central', seg: 'Vend', month: 'feb', py: 21179, act: 28565, bp: 24356, goal: 0.15 },
    { ram: 'Jenny Lynch', reg: 'West',    seg: 'CU',   month: 'feb', py: 7519,  act: 10683, bp: 8271,  goal: 0.10 }
  ],

  WINS: [
    { ram: 'Amy Quinet',  month: 'jan', type: 'BD',    seg: 'Vending', acct: 'Canteen / Google',       locs: 1,  vol: 2000 },
    { ram: 'Jenny Lynch', month: 'jan', type: 'Chain', seg: 'Fitness', acct: 'Mountainside Fitness',    locs: 22, vol: 5000 }
  ],

  FIT: [
    { reg: 'Central', ncram: 'Sierra Ford', acct: 'Tru Fit Athletics', chain: 1, reach: 40, skus: 4, skuT: 'ED, SF, Zero', eqT: 'Mega Slim',  eqQ: 2, acts: 3 },
    { reg: 'West',    ncram: 'Amy Quinet',  acct: 'In Shape Fitness',  chain: 1, reach: 42, skus: 3, skuT: 'Zero, Peach',  eqT: 'Small GDC', eqQ: 4, acts: 25 }
  ],

  ATWORK: [
    { reg: 'Northeast', ncram: 'Chris Trott', acct: 'Lonza Biologics', chain: 1, reach: 2, skus: 6, skuT: 'ED, SF, Red', eqT: 'Slim Medium', eqQ: 2, acts: 2 }
  ]
};
