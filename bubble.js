document.getElementById('bubble_button').addEventListener('click',function(){
    bubbleSort()
})


function bubbleSort(){
var rawinput = document.getElementById('bubble_input').value
var input = rawinput.toLowerCase()
document.getElementById('bubble_input').value = ''

var arr1 = []

for (i=0; i<input.length; i++){
    arr1.push(input[i])
   // console.log(arr1)
}

for (j=0; j<arr1.length-1; j++){

for (i=0; i<arr1.length; i++){
var letter1 = arr1[i]
var letter2 = arr1[i+1]

if (letter1>letter2){
    arr1.splice(i, 1, letter2)
    arr1.splice(i+1, 1, letter1)
}
//console.log(arr1)
}

}
document.getElementById('bubble_result').innerHTML = arr1
console.log('sorted!')

}

