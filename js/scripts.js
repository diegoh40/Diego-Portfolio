function menuClose(opc) {
  if (opc) {
    const mmenu = document.querySelector('#mobile_menu');
    mmenu.style.display = 'none';
  }
}

function menuOpen(opc = false) {
  if (opc) {
    const mmenu = document.querySelector('#mobile_menu');
    mmenu.style.display = 'block';
  }
}

menuOpen();
menuClose();