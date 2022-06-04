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
    console.log(arr1)
}







}

