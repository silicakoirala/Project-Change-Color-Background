// const button = document.querySelector('button')
// const body = document.querySelector('body')
// const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'skyblue']

// body.style.backgroundColor = 'violet'
// button.addEventListener('click', changeBackground)

// function changeBackground(){
// const colorIndex= parseInt(Math.random()*colors.length)
// body.style.backgroundColor = colors[colorIndex]
// }


var i = 0

function changeBackground(){
    var colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'skyblue'] 
    document.body.style.backgroundColor = colors[i];
    i++;
    if (i===colors.length)
    i=0;
}
