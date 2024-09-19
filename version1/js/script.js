document.addEventListener('DOMContentLoaded', function () {
    const ball = document.getElementById('ball');

    // Encapsulate variables in the function to make them local
    function moveBall() {
        let x = 0;
        let y = 0;
        let dx = 2;
        let dy = 2;

        // Move the ball
        function updatePosition() {
            x += dx;
            y += dy;

            // Reverse direction if hitting edges
            if (x >= window.innerWidth - 50 || x <= 0) dx = -dx;
            if (y >= window.innerHeight - 50 || y <= 0) dy = -dy;

            // Update the ball's position
            ball.style.left = x + 'px';
            ball.style.top = y + 'px';

            // Continuously update position
            requestAnimationFrame(updatePosition);
        }

        // Start the ball movement
        updatePosition();
    }

    // Call the moveBall function to start the motion
    moveBall();
});
