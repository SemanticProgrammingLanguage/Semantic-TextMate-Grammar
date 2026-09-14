# Add Semantic Programming Language

This change adds support for the **Semantic Programming Language** to GitHub Linguist.

## Language

- Name: Semantic
- Full name: Semantic Programming Language
- Primary extension: `.se`
- Additional readable extension: `.sp`
- Official compressed transport: `.spz` (binary; documented but not included in the recommended text-language extension entry)
- TextMate scope: `source.semantic`
- Grammar: https://github.com/SemanticProgrammingLanguage/Semantic-TextMate-Grammar
- Reference implementation: https://github.com/tarekwasfy01/Code-Transpiler
- Language repository: https://github.com/tarekwasfy01/Semantic-Programming-Language

## `.sp` collision

`.sp` is already used by SourcePawn. This PR therefore includes a strict content heuristic that recognizes Semantic only when the file begins with the versioned `sp 1` header followed by `program {`; all other `.sp` files fall back to SourcePawn.
