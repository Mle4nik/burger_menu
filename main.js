// let burger = document.getElementById("#burger")
// let cross = document.getElementById("#cross")
// let sidebar = document.getElementById("#sidebar")

// burger.addEventListener("click", burgerSwitch)

// function burgerSwitch() {
//     document.querySelector(sidebar).style.left = "0px"
// }


// check.onclick = function () {
//     let theme = document.getElementById("#cross");


// }

// let before = document.querySelector('.c-hamburger span')
// let after = document.querySelector('.c-hamburger span')

let element = document.querySelector('.c-hamburger span')
let modeStyle = window.getComputedStyle(element, '::before')
let content = modeStyle['content']


document.querySelector('.c-hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    // this.classList.toggle('is-active')
    if (this.classList.contains('is-active')) {
        this.classList.remove('is-active');
        document.querySelector('#menu').classList.remove('nav-active');
        document.querySelector('#menu').style.background = "#fff"
        document.body.classList.remove('body-active');
        
    }
    else {
        this.classList.add('is-active');
        document.querySelector('#menu').classList.add('nav-active');
        document.querySelector('#menu').style.background = "#000"
        document.body.classList.add('body-active');
        // modeStyle.style.background = '#fff'
        // document.querySelector('.c-hamburger span').style.background = "#fff"
        // document.querySelector('.c-hamburger span::before').style.background = "#fff"
    //     document.querySelectorAll('.c-hamburger span::before').forEach(function(elem){
    //         elem.style.background = "#fff"
    //    })
        // console.log(getComputedStyle(document.querySelector('.c-hamburger span'), '::before'))
    
        // window.getComputedStyle(document.querySelector('.c-hamburger span'), '::before').style.background = "#fff"
        // window.getComputedStyle(document.querySelector('.c-hamburger span'), '::before').getPropertyValue('background')

        // document.querySelector('.c-hamburger span').setProperty("background-color", "#fff")
        // let elem = window.getComputedStyle(parent, '::before');
        // alert(elem.getPropertyValue('background'))
        // parent.setProperty("background-color", "#fff")


        // let theStyle = window.getComputedStyle(document.querySelector('.c-hamburger span'), ':before')
        // console.log(theStyle.background)
        // theStyle.setProperty('background', '#fff')
        // console.log(document.querySelector('.c-hamburger'))
        // theStyle.style.background = "#fff"

        // document.querySelector

        // theStyle.classList.add('background')

    
    }   
})