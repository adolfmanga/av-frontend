// seleciona todos os elementos com a class "product-box"
const boxes = document.querySelectorAll ('.product-box')

//interação sobre cada elemento selecionado
boxes.forEach(box => {
    //encontre o elemento img dentro do elemento box atual
    const img = box.querySelector ('.product-image')

    //adicionar os ouvintes de eventos ao elemento box atual
    box.addEventListener('mousemove', (e) => {
     const x = e.clientX - box.getBoundingClientRect().left
     const y = e.clientY - box.getBoundingClientRect().top
     console.log(x, y)
     img.style.transformOrigin = `${x}px ${y}px`
     img.style.transform = `scale(2)`
    })

    box.addEventListener('mouseleave', (e) => {
        img.style.transformOrigin = "center"
        img.style.transform = `scale(1)`
    })
})
