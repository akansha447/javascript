// STACK (GIVE COPY OUTPUT)

let myinstaaccount = "iamakansha"

let anotheraccount = myinstaaccount
anotheraccount = "akanshagaur"
console.log(myinstaaccount); 
console.log(anotheraccount);    

//  HEAP(GIVE ORIGINAL VALUE)

let userOne = {
    userName: "akanshagaur",
    email:"aka@gmail.com"
}
let usertwo = {
    userName:"utkarsh",
    email:"ut@gmail.com"
}
let userthree = usertwo
usertwo.email ="utkarsh@gmail.com"
console.log(userOne);
console.log(usertwo.email);
console.log(userthree.email);