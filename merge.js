document.getElementById('merge_button').addEventListener('click',function(){
    mergeSort()
})


function mergeSort(){
var rawinput = document.getElementById('merge_input').value
var input = rawinput.toLowerCase()
document.getElementById('merge_input').value = ''
var arr1 = []
var obj = {}



for (i=0; i<input.length; i++){
    arr1.push(input[i])
   //console.log(arr1)
}

var numOfSplits = Math.ceil(Math.sqrt(arr1.length))

split(arr1, 1);

function split(input, num) {
    splitArr = []
    for (let i = 0; i < input.length; i += num) {
        var letter = input.slice(i, i + num);
        splitArr.push(letter);
    }
    console.log(splitArr)

    if(splitArr%2 !== 1){
var merge1 = splitArr.length/2 
    }

    Mergearr = []
    for(i=0; i<splitArr.length; i++){
    
        l1 = splitArr[i][0]
        l2 = splitArr[i+1][0]

        // Mergearr.push([l1,l2])

if (l1 % 2 != 0){

        if(l1>l2){
            Mergearr.push([l1,l2])
        }else{
            Mergearr.push([l2,l1])
        }
}


    }
    console.log(Mergearr)


    




}








//console.log(numOfSplits)

// console.log(arr1.splice(0,arr1.length/2))
// console.log((arr1))

// console.log('l= ' + (arr1.length/2))

// for (i=0; i<numOfSplits; i++){

// window['arr' + i +'_1'] = arr1.slice(0,(arr1.length/2))
// window['arr'+ i + '_2'] = (arr1)



//  }

//  console.log(arr0_1)
//  console.log(arr1)




}

