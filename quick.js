async function partition(ele,l,r){
    let i = l-1;
    ele[r].style.background = "red";
    await waitforme(delay);
    for(let j=l; j<=r-1; j++){
        ele[j].style.background = "yellow";
        await waitforme(delay);
        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            i++;
            swap(ele[j],ele[i]);
            ele[i].style.background = "orange";
            if(i != j) ele[j].style.background = 'orange';
            await waitforme(delay);
        }else{
            ele[j].style.background = "pink";
        }
    }
    i++;
    await waitforme(delay);
    swap(ele[i], ele[r]);
    ele[r].style.background = 'pink';
    ele[i].style.background = 'green';

    await waitforme(delay);
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'green')
            ele[k].style.background = 'cyan';
    }

    return i;

}
async function quick(ele,l,r){
    if(l<r){
        let par = await partition(ele,l,r);
        await quick(ele,l,par-1);
        await quick(ele,par+1,r);
    }else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
        }
    }
}

const quickSort = document.querySelector(".quick");
quickSort.addEventListener('click', async function(){
    const ele = document.querySelectorAll(".bar");
    let l=0;
    let r=ele.length-1;
    disableSize();
    disableNewArray();
    disableSortingBtn();
    await quick(ele,l,r);
    enableSize();
    enableNewArray();
    enableSortingBtn();
});