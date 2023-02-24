const bcrypt = require('bcrypt');

async function verifyPassword(){
    const myPassword = 'admin123';
    const hash = '$2b$10$VggHzikv1vTN4auRx3wOouCiJDKpsx40atdqFqLOliTCYmELiE5cG';
    const isMatch = await bcrypt.compare(myPassword, hash);
    console.log(isMatch);
}

verifyPassword();