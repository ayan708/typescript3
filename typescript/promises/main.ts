//  promises

// let promises=new Promise((resolve,reject)=>{
//     console.log("pending")
//     setTimeout(() => {
//       console.log("resolved");
//       resolve(["bilai","ayan","sufi"])  
//     },1000 );
//     reject(new Error("code nahi chal raha"));
// })

// promises.then((res)=>(console.log(res))).catch((err)=>(console.log(err,"app ka code nahi chal raha")))


// let promise1 = new Promise((resolve,reject)=>{
//   let data = "ayan"
//   if(data=="sal"){
//      console.log("pending data");
//      setTimeout(() => {
//        console.log("resolved data");
//        resolve(data)
      
//      },100);
//     }
//     else{
//     reject(new Error("data nahi chal raha"))
//     }
// })



// promise1.then((res)=>(console.log(res))).catch((err)=>(console.log(err,"app ka code nahi chal raha")))
