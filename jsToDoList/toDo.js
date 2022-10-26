// Input Field
let input = document.createElement('input')
input.setAttribute('type', 'text')
input.setAttribute('placeholder', "Enter something to-do")
input.classList.add('input')
document.body.appendChild(input)

// Create item button 
let createItem = document.createElement('button')
createItem.innerHTML = 'Add Item'
createItem.classList.add("create")
createItem.onclick = () => {
    newItemCreate()
}
document.body.appendChild(createItem)

// Create new element tethered to Add Item click
function newItemCreate() {
    let entry = document.createElement("card")
    let userInput = document.querySelector("input").value
    let userText = document.createTextNode(userInput)
    entry.appendChild(userText)
    
// Remove item button
    let removeItem = document.createElement('button')
    removeItem.innerHTML = 'Item Complete &#10004;'
    removeItem.classList.add('remove')
    removeItem.onclick = () => {
    // Delete Function
        entry.remove();       
    }
    entry.appendChild(removeItem)

    
// User Input Field
    if (userInput === '') {
        alert("You must first add an item")
    } else {
        document.body.appendChild(entry)
    }

    
}

// Remove text from input box on submission
    createItem.addEventListener("click", (event) => {
        event.preventDefault();
        input.value = "";
}
)






