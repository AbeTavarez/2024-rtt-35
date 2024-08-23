class User {
    name = {};

    constructor(firstName, lastName, email, dob, password, phoneNumber) {
        this.name.firstName = firstName;
        this.name.lastName = lastName;
        this.email = email;
        this.dob = dob;
        this.password = password;
        this.phoneNumber = phoneNumber;
    }
}

const form = document.querySelector('form');
console.log(form);


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = form['firstName'].value;
    const lastName = form['lastName'].value;
    const email = form['email'].value;
    const dob = form['dob'].value;
    const password = form['password'].value;
    const phoneNumber = form['phoneNumber'].value;

    // console.log(firstName);
    // console.log(lastName);
    // console.log(email);
    // console.log(dob);
    // console.log(phoneNumber);
    // console.log(password);

    const user = new User(firstName, lastName, email, dob, password, phoneNumber);

    console.log(user);
    
    
    
});


