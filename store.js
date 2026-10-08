const planes = [
  // --- NARROWBODY & REGIONAL ---
  {
    item: 1,
    model: "A220-100",
    manufacturer: "Airbus",
    price: 81000000,
    category: ["Regional", "Narrowbody"],
  },
  {
    item: 2,
    model: "A220-300",
    manufacturer: "Airbus",
    price: 91500000,
    category: ["Regional", "Narrowbody"],
  },
  {
    item: 3,
    model: "A319neo",
    manufacturer: "Airbus",
    price: 101500000,
    category: ["Narrowbody"],
  },
  {
    item: 4,
    model: "A320neo",
    manufacturer: "Airbus",
    price: 110600000,
    category: ["Narrowbody"],
  },
  {
    item: 5,
    model: "A321neo",
    manufacturer: "Airbus",
    price: 129500000,
    category: ["Narrowbody"],
  },
  {
    item: 6,
    model: "A321XLR",
    manufacturer: "Airbus",
    price: 142000000,
    category: ["Narrowbody", "Long-haul"],
  },
  {
    item: 7,
    model: "737 MAX 7",
    manufacturer: "Boeing",
    price: 99700000,
    category: ["Narrowbody"],
  },
  {
    item: 8,
    model: "737 MAX 8",
    manufacturer: "Boeing",
    price: 121600000,
    category: ["Narrowbody"],
  },
  {
    item: 9,
    model: "737 MAX 9",
    manufacturer: "Boeing",
    price: 128900000,
    category: ["Narrowbody"],
  },
  {
    item: 10,
    model: "737 MAX 10",
    manufacturer: "Boeing",
    price: 134900000,
    category: ["Narrowbody"],
  },

  // --- WIDEBODY & LONG-HAUL ---
  {
    item: 11,
    model: "A330-800neo",
    manufacturer: "Airbus",
    price: 259900000,
    category: ["Widebody", "Long-haul"],
  },
  {
    item: 12,
    model: "A330-900neo",
    manufacturer: "Airbus",
    price: 296400000,
    category: ["Widebody", "Long-haul"],
  },
  {
    item: 13,
    model: "A350-900",
    manufacturer: "Airbus",
    price: 317400000,
    category: ["Widebody", "Long-haul"],
  },
  {
    item: 14,
    model: "A350-1000",
    manufacturer: "Airbus",
    price: 366500000,
    category: ["Widebody", "Long-haul"],
  },
  {
    item: 15,
    model: "787-8 Dreamliner",
    manufacturer: "Boeing",
    price: 248300000,
    category: ["Widebody", "Long-haul"],
  },
  {
    item: 16,
    model: "787-9 Dreamliner",
    manufacturer: "Boeing",
    price: 292500000,
    category: ["Widebody", "Long-haul"],
  },
  {
    item: 17,
    model: "787-10 Dreamliner",
    manufacturer: "Boeing",
    price: 338400000,
    category: ["Widebody", "Long-haul"],
  },
  {
    item: 18,
    model: "777-8X",
    manufacturer: "Boeing",
    price: 410200000,
    category: ["Widebody", "Long-haul"],
  },
  {
    item: 19,
    model: "777-9X",
    manufacturer: "Boeing",
    price: 442200000,
    category: ["Widebody", "Long-haul"],
  },

  // --- FREIGHTER & CARGO ---
  {
    item: 20,
    model: "A330-200F",
    manufacturer: "Airbus",
    price: 241700000,
    category: ["Cargo", "Freighter"],
  },
  {
    item: 21,
    model: "767-300F",
    manufacturer: "Boeing",
    price: 220300000,
    category: ["Cargo", "Freighter"],
  },
  {
    item: 22,
    model: "777F",
    manufacturer: "Boeing",
    price: 352300000,
    category: ["Cargo", "Freighter"],
  },
  {
    item: 23,
    model: "777-8F",
    manufacturer: "Boeing",
    price: 410000000,
    category: ["Cargo", "Freighter"],
  },
];

for (let i = 0; i < planes.length; i++) {
  console.log(planes[i]);
}

function buy(cart) {}
