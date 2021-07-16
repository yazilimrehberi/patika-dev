let counter = 1;
function add(){
    let val = document.getElementById("bugun").value;
    if(val == "" || val.replaceAll(' ', '').length == 0){
        document.getElementById("my-toast").style.opacity = 1;
    } else {
        document.getElementById("my-toast").style.opacity = 0;
        let element = document.createElement("li");
        element.className = "list-group-item list-group-item-action d-flex justify-content-between align-items-center my-list-item ps-5";
        element.id = "list-select-" + counter;
        element.innerHTML = val + "<span class='close' id='list-close-" + counter + "' onclick='listClose(this.id)'>×</span>";
        counter++;
        document.getElementById('my-ul').appendChild(element);
        element.setAttribute("onclick", "listSelect(this.id)");
        document.getElementById("bugun").value = "";
    }
}
function toastClose(){
    document.getElementById("my-toast").style.opacity = 0;
}

function listClose(id){
   document.getElementById(id).parentNode.remove();
}

function listSelect(id) {
    let myId = document.getElementById(id);
    let spanId = "list-close-" + id.slice(12);
    let cList = String(myId.classList).includes("li-click");

    if (cList == true){
        myId.classList.remove("li-click");
        document.getElementById(spanId).classList.remove("span-click");
    } else {
        myId.classList.add("li-click");
        document.getElementById(spanId).classList.add("span-click");
    }


}