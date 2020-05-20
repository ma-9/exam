console.log('INjected Before');
window.onblur = () => {
  window.sessionStorage.setItem('CurrnetWarningNo', 0);
  window.sessionStorage.setItem('NoOfWarning', 0);
  // window.localStorage.clear();
};
window.onbeforeunload = () => {
  window.sessionStorage.setItem('CurrnetWarningNo', 0);
  window.sessionStorage.setItem('NoOfWarning', 0);
  // window.localStorage.clear();
};

setInterval(() => {
  document.body.onkeyup = () => {};
  document.body.onkeydown = () => {};
  document.body.onkeypress = () => {};
}, 100);
console.log('INjected After');
