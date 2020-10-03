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
    
    var taskObj = new TaskTemp(id,taskElem,0);
    console.log(taskObj);
    alert(taskObj.tID);
    

    arrObj.push(taskObj);
    console.log(arrObj);

    
    
    id = id+1;
}