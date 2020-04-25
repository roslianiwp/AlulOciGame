function myMove() {
  let sheep = document.getElementById("myAnimation");
  let pos = -100;
  let id = setInterval(frame, 3);

  function frame() {
    if (pos == 950) {
      clearInterval(id);
    } else {
      pos++;
      sheep.style.right = pos + "px";
      sheep.style.left = pos + "px";
    }
  }
}

