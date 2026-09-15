# Semantic Programming Language for VS Code

Official Visual Studio Code language support and TextMate-compatible syntax grammar for the **Semantic Programming Language**.

## VS Code support

The extension registers Semantic as a language in Visual Studio Code and associates these official formats:

| Extension | Role | Text/Binary | Syntax highlighting |
|---|---|---|---|
| `.se` | Primary Semantic source/transport format | UTF-8 text | Yes |
| `.sp` | Legacy/alternative readable Semantic transport | UTF-8 text | Yes |
| `.spz` | Lossless block-compressed Semantic transport | Binary | No |

`.spz` is registered with VS Code so files are associated with the Semantic language. Because `.spz` contains compressed binary data, the TextMate grammar intentionally does not attempt to tokenize its contents.

## Features

- Semantic language registration in VS Code
- `.se`, `.sp`, and `.spz` file association
- TextMate syntax highlighting for `.se` and `.sp`
- `#` line comments
- bracket and quote auto-closing
- bracket and quote surrounding pairs
- highlighting for Semantic headers, sections, references, constants, numbers, field keys, and operators

The canonical readable envelope starts with either:

```text
se 1
program {
    schema = 1
}
```

or:

```text
sp 1
program {
    schema = 1
}
```

## TextMate scope

```text
source.semantic
```

The grammar supports:

- `#` comments
- `se 1` / `sp 1` headers
- `program`, `object`, `list`, `ranges`
- native Semantic sections such as `types`, `scopes`, `nodes`, and `relations`
- quoted strings and escapes
- numbers, booleans, `null`, and `unknown`
- Semantic references such as `%12` and `@3`
- relation arrows (`->`)
- compact and readable field assignments

## Development

Run the metadata/grammar validation with:

```bash
npm test
```

To test the extension locally in VS Code, open this repository in VS Code and press `F5` to launch an Extension Development Host.

To create a VSIX package, install Microsoft's VS Code extension packaging tool and run:

```bash
npx @vscode/vsce package
```

## GitHub Linguist

Preparation material is under [`linguist/`](linguist/).

The recommended Linguist submission requests:

- `.se` as the primary extension
- `.sp` as a secondary extension shared with SourcePawn, with a content heuristic
- `.spz` documented as an official Semantic binary transport, but not registered as a source-code extension because GitHub Linguist classifies text source and `.spz` is compressed binary data

If maintainers explicitly agree to index `.spz` as an extension, `linguist/languages-with-spz.yml` contains the requested all-format variant.

## Source of syntax truth

The grammar is based on the canonical Semantic serializer/parser:

- Semantic Programming Language main repository
- Code Transpiler `internal/backend/semantic_sp.go`
- `docs/SP_LANGUAGE.md`
- `docs/SFPC.md`

## License

MIT.
