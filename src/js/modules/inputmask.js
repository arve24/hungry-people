import IMask from "imask";

let booking = document.querySelector(".booking-form__phone");

let contact = document.querySelector(".contact-form__phone");

let maskOptions = {
  mask: "+{38} (000) 000-00-00"
};

let mask = IMask(booking, maskOptions);

let mask1 = IMask(contact, maskOptions);
