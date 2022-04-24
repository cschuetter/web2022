// Start dark mode if it's after 6:59:59pm
if (new Date().getHours() < 18) {
  //alert(new Date().getHours());
  const html = document.querySelector('body');
  html.style.backgroundColor = 'white';
  html.style.color = 'black';
}
if (new Date().getHours() < 18) {
  const wrapperBody = document.getElementsByClassName('h1');
  wrapperBody[0].style.color = 'black';
}
if (new Date().getHours() < 18) {
  const wrapperBody = document.getElementsByClassName('h4');
  wrapperBody[0].style.color = 'black';
}
if (new Date().getHours() < 18) {
  const wrapperBody = document.getElementsByClassName('h5');
  wrapperBody[0].style.color = 'black';
}
if (new Date().getHours() < 18) {
  const wrapperBody = document.getElementsByClassName('p');
  wrapperBody[0].style.color = 'black';
}
