let btn=document.querySelector("button");
// btn.onclick=function(){
//     console.log("button is clicked");
// };
btn.addEventListener("click",function(){
    let head=document.querySelector("h2");
    let text=random();
    head.innerText = text;
    head.style.color=text;

    let box=document.querySelector("div");
    box.style.backgroundColor=text;
});

function random(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    return (`rgb(${red},${green},${blue})`);
};