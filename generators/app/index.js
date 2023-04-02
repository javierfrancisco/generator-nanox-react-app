const Generator = require('yeoman-generator');
const config = require('./config');

/* 
Yeoman Generator class
initializing - Your initialization methods (checking current project state, getting configs, etc)
prompting - Where you prompt users for options (where you’d call this.prompt())
configuring - Saving configurations and configure the project (creating .editorconfig files and other metadata files)
default - If the method name doesn’t match a priority, it will be pushed to this group.
writing - Where you write the generator specific files (routes, controllers, etc)
conflicts - Where conflicts are handled (used internally)
install - Where installations are run (npm, bower)
end - Called last, cleanup, say good bye, etc
*/
module.exports = class extends Generator {

    constructor(args, opts) {
        // Invoking the super constructor is important 
        // so the generator is correctly set up
        super(args, opts);
    }

    async prompting() {
        this.log('🤖 Welcome to Nanox React app generator!');

        this.log('inside promting ⚙️');
        this.answers = await this.prompt([
            {
                type: "input",
                name: "name",
                message: "Your project name",
                default: this.appname //Default to current folder
            },
            {
                type: "input",
                name: "title",
                message: "Your project title",
                default: this.apptitle //Default to current folder
            },
            {
                type: "confirm",
                name: "cool",
                message: "Would you like to enable the Cool feature?"
            }
        ]);

        this.log('app name:', this.answers.name);
        this.log('app title:', this.answers.title);
        this.log('cool feature:', this.answers.cool);
    }

    writing() {
        this.log('🏗️  writing generator specific files...');

        const templateData = { title: this.answers.title };
        const copy = (input, output) => {
            this.fs.copy(this.templatePath(input), this.destinationPath(output));
        };

        const copyTpl = (input, output, data) => {
            this.fs.copyTpl(
                this.templatePath(input),
                this.destinationPath(output),
                data
            );
        };

        config.filesToCopy.forEach(file => {
            copy(file.input, file.output);
        });

        config.filesToRender.forEach(file => {
            copyTpl(file.input, file.output, templateData)
        });
    }

    end() {
        this.log('🧼 cleaning up...');
    }
};