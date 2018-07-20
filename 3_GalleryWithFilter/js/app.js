document.addEventListener('DOMContentLoaded', function() {
    console.log("GalleryWithFilter ");

    var img=document.querySelectorAll('img');
    console.log(img);
    var show=document.querySelector('#showButton');
    console.log(show);
    var hide=document.querySelector('#hideButton');
    console.log(hide);
    var input=document.querySelector('input');
    console.log(input);


    show.addEventListener('click',function () {


        for(var i=0;i<img.length;i++){
            if(img[i].dataset.tag.indexOf(input.value) !=-1){
            img[i].classList.remove('invisible');
        }}
        input.value='';
    })

    hide.addEventListener('click',function () {


        for(var i=0;i<img.length;i++){
            if(img[i].dataset.tag.indexOf(input.value) !=-1){

                img[i].classList.add('invisible');
        }}
        input.value='';
    })

})
