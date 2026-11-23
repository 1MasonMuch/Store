const planes = [
  // --- AIRBUS ---
  {
    item: 1,
    model: "A220-100",
    manufacturer: "Airbus",
    price: 81000000,
    category: ["Regional", "Narrowbody"],
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Delta_Airbus_A220_-100_N116DU_DSC_0047.jpg?width=800",
    description:
      "A fuel-efficient regional jet designed for short-to-medium-haul routes. It features wide cabins and large windows for enhanced passenger comfort.",
  },
  {
    item: 2,
    model: "A220-300",
    manufacturer: "Airbus",
    price: 91500000,
    category: ["Regional", "Narrowbody"],
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Airbus_A220-300.jpg?width=800",
    description:
      "A stretched variant of the A220 offering higher seating capacity and extended range. It delivers superior economics for high-density regional operations.",
  },
  {
    item: 3,
    model: "A319neo",
    manufacturer: "Airbus",
    price: 101500000,
    category: ["Narrowbody"],
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Airbus_A319-151N,_Airbus_Industrie_JP9105933.jpg?width=800",
    description:
      "The smallest member of the A320neo family, optimized for hot-and-high airfields. It incorporates advanced engines to significantly lower fuel burn.",
  },
  {
    item: 4,
    model: "A320neo",
    manufacturer: "Airbus",
    price: 110600000,
    category: ["Narrowbody"],
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Airbus_A320neo_front_view.jpg?width=800",
    description:
      "One of the world's most popular single-aisle airliners, known for its exceptional fuel efficiency. It features modern sharklets and updated powerplant options.",
  },
  {
    item: 5,
    model: "A321neo",
    manufacturer: "Airbus",
    price: 129500000,
    category: ["Narrowbody"],
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Airbus_A321neo_(35121126000).jpg?width=800",
    description:
      "A stretched fuselage version of the A320neo capable of carrying more passengers on transcontinental routes. It combines single-aisle operating costs with widebody-like capacity.",
  },
  {
    item: 6,
    model: "A321XLR",
    manufacturer: "Airbus",
    price: 142000000,
    category: ["Narrowbody", "Long-haul"],
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Aer_Lingus_Airbus_A321XLR_EI-XLR_MD1.jpg?width=800",
    description:
      "An extra-long range narrowbody designed to open up unprecedented direct trans-Atlantic city pairs. It features a permanent rear center fuel tank for extended reach.",
  },
  {
    item: 11,
    model: "A330-800neo",
    manufacturer: "Airbus",
    price: 259900000,
    category: ["Widebody", "Long-haul"],
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/KUWAIT_AIRWAYS_AIRBUS_A330-800_9K-APG_(52892253095).jpg?width=800",
    description:
      "A lower-capacity, ultra-long-range variant of the popular A330neo widebody family. It shares high commonality with its larger sibling while servicing niche long-haul routes.",
  },
  {
    item: 12,
    model: "A330-900neo",
    manufacturer: "Airbus",
    price: 296400000,
    category: ["Widebody", "Long-haul"],
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Airbus_A330-900.jpg?width=800",
    description:
      "A modern widebody featuring Rolls-Royce Trent 7000 engines and aerodynamic enhancements. It provides highly efficient transcontinental and intercontinental transport.",
  },
  {
    item: 13,
    model: "A350-900",
    manufacturer: "Airbus",
    price: 317400000,
    category: ["Widebody", "Long-haul"],
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/A350-900_-_HB-IHF_from_Edelweiss.jpg?width=800",
    description:
      "A modern composite-material widebody built for ultra-long-haul operational efficiency. Its distinct curved cockpit windows and quiet cabin make it a passenger favorite.",
  },
  {
    item: 14,
    model: "A350-1000",
    manufacturer: "Airbus",
    price: 366500000,
    category: ["Widebody", "Long-haul"],
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Airbus_A350-1000_(35340566641).jpg?width=800",
    description:
      "The largest variant of the A350 family, offering high passenger capacity on global trunk routes. It features powerful Trent XWB-97 engines and a six-wheel main landing gear.",
  },
  {
    item: 20,
    model: "A330-200F",
    manufacturer: "Airbus",
    price: 241700000,
    category: ["Cargo", "Freighter"],
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Airbus_A330-200F.jpg?width=800",
    description:
      "A mid-size dedicated cargo aircraft derived from the proven A330-200 passenger platform. It features a versatile main-deck loading system for global freight logistics.",
  },

  // --- BOEING ---
  {
    item: 7,
    model: "737 MAX 7",
    manufacturer: "Boeing",
    price: 99700000,
    category: ["Narrowbody"],
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Boeing_Company,_N7201S,_Boeing_737-7_MAX_(30416417438).jpg?width=800",
    description:
      "The smallest variant in Boeing's 737 MAX family, tailored for low-density, long-range regional routes. It offers improved efficiency over legacy 737 models.",
  },
  {
    item: 8,
    model: "737 MAX 8",
    manufacturer: "Boeing",
    price: 121600000,
    category: ["Narrowbody"],
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/N8707P_Southwest_Boeing_737_MAX-8.jpg?width=800",
    description:
      "The core workhorse of Boeing's single-aisle fleet, competing directly with the A320neo. It incorporates advanced CFM LEAP-1B engines and distinctive split-tip winglets.",
  },
  {
    item: 9,
    model: "737 MAX 9",
    manufacturer: "Boeing",
    price: 128900000,
    category: ["Narrowbody"],
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/United_Airlines_Boeing_737-9_MAX_AN5165061.jpg?width=800",
    description:
      "A larger-capacity variant of the 737 MAX series built for higher-density domestic routes. It provides airlines with increased seating capacity and lower per-seat operating costs.",
  },
  {
    item: 10,
    model: "737 MAX 10",
    manufacturer: "Boeing",
    price: 134900000,
    category: ["Narrowbody"],
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/737_MAX_10_Roll_Out_(Nov_2019)_-_004.jpg?width=800",
    description:
      "The largest single-aisle aircraft produced by Boeing, stretching capacity to match competitive large narrowbodies. It features a modified semi-levered landing gear design.",
  },
  {
    item: 15,
    model: "787-8 Dreamliner",
    manufacturer: "Boeing",
    price: 248300000,
    category: ["Widebody", "Long-haul"],
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Boeing_787-8_Dreamliner,_Boeing_Company_JP7434698.jpg?width=800",
    description:
      "The baseline model of Boeing's revolutionary composite-body long-haul family. It pioneered point-to-point global travel with exceptional fuel economy and cabin pressure comfort.",
  },
  {
    item: 16,
    model: "787-9 Dreamliner",
    manufacturer: "Boeing",
    price: 292500000,
    category: ["Widebody", "Long-haul"],
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Boeing_787-9_%E2%80%98VH-ZNA%E2%80%99_QANTAS.jpg?width=800",
    description:
      "A stretched, highly versatile variant of the Dreamliner series used extensively by international carriers. It balances long range with large payload flexibility.",
  },
  {
    item: 17,
    model: "787-10 Dreamliner",
    manufacturer: "Boeing",
    price: 338400000,
    category: ["Widebody", "Long-haul"],
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Boeing_787-10_Dreamliner_-_N12006_-_United_Airlines.jpg?width=800",
    description:
      "The largest member of the 787 family, optimized for high-density regional and medium-haul widebody routes. It maximizes passenger volume while retaining high composite fuel efficiency.",
  },
  {
    item: 18,
    model: "777-8X",
    manufacturer: "Boeing",
    price: 410200000,
    category: ["Widebody", "Long-haul"],
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/777X_Roll-Out_(40407373023)_(cropped).jpg?width=800",
    description:
      "An ultra-long-range widebody designed to connect virtually any two cities on Earth non-stop. It incorporates folding wingtips to fit standard airport gates.",
  },
  {
    item: 19,
    model: "777-9X",
    manufacturer: "Boeing",
    price: 442200000,
    category: ["Widebody", "Long-haul"],
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Boeing_777-9_front_view.jpg?width=800",
    description:
      "The world's largest twin-engine jetliner, featuring massive GE9X engines and a spacious cabin architecture. It serves as the flagship high-capacity long-haul aircraft for Boeing.",
  },
  {
    item: 21,
    model: "767-300F",
    manufacturer: "Boeing",
    price: 220300000,
    category: ["Cargo", "Freighter"],
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Boeing_767-300F_of_UPS_Airlines_at_Los_Angeles_International_Airport_(2).jpg?width=800",
    description:
      "A dependable medium-widebody freighter widely utilized by major global express package carriers. It can carry standard ULD containers across domestic and regional routes.",
  },
  {
    item: 22,
    model: "777F",
    manufacturer: "Boeing",
    price: 352300000,
    category: ["Cargo", "Freighter"],
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Boeing_777F_Fedex_(19218217653).jpg?width=800",
    description:
      "A long-range twin-engine freighter capable of hauling heavy cargo payloads across oceans. It combines exceptional fuel range with high-volume cargo capability.",
  },
  {
    item: 23,
    model: "777-8F",
    manufacturer: "Boeing",
    price: 410000000,
    category: ["Cargo", "Freighter"],
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Boeing_777X_at_Dubai_Airshow_2021.jpg?width=800",
    description:
      "An advanced next-generation cargo variant based on the 777X architecture. It provides superior payload capacity and lower operating trip costs than preceding freighters.",
  },
];
for (let i = 0; i < planes.length; i++) {
  console.log(planes[i]);
}

