let ulList = document.getElementById("list");
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

eventListeners();

function eventListeners(){
    ulList.addEventListener('click', deleteAnItem);
    ulList.addEventListener('click', checkList, false);
}


function newElement(){
    let li = document.createElement("li");
    var inputValue = document.getElementById("task").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    
    if (inputValue === "") {
        $(".error").toast("show");
    } else {
        $(".success").toast("show");
        ulList.appendChild(li);
        document.getElementById("task").value = "";
    }

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

}

function deleteAnItem(e) {
    if (e.target.className == 'close') {
        e.target.parentElement.remove();
    }
}

function checkList(e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
    }
}