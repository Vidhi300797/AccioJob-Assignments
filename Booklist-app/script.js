const title=document.querySelector("#title")
const author=document.querySelector("#author")
const isbn=document.querySelector("#isbn")
const submitBtn=document.querySelector(".btn")
const booklist=document.querySelector(".result-book")

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    
    if(title.value==""&&author.value==""&&isbn.value==""){
        alert("Add the details of book")
    }else{
        const body=document.createElement("tr")

        const titleEl=document.createElement("th")
        titleEl.innerHTML=title.value
        body.appendChild(titleEl)
        const authorEl=document.createElement("th")
        authorEl.innerHTML=author.value
        body.appendChild(authorEl)
        const isbnEl=document.createElement("th")
        isbnEl.innerHTML=isbn.value
        body.appendChild(isbnEl)

        booklist.appendChild(body)
        title.value=''
    author.value=''
    isbn.value=''
    }
})