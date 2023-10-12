import { createItem, getItems } from "./api.js";
import { beforeSize, updatebeforeSize} from "./config.js";



export async function GenName(items){
  const username = document.getElementById("user");
  let num = Math.floor(Math.random() * 487);
  username.value = items.animal[num];
  console.log(num + " " + items.animal[num]);
}

function drawTable(items) { //finish
  const text_area = document.getElementById("chat-messages");
  // Clear all elements
  text_area.innerHTML = "";

  for (const item of items) {
    const username = document.getElementById("user");
    const usertag = document.createElement("h4");
    usertag.innerText = item.name;
    const newElement = document.createElement("div");
    const Message = document.createElement("p");
    if(item.name == username.value){
      newElement.className = "message from-me";
    }
    else{
      newElement.className = "message from-other";
    }
    
    Message.textContent = item.text;
    newElement.appendChild(usertag);
    newElement.appendChild(Message);
    text_area.appendChild(newElement);
  }
}

export async function checkSize(){
  const items = await getItems("items");
  let size = 0;
  for(const item of items){
     size++;
  }
  updatebeforeSize(size);
}

export async function startDraw(){
  const items = await getItems("items");
  const messages = document.getElementById("chat-messages");
  drawTable(items);
  scrollToBottom(messages);
}

export async function fetchAndDrawTable() { //finish
  const items = await getItems("items");
  const messages = document.getElementById("chat-messages");
  let size = 0;
  for(const item of items){
    size++;
  }
  console.log(size);
  if(size != beforeSize){
    drawTable(items);
    scrollToBottom(messages);
  }
  updatebeforeSize(size);
}

export async function CreateText() { //finish
  const nameToadd = document.getElementById("user");
  const textToadd = document.getElementById("message");
  
  if(textToadd.value == "") return;
  if(nameToadd.value == ""){
    window.alert("Username Required.");
    return;
  }

  const Data = {
    name: nameToadd.value,
    text: textToadd.value,
  };
  textToadd.value = "";
  await createItem(Data,"items");
  await fetchAndDrawTable();

  textToadd.value = "";
}

export async function scrollToBottom(messages) {
  messages.scrollTop = messages.scrollHeight;
}