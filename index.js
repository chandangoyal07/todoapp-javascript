let inputField = document.getElementById('inputField')
let addToBtn = document.getElementById('addToDo')
let toDoList = document.getElementById('toDoList')


addToBtn.addEventListener('click',function(){
         var paragraph =document.createElement('p')
         paragraph.innerText = inputField.value;
         toDoList.appendChild(paragraph);
         inputField.value=" ";
         
         paragraph.addEventListener('click',function(){
            paragraph.style.textDecoration ="line-through";
         })

         paragraph.addEventListener('dblclick',function(){
            toDoList.removeChild(paragraph);
         })
    })





 

 




























// const handlechange = (e) => {
//     e.target.value
//     console.log('addeddddd')
// }


// const subfunc = () => {
    
// }