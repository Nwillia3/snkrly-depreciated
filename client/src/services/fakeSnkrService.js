import * as brandsAPI from "./fakeBrandService";

const snkrs = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Adidas",
    brand: { _id: "5b21ca3eeb7f6fbccd471818", name: "Adidas" },
    pairsInStock: 6,
    hotRate: 2.5,
    releaseDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Die Hard",
    brand: { _id: "5b21ca3eeb7f6fbccd471818", name: "Jordan" },
    pairsInStock: 5,
    hotRate: 2.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Get Out",
    brand: { _id: "5b21ca3eeb7f6fbccd471820", name: "Nike" },
    pairsInStock: 8,
    hotRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: "Trip to Italy",
    brand: { _id: "5b21ca3eeb7f6fbccd471814", name: "Adidas" },
    pairsInStock: 7,
    hotRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    name: "Airplane",
    brand: { _id: "5b21ca3eeb7f6fbccd471814", name: "Nike" },
    pairsInStock: 7,
    hotRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    name: "Wedding Crashers",
    brand: { _id: "5b21ca3eeb7f6fbccd471814", name: "Jordan" },
    pairsInStock: 7,
    hotRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    name: "Gone Girl",
    brand: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    pairsInStock: 7,
    hotRate: 4.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    name: "The Sixth Sense",
    brand: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    pairsInStock: 4,
    hotRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    name: "The Avengers",
    brand: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    pairsInStock: 7,
    hotRate: 3.5
  }
];

export function getSnkrs() {
  return snkrs;
}

export function getSnkr(id) {
  return snkrs.find(m => m._id === id);
}

export function saveSnkr(snkr) {
  let snkrInDb = snkrs.find(m => m._id === snkr._id) || {};
  snkrInDb.name = snkr.name;
  snkrInDb.brand = brandsAPI.brands.find(g => g._id === snkr.brandId);
  snkrInDb.pairsInStock = snkr.pairsInStock;
  snkrInDb.hotRate = snkr.hotRate;

  if (!snkrInDb._id) {
    snkrInDb._id = Date.now();
    snkrs.push(snkrInDb);
  }

  return snkrInDb;
}

export function deleteSnkr(id) {
  let snkrInDb = snkrs.find(m => m._id === id);
  snkrs.splice(snkrs.indexOf(snkrInDb), 1);
  return snkrInDb;
}
