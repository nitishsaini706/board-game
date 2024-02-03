document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    let x = 4; 
    let o = random(x); 

    // console.log(cells);
   
    cells[x - 1].value = 'X';
    cells[o - 1].value = 'O';

    document.addEventListener('keydown', (event) => {
        const key = event.key;
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
            moveX(key);
        }
    });

    function moveX(direction) {
        let newX = x;
        switch (direction) {
            case 'ArrowUp':
                newX = x > 3 ? x - 3 : x;
                break;
            case 'ArrowDown':
                newX = x < 7 ? x + 3 : x;
                break;
            case 'ArrowLeft':
                newX = x % 3 !== 1 ? x - 1 : x;
                break;
            case 'ArrowRight':
                newX = x % 3 !== 0 ? x + 1 : x;
                break;
        }
        console.log(newX);
        if (newX !== x) {
            cells[newX - 1].value = 'X';
            x = newX;

            if (newX === o) {
                o = random(newX);
                cells[o - 1].value = 'O';
            }
        }
    }

    function random(cur) {
        let position;
        do {
            position = Math.floor(Math.random() * 9) + 1;
        } while (position === cur);
        return position;
    }
});


