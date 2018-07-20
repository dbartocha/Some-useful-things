document.addEventListener('DOMContentLoaded', function() {
    console.log("To do List");

    var task=document.querySelector('#addTaskButton');


    var remove=document.querySelector('#removeFinishedTasksButton');


    var ul=document.querySelector('ul');


    var input=document.querySelector('input');

    var body=document.querySelector('body');
    var counter=0;
    var newp=document.createElement('p');
    newp.innerText=parseInt(counter);
    body.insertBefore(newp,input);




    task.addEventListener('click',function () {
        if (input.value.length >= 5 && input.value.length <= 100){
            var newli = document.createElement('li');

        var newh1 = document.createElement('h1');
        newh1.innerText = input.value;
        var newbtn = document.createElement('button');
        newbtn.innerText = 'Delete';
        var newbtn1 = document.createElement('button');
        newbtn1.innerText = 'Complete';
        input.value = '';
        newli.appendChild(newh1);
        newli.appendChild(newbtn);
        newli.appendChild(newbtn1);
        ul.appendChild(newli);

        newbtn.addEventListener('click', function () {
            var li = this.parentElement;
            li.parentElement.removeChild(li);
        })
        newbtn1.addEventListener('click', function () {
            var li = this.parentElement;
            var h = li.firstElementChild;

            if (h.style.color == 'red') {
                h.style.color = 'black';
            }
            else {
                h.style.color = 'red';
            }


        })

        remove.addEventListener('click', function () {

            var ul = this.previousElementSibling;
            var li = ul.querySelectorAll('li');
            var h = li.firstElementChild;

            for (var i = 0; i < li.length; i++) {
                var h = li[i].firstElementChild;

                if (h.style.color == 'red') {
                    ul.removeChild(li[i]);
                }
            }


        })

    }

    else{
            alert("Tekst jest za krótki!!!");
        }
    })





})
