# Semantic TextMate Grammar

Official TextMate-compatible syntax grammar and GitHub Linguist preparation for the **Semantic Programming Language**.

## Formats

| Extension | Role | Text/Binary | Highlighting |
|---|---|---|---|
| `.se` | Primary Semantic source/transport format | UTF-8 text | Yes |
| `.sp` | Legacy/alternative readable Semantic transport | UTF-8 text | Yes |
| `.spz` | Lossless block-compressed Semantic transport | Binary | No |

`.se` is the primary extension. `.sp` remains wire-compatible with the readable Semantic envelope. `.spz` is an official Semantic format, but it is a compressed binary envelope and therefore is intentionally not listed in the TextMate grammar `fileTypes`.

The canonical text envelope starts with either:

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
- native semantic sections such as `types`, `scopes`, `nodes`, and `relations`
- quoted strings and escapes
- numbers, booleans, and `null`
- semantic references such as `%12` and `@3`
- relation arrows (`->`)
- compact and readable field assignments

## GitHub Linguist

Preparation material is under [`linguist/`](linguist/).

The recommended Linguist submission requests:

- `.se` as the primary extension
- `.sp` as a secondary extension shared with SourcePawn, with a content heuristic
- `.spz` documented as an official Semantic binary transport, but **not** registered as a source-code extension because GitHub Linguist classifies text source and `.spz` is compressed binary data

If maintainers explicitly agree to index `.spz` as an extension, `linguist/languages-with-spz.yml` contains the requested all-format variant.

## Source of syntax truth

The grammar is based on the canonical Semantic serializer/parser:

- Semantic Programming Language main repository
- Code Transpiler `internal/backend/semantic_sp.go`
- `docs/SP_LANGUAGE.md`
- `docs/SFPC.md`

## License

MIT.
