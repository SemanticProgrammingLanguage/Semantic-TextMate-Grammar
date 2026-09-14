import fs from "node:fs";
const grammar = JSON.parse(fs.readFileSync(new URL("../syntaxes/semantic.tmLanguage.json", import.meta.url), "utf8"));
function assert(c,m){if(!c)throw new Error(m)}
assert(grammar.name === "Semantic", "grammar name must be Semantic");
assert(grammar.scopeName === "source.semantic", "scopeName must be source.semantic");
assert(grammar.fileTypes[0] === "se", ".se must be primary");
assert(grammar.fileTypes.includes("sp"), ".sp must be highlighted");
assert(!grammar.fileTypes.includes("spz"), ".spz is binary");
console.log("Semantic TextMate grammar metadata validation passed.");
