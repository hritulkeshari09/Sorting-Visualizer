
async function merge(ele, l, mid, r){
    let len1 = mid-l+1;
    let len2 = r-mid;

    let left = new Array(len1);
    let right = new Array(len2);

    for(let i=0; i<len1; i++){
        await waitforme(delay);
        ele[i+l].style.background = "orange";
        left[i] = ele[i+l].style.height;
    }
    for(let i=0; i<len2; i++){
        await waitforme(delay);
        ele[i+mid+1].style.background = "orange";
        right[i] = ele[i+mid+1].style.height;
    }
    await waitforme(delay);
    let i=0;
    let j=0;
    let k=l;
    while(i<len1 && j<len2){
        await waitforme(delay);
        if(parseInt(left[i]) < parseInt(right[j])){
            if(len1+len2 === ele.length)
                ele[k].style.background = "green";
            else
                ele[k].style.background = "lightgreen";

            ele[k].style.height = left[i];
            i++;
            k++;
        }else{
            if(len1+len2 === ele.length)
                ele[k].style.background = "green";
            else
                ele[k].style.background = "lightgreen";
            ele[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i<len1){
        await waitforme(delay);
        if(len1+len2 === ele.length)
            ele[k].style.background = "green";
        else
            ele[k].style.background = "lightgreen";
        ele[k].style.height = left[i];
        i++;
        k++;
    }
    while(j<len2){
        await waitforme(delay);
        if(len1+len2 === ele.length)
            ele[k].style.background = "green";
        else
            ele[k].style.background = "lightgreen";
        ele[k].style.height = right[j];
        j++;
        k++;
    }

}
async function mergeSort(ele, l, r){
    if(l>=r){
        return ;
    }
    const mid = l + Math.floor((r-l)/2);
    await mergeSort(ele, l, mid);
    await mergeSort(ele, mid+1, r);
    await merge(ele,l,mid,r);
}

var mergeSorting = document.querySelector(".merge");
mergeSorting.addEventListener('click', async function(){
    const ele = document.querySelectorAll(".bar");
    let l = 0;
    let r = parseInt(ele.length)-1;
    disableSize();
    disableNewArray();
    disableSortingBtn();
    await mergeSort(ele,l,r);
    enableSize();
    enableNewArray();
    enableSortingBtn();
});