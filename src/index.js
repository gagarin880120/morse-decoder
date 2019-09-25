const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    for (i = 0; i < expr.length; i += 10) {
      arr.push(expr.slice(i, i+10));
    }
  
    return arr.map(a => a.slice(a.indexOf('1')))
              .map(a => a.replace('10', '.').replace('10', '.').replace('10', '.').replace('10', '.').replace('10', '.').replace('11', '-').replace('11', '-').replace('11', '-').replace('11', '-').replace('11', '-').replace('*', ' '))
              .map(a => MORSE_TABLE[a] || a).join('');
    
}

module.exports = {
    decode
}