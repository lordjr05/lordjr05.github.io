// This will hold the current position of the stick figure
let currentStair = 0;

// When the "Draw Stairs" button is clicked, draw the stairs and reset the position of the stick figure
document.getElementById('drawStairs').addEventListener('click', () => {
    drawStairs();
    document.getElementById('climbStairs').style.display = 'inline-block'; // Show the climb button
    document.getElementById('stick-figure').style.display = 'block'; // Show the stick figure
    currentStair = 0; // Reset the climbing position when drawing the stairs
    
    // Set the stick figure's initial position at the bottom of the ladder
    document.getElementById('stick-figure').style.top = '360px'; // Make sure this is the correct value (just above the last stair)
});

// When the "Climb Stairs" button is clicked, make the stick figure climb one step at a time
document.getElementById('climbStairs').addEventListener('click', () => {
    climbOneStep();
});

const drawStairs = () => {
    const stairsContainer = document.getElementById('stairs-container');
    stairsContainer.innerHTML = ''; // Clear any previous stairs
    
    // Draw 10 stairs (each 40px apart vertically)
    for (let i = 0; i < 10; i++) {
        const stair = document.createElement('div');
        stair.classList.add('stair');
        stair.style.top = `${i * 40}px`; 
        stairsContainer.appendChild(stair);
    }
};

const climbOneStep = () => {
    const stickFigure = document.getElementById('stick-figure');
    const stickImage = document.getElementById('stickImage');

    if (currentStair < 10) { // If the stick figure hasn't reached the top
        // Move stick figure up one step
        stickFigure.style.top = `${(currentStair) * 40 + 360}px`;
        
        // Alternate between leftclimb.jpg and rightclimb.jpg for walking animation
        stickImage.src = currentStair % 2 === 0 ? 'images/leftclimb.jpg' : 'images/rightclimb.jpg';

        // Increment the stair counter after moving
        currentStair++;
    }
};
