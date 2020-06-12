function findInCollection(collection, item){
    for (let q = 0; q < collection.length; q++){
        if(collection[q] === item){return true;}
    }
    return false;
}

function rollUpMenu(curItem = null) {
    let dropdown = document.getElementsByClassName("item");
    for (let i = 0; i < dropdown.length; i++) {
        if (dropdown[i] !== curItem){
            let dropdownContent = dropdown[i].nextSibling;
            dropdownContent.style.display = "none";
        }
    }
}

function getElems(){
    let dropdownItems = document.getElementsByClassName("item");
    for (let i = 0; i < dropdownItems.length; i++){
        if (findInCollection(dropdownItems[i].classList, "active")){
            dropdownItems[i].setAttribute("href", "javascript:void(0)");
            return(dropdownItems[i]);
        }
    }
    let nestedItems = document.getElementsByClassName("nested");
    for (let j = 0; j < nestedItems.length; j++){
        if (findInCollection(nestedItems[j].classList, "active")){
            return(nestedItems[j].parentNode.previousSibling);
        }
    }
    return(null);
}

$(document).ready(function(){
    let activeElem = getElems();
    rollUpMenu(activeElem);
});

$(".item").click(function (){
    $content = $(this).next();
    $content.slideToggle(100, function () {});
});


