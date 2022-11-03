const fs = require('fs');
const GMan = require('./gman')

try {

    const filename = process.argv[2];
    const data = fs.readFileSync(filename).toString();

    let gman = new GMan();
    let remainingPower = gman.getPower(data);

    console.log('POWER ' + remainingPower);

} catch (error) {

    console.error('No such file or directory!');

}