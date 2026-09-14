# Contributing

Changes to the Semantic TextMate grammar should remain compatible with the canonical Semantic serializer/parser.

When changing syntax rules:

1. keep `.se` as the primary text format;
2. keep `.sp` compatible with the versioned `sp 1` envelope;
3. do not add `.spz` to TextMate `fileTypes` because it is binary-compressed;
4. add or update a representative fixture;
5. run `npm test`.

Grammar changes are provided under the MIT license.
