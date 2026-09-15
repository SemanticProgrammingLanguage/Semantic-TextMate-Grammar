import fs from "node:fs";

const grammarPath = new URL("../syntaxes/semantic.tmLanguage.json", import.meta.url);
const packagePath = new URL("../package.json", import.meta.url);
const grammar = JSON.parse(fs.readFileSync(grammarPath, "utf8"));
const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));

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

const language = pkg.contributes?.languages?.find((entry) => entry.id === "semantic");
assert(language, "VS Code Semantic language contribution missing");
assert(language.extensions?.includes(".se"), "VS Code must register .se");
assert(language.extensions?.includes(".sp"), "VS Code must register .sp");
assert(language.extensions?.includes(".spz"), "VS Code must register .spz");

const vscodeGrammar = pkg.contributes?.grammars?.find((entry) => entry.language === "semantic");
assert(vscodeGrammar?.scopeName === "source.semantic", "VS Code grammar scope must be source.semantic");
assert(vscodeGrammar?.path === "./syntaxes/semantic.tmLanguage.json", "VS Code grammar path is invalid");

const header = new RegExp(grammar.repository.header.patterns[0].match);
assert(header.test("se 1"), "se header must match");
assert(header.test("sp 1"), "sp header must match");

console.log("Semantic VS Code extension and TextMate grammar validation passed.");
