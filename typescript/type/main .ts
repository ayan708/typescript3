//  type

type id_no=number;
type name=string;
type city=string;


type id={
    id_no:id_no,
    name:name,
    city:city
}




let Author:name ="ayan" 
let barcode:id_no = 342;
let book_name:string ="book"


let book:id={
    id_no:barcode=345,
    name:book_name='AYAN',
    city:Author='KARACHI',
}

console.log(book);
console.log(Author,barcode,book_name)