document.getElementById('merge_button').addEventListener('click',function(){
    mergeSort()
})


function mergeSort(){
var rawinput = document.getElementById('merge_input').value
var input = rawinput.toLowerCase()
document.getElementById('merge_input').value = ''
var arr1 = []
var obj = {}



// for (i=0; i<input.length; i++){
//     arr1.push(input[i])
//    //console.log(arr1)
// }

// var numOfSplits = Math.ceil(Math.sqrt(arr1.length))

// split(arr1, 1);

// function split(input, num) {
//     splitArr = []
//     for (let i = 0; i < input.length; i += num) {
//         var letter = input.slice(i, i + num);
//         splitArr.push(letter);
//     }
//     console.log(splitArr)

//     if(splitArr%2 !== 1){
// var merge1 = splitArr.length/2 
//     }

//     Mergearr = []

//     for(i=0; i<splitArr.length; i++){

//         if (splitArr.length % 2 != 0){
//             var solo = splitArr.splice(splitArr.length-1, 1)
//             console.log(solo)
//         }

    
//         arrpos = i + 1
//         l1 = splitArr[i]
//         l2 = splitArr[arrpos]
      
        

//         // Mergearr.push([l1,l2])

// if (i % 2 == 0){
//         if(l1<l2){
//             Mergearr.push([l1[0],l2[0]])
//         }else{
//             Mergearr.push([l2[0],l1[0]])
//         }
// }

// if(i==splitArr.length-1){
//     Mergearr.push([solo[0][0]])
// }

// }
// }

// //first merge done



// var mergesLeft = Mergearr.length/2

// for (i=0; i<mergesLeft; i++){

// for(i=0; i<Mergearr.length; i++){

// }
 



// }



    
 


    
function merge(arr1, arr2){

    returnArr = []

for (i=0; i<arr1.length;i++){
    

    var sm1 = arr1[0]
    var sm2 = arr2[0]
    

    for (i=1; i<arr1.length; i++){
if(arr1[i]<sm1){
    sm1 = arr1[i
}
    }
    


    for (i=0; i<arr2.length; i++){
        if(arr1[i]<sm2){
            sm2 = arr2[i]
        }
            }

    if (sm1<sm2){
        smallest = sm1
        pos = arr1.indexOf(smallest)
        arr1.splice(pos,1)
    }else{
        smallest = sm2
        pos = arr2.indexOf(smallest)
        arr2.splice(pos,1)
    }

}

    console.log(returnArr)
}

merge([1, 3, 5], [4,2,6])










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

