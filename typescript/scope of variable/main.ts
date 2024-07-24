// scope of variable 

// let block scope variable

if(true){
    let name3="Ayan"
    console.log(name3)
}

    console.log("bye",name3)


// const block scope variable and also can not redeclare it

if(true){
        const name2="Ayan"
        console.log(name2)
      }

        console.log("bye",name2)


// var global scope variable can also be redeclare

if(true){
            var name1="Ayan"
            console.log(name1)
          }
    
        console.log(name1)
    
    