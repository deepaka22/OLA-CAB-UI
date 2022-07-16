class ola {
  constructor( pickuplocation, droplocation, distanceperkm, perkmrate, waitingcharges, time) {
    (this.pickuplocation = pickuplocation),
      (this.droplocation = droplocation),
      (this.distanceperkm = distanceperkm),
      (this.perkmrate = perkmrate),
      (this.waitingcharges = waitingcharges),
      (this.time = time);
  }
normalhourspriceinfo() {
var price = this.distanceperkm * this.perkmrate + this.waitingcharges * 3;
return `Thanks for choosing Ola. \nYour ola ride from ${this.pickuplocation} to ${this.droplocation} has been completed.\nDistance is: ${this.distanceperkm} kms. \nTotal price is ${price}. \nThank you.`;
  }
peakhours() {
var price =
this.distanceperkm * (this.perkmrate * 2) + this.waitingcharges * 10;
return `Thanks for choosing Ola. \nYour ola ride from ${this.droplocation} to ${this.pickuplocation} has been completed.\nDistance is: ${this.distanceperkm} kms. \nTotal price is ${price}. \nThank you.`;
  }
} //class ends here.
let user1 = new ola ("PERAMBUR", "AMBATTUR", 10, 20, 0, 24);
let user2 = new ola ('PALLAVARM', 'ANAKAPAHUR', 10, 20,0, 8);

if (user1.time >= 9 && user1.time <=22) {
  console.log(user1.normalhourspriceinfo());
} else {
  console.log(user1.peakhours());
}

if (user2.time >= 9 && user2.time <=22) {
    console.log(user2.normalhourspriceinfo());
  } else {
    console.log(user2.peakhours());
  }
  

