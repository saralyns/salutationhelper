// to salutation, append name and department
function create() {
  // clear salutation
  var formemail = document.getElementById("formemail");

  var name = document.getElementById("name").value;
  var dept = document.getElementById("department").value;
  var sig = document.getElementById("signature").value;
  var q = document.getElementById("quarter").value;

  var greet = document.getElementById("greeting");
  greet.innerHTML = "";

  var insertdept = document.getElementById("insertdept");
  insertdept.innerHTML = "";

  var close = document.getElementById("closing");
  close.innerHTML = "";

  var qtr = document.getElementById("qtr");
  qtr.innerHTML = "";

  greet.append(" " + name);
  insertdept.append(dept);
  close.append(sig);
  qtr.append(q);

  var title = document.getElementById("s1title").value;
  var link = document.getElementById("s1link").value;
  var day = document.getElementById("s1day").value;
  var time = document.getElementById("s1time").value;
  var desc = document.getElementById("s1desc").value;

  var sem1 = document.getElementById("sem1");
  sem1.innerHTML = sem(title, link, day, time, desc);

  title = document.getElementById("s2title").value;
  link = document.getElementById("s2link").value;
  day = document.getElementById("s2day").value;
  time = document.getElementById("s2time").value;
  desc = document.getElementById("s2desc").value;
  
  var sem2 = document.getElementById("sem2");
  sem2.innerHTML = sem(title, link, day, time, desc);

  title = document.getElementById("s3title").value;
  link = document.getElementById("s3link").value;
  day = document.getElementById("s3day").value;
  time = document.getElementById("s3time").value;
  desc = document.getElementById("s3desc").value;
  
  var sem3 = document.getElementById("sem3");
  sem3.innerHTML = sem(title, link, day, time, desc);
}

function sem(title, link, day, time, desc) {
  var finaldesc =
    "<p><b><a href='" +
    link +
    "'>" +
    title +
    "</a></b></p><p>" +
    day +
    " | " +
    time +
    "</p><p>" +
    desc +
    "</p>";
  return finaldesc;
}
