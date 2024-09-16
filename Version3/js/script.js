const ball = document.getElementById('ball');
const scoreDisplay = document.getElementById('score');

let x = Math.random() * (window.innerWidth - 50); // Initial random X position
let y = Math.random() * (window.innerHeight - 50); // Initial random Y position
let speed = 2; // Initial speed
let angle = Math.random() * 2 * Math.PI; // Random initial angle
let score = 0; // Initial score

function moveBall() {
    let dx = speed * Math.cos(angle);
    let dy = speed * Math.sin(angle);

    x += dx;
    y += dy;

    // Check for collisions with screen edges and change direction with random angle
    if (x >= window.innerWidth - 50) {
        x = window.innerWidth - 50;
        angle = Math.PI - angle + randomAngleAdjustment();
    } else if (x <= 0) {
        x = 0;
        angle = Math.PI - angle + randomAngleAdjustment();
    }

    if (y >= window.innerHeight - 50) {
        y = window.innerHeight - 50;
        angle = -angle + randomAngleAdjustment();
    } else if (y <= 0) {
        y = 0;
        angle = -angle + randomAngleAdjustment();
    }

    // Apply the new position to the ball
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';

    requestAnimationFrame(moveBall); // Keep the ball moving
}

// Function to generate a random angle adjustment to keep the bounce unpredictable
function randomAngleAdjustment() {
    return (Math.random() - 0.5) * Math.PI / 4; // Randomize the angle by up to ±45°
}

// Event listener for when the ball is clicked
ball.addEventListener('click', function() {
    // Increase the score and update the score display
    score++;
    scoreDisplay.textContent = 'Score: ' + score;

    // Increase the ball speed
    speed += 0.5;

    // Hide the ball temporarily
    ball.style.display = 'none'; // Hide the ball
    
    setTimeout(() => {
        // Reposition the ball at a random location
        x = Math.random() * (window.innerWidth - 50);
        y = Math.random() * (window.innerHeight - 50);

        // Show the ball again at the new position
        ball.style.left = x + 'px';
        ball.style.top = y + 'px';
        ball.style.display = 'block'; // Show the ball again
    }, 500); // 500ms delay before reappearing
});

// Start the ball movement
moveBall();
