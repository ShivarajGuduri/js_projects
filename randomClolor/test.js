const a = document.querySelector('#btn');
const b = document.querySelector('#txt');
const c = document.querySelector('#clr');

a.addEventListener('click', () => {

  const newColor = random();
  // document.body.style.backgroundColor = newColor;
  c.style.backgroundColor  = newColor;
     b.innerText = newColor;
}); 

const random = () => { 
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}
