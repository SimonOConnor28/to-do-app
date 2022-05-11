    // query the DOM for the form element
const formElement = document.querySelector('form');
console.log(formElement);

// add a submit event listen on the form
    formElement.addEventListener('submit', function(e){



        // stop the page from refreshing when form is submitted
        e.preventDefault();
        console.log(e);

        alert(`You've submitted this form!`)
        
        // query the DOM for the input element and check whether it's empty
        const inputElement = document.getElementById('toDoItem');
        console.log(inputElement);

    //     // only if the user has entered an actual task (AKA input is not empty)
        if (inputElement.value !== '') {

            console.log('congrats on entering value');


             // Grab the user's to d item from the form input
            console.log(inputElement.value);
            
            //create an li
            const liElement = document.createElement('li');
            console.log(liElement);

             // display TO DO on the page within an li element
                 // include a checkbox icon within the li

            liElement.innerHTML = `<i class="fa-regular fa-square"></i>`;
            
            // create an element that represents the text we have to add (our TO DO)
            const toDoContent = document.createTextNode(inputElement.value);
            console.log(toDoContent);
            // and then append that text element to the li
            liElement.appendChild(toDoContent)

             // add the li element to do ul
            document.querySelector('ul').appendChild(liElement);

        
             // clear the input log
            inputElement.value ='';
        } else {
            alert(" please enter task")
        }

    })



// clicking on a task allows you to toogle between checked/unchecked (aka done vs not done)

// NOTE this will nto work because you can only add event listeners to elements which exist in the DOM at the time of the code execution
// const listElements = document.querySelector('ul');

// listElements.addEventListener('click', function(){
//     console.log('To do has been checked');
// })


// in order to attach a click event listener to the li's which do not exist on the page yet , we can use 
// EVENT PROPAGATION to DELEGATE the click event to the ul!
const ul = document.querySelector('ul');

ul.addEventListener('click', function(e) {

    // //the this keyword represents the object which owns the code which is currently running
    // //so this will give us back the ul consistently which is not what we want
    // //console.log(this)

    // //
    console.log(e);

    // as long as we've clicked on the icon, then:
    if (e.target.localName === 'i'){
        console.log('check box was clicked!');
        
        //toggle between checked/unchecked (AKA done vs not done)
        e.target.classList.toggle('fa-square-check');
        e.target.classList.toggle('fa-square');
        e.target.parentNode.classList.toggle('text-muted');

    }
})

// add a "remove task" button to each task
const clearSection = document.querySelector('button')

clearSection.addEventListener('click', function(e) {
    const checkedItems =document.querySelectorAll('.text-muted');
    for (let i = 0; i < checkedItems.length; i += 1 ) {
        checkedItems[i].remove();
    }
})


// BONUS LEVEL 
// add a "reset" button which clears all of the TO DOs

// add a congratulations alert when all of the existing TO DOs are checked off
// add a "Take a break" message if 5 or more task are completed 


