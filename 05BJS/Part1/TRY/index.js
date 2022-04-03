function changeColor(){
    // alert("Change Color ...")
    let tcolor = document.querySelector('#input1').value
    let bcolor = document.querySelector('#input2').value
    // alert(tcolor+" "+bcolor)
    document.querySelector('h2').style.color = tcolor
    document.querySelector('h2').style.backgroundColor = bcolor
}