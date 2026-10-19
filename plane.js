const planes = [
  // --- NARROWBODY & REGIONAL ---
  {
    item: 1,
    model: "A220-100",
    manufacturer: "Airbus",
    price: 81000000,
    category: ["Regional", "Narrowbody"],
    image:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSKu6mQt4HBHZ-F_KvKu3TH2N2bDoMMQAUmOzMV6qWQirUjrm4Hdddm3BwgilgSZl32BV92_m4as-ddnFs",
  },
  {
    item: 2,
    model: "A220-300",
    manufacturer: "Airbus",
    price: 91500000,
    category: ["Regional", "Narrowbody"],
    image:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQPoM1PqC8-NuAymw5eW0gL2R_1NA5qLZpgRWSoIKxFGinVLJ_EbcZZ7JGpsEWFGQ49BV8mrMphG9ouezI",
  },
  {
    item: 3,
    model: "A319neo",
    manufacturer: "Airbus",
    price: 101500000,
    category: ["Narrowbody"],
    image:
      "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSS_-71mHXejrKofSA58RgR56B44VorgP3hY5Xefef5yuiyxEEX25uqIebe66D3V_5YCzfRkE05DCWtc5Q",
  },
  {
    item: 4,
    model: "A320neo",
    manufacturer: "Airbus",
    price: 110600000,
    category: ["Narrowbody"],
    image:
      "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSoFnORdgnWqVll7o4oeWSi50mKqEIMeb1Z159gxsHqPAPvOL8heKfqXYWyAzFfh_ZlDz4yZ6JrYJnugbc",
  },
  {
    item: 5,
    model: "A321neo",
    manufacturer: "Airbus",
    price: 129500000,
    category: ["Narrowbody"],
    image:
      "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRwVZh0sPJr3FMcS71Z2SJT9_887eUa58WP1uVSDGxkpzEjrFEkoTq7VO1k4LOVqXrHhcsoOITt3uo4HpY",
  },
  {
    item: 6,
    model: "A321XLR",
    manufacturer: "Airbus",
    price: 142000000,
    category: ["Narrowbody", "Long-haul"],
    image:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcR0Fu_xsIE3dpfj7gXsxtMCuDzVt1TT0usFj4a0KPWv2oFGg97fAZqeZv5FCumpkhRSWglDgtOXiY8kOk4",
  },
  {
    item: 7,
    model: "737 MAX 7",
    manufacturer: "Boeing",
    price: 99700000,
    category: ["Narrowbody"],
    image:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRz_wPc5c2813Qt-L9a5zPQ1NXfG9jyKYall9I7RfQkIUzRDPEdzxjYZ0JVmJDY4GJom803Jbur7jmU6J0",
  },
  {
    item: 8,
    model: "737 MAX 8",
    manufacturer: "Boeing",
    price: 121600000,
    category: ["Narrowbody"],
    image:
      "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSe52nOwm9cxd7PYXg4YOlh2oNCEUE3b73Ll2eU4p8_e73_C8ZYMJ9GxvGedWKZ25OPHGrV9NmTfgXGmBs",
  },
  {
    item: 9,
    model: "737 MAX 9",
    manufacturer: "Boeing",
    price: 128900000,
    category: ["Narrowbody"],
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRvqAxyrwx28wlNRJUrEpvr0g6T2trNOdLNQlD8THSCnWiHdKgn3nH-jstadmO_wWc8-h1ivN9mI0xG57Y",
  },
  {
    item: 10,
    model: "737 MAX 10",
    manufacturer: "Boeing",
    price: 134900000,
    category: ["Narrowbody"],
    image:
      "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSSBLAFwqYyTkgCK9Kb89ewS6G2q0sfsHSwGcgOxrlYXNw85E_-0FRD8Ok4mnvyIvBSIW80iJlZVBgo_2k",
  },

  // --- WIDEBODY & LONG-HAUL ---
  {
    item: 11,
    model: "A330-800neo",
    manufacturer: "Airbus",
    price: 259900000,
    category: ["Widebody", "Long-haul"],
    image:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQLCGyO_vI4mU0QpqXxGsPl8RD3k4RsKoDMnfLY219A8X8_iNGsnfOu93wEHtBw-AJ1veVC4zuGwbbT7Tg",
  },
  {
    item: 12,
    model: "A330-900neo",
    manufacturer: "Airbus",
    price: 296400000,
    category: ["Widebody", "Long-haul"],
    image:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcT-Xde1iRZeNc3fMKpvTwGNnaDjYFCFzyAdjKH32QwW7maN7IL37gLE_xly40S7l9h1SRFjzxPq9jz_qu0",
  },
  {
    item: 13,
    model: "A350-900",
    manufacturer: "Airbus",
    price: 317400000,
    category: ["Widebody", "Long-haul"],
    image:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSWz0qrHSkSMKkf3SVsVvagfSI81vQsJK9iRdD4W4NycSOGoeiE4wBKlFPWYlqNfcIFBI78hEewgrsTUmI",
  },
  {
    item: 14,
    model: "A350-1000",
    manufacturer: "Airbus",
    price: 366500000,
    category: ["Widebody", "Long-haul"],
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSA8iequxfpgcPFFdHSgm7Q8cAxboaFR0dZRSWJDCpSrsMxqzOeUpTociYkRTIlOA8geSiFnWX5LoQh6Iw",
  },
  {
    item: 15,
    model: "787-8 Dreamliner",
    manufacturer: "Boeing",
    price: 248300000,
    category: ["Widebody", "Long-haul"],
    image:
      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRUf9bzuC78Wgl6Zwo_BevHotg4O3DP4HwB9-EknwHP6hROMedMK0SxXom558yDfEuNWkn_KOzMlKPl4i4",
  },
  {
    item: 16,
    model: "787-9 Dreamliner",
    manufacturer: "Boeing",
    price: 292500000,
    category: ["Widebody", "Long-haul"],
    image:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQ-w-283tWj3HuDSPBdyL_3jInG060FlM3FDPSUseIhfQp71z0qEHnMXG07g5HeHOsh9V-OpWGoYgz6_w8",
  },
  {
    item: 17,
    model: "787-10 Dreamliner",
    manufacturer: "Boeing",
    price: 338400000,
    category: ["Widebody", "Long-haul"],
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSsA37uTEfjdvSMmg_1OvhFNJgFxn2o5KneUqnBEGwlPFxTc2-nCc8KEoEYTj0q2njmRmGq9NqfwXB4dBk",
  },
  {
    item: 18,
    model: "777-8X",
    manufacturer: "Boeing",
    price: 410200000,
    category: ["Widebody", "Long-haul"],
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSmSEXEeyq4UTVyWevYjSpw7V4h6WLdmSFNEVNG8hWl3fLJstOJ3fK13RByFKsykIFUaUp8jjRtXep0qXk",
  },
  {
    item: 19,
    model: "777-9X",
    manufacturer: "Boeing",
    price: 442200000,
    category: ["Widebody", "Long-haul"],
    image:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRFlTdNnJ0nINtPlu44Rj5vVzDR0kV6qfjkTTXIVnbHzYuEi4djUDvqmkAfKhwjRNGW7OW6GscfTO3Fa38",
  },

  // --- FREIGHTER & CARGO ---
  {
    item: 20,
    model: "A330-200F",
    manufacturer: "Airbus",
    price: 241700000,
    category: ["Cargo", "Freighter"],
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRFx1n4y8tuP2RIoInR93HSBJa5ivZAbo-bYN8650dYNs55FhHlGGOIKOyv29X3yVhuMFJCqUYmHx2Ctyg",
  },
  {
    item: 21,
    model: "767-300F",
    manufacturer: "Boeing",
    price: 220300000,
    category: ["Cargo", "Freighter"],
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSrHjkbwjRtomamR_yKvuXb-BqeSmnvEYlR0z6AG7AMGx5_RUkBvIsLTAMoC5saRmhzCMJMlkcnIU8RlRU",
  },
  {
    item: 22,
    model: "777F",
    manufacturer: "Boeing",
    price: 352300000,
    category: ["Cargo", "Freighter"],
    image:
      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRU1s5MNv6vSUN7XoahuDCHtHz8GQUzk0n81Uljk5up_fGM_n-N45_3rhKqxTMgA8RcgiAFELA1JWRb6yg",
  },
  {
    item: 23,
    model: "777-8F",
    manufacturer: "Boeing",
    price: 410000000,
    category: ["Cargo", "Freighter"],
    image:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRqwnsei7fyWrdwl5TTRFm-HFP6DEb4SgBVESCu5UKoutV6n87k6fLAvOrF6mVYEaB_CA3AXs_TOQWQDuA",
  },
];

