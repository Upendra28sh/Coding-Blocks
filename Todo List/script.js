let todobox=document.getElementById('todo');
let addbtn=document.getElementById('btn');
let todolist=document.getElementById('list');

addbtn.onclick = function() {
	let todo=todobox.value;
	let newTaskListItem = document.createElement('li');
	newTaskListItem.innerText=todo;
	todolist.appendChild(newTaskListItem);
}
