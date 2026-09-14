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

## Samples

The grammar repository contains representative Semantic syntax fixtures. For the upstream Linguist pull request, the files under `samples/Semantic/` in the Linguist repository should be replaced or supplemented with real-world, independently published Semantic source examples whose source and license can be documented.

## Usage evidence

Before submitting upstream, add current GitHub code-search evidence for `.se` usage and verify that it satisfies Linguist's current popularity requirements. Do not inflate usage with generated repositories or artificial sample repositories.

`.sp` support can be proposed separately later with real-world samples for both Semantic and SourcePawn plus a strict disambiguation heuristic if the usage evidence justifies it.
