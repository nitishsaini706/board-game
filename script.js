document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    let xPosition = 4; // Initial position of 'X'
    let oPosition = getRandomPosition(xPosition); // Initial position of 'O'

    // console.log(cells);
    // Set initial positions
    cells[xPosition - 1].value = 'X';
    cells[oPosition - 1].value = 'O';

    document.addEventListener('keydown', (event) => {
        const key = event.key;
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
            moveX(key);
        }
    });

    function moveX(direction) {
        let newXPosition = xPosition;
        switch (direction) {
            case 'ArrowUp':
                newXPosition = xPosition > 3 ? xPosition - 3 : xPosition;
                break;
            case 'ArrowDown':
                newXPosition = xPosition < 7 ? xPosition + 3 : xPosition;
                break;
            case 'ArrowLeft':
                newXPosition = xPosition % 3 !== 1 ? xPosition - 1 : xPosition;
                break;
            case 'ArrowRight':
                newXPosition = xPosition % 3 !== 0 ? xPosition + 1 : xPosition;
                break;
        }
        console.log(newXPosition);
        if (newXPosition !== xPosition) {
            cells[newXPosition - 1].value = 'X';
            xPosition = newXPosition;

            if (newXPosition === oPosition) {
                oPosition = getRandomPosition(newXPosition);
                cells[oPosition - 1].value = 'O';
            }
        }
    }

    function getRandomPosition(excludePosition) {
        let position;
        do {
            position = Math.floor(Math.random() * 9) + 1;
        } while (position === excludePosition);
        return position;
    }
});


