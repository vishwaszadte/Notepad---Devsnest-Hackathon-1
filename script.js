// For refernece and the exact positioning of each function refer to prototype.js

// all the elements necessary
var fileContent = document.getElementsByClassName("notetext");
const newNoteBtn = document.getElementById("newNoteBtn");
const textarea = document.getElementById("noteText");
const notesArea = document.getElementById("notesArea");
const boldBtn = document.getElementById("boldIconBtn");
const italicsBtn = document.getElementById("italicsIconBtn");
const underlineBtn = document.getElementById("underlineIconBtn");
const saveBtn = document.getElementById("saveBtn");
const copyBtn = document.getElementById("copyBtn");
let notesList = document.getElementsByClassName("note")

let notes = [];
let notesCount = 0;
let currNoteIndex = 0;

// when the user clicks on the new note button,
// 1. the textarea becomes visible
// 2. a new note div is added to the div .notesArea 
// 3. increment the notesCount
newNoteBtn.addEventListener("click", (e) => {
  textarea.classList.remove("hide");
  textarea.value = "";
  notesCount++;
  if (notesCount > 1) {
    notesList[currNoteIndex].classList.remove("highlight");
  }
  currNoteIndex = notesCount - 1;

  const leftNote = document.createElement("div");
  leftNote.setAttribute("class", "note");
  leftNote.setAttribute("id", "note");
  leftNote.innerHTML = `#Note ${notesCount}`;
  leftNote.classList.add("highlight");

  // leftNote.onclick = () => {
  //   notesList[currNoteIndex].classList.remove("highlight");
  //   currNoteIndex = i;
  //   notesList[currNoteIndex].classList.add("highlight");
  //   textarea.innerHTML = notes[i];
  // }

  notesArea.appendChild(leftNote);
  notes.push("");
  console.log(notesList[currNoteIndex]);
})

// for every note
// notesList.forEach((note, index) => {
//   note.addEventListener("click", () => {
//     if (notesCount > 1) {
//       notesList[currNoteIndex].classList.remove("highlight");
//     }
//     currNoteIndex = index;
//     notesList[currNoteIndex].classList.add("highlight");
//     textarea.innerHTML = notes[index];
//   })
// })

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(textarea.value)
    .then(() => {
      alert("text copied successfully");
    })
    .catch(() => {
      alert("text copying failed");
    })
})


// when the user clicks on the save button
// 1. the text in textarea is saved to the notes array at the current note index
saveBtn.addEventListener("click", (e) => {
  notes[currNoteIndex] = textarea.value;
  console.log(notes);
})

// Everything inside bottomIcons <div> comes under copyContent() & saveContent() functions
// function to copy the dynamic text 
// Same as the changeStyle command I have created a onclick function just before the copy tag that's created

/*boldBtn.addEventListener("click", boldText);
function boldText() {
  if (document.getElementById("noteText").style.fontWeight === 700)
    document.getElementById("noteText").style.fontWeight = 'normal';
  else
    document.getElementById("noteText").style.fontWeight = 700;

}

italicsBtn.addEventListener("click", italicText);
function italicText() {
  if (document.getElementById("noteText").style.fontStyle === 'italic')
    document.getElementById("noteText").style.fontStyle = 'normal';
  else
    document.getElementById("noteText").style.fontStyle = 'italic';

}

underlineBtn.addEventListener("click", underlineText);
function underlineText() {
  if (document.getElementById("noteText").style.textDecoration === 'underline')
    document.getElementById("noteText").style.textDecoration = 'none';
  else
    document.getElementById("noteText").style.textDecoration = 'underline';

}*/