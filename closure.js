function kar(){
  return function(){
      let count=0;

    count++;
    console.log(count);
  }
}
let s=kar()
s()
s()
console.log("hi mummadi Karthik")
 