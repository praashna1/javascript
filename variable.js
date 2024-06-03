const accountId=1222
let accountEmail="praas@gmail.com"
var accountPass="111"

let accountState;
console.table([accountId,accountEmail,accountPass]);

/*
prefer not to use var because of issue 
in block scope and functional scope
*/

const name="praashna"
const count=40
console.log('my name is ${name} and count is ${count}');