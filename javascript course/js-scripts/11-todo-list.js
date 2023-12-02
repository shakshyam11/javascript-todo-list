   const todolist =[/*{name :'make dinner', 
                     duedate : '2022-12-22'},
                     {name :'wash dishes',
                     duedate:'2022-12-22'}*/];
rendertodolist();
 function rendertodolist(){
  let todolistHTML ='';
 


 for (let i =0; i < todolist.length; i++){
  const todoObject = todolist[i];
  //const name = todoObject.name;
  const duedate =todoObject.duedate;

  const {name }= todoObject;

  const html =` 
   <div class = "">${name}</div>
   <div>${duedate}</div>
   <button class = "delete-todo-button" onclick = "todolist.splice(${i},1);
  rendertodolist();">Delete</button>`;
  todolistHTML += html;
 }
 
 document.querySelector('.js-todo-list')  .innerHTML = todolistHTML;
}
 function addtodo(){
   const dateInputElement= document.querySelector('.js-due-date-input');

   const duedate= dateInputElement.value;

  const inputElement =document.querySelector('.js-name-input');

  const name = inputElement.value;
  
   if (!name.trim()){
      alert('please type something before adding')
   }else if(!duedate.trim()){
      alert('plese insert date');
      
      
   }else{todolist.push({//name: name,
      //duedate: duedate
      name,duedate});
   rendertodolist();
}
       
  inputElement.value='';
  
 }
 