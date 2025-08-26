
let minHeightAndWidth = '0.5em';
let maxHeight = '5em'
let maxWidth = '7em';

let iRows = 9;
let jColumns = 12;

let iiColumn, iiRow, jjColumn, jjRow;
let addElArray = [];

function getRandomInt(min, max) {
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil + 1) + minCeil);
}

for (i = 0; i < iRows; i++) {
    for (j = 0; j < jColumns; j++) {
        document.querySelector('.grid').appendChild(document.createElement('div')).classList.add('cell');  
        document.querySelectorAll('.cell')[i * jColumns + j].style.gridColumn = j + 1;
        document.querySelectorAll('.cell')[i * jColumns + j].style.gridRow = i + 1;
        document.querySelectorAll('.cell')[i * jColumns + j].style.opacity = '0';
        document.querySelectorAll('.cell')[i * jColumns + j].style.height = '.5em';
        document.querySelectorAll('.cell')[i * jColumns + j].style.width = '.5em';
    } 
} 

document.querySelectorAll('.cell')[getRandomInt(0, iRows * jColumns)].style.opacity = '1';

document.querySelectorAll('.cell').forEach(i => i.addEventListener("click", (e) => {    
    
    if (Number(i.style.getPropertyValue('--my-var')) == 0) {
        if (getRandomInt(0,1) == 1) { i.style.setProperty('--direction', 'firstHorizontal'); } 
        else { i.style.setProperty('--direction', 'firstVertical'); }
    }

    if (i.style.opacity == '1') {
        switch(i.style.getPropertyValue('--direction')) {
            case 'firstHorizontal':
                switch (true) {
                    case i.style.width == minHeightAndWidth && i.style.height == minHeightAndWidth:
                        i.style.width = maxWidth;
                        break;
                    case i.style.width == maxWidth && i.style.height == minHeightAndWidth:
                        i.style.height = maxHeight;
                        break;
                    case i.style.width == maxWidth && i.style.height == maxHeight:
                        i.style.width = minHeightAndWidth;
                        break;
                    case i.style.width == minHeightAndWidth && i.style.height == maxHeight:
                        i.style.height = minHeightAndWidth;
                        break;
                    default:
                        break;
                    }
                    break;
                    
            case 'firstVertical':
                switch (true) {
                    case i.style.width == minHeightAndWidth && i.style.height == minHeightAndWidth:
                        i.style.height = maxHeight;
                        break;
                    case i.style.width == minHeightAndWidth && i.style.height == maxHeight:
                        i.style.width = maxWidth;
                        break;
                    case i.style.width == maxWidth && i.style.height == maxHeight:
                        i.style.height = minHeightAndWidth;
                        break;
                    case i.style.width == maxWidth && i.style.height == minHeightAndWidth:
                        i.style.width = minHeightAndWidth;
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    }

    document.querySelectorAll('.cell').forEach(element => {
        if (element.style.gridColumn == i.style.gridColumn) { element.style.width = i.style.width; }
        if (element.style.gridRow == i.style.gridRow) { element.style.height = i.style.height; }
    });
     
    addElArray = [];
    iiColumn = Number(i.style.gridColumn);
    iiRow = Number(i.style.gridRow);

    document.querySelectorAll('.cell').forEach(j => {
        jjColumn = Number(j.style.gridColumn);
        jjRow = Number(j.style.gridRow);

        if ((((Math.abs(iiColumn - jjColumn) == 1) && (Math.abs(iiRow - jjRow) == 0)) || ((Math.abs(iiColumn - jjColumn) == 0) && (Math.abs(iiRow - jjRow) == 1))) && j.style.opacity == '0') {
            addElArray.push(j);
        }
    }) 

    if ( addElArray.length !== 0) {
        if (addElArray.length > 1) { addElArray[getRandomInt(0, addElArray.length - 1)].style.opacity = '1'; }
        if (addElArray.length == 1) { addElArray[0].style.opacity = '1'; }
    }

    i.style.setProperty('--my-var', Number(i.style.getPropertyValue('--my-var')) + 1);

    if (Number(i.style.getPropertyValue('--my-var')) == 4) {
        i.style.opacity = '0';
        i.style.setProperty('--my-var', 0);
    }
}));

let scrollH;
document.querySelectorAll('.cell').forEach(i => i.addEventListener("mouseover", window.addEventListener("scroll", () => {
        i.style.background = `hsl(${window.scrollY*0.1},100%,50%)`;
        scrollH = document.body.scrollHeight - 950;
        if (window.scrollY >= (0 * scrollH) && window.scrollY < (0.2 * scrollH)) {
            i.style.rotate = `0deg`;
        } else if (window.scrollY >= (0.2 * scrollH) && window.scrollY < (0.4 * scrollH)) {
            i.style.rotate = `45deg`;
        } else if (window.scrollY >= (0.4 * scrollH) && window.scrollY < (0.6 * scrollH)) {
            i.style.rotate = `90deg`;
        } else if (window.scrollY >= (0.6 * scrollH) && window.scrollY < (0.8 * scrollH)) {
            i.style.rotate = `135deg`;
        } else if (window.scrollY >= (0.8 * scrollH) && window.scrollY < (1.0 * scrollH)) {
            i.style.rotate = `180deg`;
        } 
    })
))