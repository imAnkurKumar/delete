// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = "Ankur Kumar";
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = "Ankur"
// console.log(document.forms);
// console.log(document.images);
// const headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'Ankur';
// headerTitle.innerText = 'Kumar';
// console.log(headerTitle.innerText);

// const header= document.getElementById('main-header');
// header.style.border = 'solid 2px #000';

// const title = document.querySelector(".title");
// title.style.fontWeight = 'bold';
// title.style.color = 'green';

// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello2';
// items[3].style.backgroundColor = 'red';
// for(var i = 0; i<items.length; i++){
//  items[i].style.backgroundColor = 'green';
// }
// items[5] = 'item5';
// console.log(items);

// const secondItem = document.querySelector('.list-group-item:nth-child(2)');

// secondItem.style.backgroundColor = 'green';

// const thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = 'none';


// const seconditem = document.querySelectorAll('li:nth-child(2)');
// seconditem[0].style.color = 'green';

// const odditem = document.querySelectorAll('li:nth-child(odd)');
// for(var i = 0; i<odditem.length; i++){
//  odditem[i].style.backgroundColor = 'green';
// }


// //TRAVERSING THE DOM
// var itemlist = document.querySelector('#items');
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = 'black';
// console.log(itemlist.parentNode.parentNode);


// //PARENT ELEMENT
// var itemlist = document.querySelector('#items');
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = 'black';
// console.log(itemlist.parentElement.parentElement.parentElement);

// //CHILDNODES
// var itemlist = document.querySelector('#items');
// console.log(itemlist.childNodes);
// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor = 'green';

// //FIRSTCHILD

// console.log(itemlist.firstChild);


// //FIRST ELEMENT CHILD

// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = 'Hello45';

// // LAST ELEMENT CHILD
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = 'Hello45';

// console.log(itemlist.lastChild);

// //NEXT SIBLING

// console.log(itemlist.nextSibling);

// console.log(itemlist.nextElementSibling);

// //PREVIOUS SIBLING

// console.log(itemlist.previousElementSibling);

// console.log(itemlist.previousSibling);
// itemlist.previousElementSibling.style.color = 'yellow';


//CREATE A DIV

// const newDiv = document.createElement('div');

//Add Class

// newDiv.className = 'hello';
// newDiv.id = 'hello1';

//Add Attribute

// newDiv.setAttribute('title', 'Hello Div');

//Create Text Node

// newDivText = document.createTextNode('Hello World');
// newDiv.appendChild(newDivText);
// const container = document.querySelector('header .container');

// const h1 = document.querySelector('header h1');

// console.log(newDiv);
// container.insertBefore(newDiv,h1);


//event

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}