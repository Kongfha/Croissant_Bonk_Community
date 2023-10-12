let root = document.documentElement;
const section1 = document.querySelector('.header')
const windowHeight = window.innerHeight;
const section2 = document.querySelector('.app-animation');
  

 window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;

    const scrolledBeyondViewport = windowHeight - Math.max(0, scrollY);
    const scrollPercent = (1-(scrolledBeyondViewport/windowHeight));
    var newColor = interpolate('#100830', '#472675', scrollPercent);

    if(scrollPercent>=0.5){
      // Apply styles to reveal the element
      section2.style.opacity = 1;
      section2.style.transform = 'translateY(0)';
    }
    else{
      section2.style.opacity = 0;
      section2.style.transform = 'translateY(20px)';
    }
    document.documentElement.style.setProperty('--my-color', newColor);
    console.log(`percent:${scrollPercent*100}% color:${newColor} + "f1"`);
});

function interpolate(color1, color2, percent) {
  // Convert the hex colors to RGB values
  percent = Math.min(1,percent);
  percent = Math.max(0,percent);
  const r1 = parseInt(color1.substring(1, 3), 16);
  const g1 = parseInt(color1.substring(3, 5), 16);
  const b1 = parseInt(color1.substring(5, 7), 16);

  const r2 = parseInt(color2.substring(1, 3), 16);
  const g2 = parseInt(color2.substring(3, 5), 16);
  const b2 = parseInt(color2.substring(5, 7), 16);

  // Interpolate the RGB values
  const r = Math.round(r1 + (r2 - r1) * percent);
  const g = Math.round(g1 + (g2 - g1) * percent);
  const b = Math.round(b1 + (b2 - b1) * percent);

  // Convert the interpolated RGB values back to a hex color
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1) + "f2";
}