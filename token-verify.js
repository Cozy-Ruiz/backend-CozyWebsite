const jwt = require('jsonwebtoken');

const secret = 'myCat';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY3NjkyNjk1M30.e1UeIBfLJsoRqABu_bLIkSC6G7eBO51g9iDmBaykOz0';

function verifyToken(token, secret){
    return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);