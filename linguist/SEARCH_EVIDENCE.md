# GitHub Linguist usage evidence

GitHub Linguist currently requires widespread public usage for new language extensions.

Before opening the upstream PR, record the current result counts and representative independent repositories for:

```text
NOT is:fork path:*.se
```

For the shared `.sp` extension, use a Semantic-specific query as well:

```text
NOT is:fork path:*.sp "sp 1" "program {"
```

## Important

The language owner's own repositories may be discounted by Linguist maintainers when they assess distribution. Record the evidence truthfully.

## `.spz`

`.spz` is an official Semantic Programming Language format, but it is an `SPZ2` binary block-compressed envelope around Semantic text. Binary files are not suitable TextMate samples and are not expected to be useful to GitHub's source-code index. For that reason the recommended Linguist entry omits `.spz` while the repository still documents it as an official format.
