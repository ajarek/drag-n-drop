const box = document.querySelectorAll('.box')

box.forEach(element => {
    element.addEventListener('dragenter',()=>{
        element.classList.toggle('active')
})

    
})