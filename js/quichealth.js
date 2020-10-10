var dropCnt = 0;
function showDrop(){
    if(dropCnt == 0){
    document.querySelector(".dropdown-content1").style.display = "block";
    dropCnt++;
    }
    else{
    document.querySelector(".dropdown-content1").style.display = "none";
    dropCnt = 0;
    }
}