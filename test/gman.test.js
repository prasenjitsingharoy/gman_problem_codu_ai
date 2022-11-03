const fs = require('fs');
const GMan = require('../gman');
const expect = require('chai').expect;

const getFinalResult = (data) => {
    let gman = new GMan();
    const remainingPower = gman.getPower(data);
    return ('POWER ' + remainingPower);
}

describe('Test cases for Train Problem', () => {

    it('should print remaining power as 155', () => {

        const filename = 'sample_input/input1.txt';
        data = fs.readFileSync(filename).toString();

        const finalResult = getFinalResult(data);

        expect(finalResult).to.equal('POWER 155');
    })

    it('should print remaining power as 90', () => {

        const filename = 'sample_input/input2.txt';
        data = fs.readFileSync(filename).toString();

        const finalResult = getFinalResult(data);

        expect(finalResult).to.equal('POWER 90');
    })

    it('should print remaining power as 110', () => {

        const filename = 'sample_input/input3.txt';
        data = fs.readFileSync(filename).toString();

        const finalResult = getFinalResult(data);

        expect(finalResult).to.equal('POWER 110');
    })

    it('should print remaining power as 140', () => {

        const filename = 'sample_input/input4.txt';
        data = fs.readFileSync(filename).toString();
        
        const finalResult = getFinalResult(data);

        expect(finalResult).to.equal('POWER 140');
    })

    it('should print remaining power as 175', () => {

        const filename = 'sample_input/input5.txt';
        data = fs.readFileSync(filename).toString();
       
        const finalResult = getFinalResult(data);

        expect(finalResult).to.equal('POWER 175');
    })

})