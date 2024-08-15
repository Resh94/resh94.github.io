
// document.querySelector("html").addEventListener("click", function () {
//     alert("Ouch! Stop poking me!");
//   });
var heading = document.querySelector("h1");
var img = document.querySelector("img");
var btn = document.querySelector("button");

img.addEventListener("click", function () {
  //  alert("image clicked");
   if (img.getAttribute("src") === "images/firefoxicon.png") {
        img.setAttribute("src", "images/firefox2.jpeg");
   } else {
        img.setAttribute("src", "images/firefoxicon.png");
   }
});


function setUserName() {
    var name = prompt("Enter user name:");

    if (name) {
        localStorage.setItem("name", name);
        heading.textContent = "Mozilla is cool, " + name;
    } else {
        setUserName();
    }
}
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    heading.textContent = `Mozilla is cool, ${storedName}`;
  }
btn.addEventListener("click", setUserName);
