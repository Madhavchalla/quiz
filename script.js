function caesarCipher(str, shift, encrypt = true) {
  if (!encrypt) shift = (26 - shift) % 26; // reverse shift for decrypt
  return str.split('').map(char => {
    let code = char.charCodeAt(0);

    // uppercase letters
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 + shift) % 26) + 65);
    }

    // lowercase letters
    if (code >= 97 && code <= 122) {
      return String.fromCharCode(((code - 97 + shift) % 26) + 97);
    }

    // non-alphabetic characters stay the same
    return char;
  }).join('');
}

document.getElementById('encryptBtn').addEventListener('click', () => {
  const input = document.getElementById('inputText').value;
  let shift = parseInt(document.getElementById('shift').value, 10);
  if (isNaN(shift) || shift < 1 || shift > 25) {
    alert('Shift must be a number between 1 and 25.');
    return;
  }
  const encrypted = caesarCipher(input, shift, true);
  document.getElementById('outputText').value = encrypted;
});

document.getElementById('decryptBtn').addEventListener('click', () => {
  const input = document.getElementById('inputText').value;
  let shift = parseInt(document.getElementById('shift').value, 10);
  if (isNaN(shift) || shift < 1 || shift > 25) {
    alert('Shift must be a number between 1 and 25.');
    return;
  }
  const decrypted = caesarCipher(input, shift, false);
  document.getElementById('outputText').value = decrypted;
});

document.getElementById('clearBtn').addEventListener('click', () => {
  document.getElementById('inputText').value = '';
  document.getElementById('outputText').value = '';
  document.getElementById('shift').value = 3;
});
