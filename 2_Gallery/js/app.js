/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log("Gallery");
var list=document.querySelectorAll('li');
console.log(list);
var img1=document.querySelectorAll('img');
var body=document.querySelector('body');
console.log(body);

for(var i=0;i<img1.length;i++){
    img1[i].style.cursor='pointer';
}

for(var i=0;i<list.length;i++){
    list[i].addEventListener('click', function () {
        var img=this.querySelector('img');
        console.log(img.src);
        var newdiv=document.createElement('div');
        newdiv.classList.add('fullScreen');
        var newimg=document.createElement('img');
        newimg.src=img.src;
        var newbtn=document.createElement('button');
        newbtn.style.cursor='pointer';
        newbtn.classList.add('class');
        newbtn.innerText='Close';
        newdiv.appendChild(newimg);
        newdiv.appendChild(newbtn);
        body.appendChild(newdiv);

        newbtn.addEventListener('click',function () {
            body.removeChild(body.lastElementChild);

        })

    })
}

});