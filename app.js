// Store ".share" & ".share-img" in variables
const share = document.querySelector('.share');
const shareIcon = document.querySelector('.share-img') 

// Listen for click on icon 
shareIcon.addEventListener('click', (event) => {
    // Within listener
    // Show/hide correct share menu
    // Avoid shutting the share pop-up when clicking on it
    if (event.target === shareIcon) {
        if(window.innerWidth <= 750) {
            share.classList.toggle("active-share-mobile")
            return
        }
        share.classList.toggle("active-share-desktop")
    }
})










