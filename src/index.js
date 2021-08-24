// document.addEventListener("DOMContentLoaded", (todo) => {
//   const addingText = document.getElementById('new-task-description')
//   addingText.textContent = todo.text
  // console.log(addingText);
  // or .innertext instead of .textContent
//     addingText.addEventListener('click', function(){
//     document.getElementById('new-task-description')
//     todoForm.textContent
    // console.log(form);
//     event.preventDefault();
  // })
  // e.preventDefault();
// });

// function 

// ////////// FROM VIDEO ////////
// document.addEventListener("DOMContentLoaded", () => {
// // function updateToDo(todo){
//   const text = document.querySelector('input#new-task-description');
//   console.log(text.textContent);
//   });

// document.querySelector('input#new-task-description').addEventListener("click", e => { 
//   console.log(e);
// });

////////////// MY CODE //////////////
//  document.addEventListener("DOMContentLoaded", () => {
//     document.querySelector('form').addEventListener('submit', e => {
//         e.preventDefault();
//         console.log(e.target['new-task-description'].value);
//     })
//   });

//   function updateToDo(todo) {
//     // console.log(todo);
//     let list = document.createElement('li');
//     list.textContent = ` ${todo}`
//     // console.log(list);
//     document.querySelector('#tasks').appendChild(p);

//   }





document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById('create-task-form');
  // console.log(newTaskForm);
  newTaskForm.addEventListener("submit", e => {
    e.preventDefault();
    renderTask(e.target.querySelector('input').value);
    newTaskForm.reset();
  })
})


function renderTask(userInput) {
  const newItem = document.createElement('li');
  const deleteButton = document.createElement('button');

  newItem.textContent = ` ${userInput}`;
  deleteButton.addEventListener('click', () => newItem.remove());

  tasks.appendChild(newItem);
  deleteButton.textContent = 'del';
  newItem.appendChild(deleteButton);

}




//////////// DELIVERABLES ///////////
// 1. As a user, I should be able to type a task into the input field => DONE
// 2. As a user, I should be able to click some form of a submit button.
// 3. As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.