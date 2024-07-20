function goFullscreen(id) {
    var element = document.getElementById(id);
    if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }
}

function search_act() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('actbox');

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    }
    else {
      x[i].style.display = "inline-block";
    }
  }
}

function descShow(elem) {
  const desc = elem.querySelector("desc");
  if (desc) {
    desc.style.visibility = "visible";
    desc.style.opacity = "1";
  }
}

function descHide(elem) {
  const desc = elem.querySelector("desc");
  if (desc) {
    desc.style.visibility = "invisible";
    desc.style.opacity = "0";
  }
}

function category(elem) {
  let y = document.getElementsByClassName("category");
  for (j = 0; j < y.length; j++) {
    y[j].style.backgroundImage = "none";
  }
  let input = elem.textContent;
  elem.style.backgroundImage = "-webkit-gradient(linear, left top, right bottom, color-stop(0.25, skyblue), color-stop(0.5, violet), color-stop(0.75, tomato))";
  elem.style.padding = "3px";
  input = input.toLowerCase();
  let x = document.getElementsByClassName('actbox');

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    }
    else {
      x[i].style.display = "inline-block";
    }
  }
}