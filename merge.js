document.getElementById('merge_button').addEventListener('click',function(){
    mergeSort()
})


function mergeSort(){
var rawinput = document.getElementById('merge_input').value
var input = rawinput.toLowerCase()
document.getElementById('merge_input').value = ''
var arr = []

for (i=0; i<input.length; i++){
temparr = input[i]
arr.push(temparr)
}

var numofmerges = Math.ceil(Math.sqrt(arr.length))

for(i=0; i<numofmerges+1; i++){
sort(arr)
}


function sort(array){
max = (Math.ceil(array.length/2))
for (j=0; j<max; j++){
    if(arr.length != 1)
 merge(array[j], array[j+1], j)
}

}

function merge(arr1, arr2, index){

    console.log('sorting ' + arr1+ ' & '+ arr2 + 'with index ' + index)

    finalarr = []
     index1 = 0
    index2 = 0

    if(arr2==undefined){
        arr.splice(index, 1, arr1)

    }else{
 
 while (index1 < arr1.length && index2 < arr2.length){
     
 pos2 = arr2[index2]
 pos1 = arr1[index1]
 
 
 if(pos1<pos2){
     finalarr.push(pos1)
     index1 = index1 + 1
 } else{
     finalarr.push(pos2)
     index2 = index2 + 1
 }
 }
 
 if (arr1.slice(index1).length != undefined){
     for(i=0; i<arr1.slice(index1).length; i++){
     finalarr.push(arr1.slice(index1)[i])  
 }
 }
 if (arr2.slice(index2).length != undefined){
     for(i=0; i<arr2.slice(index2).length; i++){
 finalarr.push(arr2.slice(index2)[i])
     }
 }
 
 
 arr.splice(index, 2, finalarr)
}

 //console.log(arr)

 if(arr.length == 1){
     document.getElementById('merge_result').innerHTML = arr
 }

 }

 
}