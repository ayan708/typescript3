"use strict";
//  ascncy await
let url = 'https://jsonplaceholder.typicode.com/todos/1';
// let fetchdata = fetch(url).then((data)=>{return data.json()}).then((info)=>{console.log(info)}).catch((err)=>{console.log(err)})
// console.log(fetchdata);
//  ascncy await
let fec = async () => {
    let data = await fetch(url);
    let info = await data.json();
    console.log(info);
};
fec();
