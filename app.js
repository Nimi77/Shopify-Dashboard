// general function for pressed
let dropdownIcon = document.querySelector('.dropdown-icon');
let allStore = document.querySelector('.store');
let searchContainer = document.querySelector('.input');

function clickedAction(){
    dropdownIcon.classList.toggle('clicked');
    allStore.classList.toggle('clicked');
    searchContainer.classList.toggle('pressed');

    // console.log('heyyy')
}

// notification alert
const notificationContainer = document.getElementById('notificationInfo'); 
const notificationMenu = document.getElementById("notificationMenu");
function toggleAlertInfo(){
    notificationContainer.classList.toggle('open-notification');
    const notificationExpanded = notificationMenu.attributes["aria-expanded"].value == "true";
    if(notificationExpanded){
        notificationMenu.ariaExpanded = "false";
    }
    else{
        notificationMenu.ariaExpanded = "true";
    } 
    console.log("working")
}
notificationContainer.addEventListener('click', toggleAlertInfo)


// functions for user profile  submenu and arrow key functionality
function ProfileMenu(){
    const profileMenuBtn = document.querySelector("#m-profile");
    const profileSubMenu = document.querySelector("#profileSubMenu");
    const allMenuItem = profileSubMenu.querySelectorAll('[role="menuitem"]');

    function closeMenu(){
        profileMenuBtn.ariaExpanded = "false";
        profileMenuBtn.focus()
    }

    function handleMenuEscapeKeyPress(event){
        if(event.key == "Escape"){
            toggleProfileMenu()
        }
    }

    function handleMenuItemArrowKeyPress(event, menuItemIndex){
        // console.log(event)
        const isLastMenuItem = menuItemIndex === allMenuItem.length - 1;
        const isFirstMenuItem = menuItemIndex === 0;
        const nextMenuItem = allMenuItem.item(menuItemIndex + 1);
        const previousMenuItem = allMenuItem.item(menuItemIndex - 1);
        // arrow up or left focus on next menu item
    
        // arrow down or right focus on previous menu item
        if (event.key === "ArrowRight" ||  event.key === "ArrowDown"){
            if(isLastMenuItem){
                allMenuItem.item(0).focus();
                return;
            }
            nextMenuItem.focus();
            console.log("Not working")
        };
         // if the user pressed arrow up or arrow left
        if (event.key === "ArrowUp" || event.key === "ArrowLeft"){
            if (isFirstMenuItem) {
            allMenuItem.item(allMenuItem.length - 1).focus();
            return;
            }
             previousMenuItem.focus();
        };
    
    }

    function OpenMenu(){
        profileMenuBtn.ariaExpanded = "true";
        // getting all items in the menu
     
        allMenuItem.item(0).focus();
        
        profileSubMenu.addEventListener("keyup", handleMenuEscapeKeyPress);
        // toggling each item using arrows
        allMenuItem.forEach(function(menuItem, menuItemIndex){
            menuItem.addEventListener("keyup", 
            function(event){
                handleMenuItemArrowKeyPress(event, menuItemIndex);
            });
        });
    }
    function toggleProfileMenu(){
        profileSubMenu.classList.toggle("menu-active");
        const menuExpanded = profileMenuBtn.attributes["aria-expanded"].value == "true";
        if(menuExpanded){
            closeMenu();
        }
        else{
            OpenMenu();
        };
        
    }
    
    profileMenuBtn.addEventListener("click", toggleProfileMenu);
    
}
ProfileMenu();



// closing plan for free trial container
let planContainer = document.getElementById('plan-container');
let closeBtn = document.getElementById("close-trial-l");
let closeBtnS = document.getElementById("close-trial-s");
closeBtn.addEventListener("click", function(){
    planContainer.style.display = "none"
    
})
closeBtnS.addEventListener("click", function(){
    planContainer.style.display = "none"
    console.log("why")
})

// toggling setUpGuideInfo using the dropdownIcon

function hideShow(){
    var setupGuideInfo = document.getElementById("setup-guide-info");
    var dropdownOpen = document.getElementById("open")
    var dropdownClose = document.getElementById("close")
    const dropdownGuide = document.getElementById("dropdownIcon")
    var display= 0;

    const setupGuideExpanded = dropdownGuide.attributes["aria-expanded"].value == "true";
  
    function toggleGuide(){ 
        if (setupGuideExpanded){
            console.log("work")
            dropdownGuide.ariaExpanded = "false"
            // close guide info
            setupGuideInfo.style.display = "none"
    
            dropdownOpen.style.display = "flex"
            dropdownClose.style.display = "none" 
        }
        else{
            dropdownGuide.ariaExpanded = "true"
            // open guide info
            setupGuideInfo.style.display = "block";
            
            dropdownClose.style.display = "flex"
            dropdownOpen.style.display = "none"
        }
    }
    dropdownGuide.addEventListener("click", toggleGuide )
}



// default circle spinner
btn = document.querySelector(".check-button");
spinner = document.querySelector(".spinner");
stepDone = document.querySelector(".complete");
icon = document.querySelector("svg")
btn.onclick = function(){
    btn.style.cursor = "wait";
    icon.classList.replace(".default-circle", ".spinner");
    console.log("working")

    setTimeout(()=> {
        btn.style.pointerEvents = "none";
        icon.classList.replace(".spinner", ".complete")
        console.log("not")
    }, 4000)
}

// setup guide toggling

document.addEventListener('DOMContentLoaded', getClickedElement);
var contentInfo = document.querySelector("#guide-content")
function getClickedElement(){
    let toggleTrigger = document.querySelectorAll('.toggle-trigger').forEach(item => {
        item.addEventListener('click', function(e){
            e.preventDefault();
            let guideInfo = item.closest('.guide-step').querySelector('.toggle-area');
            justToggle(guideInfo);
        })
    })
}

function justToggle(guideInfo){
    let currentStep = null;
    const content = document.getElementById("toggle-area");
    if(guideInfo.style.display === "none"){
        guideInfo.style.display = "flex";
        guideInfo.closest('.guide-step').classList.add('active');
        currentStep.style.display = 'none';
       

        if (currentStep && currentStep !== content) {
            currentStep.style.display = 'none';
        }
    
        content.style.display = (content.style.display === 'none') ? 'flex' : 'none';
          currentStep = (content.style.display === 'none') ? null : content;
    
    
    } else{
        guideInfo.style.display = "none"
        guideInfo.closest('.guide-step').classList.remove('active');
     
    }
   
}



