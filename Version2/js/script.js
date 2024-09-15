const ball = document.getElementById('ball');

let x = Math.random() * (window.innerWidth - 50); // Random initial X position
let y = Math.random() * (window.innerHeight - 50); // Random initial Y position
let speed = 8; // Speed of the ball
let angle = Math.random() * 2 * Math.PI; // Random initial angle in radians

function moveBall() {
    // Calculate the movement in x and y directions based on the angle
    let dx = speed * Math.cos(angle);
    let dy = speed * Math.sin(angle);

    x += dx;
    y += dy;

    // Check for collision with screen edges and change angle randomly
    if (x >= window.innerWidth - 50) {
        x = window.innerWidth - 50; // Keep the ball inside the right boundary
        angle = Math.PI - angle + randomAngleAdjustment(); // Reverse angle and add randomness
    } 
    else if (x <= 0) {
        x = 0; // Keep the ball inside the left boundary
        angle = Math.PI - angle + randomAngleAdjustment(); // Reverse angle and add randomness
    }

    if (y >= window.innerHeight - 50) {
        y = window.innerHeight - 50; // Keep the ball inside the bottom boundary
        angle = -angle + randomAngleAdjustment(); // Reverse angle and add randomness
    } 
    else if (y <= 0) {
        y = 0; // Keep the ball inside the top boundary
        angle = -angle + randomAngleAdjustment(); // Reverse angle and add randomness
    }

    // Apply the new position to the ball
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';

    requestAnimationFrame(moveBall); // Continue the animation
}

// Function to generate a random angle adjustment to keep the bounce unpredictable
function randomAngleAdjustment() {
    return (Math.random() - 0.5) * Math.PI / 4; // Adjust angle by a random small amount (up to +/- 45 degrees)
}

// Start the ball movement
moveBall();