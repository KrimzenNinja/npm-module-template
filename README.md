# npm-module-template

Template project for building [KrimzenNinja](https://github.com/KrimzenNinja/) npm modules

![NPM](https://nodei.co/npm/npm-module-template.png)

![CircleCi](https://circleci.com/gh/KrimzenNinja/npm-module-template.svg?style=shield)

![Known Vulnerabilities](https://snyk.io/test/npm/npm-module-template/badge.svg)

[![codecov](https://codecov.io/gh/KrimzenNinja/npm-module-template/branch/master/graph/badge.svg)](https://codecov.io/gh/KrimzenNinja/npm-module-template)

## Prerequisites

Install [Chandler](https://github.com/mattbrictson/chandler) to sync your `CHANGELOG.md` entries to GitHub

## Getting Started

Delete this from the readme once you have setup your project.

1.  Copy this template.
2.  In the `package.json` file update the following fields:
    1.  `name`
    2.  `description`
    3.  `repository.url`
    4.  `keywords`
    5.  `bugs.url`
    6.  `homepage`
    7.  `license` if private then `UNLICENSED`
3.  In the `CHANGELOG.md` file, update the path to `unreleased`.
4.  Replace the `README.md` file.
5.  Make sure the included `LICENSE` file is appropriate. if private then delete the file.
6.  In the `.circleci/config.yml` file:
    1.  Update the `working_directory` field.
    2.  If this is a private package then after `npm publish .` add `--access restricted`
7.  Add the project to CircleCi if it is not picked up automatically
8.  Add the `$NPM_TOKEN` environment variable

## API

[See details](https://github.com/KrimzenNinja/npm-module-template/blob/master/API.md)

# How to publish to NPM

You can either do releases from the master branch or follow the LTS model and branch off when you do a release.

1. Ensure you are on the branch you want to publish from.
1. Decide based on what is going into the release how the version number is going to change, see [Semantic Versioning](http://semver.org/) for more info.
1. The `CHANGELOG.md` file should have pending changes documented in the `Unreleased` section, create a new heading for this version and cut the relevant changes and paste them into the new section.
1. Commit the changes to the `CHANGELOG.md` file.
1. Run one of the prebuilt publish commands that matches your `semver` `patch`, `minor`, `major`
	> `npm run patch -m "A message that makes sense"`
	If none of the prebuilt ones fit, you can use `npm version [major | minor | patch | premajor | preminor | prepatch | prerelease] -m "A message that makes sense"`
1. If you didn't publish from master, make sure to merge back into master if you were fixing a bug or the changes released need to go back to master.

## Snyk dependency checking

You can either add your project via the [web dashboard](https://snyk.io/) or via the cli by installing the lib `npm i -g snyk` and then running the setup `snyk wizzard`.

## License

MIT © [Ryan Kotzen](https://github.com/eXigentCoder)
