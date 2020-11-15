const validationInputRef = document.querySelector('#validation-input');

validationInputRef.addEventListener('change', e =>{
  e.target.value.length === Number(e.target.dataset.length) ?
    e.target.classList.contains('invalid') ?
      e.target.classList.replace('invalid', 'valid') :
      e.target.classList.add('valid') :
    e.target.classList.add('invalid');

  
  //   if (e.target.value.length === Number(e.target.dataset.length)) { 
  //     e.target.classList.add('valid');
  // }
  //   else {
  //     e.target.classList.add('invalid');
  //     e.target.classList.remove('valid');}
})