let arr=["goku","gohan","vagita"]


function reverseString(str){
 
 let bag="";

  for(let i=str.length;i>=0;i--){
  
  bag=bag+str[i];
 
 }
 
 return bag;

}

for(let j=0;j<arr.length;j++){

  let result=reverseString(arr[j])

  if(result==arr[j]){
 
   console.log("pallindreom")
  
}
  else{

    console.log("not")
  }
}