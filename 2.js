let arr= [-1, 150, 190, 170, -1, -1, 160, 180]
let tmp


function sort(arr){
  for(let i=0; i<arr.length; i++){
    for(let j=i; j<arr.length; j++){
      if(arr[i] != -1 && arr[j] !=-1){
        if(arr[j]<arr[i]){
          tmp=arr[j]
          arr[j]=arr[i]
          arr[i]=tmp
        }
      }
    }
  }
  console.log(arr)
}
sort(arr)

