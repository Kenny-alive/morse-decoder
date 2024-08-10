/* **Input:** String. Its length is multiple of 10.
- Each letter from alphabet encoded with dots(`.`) and dashes(`-`). `10` stands for dot(`.`), `11` stands for dash(`-`).
- Each encoded **letter's length is 10**.
- If the length of the encoded letter is **less then 10**, it `left padded` with `0`.
- `Space` in string is `**********`.
**Output:** String (decoded)
**Example:** `me` -> `m === -- === 0000001111`, `e === . === 0000000010` -> `00000011110000000010` */

const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let resultArr = expr.match(/.{1,10}/g);
    let testArr = []
    resultArr.forEach(element => {
        let firstCouple = element[0] + element[1];
        let secondCouple = element[2] + element[3];
        let thirdCouple = element[4] + element[5];
        let fouthCouple = element[6] + element[7];
        let fifthCouple = element[8] + element[9];
        if (firstCouple === '00') {
            firstCouple = '/';
            testArr.push(firstCouple)
        } else if (firstCouple === '11') {
            firstCouple = '-';
            testArr.push(firstCouple)
        } else if (firstCouple === '10') {
            firstCouple = '.';
            testArr.push(firstCouple)
        } else if (firstCouple === '**') {
            firstCouple = '*';
            testArr.push(firstCouple)
        }
        if (secondCouple === '00') {
            secondCouple = '/';
            testArr.push(secondCouple)
        } else if (secondCouple === '11') {
            secondCouple = '-';
            testArr.push(secondCouple)
        } else if (secondCouple === '10') {
            secondCouple = '.';
            testArr.push(secondCouple)
        } else if (secondCouple === '**') {
            secondCouple = '*';
            testArr.push(secondCouple)
        }
        if (thirdCouple === '00') {
            thirdCouple = '/';
            testArr.push(thirdCouple)
        } else if (thirdCouple === '11') {
            thirdCouple = '-';
            testArr.push(thirdCouple)
        } else if (thirdCouple === '10') {
            thirdCouple = '.';
            testArr.push(thirdCouple)
        } else if (thirdCouple === '**') {
            thirdCouple = '*';
            testArr.push(thirdCouple)
        }
        if (fouthCouple === '00') {
            fouthCouple = '/';
            testArr.push(fouthCouple);
        } else if (fouthCouple === '11') {
            fouthCouple = '-';
            testArr.push(fouthCouple);
        } else if (fouthCouple === '10') {
            fouthCouple = '.';
            testArr.push(fouthCouple);
        } else if (fouthCouple === '**') {
            fouthCouple = '*';
            testArr.push(fouthCouple);
        }
        if (fifthCouple === '00') {
            fifthCouple = '/';
            testArr.push(fifthCouple);
        } else if (fifthCouple === '11') {
            fifthCouple = '-';
            testArr.push(fifthCouple);
        } else if (fifthCouple === '10') {
            fifthCouple = '.';
            testArr.push(fifthCouple);
        } else if (fifthCouple === '**') {
            fifthCouple = '*';
            testArr.push(fifthCouple);
        }
    });
    let arrToString = testArr.join('');
    let resultTest = arrToString.match(/.{1,5}/g);
    resultTest = resultTest.map(item => item.replaceAll('/', ''));
    let resultStr = ''
    for (let item of resultTest) {
        if (item === '*****') {
            resultStr += ' ';
        } else resultStr += MORSE_TABLE[item];
    }
    return resultStr
};



module.exports = {
    decode
}