var db = require('./db.js');


module.exports.handleSignup = (email, password) => {
    //Check if the email aready exists 

    //Save user to the db -- need to check if this method executes : using spies 
    db.saveUser({
        email,
        password
    });

    //Send welcome email
}