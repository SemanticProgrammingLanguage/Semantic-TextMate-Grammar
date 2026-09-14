# Semantic Programming Language — TextMate Grammar

This repository contains the canonical TextMate grammar and editor metadata for the **Semantic Programming Language**.

## File extensions

- `.se` — primary, human-readable Semantic source format
- `.sp` — additional human-readable transport/source format
- `.spz` — compressed binary Semantic format; intentionally not registered in the TextMate grammar because it is not text

## Contents

- `syntaxes/semantic.tmLanguage.json` — TextMate grammar (`source.semantic`)
- `language-configuration.json` — editor language configuration
- `samples/` — representative source samples
- `tests/` — lightweight grammar/metadata validation
- `linguist/` — proposed GitHub Linguist metadata and submission notes

## Validation

```bash
npm test
```

The validation checks the package metadata, TextMate grammar shape, sample coverage, and Linguist proposal consistency.

## GitHub Linguist

The proposed language entry lives in `linguist/languages.yml`. Submission guidance and supporting notes are in the same directory.

For Linguist, `.se` is the primary extension and `.sp` is an additional text extension. `.spz` is a binary compressed format and should not be treated as source text.

## License

MIT — see `LICENSE`.
