document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
handleToDo(e.target,new_todo.value);
});
});
function handleToDo(todo){
  let p = document.createElement("p")
  let btn = document.createElement("button")
  btn.textContents = "x"
  p.textContents = todo;
document.querySelector("#todo_container").appendChild(p);
}
var row = 0;
function addText(){
    var input = document.getElementById('inputTask').value;
    if(input != "")
    {
    var node=document.createElement("p");
    var textnode=document.createTextNode(input);
    node.appendChild(textnode);
        node.setAttribute("id","contentP"+row);
    document.getElementById('addTask').appendChild(node);

    var removeTask = document.createElement('input');
    removeTask.setAttribute('type', 'button');
    removeTask.setAttribute("value", "Remove");
    removeTask.setAttribute("id", "removeButton");
    removeTask.setAttribute("onClick", "deleterow("+ row +");");

    node.appendChild(removeTask);
        row++;
    }
    else
    {
        alert("Please insert a value!");
    }

}
function deleterow(ID)
{
    document.getElementById('contentP'+ID).remove();
}