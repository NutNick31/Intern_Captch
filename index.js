var checkbox = document.getElementById("checkbox");
var submit_Button = document.querySelector("button");
var elements = document.querySelectorAll(".element");
var divi = document.getElementsByClassName(".row");
var colorSelected = document.querySelector("#colorSelected");
var pops = document.getElementsByClassName(".popupImageImg")
const url = ["https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600/", "https://assets.leetcode.com/uploads/2021/05/12/shortest1-graph.jpg", "https://source.unsplash.com/user/c_v_r/1900x800", "https://source.unsplash.com/user/c_v_r/100x100", "https://source.unsplash.com/user/c_v_r/1600×900", "https://picsum.photos/id/237/200/300"];
let randomNumber1 = (Math.floor(Math.random()*5));
elements.forEach((element) => {
    console.log(randomNumber1);
    element.setAttribute("src", url[randomNumber1]);
    if(randomNumber1<5) randomNumber1++;
    else randomNumber1 = 0;
});

elements.forEach((element) => {
    element.addEventListener("click", () => {
        element.style.width = "100vw";
        element.style.height = "100vh";
        alert("You completed the task.");
    });
});  