let x = 0, y = 0, dx = 2, dy = 2;

function moveBall() {
  x += dx;
  y += dy;

  // Reverse direction if hitting edges
  if (x >= window.innerWidth - 50 || x <= 0) dx = -dx;
  if (y >= window.innerHeight - 50 || y <= 0) dy = -dy;

  document.getElementById('ball').style.left = x + 'px';
  document.getElementById('ball').style.top = y + 'px';

  requestAnimationFrame(moveBall); // Continuously update position
}

moveBall(); // Start the movement
