const packageObj = require('../../package');
const semver = require('semver');
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const checkAcceptableType = bumpType => {
    const acceptableBumpTypes = [
        'major',
        'minor',
        'patch',
        'premajor',
        'preminor',
        'prepatch',
        'prerelease'
    ];

    if (!acceptableBumpTypes.includes(bumpType.toLowerCase())){
        throw TypeError(
            `You must select an acceptable bump type: ${acceptableBumpTypes}
             You selected "${bumpType.toLowerCase()}"`
        )
    };
};

rl.question('Bump type: \n', (bumpType) => {
    checkAcceptableType(bumpType);

    const currentVersion = packageObj.version;
    const newVersion = semver.inc(currentVersion, bumpType);

    console.log(`Current version is ${currentVersion}`);
    console.log(`New version is ${newVersion}`);
    packageObj.version = newVersion;

    fs.writeFileSync('./package.json', JSON.stringify(packageObj, null, 2));

    rl.close();
});