for (let i = 0; i < planes.length; i++) {
  console.log(planes[i]);
}

function add(thing) {
  let cart = [];
  for (let y = 0; i < planes.length; i++)
    if ((planes[i].item = thing)) {
      cart.push(plane[i].model);
    }
}

const gridContainer = document.getElementById("plane-grid");
let inquiryCounter = 0;

function renderPlanes(planeArray) {
  // Clear existing items in grid
  gridContainer.innerHTML = "";

  // If search/filter returns empty
  if (planeArray.length === 0) {
    gridContainer.innerHTML = `<p style="grid-column: 1/-1; color: var(--text-muted); text-align: center; padding: 3rem;">NO AIRCRAFT FOUND MATCHING YOUR CRITERIA.</p>`;
    return;
  }

  // Iterate over planes and append card markup
  planeArray.forEach((plane) => {
    const card = document.createElement("div");
    card.classList.add("plane-card");

    // Format categories into pill badges
    const categoryBadges = plane.category
      .map((cat) => `<span class="badge">${cat}</span>`)
      .join(" ");

    // Format pricing to currency string
    const formattedPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(plane.price);

    card.innerHTML = `
      <div class="image-container">
        <img src="${plane.image}" alt="${plane.manufacturer} ${plane.model}" loading="lazy" />
      </div>
      <div class="plane-info">
        <div class="card-header-meta">
          <span>${plane.manufacturer}</span>
          <span>REF #${String(plane.item).padStart(2, "0")}</span>
        </div>
        <h3>${plane.model}</h3>
        <p class="price">${formattedPrice}</p>
        <div class="categories">${categoryBadges}</div>
        <button class="inquire-btn" onclick="handleInquiry('${plane.model}')">REQUEST SPECIFICATIONS</button>
      </div>
    `;

    gridContainer.appendChild(card);
  });
}

/* ==========================================================================
   3. INTERACTIVE CONTROLS: Filtering & Searching Logic
   ========================================================================== */
const searchInput = document.getElementById("search-input");
const manufacturerFilter = document.getElementById("manufacturer-filter");

function filterData() {
  const query = searchInput.value.toLowerCase();
  const selectedManufacturer = manufacturerFilter.value;

  const filtered = planes.filter((plane) => {
    const matchesSearch =
      plane.model.toLowerCase().includes(query) ||
      plane.manufacturer.toLowerCase().includes(query);

    const matchesManufacturer =
      selectedManufacturer === "all" ||
      plane.manufacturer === selectedManufacturer;

    return matchesSearch && matchesManufacturer;
  });

  renderPlanes(filtered);
}

// Attach Event Listeners
searchInput.addEventListener("input", filterData);
manufacturerFilter.addEventListener("change", filterData);

// Inquiry Counter Button Handler
function handleInquiry(modelName) {
  inquiryCounter++;
  document.getElementById("inquiry-count").innerText = inquiryCounter;
  alert(
    `Inquiry added for ${modelName}. Total active inquiries: ${inquiryCounter}`,
  );
}

/* Initial Render on Page Load */
renderPlanes(planes);
