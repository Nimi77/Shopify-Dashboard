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
let closeBtn = document.getElementById("close-trial-l"); //this is for laptop screen
let closeBtnS = document.getElementById("close-trial-s"); //this is for mobile screens
closeBtn.addEventListener("click", function(){
    planContainer.style.display = "none"
    
})
closeBtnS.addEventListener("click", function(){
    planContainer.style.display = "none"
})

// toggling setUpGuideInfo using the dropdownIcon
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
function openContent(step){
    var i;
    var x = document.getElementsByClassName("toggle-area");
    for (i = 0; i < x.length; i++ ){
        x[i].style.display = "none";
    }
    document.getElementById(step).style.display = "flex";
}
