/*
HEADER BUTTONS
--------------------------
This section handles the header buttons and the button card info visibility
*/
let headerButtons = document.querySelectorAll('.merchant-goto > button');
headerButtons.forEach(button => {
    let menuCard = document.getElementById(button.getAttribute('aria-controls'));

    button.addEventListener('click', e =>{
        e.stopPropagation(); //to make the parent unaware that it was clicked

        // reset all button's aria-expanded except current clicked button
        headerButtons.forEach(buttonToClose => {
            if(buttonToClose !== button){
                buttonToClose.ariaExpanded = false;
            }
        })
        // Toggle the aria-expanded state
        button.ariaExpanded = !JSON.parse(button.ariaExpanded);
        
        // focus automatically on an element when the button is clicked
        let firstFocus = menuCard.querySelector('[role="menu-item"], a , button ');
        // Focus on the first element if one is found
        firstFocus && firstFocus.focus();
    });

    //close the card when a clicked is made on the website
    document.addEventListener("click", function(e){
        let clickedElement = e.target;
        if(menuCard && !menuCard.contains(clickedElement)){
            button.ariaExpanded = false;
        }
    })
})


/*
CLOSE TRIAL BUTTON
--------------------------
This section handles the function of closing the plan free trial 
*/
let planContainer = document.getElementById('plan-container');
let closeBtn = document.getElementById("close-trial-l"); //this is for laptop screen
let closeBtnS = document.getElementById("close-trial-s"); //this is for mobile screens
closeBtn.addEventListener("click", function(){
    planContainer.style.display = "none"
    
})
closeBtnS.addEventListener("click", function(){
    planContainer.style.display = "none"
})


/*
TOGGLE SETUP VISIBILITY
--------------------------
Toggling setUpGuideInfo using the dropdownIcon 
*/
function hideShow(){
    var setupGuideInfo = document.getElementById("setup-guide-info");
    var dropdownOpen = document.getElementById("open");
    var dropdownClose = document.getElementById("close");
    const dropdownGuide = document.getElementById("dropdownIcon");

    const setupGuideExpanded = dropdownGuide.attributes["aria-expanded"].value == "true"; //for sreen readers
  
    function toggleGuide(){ 
        if (setupGuideExpanded){ 
            dropdownGuide.ariaExpanded = "false"
            // close guide info if the div is not expanded
            setupGuideInfo.style.display = "none"
            dropdownOpen.style.display = "flex"
            dropdownClose.style.display = "none" 
        }
        else{
            dropdownGuide.ariaExpanded = "true"
            // open guide info the div is expanded
            setupGuideInfo.style.display = "block";
            dropdownClose.style.display = "flex"
            dropdownOpen.style.display = "none"
        }
    }
    dropdownGuide.addEventListener("click", toggleGuide )
}

/*
ACCORDION
--------------------------
Toggling the guide steps
*/
Array.from(document.getElementsByClassName('guide')).forEach(step=>{
    let checkbox = step.querySelector('button.check-button');
    let guideHeading = step.querySelector('.guide-title');
    let steps = step.parentNode.querySelectorAll('.guide');
    let guideContent = step.querySelector('.guide-content')



})
// setup guide toggling
function openContent(step){
    var i;
    var x = document.getElementsByClassName("toggle-area");
    for (i = 0; i < x.length; i++ ){
        x[i].style.display = "none";
    }
    document.getElementById(step).style.display = "flex";
}
