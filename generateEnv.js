const fs = require('fs');
const chalk = require('chalk');
const endOfLine = require('os').EOL;

const environmentVariables = [
    'GATSBY_SITE_RECAPTCHA_KEY',
    'SITE_RECAPTCHA_SECRET',
    'GATSBY_ALGOLIA_APP_ID',
    'GATSBY_ALGOLIA_SEARCH_KEY',
    'ALGOLIA_ADMIN_KEY',
    'GATSBY_SEARCH_INDEX_PREFIX'
];

let preflightVariables = (environmentVariables) => {
    environmentVariables.forEach((envVarName) => {
        let val = process.env[envVarName];
        if(val === undefined || val === '') {
            console.log("No value for environment variable: " + chalk.red(envVarName));
            console.log("Aborting....")
            process.exit(1);
        }
    });
};

let writeEnvFile = (environmentVariables) => {
    if(fs.existsSync('.env')) {
        fs.unlinkSync('.env');
    }
    let content = generateEnvFileString(environmentVariables);
    fs.writeFileSync('.env', content);
}

let generateEnvFileString = (environmentVariables) => {
    let output = "";
    environmentVariables.forEach((envVarName) => {
        output += envVarName + "=" + process.env[envVarName] + endOfLine;
    });
    return output;
}

preflightVariables(environmentVariables);
writeEnvFile(environmentVariables);
