function changeBackground() {
  
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  
  const randomColor = `rgb(${r}, ${g}, ${b})`;

 
  document.body.style.backgroundColor = randomColor;
}