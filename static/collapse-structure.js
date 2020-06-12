function findInCollection(collection, item){
    for (let q = 0; q < collection.length; q++){
        if(collection[q] === item){return true;}
    }
    return false;
}

function collapseExpandProfileItem(thisElem) {
    thisElem.firstChild.nextSibling.classList.toggle("down-link");
    //thisElem.classList.toggle("activeS");
    $content = $(thisElem).next();
    $content.slideToggle(100, function () {});
}

String.prototype.replaceAt=function(index, replacement) {
  return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

function openEditor() {
  let location = window.location.href.replace('profiles', 'edit').replace('.html', '');
  window.location.replace(location.replaceAt(location.lastIndexOf('/'), '&'));
}

let dropdown = document.getElementsByClassName("el-header");
for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        if (this.nextSibling != null){
            if (findInCollection(this.nextSibling.classList, "el-cnt")){
                collapseExpandProfileItem(this);
            }
        }
    });
}

