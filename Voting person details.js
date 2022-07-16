class person {
constructor (firstname, lastname,  age, location) {
this.firstname = firstname,
this.lastname = lastname,
this.age = age,
this.location = location
}

getinfo(){
    if (this.age >  18 || this.age == 18){
return (`Hi ${this.firstname},${this.lastname} your age is ${this.age}. You are eligibile for voiting. your vote location is at ${this.location}`);
    }
    else {
        return (`Hi ${this.firstname},${this.lastname} your age is ${this.age}. You are not eligible for voting. Kindly hold for your play.`);
  }
}


}
var voter1 = new person ('Deepak', 'venkatesan', '18', 'PERAMBUR');
var voter2 = new person ('Buharu', 'Shahith', '16', 'Triplicane');

     console.log(voter1.getinfo());

     console.log(voter2.getinfo());
    