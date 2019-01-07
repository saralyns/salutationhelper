function copy() {
  /* Get the text field */
  var copyText = document.getElementById("salutation");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}

// to salutation, append name and department
function create() {
  // clear salutation
  var formemail = document.getElementById("formemail");

  var name = document.getElementById("name").value;
  var dept = document.getElementById("department").value;
  var sig = document.getElementById("signature").value;
  
  var greet = document.getElementById("greeting");
  greet.innerHTML = "";
  
  var insertdept = document.getElementById("insertdept");
  insertdept.innerHTML = "";
  
  var close = document.getElementById("closing");
  close.innerHTML = "";
  
  greet.append(name);
  insertdept.append(dept);
  close.append(sig);

  /* Alert the copied text 
    alert("Updated the greeting with name: " + name + " and department: " + dept); */
}

function CopyToClipboard(containerid) {
if (document.selection) { 
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("copy"); 

} else if (window.getSelection) {
    var range = document.createRange();
     range.selectNode(document.getElementById(containerid));
     window.getSelection().addRange(range);
     document.execCommand("copy");
     alert("text copied") 
}}