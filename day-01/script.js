// Day 01 — Array Methods Deep Dive
// Practice: map, filter, reduce, find, some, every, forEach, flat, sort

const products = [
  { name: "Laptop",  price: 999,  category: "electronics", inStock: true  },
  { name: "Shirt",   price: 29,   category: "clothing",     inStock: true  },
  { name: "Phone",   price: 699,  category: "electronics", inStock: false },
  { name: "Shoes",   price: 89,   category: "clothing",     inStock: true  },
  { name: "Tablet",  price: 499,  category: "electronics", inStock: true  },
  { name: "Hat",     price: 19,   category: "clothing",     inStock: false },
];

// --- map: get all product names ---
const names = products.map(p => p.name);

// --- filter: only in-stock electronics ---
const availableElectronics = products.filter(p => p.category === "electronics" && p.inStock);

// --- reduce: total value of all in-stock products ---
const totalValue = products
  .filter(p => p.inStock)
  .reduce((sum, p) => sum + p.price, 0);

// --- find: first product under $50 ---
const cheapItem = products.find(p => p.price < 50);

// --- some / every ---
const anyOutOfStock = products.some(p => !p.inStock);
const allHavePrices = products.every(p => p.price > 0);

// --- sort: by price ascending ---
const byPrice = [...products].sort((a, b) => a.price - b.price);

// --- flat: flatten a nested array ---
const nested = [[1, 2], [3, 4], [5, [6, 7]]];
const flatOnce = nested.flat();
const flatAll  = nested.flat(Infinity);

// 1. Use reduce to count how many items are in each category
const categoryCounts = products.reduce((counts, p) => {
  counts[p.category] = (counts[p.category] || 0) + 1
  return counts
}, {})

// → { electronics: 3, clothing: 3 }

// 2. Use map + filter (or flatMap) to get names of out-of-stock items in uppercase
const outofstock = products.filter(p => !p.inStock).map(p => p.name.toUpperCase())

// 3. Sort products by name alphabetically
const names2 = [...products].sort((a,b) => a.name.localeCompare(b.name)).map(p => p.name)




// --- Display results in the page ---
const output = document.getElementById("output");

function show(label, value) {
  const div = document.createElement("div");
  div.className = "result";
  div.innerHTML = `<span class="label">${label}:</span> ${JSON.stringify(value)}`;
  output.appendChild(div);
}

show("map — all names", names);
show("filter — in-stock electronics", availableElectronics.map(p => p.name));
show("reduce — total in-stock value", "$" + totalValue);
show("find — first item under $50", cheapItem?.name);
show("some — any out of stock?", anyOutOfStock);
show("every — all have prices?", allHavePrices);
show("sort — names by price asc", byPrice.map(p => `${p.name} ($${p.price})`));
show("flat(1) — one level deep", flatOnce);
show("flat(Infinity) — fully flat", flatAll);
show("classwork2 - outofstock-items", outofstock)
show("classwork3 - names alphabetically", names2)
show("classwork1 - electronic counts", categoryCounts)

// --- YOUR CHALLENGE ---
// Try adding these yourself:
// 1. Use reduce to count how many items are in each category
// 2. Use map + filter (or flatMap) to get names of out-of-stock items in uppercase
// 3. Sort products by name alphabetically
