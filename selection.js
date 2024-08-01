async function selection(){
    const ele = document.querySelectorAll('.bar');
    for(let i=0; i<ele.length-1; i++){
        let mini = i;
        ele[i].style.background = 'blue';
        for(let j=i+1; j<=ele.length-1; j++){
            ele[j].style.background = 'red';
            await waitforme(delay);
            if(parseInt(ele[mini].style.height) > parseInt(ele[j].style.height)){
                if(mini !== i){
                    ele[mini].style.background = 'cyan';
                }
                mini = j;
            }else
            ele[j].style.background = 'cyan';
        }
        await waitforme(delay);
        swap(ele[i], ele[mini]);
        ele[i].style.background = 'green';
    }
    ele[ele.length-1].style.background = 'green';
}

var selectionSort = document.querySelector(".selection");
selectionSort.addEventListener('click', async function(){
    disableSize();
    disableNewArray();
    disableSortingBtn();
    await selection();
    enableSize();
    enableNewArray();
    enableSortingBtn();
});