const discount_codes = [
  { code: "Hi", discount: 0.1 },
  { code: "WHALEN", discount: 0.25 },
  { code: "plen", discount: 0.25 },
];

let cart = [];
let total = 0;

function add_cart(thing) {
  for (let y = 0; i < planes.length; i++)
    if ((planes[i].item = thing)) {
      cart.push(planes[i].model, planes[i].item);
      total = total + planes[i].price;
    }
}

function subtract_cart(thing) {
  for (let y = 0; i < cart.length; i++)
    if ((cart[i].item = thing)) {
      cart.pop(cart[i]);
      total = total - planes[i].price;
    }
}

function apply_discount(code_input) {
  for (let i = 0; i < discount_codes.length; i++) {}
  if ((code_input = discount_codes[i].code)) {
    total = total * discount_codes[i].discount;
  }
}

function filter(filter_by) {
  const results = planes.filter((item) => item.category === filter_by);
}

function formatPrice(price) {
  if (price >= 1e9) {
    return "$" + (price / 1e9).toFixed(1) + "B";
  }
  if (price >= 1e6) {
    return "$" + (price / 1e6).toFixed(1) + "M";
  }
  if (price >= 1e3) {
    return "$" + (price / 1e3).toFixed(1) + "K";
  }
  return "$" + price.toLocaleString();
}

let addedAirbusId = false;
let addedBoeingId = false;

for (let i = 0; i < planes.length; i++) {
  let anchorId = "";

  if (planes[i].manufacturer === "Airbus" && !addedAirbusId) {
    anchorId = "airbus";
    addedAirbusId = true;
  } else if (planes[i].manufacturer === "Boeing" && !addedBoeingId) {
    anchorId = "boeing";
    addedBoeingId = true;
  }

  inject(planes[i], anchorId);
}

function inject(item, anchorId = "") {
  const container = document.querySelector(".container");
  const idAttr = anchorId ? ` id="${anchorId}"` : "";

  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card"${idAttr}>
      <h2 class="card-header">${item.model}</h2>
      <img src="${item.image}" alt="${item.model}" />
      <p class="desc">${item.description}</p>
      <button>
        <span>ADD TO CART</span>
      </button>
      <p class="price">${formatPrice(item.price)}</p>
    </div>`,
  );
}

for (let i = 0; i < planes.length; i++) {
  inject(planes[i], i);
}

btn.addEventListener("click", function () {
  x++;
  rgb();
});
