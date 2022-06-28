let menu=document.getElementById('menu')
let links=document.getElementById('forLinks')
let pages=[document.getElementById('page1'),document.getElementById('page2')]
let currentPage=0
function slide(){
    if(menu.style.width=="200px"){
        menu.style.width="50px"
        links.style.display="none"
    }else{
        menu.style.width="200px"
        links.style.display="flex"
    }
}
function nextPage(){
    pages[currentPage].style.display="none"
    pages[currentPage+1].style.height="100%"
    currentPage++
}
function previousPage(){
    if(currentPage>0){
        pages[currentPage].style.display="none"
        pages[currentPage-1].style.height="100%"
        currentPage--
    }
}