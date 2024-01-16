import "normalize.css";
import "jquery/dist/jquery.js";
// import "popper.js/dist/popper.min";
// import "@popperjs/core";
import "bootstrap";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.rtl.css";
import "@fortawesome/fontawesome-free/js/all";
import "./assets/sass/styles.scss";
import $ from "jquery";

$(function () {
  var currentYear = new Date().getFullYear();
  $(".year").css("color", "#f49d31").text(currentYear);
});

