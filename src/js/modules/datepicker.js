import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";

new AirDatepicker("#date", {
  autoClose: true,
  isMobile: true
});

new AirDatepicker("#time", {
  timepicker: true,
  onlyTimepicker: true,
  isMobile: true,
  minutesStep: 10
});
