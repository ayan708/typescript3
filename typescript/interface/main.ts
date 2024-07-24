// Interface

interface name{
    name:string;
    age:number;
    func:()=>void;
    study:{
        s1:string;
        s2:string;
    }
};


let obj:name={
    name:"Bhaijan",
    age:21,
    func:function(){
        console.log("hello");
    },
    study:{
        s1:"c",
        s2:"c++"
    }
};


console.log(obj.name);