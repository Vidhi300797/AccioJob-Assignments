const listItems = document.querySelectorAll('.list-item')
const boxes = document.querySelectorAll('.box')

let draggedItem = null;
for (let i = 0; i < listItems.length; i++) {
    const item = listItems[i]

    //Event Listener for Draggable items-listItems
    item.addEventListener("dragstart", dragstart)

    function dragstart(e) {
        draggedItem = item;
        console.log("id", e.target.id);
        e.dataTransfer.setData("text", e.target.id)
    }

    item.addEventListener("dragend", dragend)

    function dragend(e) {
        e.preventDefault();
    }
}

//Event Listeners for Target Item - Box

for (let j = 0; j < boxes.length; j++) {
    const list = boxes[j];
    list.addEventListener('dragover', (e) => {
        e.preventDefault()
        list.style.backgroundColor = 'rgba(0,0,0,0.1)'
    })
    list.addEventListener('dragenter', (e) => {
        e.preventDefault()
    })
    list.addEventListener('dragleave', () => {
        list.style.backgroundColor = 'rgba(0,0,0, 0.1)'
    })
    list.addEventListener('drop', (e) => {
        if ( e.target.children.length < 3) {
            e.target.appendChild(draggedItem)
            list.style.backgroundColor = 'rgba(0,0,0, 0.1)'
        }
    })

}