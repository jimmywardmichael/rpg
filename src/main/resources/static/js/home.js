document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('.map-cell');
    const canvas = document.getElementById('miniMapCanvas');
    const ctx = canvas.getContext('2d');


    const connections = [
        { from: 0, to: 1 },
        { from: 1, to: 2 },
        { from: 2, to: 3 }
    ];


    function drawConnections() {
        connections.forEach(connection => {
            const fromCell = cells[connection.from].getBoundingClientRect();
            const toCell = cells[connection.to].getBoundingClientRect();

            const fromX = fromCell.left + fromCell.width / 2 - canvas.getBoundingClientRect().left;
            const fromY = fromCell.top + fromCell.height / 2 - canvas.getBoundingClientRect().top;
            const toX = toCell.left + toCell.width / 2 - canvas.getBoundingClientRect().left;
            const toY = toCell.top + toCell.height / 2 - canvas.getBoundingClientRect().top;

            ctx.beginPath();
            ctx.moveTo(fromX, fromY);
            ctx.lineTo(toX, toY);
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.stroke();
        });
    }


    cells.forEach(cell => {
        cell.addEventListener('click', function () {
            if (!cell.textContent) {
                cell.textContent = cell.getAttribute('data-name');
                drawConnections();
            }
        });
    });


    drawConnections();
});


function makeChoice(choice) {
    const sceneImage = document.getElementById('sceneImage');
    const choiceText = document.getElementById('choiceText');

    // Update the scene image and text based on the choice
    switch (choice) {
        case 1:
            sceneImage.src = '/path/to/choice1Image.jpg';
            choiceText.textContent = 'You chose the first option.';
            break;
        case 2:
            sceneImage.src = '/path/to/choice2Image.jpg';
            choiceText.textContent = 'You chose the second option.';
            break;
        case 3:
            sceneImage.src = '/path/to/choice3Image.jpg';
            choiceText.textContent = 'You chose the third option.';
            break;
        default:
            choiceText.textContent = 'Invalid choice.';
    }
}
