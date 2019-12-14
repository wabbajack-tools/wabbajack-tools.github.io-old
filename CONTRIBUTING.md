# Contributing

## Cloning and working with the repository

This repository is split in two: You have the `master` branch which is being pushed to by the node module `gh-pages`.
The actual code and development takes place on the `code` branch.

### Requirements

1. [Node](https://nodejs.org/en/) (recommend version 8.16.x)
2. [Yarn](https://yarnpkg.com/lang/en/)
3. [VS Code](https://code.visualstudio.com)
4. [Redux DevTools](https://extension.remotedev.io/)

### Installing

1. Fork the repository
2. Clone the forked repository `git clone https://github.com/your-name/wabbajack-tools.github.io.git`
3. Switch to the code branch `git checkout code`
4. Download all node modules `yarn install`
5. Create a new branch `git branch some-name`
6. Start your development server `npm start`

### Keeping your fork updated

1. Add this repository as a new remote `git remote add upstream https://github.com/wabbajack-tools/wabbajack-tools.github.io.git`
2. Make sure to be on the `code` branch `git checkout code`
3. Fetch the changes `git fetch upstream`
4. Rebase `git rebase upstream/code` **DO NOT REBASE FROM `upstream/master`**
5. If your other branch needs updating `git checkout branch-name && git rebase code`
