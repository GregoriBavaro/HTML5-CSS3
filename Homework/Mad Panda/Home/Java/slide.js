
//  Here lies the function for he Slide menu by Using JS 

function openSlideMenu() {

    if (screen.width >= 767) {
    document.getElementById('menu').style.width = '250px';
    
    } else {
    document.getElementById('menu').style.width = '100%';
    
    }
}
function closeSlideMenu() {
    if (screen.width >= 767) {

        document.getElementById('menu').style.width = '0';
        document.getElementById('content').style.marginLeft = '0';

    } else {
    
        document.getElementById('menu').style.width = '0';
        document.getElementById('content').style.marginLeft = '0';
    
}
}
