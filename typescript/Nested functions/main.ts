// Nested Functions

let r1 = ()=>{
    return 2+2
};

let r2=()=>{
  return  r1()
}


let re= r2()

console.log(re)