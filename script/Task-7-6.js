const validationInputRef = document.querySelector('#validation-input');

validationInputRef.addEventListener('change', e => {
  
    if (e.target.value.length === Number(e.target.dataset.length)) { 
      e.target.classList.add('valid');
      e.target.classList.remove('invalid');
  }
    else {
      e.target.classList.add('invalid');
      e.target.classList.remove('valid');}
})