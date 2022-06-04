document.getElementById('insertion_button').addEventListener('click',function(){
    insertionSort()
})


function insertionSort(){
var rawinput = document.getElementById('insertion_input').value
var input = rawinput.toLowerCase()
document.getElementById('insertion_input').value = ''
var arr1 = []

for (i=0; i<input.length; i++){
    arr1.push(input[i])
    //console.log(arr1)
}

for (k=0; k<arr1.length; k++){

for (i=arr1.length; i>=1; i--){

for(j=0; j<=i; j++){
var letter1 = arr1[i]
var letter2 = arr1[i-1]

if (letter1<letter2){
    arr1.splice(i, 1)
    arr1.splice(i-1,0, letter1)
    //console.log(arr1)
}
}

}

}
document.getElementById('insertion_result').innerHTML = arr1
console.log('sorted!')









}

