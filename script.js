let myLibrary = [];
const table = document.getElementById("bookTable");
let counter = 1;
function Book(title , author){
    this.title = title;
    this.author = author;
    this.id = crypto.randomUUID();
    this.read = false;
}

function addBookToLibrary( title, author){
    if( title.trim() != "" || author.trim() != ""){
    const newBook = new Book( title, author);
    myLibrary.push(newBook);
    libraryDisplay();
    document.getElementById('form').reset();
    }
   

}

function libraryDisplay( title, author){
    // we have to delte the previous rows when the button is clicked, otherwise they
    // will stack
    


    table.innerHTML = "";
    table.innerHTML = `
    
    <tr>  
        <td>Title</td> 
        <td>Author</td> 
    </tr>
    ` ;
    
    
      
    
                            

    for( const book of myLibrary){
        let row = table.insertRow();
        let btn = document.createElement("button");
        let toggleBtn = document.createElement("button");
        btn.textContent = "remove";
        toggleBtn.textContent = "toggle read"
        row.dataset.id = book.id;
        row.insertCell().textContent = book.title;
        row.insertCell().textContent = book.author;
        row.insertCell().appendChild(btn);
        row.insertCell().appendChild(toggleBtn);
        btn.addEventListener("click", () => {
             myLibrary = myLibrary.filter( book => book.id !== row.dataset.id );
             row.remove();
        })
        toggleBtn.addEventListener("click", () => {
            book.toggleRead();
            console.log(book.read);
        })

    }
  }

  Book.prototype.toggleRead = function () {
            this.read = !this.read;
  };


