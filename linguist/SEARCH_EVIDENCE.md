# GitHub Linguist usage evidence

GitHub Linguist currently requires widespread public usage for new language extensions.

Before opening the upstream PR, record the current result counts and representative repositories for:

```text
NOT is:fork path:*.se
```

<!-- VERIFIED-SE-COUNT-START -->
## Verified repository-tree count of `.se` files

The following count was produced from the current `main`/default branches by cloning the public repositories and counting working-tree files whose names end in `.se`. File size is intentionally irrelevant to this repository-tree count.

| Repository | `.se` files |
| --- | ---: |
| [SemanticProgrammingLanguage/Semantic-Gio-UI](https://github.com/SemanticProgrammingLanguage/Semantic-Gio-UI) | 217 |
| [SemanticProgrammingLanguage/Semantic-Tkinter](https://github.com/SemanticProgrammingLanguage/Semantic-Tkinter) | 7 |
| [SemanticProgrammingLanguage/Semantic-Numpy](https://github.com/SemanticProgrammingLanguage/Semantic-Numpy) | 3413 |
| [SemanticProgrammingLanguage/Semantic-Go-Webview2](https://github.com/SemanticProgrammingLanguage/Semantic-Go-Webview2) | 40 |
| [SemanticProgrammingLanguage/Semantic-Chroma-Synthax-Highliting-Module](https://github.com/SemanticProgrammingLanguage/Semantic-Chroma-Synthax-Highliting-Module) | 78 |
| [tarekwasfy01/Semantic-Programming-Language](https://github.com/tarekwasfy01/Semantic-Programming-Language) | 426 |
| **Total** | **4181** |

This is a count of `.se` files physically present in the listed public repository working trees. It must not be presented as GitHub Code Search's indexed-file count; GitHub's search index may lag or omit large files.
<!-- VERIFIED-SE-COUNT-END -->

## Known public Semantic repositories

The following public repositories are known Semantic projects/modules and should be included as concrete usage evidence when preparing the upstream Linguist pull request:

- https://github.com/SemanticProgrammingLanguage/Semantic-Gio-UI
- https://github.com/SemanticProgrammingLanguage/Semantic-Tkinter
- https://github.com/SemanticProgrammingLanguage/Semantic-Numpy
- https://github.com/SemanticProgrammingLanguage/Semantic-Go-Webview2
- https://github.com/tarekwasfy01/Semantic-Programming-Language

Additional Semantic GUI projects are expected to be published from another account. Add those repositories here once they are public and indexed by GitHub.

These repositories are evidence candidates, not a claimed indexed-file count. Before submitting upstream, verify the current GitHub code-search result count for `.se`, confirm that representative `.se` files are genuine Semantic source files, and record the search evidence truthfully. Repository size alone is not evidence of the number of indexed `.se` files.

The `SemanticProgrammingLanguage` repositories are maintained by the language owner. Linguist maintainers may discount owner-controlled repositories when assessing distribution, so evidence from other accounts/repositories is particularly useful. `tarekwasfy01/Semantic-Programming-Language` provides an additional public repository under a separate account, but no claim of independence should be made unless that can be established truthfully.

For the shared `.sp` extension, use a Semantic-specific query as well:

```text
NOT is:fork path:*.sp "sp 1" "program {"
```

The initial Linguist proposal should still use `.se` only. `.sp` collides with SourcePawn and should only be proposed later if sufficient real-world evidence and a reliable heuristic support it.

## Important

Do not inflate usage with generated repositories or duplicated files created for the purpose of satisfying Linguist's threshold. Record actual indexed usage and representative real projects.

## `.spz`

`.spz` is an official Semantic Programming Language format, but it is an `SPZ2` binary block-compressed envelope around Semantic text. Binary files are not suitable TextMate samples and are not expected to be useful to GitHub's source-code index. For that reason the recommended Linguist entry omits `.spz` while the repository still documents it as an official format.
