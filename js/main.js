var ulElem = document.getElementById("list-items");


function TaskTemp(tID,task,tComplete) {
    this.tID = tID;
    this.task = task;
    this.tComplete = tComplete;
};

var id = 1;
var arrObj = [];

function addTask(){
    var taskElem = document.getElementById("inputTask").value;
    
    //alert(taskElem);

    //var myArr = new Array();
    //myArr.push(taskElem);

    //alert(id);
    if(taskElem.length!=0){

    
    
    var taskObj = new TaskTemp(id,taskElem,0);
    //console.log(taskObj);
    //alert(taskObj.tID);
    

    arrObj.push(taskObj);
    //console.log(arrObj);

    addToList(taskObj.task,taskObj.tID);
    
    id = id+1;
    }
    else{
        alert("Please Enter Task!");
    }
}

function addToList(passedTask, taskId){
    

    var li = document.createElement("li");

    var cb = document.createElement("INPUT");
    var btnElem1 = document.createElement("Button");
    var btnElem2 = document.createElement("Button");

    btnElem1.appendChild(document.createTextNode("Confirm"));
    btnElem1.setAttribute("class","checkbtn checkrotate");
    btnElem1.setAttribute("id","conf_"+taskId);
    btnElem1.setAttribute("onclick","onConfirm(this)");

    btnElem2.appendChild(document.createTextNode("Cancel"));
    btnElem2.setAttribute("class","cancelbtn checkrotate");
    btnElem2.setAttribute("id","canc_"+taskId);
    btnElem2.setAttribute("onclick","onCancel(this)");

    cb.setAttribute("type", "checkbox");
    cb.setAttribute("id","cb_"+taskId);
    cb.setAttribute("onclick","onCheck(this)");
    //cb.setAttribute("class","checkrotate");
    li.appendChild(cb);
    li.appendChild(btnElem1);
    li.appendChild(btnElem2);
    li.appendChild(document.createTextNode(passedTask));
    
    li.setAttribute("id", "id_"+taskId);
    ulElem.appendChild(li);

    
}

function onCheck(id){
    //console.log(id.id);
    var liElem = document.getElementById("id_"+id.id.substring(3));
    //console.log(liElem);
    var cbElem = document.getElementById(id.id);
    cbElem.classList.add("checkrotate");
    var btnElem1 = document.getElementById("conf_"+id.id.substring(3));
    btnElem1.classList.remove("checkrotate");

    var btnElem2 = document.getElementById("canc_"+id.id.substring(3));
    btnElem2.classList.remove("checkrotate");
    
    //liElem.appendChild(btnElem1);
}

function onConfirm(id){
    
    //console.log(orig_Task);
    var btnElem1 = document.getElementById("conf_"+id.id.substring(5));
    btnElem1.classList.add("checkrotate");

    var btnElem2 = document.getElementById("canc_"+id.id.substring(5));
    btnElem2.classList.add("checkrotate");
    
    var orig_Task = document.getElementById("id_"+id.id.substring(5)).innerHTML;
    var new_Html = "<del>"+orig_Task+"</del>";
    document.getElementById("id_"+id.id.substring(5)).innerHTML = new_Html;

}

function onCancel(id){
    var cbElem = document.getElementById("cb_"+id.id.substring(5));
    cbElem.classList.remove("checkrotate");
    cbElem.checked = false;
    var btnElem1 = document.getElementById("conf_"+id.id.substring(5));
    btnElem1.classList.add("checkrotate");

    var btnElem2 = document.getElementById("canc_"+id.id.substring(5));
    btnElem2.classList.add("checkrotate");
}