function saveEdits() {
  //get the editable element
  var editElem = document.getElementById("edit");

  //get the edited element content
  var userVersion = editElem.innerHTML;

  //save the content to local storage
  localStorage.userEdits = userVersion;

  //write a confirmation to the user
  document.getElementById("update").innerHTML = "Edits saved!";
}

function checkEdits() {
  //find out if the user has previously saved edits
  if (localStorage.userEdits != null)
    document.getElementById("edit").innerHTML = localStorage.userEdits;
  document.getElementById("profileData").addEventListener("");
}
