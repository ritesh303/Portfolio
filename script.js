// The classList JavaScript is a read-only property that is used to return CSS classes in the form of an array.
//  The classList JavaScript allows us to add, remove, replace, toggle or check whether the specified CSS class is present or not. 
// To add more classes we use the add() method.

function toggleMenu() {
    const menu=document.querySelector('.menu-links');
    const icon=document.querySelector('.hamburger-icon');
    menu.classList.toggle('open')
    icon.classList.toggle('open')
}