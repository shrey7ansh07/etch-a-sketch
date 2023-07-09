const heading = document.createElement('h1');
heading.classList.add('heading-main');
heading.textContent = 'ETCH-A-SKETCH';
heading.style = 'font-size:70px; text-align:center; margin-top:40px;text-shadow:5px 5px green;'
const content = document.querySelector('.content');
const button = document.createElement('button');
button.classList.add('button');
button.textContent = 'NO OF GRIDS';
buttons = document.querySelector('.buttons')
const body = document.querySelector('body');
buttons.appendChild(button);
content.insertBefore(heading,buttons);


button.addEventListener('mouseenter',function(e){
    e.target.classList.add('hovereffect');

})
button.addEventListener('mouseleave',function(e){
    e.target.classList.remove('hovereffect');

})
button.addEventListener('mousedown',function(e){
    e.target.classList.add('trans');

})
button.addEventListener('mouseup', function(e) {
    e.target.classList.remove('trans');
    e.target.classList.toggle('hovereffect');
    setTimeout(enterno, 0); 
  });
  const container = document.createElement('div');
  container.classList.add('grid-container');
  body.appendChild(container);
  function colorit(e) {
    const computedStyle = window.getComputedStyle(e.target);
    const backgroundColor = computedStyle.backgroundColor;
  
    if (backgroundColor === 'rgba(0, 0, 0, 0)' || backgroundColor === 'transparent') {
      let x = Math.random() * 255;
      let y = Math.random() * 255;
      let z = Math.random() * 255;
      e.target.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
    } else {
      const rgbValues = backgroundColor.match(/\d+/g); // Matches all numbers in the string
  
      // Modify the RGB values
      const modifiedRGBValues = rgbValues.map(element => {
        const newValue = element * 1.1;
        return newValue > 255 ? 255 : Math.round(newValue);
      });
  
      e.target.style.backgroundColor = `rgb(${modifiedRGBValues[0]}, ${modifiedRGBValues[1]}, ${modifiedRGBValues[2]})`;
    }
  }
  
  
  function enterno() {
    container.innerHTML = '';
  
    let value = window.prompt('Enter the number of grids you want (up to 100)');
    if (!value || isNaN(value) || value > 100) {
      enterno(); // Prompt again until a valid value is entered
      return;
    }
    value = +value;
    let width = getComputedStyle(container).width;
    width = +width.substring(0, width.length - 2);
    let pixel = Math.round(width / value);
  
    for (let j = 0; j < value; j++) {
      let r = document.createElement('div');
      r.classList.add('rows', 'row' + j);
      for (let i = 0; i < value; i++) {
        let elem = document.createElement('div');
        elem.classList.add('row');
        elem.style.width = pixel + 'px';
        elem.style.height = pixel + 'px';
        elem.addEventListener('mouseenter', colorit);
  
        r.appendChild(elem);
      }
      container.appendChild(r);
    }
  }
  
  


