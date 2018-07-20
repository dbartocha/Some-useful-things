/*
 <span class="tooltipText">Text tooltipa</span>
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log("Tooltips");

    var tool=document.querySelectorAll('.tooltip');
    console.log(tool);

    
    for(var i=0;i<tool.length;i++){
        tool[i].addEventListener('mouseover', function () {
            console.log(this.dataset.text);
            var newspan =document.createElement('span');
            newspan.classList.add('tooltipTezt');
            newspan.innerText='Dawid jest spoko';
            this.appendChild(newspan);
        })
        
        tool[i].addEventListener('mouseout', function () {
             this.removeChild(this.lastElementChild);

        })
    }
})