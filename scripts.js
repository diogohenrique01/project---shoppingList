const input = document.getElementById("new-item")
const form = document.querySelector("form")
const items = document.querySelector("items")
const list = document.querySelector(".list")
const alertBox = document.querySelector(".alert")
const alertCloseBtn = document.querySelector(".close-alert")


//substituindo números por str vazias
input.addEventListener("input", (event)=> {
  const hasCharactersRegex = /\d+/g
  input.value = input.value.replace(hasCharactersRegex, "") 
})

//novo valor, que continua após os 4
let itemId = 5 

//obtento o item selecionado
form.addEventListener("submit", (event)=>{
  event.preventDefault()
  const itemText = input.value.trim()
  if (itemText === "") return

  const li = document.createElement("li")
  li.className = "items"
  li.innerHTML = `
    <input type="checkbox" id="item${itemText}" class="checkbox" />
    <label for="item${itemText}" class="item">${itemText}</label>
    <button class="icon-delete" aria-label="Remover item">
    <img class="frame" src="https://c.animaapp.com/mbi0tglf1RxiZ6/img/frame.svg" alt="Ícone de lixeira" />
    </button>
  `
  list.appendChild(li)
  itemId++
  input.value = ""

})

//remover item da lista com botão
list.addEventListener("click", (event)=>{
  if(event.target.closest(".icon-delete")){
    const li = event.target.closest("li")
    li.remove()
    showAlert()
  }
})
