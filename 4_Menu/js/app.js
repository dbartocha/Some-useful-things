document.addEventListener('DOMContentLoaded', function() {
    console.log("Menu ");
var elements=document.querySelectorAll('.nav > ul > li');
console.log(elements);


for(var i=0;i<elements.length;i++){
    elements[i].addEventListener('mouseover', function () {
        var li=this.querySelectorAll('li');
        var ul=this.querySelector('ul');
        if(li.length>0){
               ul.style.display='block';
           }
    })

    elements[i].addEventListener('mouseout', function () {
        var li=this.querySelectorAll('li');
        var ul=this.querySelector('ul');
        if(li.length>0){
            ul.style.display='none';
        }
    })


}

})