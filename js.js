showNotes()
let addbtn = document.getElementById('btntxt');
addbtn.addEventListener('click', function () {
    let addText = document.getElementById('addText');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
        notesObj.push(addText.value)
    localStorage.setItem('notes', JSON.stringify(notesObj))
    addText.value="";
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";

    notesObj.forEach(function(element, index) {
        html += `<div class="mx-3 my-3 card" style="width: 100%;">
    <div class="card-body">
        <h5 class="card-title">Note ${index + 1}</h5>
        <p class="card-text">${element}</p>
        <a class="btn btn-primary" id="${index}" onclick="Remove1(this.id)" >\u00D7</a>
    </div>
</div>`
    });
    let notesel = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesel.innerHTML = html;
    }
    else {
        notesel.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}
function Remove1(index){
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj))
    showNotes()


}
