function validate() {
  var fname = document.getElementById("fname").value;
  var EMail = document.getElementById("EMail").value;
  var lname = document.getElementById("lname").value;
  var message = document.getElementById("message").value;

  if (fname === "") {
    alert("Please provide your first name!");
    document.myform.fname.focus();
    return false;
  }
  
  if (lname === "") {
    alert("Please provide your last name!");
    document.myform.lname.focus();
    return false;
  }

  if (EMail === "") {
    alert("Please provide your Email!");
    document.myform.EMail.focus();
    return false;
  }

  if (message === "") {
    alert("Please fill in your enquiry!");
    document.myform.message.focus();
    return false;
  }

  alert("Thanks for submitting!");
  document.myform.reset();
  return false;
}
