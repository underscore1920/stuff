function password() {
    var password, reply;
    password = prompt("Enter the password (my favorite character's birthday)");
    if (password == "0207") {
      alert("godamn ur the goat");
      document.getElementById("linkToMain").setAttribute("class", "shown");
    } else {
      alert("thats wrong u bum");
    }
  }

function test() {
  alert("Just to make sure it's working")
  document.getElementById("linkToMain").setAttribute("class", "shown"); 
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();