
function swap(ele1, ele2){
    let temp = ele1.style.height;
    ele1.style.height = ele2.style.height;
    ele2.style.height = temp;
}

function disableSortingBtn(){
    document.querySelector(".bubble").disabled = true;
    document.querySelector(".selection").disabled = true;
    document.querySelector(".insertion").disabled = true;
    document.querySelector(".quick").disabled = true;
    document.querySelector(".merge").disabled = true;
}

function enableSortingBtn(){
    document.querySelector(".bubble").disabled = false;
    document.querySelector(".selection").disabled = false;
    document.querySelector(".insertion").disabled = false;
    document.querySelector(".quick").disabled = false;
    document.querySelector(".merge").disabled = false;
}

function disableSize(){
    document.querySelector(".size").disabled = true;
}

function enableSize(){
    document.querySelector(".size").disabled = false;
}

function disableNewArray(){
    document.querySelector(".newArray").disabled = true;
}

function enableNewArray(){
    document.querySelector(".newArray").disabled = false;
}

var size = $(".size").val();
console.log(size);

let array = [];
createNewArray();

function createNewArray(noOfBars = 50){

    deleteChild();
    array = [];

    for (let i = 0; i < noOfBars; i++) {
        var val = Math.floor(Math.random() * 100) + 1;
        array.push(val);
    }
    console.log(array);
    const bars = document.querySelector("#bars");
    for(let i=0;i<noOfBars;i++){
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*4}px`;
        bar.classList.add('bar');
        bar.classList.add(`barNo${i}`);
        bar.classList.add('flex-item');
        bar.innerHTML=" ";
        bars.appendChild(bar);
    }
}
//get size of array and on toggle change array
var arraySize = document.querySelector('#size');
arraySize.addEventListener('input', function(){
    createNewArray(parseInt(arraySize.value));
});

function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

//get speed of bars and change speed on toggle
let delay = 260;
var speed = document.querySelector('#speed');
//console.log(parseInt(speed.value));
speed.addEventListener('input', function(){
    delay = 320 - parseInt(speed.value);
});

function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = "";
}

const newArray = document.querySelector('#newArray');
newArray.addEventListener('click', function(){
    deleteChild();
    enableSortingBtn();
    enableSize();
    createNewArray(arraySize.value);
});

