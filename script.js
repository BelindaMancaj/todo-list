var todoInput = document.getElementById("todo-input"); //merr input field
var todoList = document.getElementById("todo-list"); //Merr gjithe listen(<ul>), brenda se ciles do vendosen todos

//Funksioni qe shton todo
const addTodo = (e) => {
  //Nje todo e re shtohet kur shtypet butoni Enter
  if (e.key == "Enter") {
    if (!e.target.value.match("^(?=.*[a-zA-Z0-9])")) {
      //regex per te kontrolluar nqs todo eshte bosh
      return;
    }
    //Krijohet elementi i listes
    var newTodo = document.createElement("li");
    //Krijohet span ku vendoset ikona
    var iconContainer = document.createElement("span");
    var binIcon = document.createElement("i");
    //class qe i shtohet ikones
    binIcon.setAttribute("class", "fa fa-trash");
    //Brenda span vendoset icon
    iconContainer.appendChild(binIcon);
    //Span vendoset brenda <li>
    newTodo.appendChild(iconContainer);
    //Elementit <li> te krijuar, i vendoset teksti i shkruar te input field
    newTodo.appendChild(document.createTextNode(e.target.value));
    //Listes <ul> i shtohet elementi i ri, <li> bashke me ikonen
    todoList.appendChild(newTodo);
    iconContainer.addEventListener("click", removeTodo);
    newTodo.addEventListener("click", completedTodo);
    todoInput.value = ""; //ben reset fushen e inputit, pas shtimit te nje todo te re
  }
};

todoInput.addEventListener("keydown", addTodo);

const removeTodo = (e) => {
  //Heq nga DOM elementin prind te span qe eshte <li>
  e.target.parentNode.remove();
};

const completedTodo = (e) => {
  const todo = e.target;
  //Vijezon todo e plotesur ose heq vijezimin
  todo.classList.toggle("completed");
};
