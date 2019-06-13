// /alert('connected')

// var h = document.createElement('h1')
// var myValue = document.createTextNode('Hello World!')
//
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h)



//    -----   WHILE LOOP -----

// var val = 5;
//
// while (val > 0) {
//   console.log(val);
//   val--;
// }

var ul=document.getElementById('list');
var li;



var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem);

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click',removeItem);


var removeallButton = document.getElementById('removeall')
removeallButton.addEventListener('click',removeallItem)




function addItem(){
  // console.log('Add button Clicked');

  var input = document.getElementById('input');
  var item = input.value;
  ul = document.getElementById('list');
  var textnode = document.createTextNode(item)

  if (item === "") {
    // return false;
    // Add a p tag and assign a value of "Enter your todo"

    var para = document.createElement('p')
    var element=document.getElementById('input')
    var node=document.createTextNode("Enter your todo")
    para.appendChild(node);
    element.append(para);

    var element = document.getElementById("container");

    para.style.opacity="1";
    input.style.opacity="1";

    element.append(node);
    para.className='visual';
    element.style.opacity="1"

    setTimeout(()=>{
      // node.style.opacity="0";
      node.remove();
    },3000)
  }
  else {
    //create li
    li=document.createElement('li')

    // create checkbox
    var checkbox = document.createElement('input')
    checkbox.type='checkbox';
    checkbox.setAttribute('id','check');

    // create label
    var label = document.createElement('label')
    label.setAttribute('for','item') // OPTIONAL

    //add these elemnts on webpage
    ul.appendChild(label);
    li.appendChild(checkbox);
    label.appendChild(textnode);
    li.appendChild(label);
    ul.insertBefore(li,ul.childNodes[0]);
     li.className = 'visual'

    setTimeout (()=>{
    li.className='visual';
  },0);

    input.value='';

  }


}


function removeItem(){
  li=ul.children          // Another way of doing this
   // console.log(li);        // Give elements of li

   for (var i = 0; i < li.length; i++) {
     while (li[i] && li[i].children[0].checked) {
        ul.removeChild(li[i])
     }
   }
}



function removeallItem(){
  li=ul.children
  for (var i = 0; i < li.length; i++) {
    ul.remove(li[i])
  }
}
