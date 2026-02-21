const CURRENCY = 'gbp';

const PRODUCTS = Object.freeze({
  'rise-cushion-sand': {
    id: 'rise-cushion-sand',
    name: 'Rise Seat Lift Cushion',
    unitAmount: 8900,
    image: '/product-hero.png',
    colors: ['Sand', 'Sage', 'Slate'],
  },
  'rise-cushion-sage': {
    id: 'rise-cushion-sage',
    name: 'Rise Seat Lift Cushion - Sage',
    unitAmount: 8900,
    image: '/product-sage.jpg',
    colors: ['Sage'],
  },
  'rise-cushion-slate': {
    id: 'rise-cushion-slate',
    name: 'Rise Seat Lift Cushion - Slate',
    unitAmount: 8900,
    image: '/product-slate.jpg',
    colors: ['Slate'],
  },
});

module.exports = {
  CURRENCY,
  PRODUCTS,
};
