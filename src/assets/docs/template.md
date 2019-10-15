# Template for `.md` docs

## Markdown

* [Linting rules for markdown](https://github.com/DavidAnson/markdownlint/blob/v0.17.0/doc/Rules.md)
* enforce code style with this VS Code extension: [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
* Recommended AIO extension: [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

## Basics:

```markdown
## Title

### Subtitle

Text

* not sorted listing
1. sorted listing

[linkname](link)
![Alternate text](image.jpg/png)

**bold**
_italics_
```

Do not use `#` as the main title. Markdown-elements will be converted to JSX-elements in the render event of the docs component.
