   const todolist =['make dinner', 'wash dishes'];
rendertodolist();
 function rendertodolist(){
  let todolistHTML ='';
 


 for (let i =0; i < todolist.length; i++){
  const todo = todolist[i];
  const html =` <P>${todo}</p>`
  todolistHTML += html;
 }
 console.log(todolistHTML);
 document.querySelector('.js-todo-list')  .innerHTML = todolistHTML;
}
 function addtodo(){
  const inputElement =document.querySelector('.js-name-input')
  const name = inputElement.value;
  todolist.push(name);
  console.log(todolist);
  inputElement.value='';
  rendertodolist();
 }