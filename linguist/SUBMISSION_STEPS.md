# Upstream Linguist submission steps

1. Fork `github-linguist/linguist`.
2. Add the Semantic entry from `linguist/languages.yml` to `lib/linguist/languages.yml`.
3. From the Linguist checkout, import this grammar:
   ```bash
   script/add-grammar https://github.com/SemanticProgrammingLanguage/Semantic-TextMate-Grammar
   ```
4. Add representative files under `samples/Semantic/`.
5. Because `.sp` is shared with SourcePawn, ensure Linguist has at least two `.sp` samples for each affected language and add the proposed `.sp` heuristic.
6. Run:
   ```bash
   script/update-ids
   bundle exec rake test
   bundle exec script/cross-validation --test
   ```
7. Open the PR using Linguist's current PR template.
8. Include current GitHub search evidence and sample licensing.
9. If reviewers reject `.sp` initially, submit `.se` alone rather than weakening the `.sp` heuristic.
10. Treat `.spz` as an official binary Semantic transport unless Linguist maintainers explicitly request it as an extension.
