# Add Semantic Programming Language

This change adds support for the **Semantic Programming Language** to GitHub Linguist.

## Language

- Name: Semantic
- Full name: Semantic Programming Language
- Primary extension: `.se`
- TextMate scope: `source.semantic`
- Color: `#FE8E28`
- Grammar: https://github.com/SemanticProgrammingLanguage/Semantic-TextMate-Grammar

The TextMate grammar also understands the readable `.sp` transport form, but the initial Linguist contribution intentionally registers only `.se` because `.sp` is already owned by SourcePawn. The compressed `.spz` transport is binary and is not a text-language extension.

## Format evidence

`.se` documents use a versioned envelope such as:

```text
se 1
program {
    schema = 1
}
```

## Sample source and license

The Linguist patch uses the real project file `src/semantic-se/doc.se` from:

- https://github.com/tarekwasfy01/Semantic-Programming-Language
- Source file: https://github.com/tarekwasfy01/Semantic-Programming-Language/blob/main/src/semantic-se/doc.se
- License: MIT, copyright (c) 2026 Tarek Wasfy
- License file: https://github.com/tarekwasfy01/Semantic-Programming-Language/blob/main/LICENSE

The sample is copied into Linguist as `samples/Semantic/compiler-doc.se`; it is not a synthetic hello-world/tutorial fixture created for the Linguist submission.

## Usage evidence

A repository-tree count of the currently listed public Semantic repositories found **4,181 `.se` files** across six repositories:

| Repository | `.se` files |
| --- | ---: |
| SemanticProgrammingLanguage/Semantic-Gio-UI | 217 |
| SemanticProgrammingLanguage/Semantic-Tkinter | 7 |
| SemanticProgrammingLanguage/Semantic-Numpy | 3,413 |
| SemanticProgrammingLanguage/Semantic-Go-Webview2 | 40 |
| SemanticProgrammingLanguage/Semantic-Chroma-Synthax-Highliting-Module | 78 |
| tarekwasfy01/Semantic-Programming-Language | 426 |
| **Total** | **4,181** |

This is evidence of files physically present on the repositories' default branches, not a claim that all 4,181 files are currently indexed by GitHub Code Search. Before opening the upstream PR, add the current GitHub Code Search result evidence required by Linguist and describe the indexed count truthfully.

`.sp` support can be proposed separately later with real-world samples for both Semantic and SourcePawn plus a strict disambiguation heuristic if the usage evidence justifies it.
