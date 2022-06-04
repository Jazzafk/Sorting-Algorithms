document.getElementById('merge_button').addEventListener('click',function(){
    mergeSort()
})


function mergeSort(){
var rawinput = document.getElementById('merge_input').value
var input = rawinput.toLowerCase()
document.getElementById('merge_input').value = ''
var arr1 = []


for (i=0; i<input.length; i++){
    arr1.push(input[i])
   // console.log(arr1)
}

var numOfSplits = Math.ceil(Math.sqrt(arr1.length))
console.log(numOfSplits)

let spl1_1 = arr1.splice(0,arr1.length/2)
let spl1_2 = (arr1)

for (i=0; i<numOfSplits; i++){


 }






}

