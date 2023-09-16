const accountId=1234
let accouuntEmail="aniket@google.com"
var accountPassword="4587"
accountCity="Patna"
let accountState;

// accountId=5487 // not allowed
accouuntEmail="aniket@.com"
accountPassword="6544"
accountCity="Bengaluru"

console.log(accountId)

/*
prefer not to use var
Because of issue in block scope and functional scope
*/
console.table([accountId, accouuntEmail, accountPassword, accountCity, accountState])