const keccak256 = require('keccak256')

const found4Bytes = {};
const logged = {};

Array.prototype.random = function() {
    const randomIndex = Math.floor(Math.random() * (this.length));
    return this.at(randomIndex);
}

const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const len = 5;


while(true) {
    const funcName = [... Array(len).keys()].map(() => chars.random()).join('') + '()';
    const sig = keccak256(funcName).toString('hex').slice(0, 8);
    if(!found4Bytes[sig])
        found4Bytes[sig] = funcName;
    else if(!logged[sig] && found4Bytes[sig] !== funcName) {
        logged[sig] = true;
        console.log(found4Bytes[sig] + ' === ' + funcName);
    }
}