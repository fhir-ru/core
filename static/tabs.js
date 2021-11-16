function openTab(tabName) {
  var i;
  var x = document.getElementsByClassName("treecontainer");
  var tabs = document.getElementsByClassName("navbutton");
  var content = document.getElementById(tabName);
  var tab = document.getElementById(`${tabName}-tab`);
  console.log(tab);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("tabActive");
  }
  content.style.display = "block";
  tab.classList.add("tabActive");
}
