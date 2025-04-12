const addBtn = document.querySelector(".add-btn");

// event handler function to add item to the list
function handleAddBtnClick(){
  const listItem = document.createElement("li");
  
  const inputField = document.querySelector(".input-field");
  const inputText = inputField.value;
  
  const para = document.createElement("p");
  para.textContent = inputText;
  para.style.display = "inline";
  
  listItem.appendChild(para);
  
  // add a remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "remove";
  removeBtn.style.marginLeft = "1rem";
  
  
  listItem.appendChild(removeBtn);
  
  function handleRemoveItem(){
    listItem.remove();
  }
  
  // fire event handler once the remove button is clicked
  removeBtn.addEventListener("click", handleRemoveItem);
  
  const shoppingList = document.createElement("ul");
  shoppingList.appendChild(listItem);
  
  const sect = document.querySelector(".shopping-list");
  sect.appendChild(shoppingList);
  
  
  inputField.focus();
  inputField.value = "";
}

// fire event handler once add button is clicked
addBtn.addEventListener("click", handleAddBtnClick);





/*****************************************


* create a list item
     -- add a para by grabbing text from input
     -- add a remote list item button





******************************************/
