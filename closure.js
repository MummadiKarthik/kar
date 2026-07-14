function kar(){
  let count=0;
  return function(){
    count++;
    console.log(count);
  }
}
let s=kar()
s()
s()
s()
s();
