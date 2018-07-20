document.addEventListener('DOMContentLoaded', function() {
    console.log("Slider");

var prev=document.querySelector('#prevPicture');
var next=document.querySelector('#nextPicture');
console.log(prev);
console.log(next);
var list=document.querySelectorAll('li');

var indeks=0;

var arr=[];

for (var i=0;i<list.length;i++){
    arr.push(list[i]);
}
indeks;
arr[indeks].classList.add('visible');

console.log(arr);

next.addEventListener('click', function () {
    indeks++;
    if(indeks<arr.length) {

        arr[indeks - 1].classList.remove('visible');
        arr[indeks].classList.add('visible');
    }
    else {
        indeks=0;
        arr[indeks].classList.add('visible');
        arr[arr.length-1].classList.remove('visible');
    }
})

    prev.addEventListener('click', function () {
        indeks--;
        if (indeks>=0){
            arr[indeks+1].classList.remove('visible');
            arr[indeks].classList.add('visible');
        }
        else  {
            indeks=arr.length-1;
            arr[0].classList.remove('visible');
            arr[arr.length-1].classList.add('visible');
        }
    })


    //Po dotarciu do ostatniego obrazka lub cofnieciu pierwszego nie pokazuje sie nic.
})