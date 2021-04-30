let box = document.getElementById("box")
let button = document.getElementById("button")
let inputTopLeft = document.getElementById("input__top-left");
let inputTopRight = document.getElementById("input__top-right");
let inputBottomLeft = document.getElementById("input__bottom-left");
let inputBottomRight = document.getElementById("input__bottom-right");
let result = document.getElementById("result")

let array = [0,0,0,0]

const showDisplay = ()=>{
    let dimension = `${array[0]}px ${array[1]}px ${array[2]}px ${array[3]}px`
    result.value = `border-radius: ${dimension}`
}
showDisplay()

const defaultDisplay = ()=>{
    inputTopLeft.value=0
    inputTopRight.value=0
    inputBottomLeft.value=0
    inputBottomRight.value=0
}
defaultDisplay()

const borderBox = ()=>{
    let dimension = `${array[0]}px ${array[1]}px ${array[2]}px ${array[3]}px`
    box.style.borderRadius = dimension;
}

const widthValidation = (value)=>{
    if(value<=box.clientWidth/2) return true
}

const alert = ()=>{
    window.alert(`El valor máximo es: ${box.clientWidth/2}`)
}

const copy= () => {
    result.select();
    result.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
}

//Como el input number acepta la e, esto restringe esa entrada
inputTopLeft.addEventListener('keydown',(e)=>{
    if(e.key=='e'){
        e.preventDefault()
    }
})
inputTopRight.addEventListener('keydown',(e)=>{
    if(e.key=='e'){
        e.preventDefault()
    }
})
inputBottomLeft.addEventListener('keydown',(e)=>{
    if(e.key=='e'){
        e.preventDefault()
    }
})
inputBottomRight.addEventListener('keydown',(e)=>{
    if(e.key=='e'){
        e.preventDefault()
    }
})

inputTopLeft.addEventListener('keyup',(e)=>{
    array[0]=inputTopLeft.value
    if (widthValidation(array[0])){
        showDisplay()
        borderBox()
    } else{
        alert()
    }
})

inputTopRight.addEventListener('keyup',()=>{
    array[1]=inputTopRight.value
    if (widthValidation(array[1])){
        showDisplay()
        borderBox()
    } else{
        alert()
    }
})

inputBottomRight.addEventListener('keyup',()=>{
    array[2]=inputBottomRight.value
    if (widthValidation(array[2])){
        showDisplay()
        borderBox()
    } else{
        alert()
    }
})

inputBottomLeft.addEventListener('keyup',()=>{
    array[3]=inputBottomLeft.value
    if (widthValidation(array[3])){
        showDisplay()
        borderBox()
    } else{
        alert()
    }
})

button.addEventListener('click',()=>{
    copy()
})