// Day 02 — String Manipulation Toolkit
// Practice: slice, split, join, replace, replaceAll, trim, includes,
//           startsWith, endsWith, padStart, padEnd, repeat, template literals

const output = document.getElementById("output");

function show(label, value) {
  const div = document.createElement("div");
  div.className = "result";
  div.innerHTML = `<span class="label">${label}:</span> ${JSON.stringify(value)}`;
  output.appendChild(div);
}

function title(text) {
  const div = document.createElement("div");
  div.className = "section-title";
  div.textContent = text;
  output.appendChild(div);
}


// ─── 1. BASICS ───────────────────────────────────────────────
title("1. Basics");

const sentence = "  Hello, JavaScript World!  ";

show("original", sentence);
show("trim — remove whitespace", sentence.trim());
show("toLowerCase", sentence.trim().toLowerCase());
show("toUpperCase", sentence.trim().toUpperCase());
show("length", sentence.trim().length);
show("length", sentence.length);


// ─── 2. SLICE & SUBSTRING ────────────────────────────────────
title("2. Slice & substring");

const str = "JavaScript";

show("slice(0, 4) — first 4 chars", str.slice(0, 4));
show("slice(-6) — last 6 chars", str.slice(-6));
show("substring(0, 4)", str.substring(0, 4));


// ─── 3. SPLIT & JOIN ─────────────────────────────────────────
title("3. Split & join");

const csv = "apple,banana,mango,grape";
const words = csv.split(",");

show("split(',') — string to array", words);
show("join(' | ') — array to string", words.join(" | "));
show("join(' , ') — array to string", words.join(" , "));
show("join('') — no separator", words.join(""));


// ─── 4. REPLACE ──────────────────────────────────────────────
title("4. Replace");

const msg = "I love cats. Cats are great. My cat is named Whiskers.";

show("replace — first match only", msg.replace("cat", "dog"));
show("replaceAll — every match (case sensitive)", msg.replaceAll("cat", "dog"));
show("replace with regex (case insensitive)", msg.replace(/cat/gi, "dog"));


// ─── 5. SEARCH & CHECK ───────────────────────────────────────
title("5. Search & check");

const email = "user@example.com";

show("includes('@')", email.includes("@"));
show("startsWith('user')", email.startsWith("user"));
show("endsWith('.com')", email.endsWith(".com"));
show("indexOf('@')", email.indexOf("@"));


// ─── 6. PADDING & REPEAT ─────────────────────────────────────
title("6. Padding & repeat");

const num = "42";
const hr = "-";

show("padStart(6, '0') — e.g. for IDs", num.padStart(6, "0"));
show("padEnd(6, '0')", num.padEnd(6, "0"));
show("repeat(10) — divider line", hr.repeat(10));


// ─── 7. TEMPLATE LITERALS ────────────────────────────────────
title("7. Template literals");

const user = { name: "Ada", age: 28, city: "Lagos" };

const greeting = `Hi, my name is ${user.name}. I am ${user.age} years old and I live in ${user.city}.`;
const shouted  = `${user.name.toUpperCase()} IS ${user.age > 18 ? "an adult" : "a minor"}!`;

show("basic template literal", greeting);
show("expression inside template", shouted);


// ─── 8. REAL-WORLD UTILS ─────────────────────────────────────
title("8. Real-world string utils");

// Capitalize first letter of each word (title case)
function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Truncate long text with ellipsis
function truncate(str, maxLength) {
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
}

// Count how many times a word appears
function countWord(str, word) {
  return str.toLowerCase().split(word.toLowerCase()).length - 1;
}

// Simple slug generator (for URLs)
function slugify(str) {
  return str.toLowerCase().trim().replaceAll(" ", "-").replace(/[^a-z0-9-]/g, "");
}

show("toTitleCase('hello world from js')", toTitleCase("hello world from js"));
show("truncate at 20 chars", truncate("JavaScript is awesome and fun to learn", 20));
show("countWord('cat') in msg", countWord(msg, "cat"));
show("slugify('Hello World! 2025')", slugify("Hello World! 2025"));


// ─── YOUR CHALLENGES ─────────────────────────────────────────
// Try these yourself:
//
// 1. Write a function isPalindrome(str) that returns true if a
//    string reads the same forwards and backwards.
//    e.g. isPalindrome("racecar") → true
//         isPalindrome("hello")   → false
//    hint: reverse a string by doing str.split("").reverse().join("")
//
// 2. Write a function maskEmail(email) that hides part of an email.
//    e.g. maskEmail("user@example.com") → "us**@example.com"
//    hint: use split("@"), then slice + padEnd or repeat("*") on the username part
//
// 3. Write a function wordCount(str) that returns an object with
//    the count of each word in a sentence.
//    e.g. wordCount("the cat sat on the mat")
//         → { the: 2, cat: 1, sat: 1, on: 1, mat: 1 }
//    hint: split by space, then use reduce like Day 01's category count

// number 1
const string1 = "racecar";
function isPalindrome(string1) {
  const reversed = string1.split("").reverse().join("");
  return string1 === reversed;
}

//number 2
const email1 = "saubanadesope@gmail.com"
function maskEmail(email1) {
  const [username, domain] = email1.split("@");  // → ["saubanadesope", "gmail.com"]
  const masked = username.slice(0, 2) + "*".repeat(username.length - 2); // → "sa************"
  return masked + "@" + domain;  // → "sa************@gmail.com"
}

//number 3
const string = ("the cat sat on the mat")
function wordCount(string) {
    const words = string.split(" ");
    const wordCounts = words.reduce((counts, word) => {
        counts[word] = (counts[word] || 0) + 1
        return counts
    }, {})
    return wordCounts;
} // → { the: 2, cat: 1, sat: 1, on: 1, mat: 1 }
