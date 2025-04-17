// models/Reservation.js
class Reservation {
    constructor(name, email, partySize, reservationDateTime) {
      this.name = name;
      this.email = email;
      this.partySize = partySize;
      this.reservationDateTime = reservationDateTime;
      this.createdAt = new Date();
    }
  }
  
  module.exports = Reservation;