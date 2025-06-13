let openModalBtn = document.getElementById("btnLaunch");
let modal = document.getElementById("modal"); /* ==> modal container */
let saveChangesBtn = document.getElementById("save-btn");
let closeModalBtn = document.getElementById("close-btn");

/*open*/
function openModal() {
  modal.classList.add("open");
}
openModalBtn.addEventListener("click", openModal);

/*save*/
function saveChanges() {
  modal.classList.remove("open");
  console.log("Changes Saved");
  alert("Changes Saved");
}
saveChangesBtn.addEventListener("click", saveChanges);

/*close*/
function closeModal() {
  modal.classList.remove("open");
}
closeModalBtn.addEventListener("click", closeModal);
