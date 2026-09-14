import fs from "node:fs";

const grammarPath = new URL("../syntaxes/semantic.tmLanguage.json", import.meta.url);
const grammar = JSON.parse(fs.readFileSync(grammarPath, "utf8"));

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

assert(grammar.name === "Semantic", "grammar name must be Semantic");
assert(grammar.scopeName === "source.semantic", "scopeName must be source.semantic");
assert(Array.isArray(grammar.fileTypes), "fileTypes must be an array");
assert(grammar.fileTypes[0] === "se", ".se must be the primary TextMate file type");
assert(grammar.fileTypes.includes("sp"), ".sp must be highlighted");
assert(!grammar.fileTypes.includes("spz"), ".spz is binary and must not be TextMate-highlighted");
assert(grammar.repository?.header, "header rule missing");
assert(grammar.repository?.strings, "string rule missing");
assert(grammar.repository?.comments, "comment rule missing");
assert(grammar.repository?.references, "reference rule missing");

const header = new RegExp(grammar.repository.header.patterns[0].match);
assert(header.test("se 1"), "se header must match");
assert(header.test("sp 1"), "sp header must match");

console.log("Semantic TextMate grammar metadata validation passed.");
