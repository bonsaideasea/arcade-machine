const hideAP = document.querySelector('body');

hideAP.onclick = () => {
  $(function() {
    $(".glitch-img").mgGlitch({
         destroy: false,
         glitch: true,
         scale: true,
         blend: true,
         blendModeType: 'color-burn',
         glitch1TimeMax: 1,
    });
  });
  //hideAP.style.display = 'none';
}

hideAP.onkeyup = () => {
  $(function() {
    $(".glitch-img").mgGlitch({
         destroy: false,
         glitch: true,
         scale: true,
         blend: true,
         blendModeType: 'color-burn',
         glitch1TimeMax: 1,
    });
  });
   //hideAP.style.display = 'none';
}

