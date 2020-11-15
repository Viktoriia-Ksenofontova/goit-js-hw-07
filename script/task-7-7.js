const fontSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

fontSizeControlRef.value = 14;
textRef.style.fontSize = `${fontSizeControlRef.value}px`;

fontSizeControlRef.addEventListener('input', e => {
   textRef.style.fontSize = `${e.target.value}px`;
  })