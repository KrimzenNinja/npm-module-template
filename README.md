# npm-module-template

Template project for building [KrimzenNinja](https://github.com/KrimzenNinja/) npm modules


## Process

1. Copy this template.
1. In the `package.json` file update the following fields: 
	1. `name`
	1. `description`
	1. `repository.url`
	1. `keywords`
	1. `bugs.url`
	1. `homepage`
	1. `license` if private then `UNLICENSED`
1. In the `CHANGELOG.md` file, update the path to `unreleased`.
1. Replace the `README.md` file.
1. Make sure the included `LICENSE` file is appropriate. if private then delete the file.
1. In the `.circleci/config.yml` file:
	1. Update the `working_directory` field.
	1. If this is a private package then after `npm publish .` add `--access restricted`
    
## TODO

Make a Yeoman generator to do all the steps.