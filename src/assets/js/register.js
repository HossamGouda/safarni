$(document).ready(function () {
  // Initialize form validation on the booking form.
  // It has the name attribute "bookingForm"
  $("#register").validate({
    // Specify validation rules
    rules: {
      username: {
        required: true,
        minlength: 2,
      },
      date: {
        required: true,
        date: true,
      },
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 8,
      },
      confirm_password: {
        required: true,
        minlength: 8,
        equalTo: "#password",
      },
    },
    // Specify validation error messages
    messages: {
      username: {
        required: "يرجى إدخال اسم المستخدم",
        minlength: "يجب أن لا يقل عن ثلاثة احرف",
      },
      date: {
        required: "يرجى إدخال تاريخ",
      },
      email: {
        required: "يرجى إدخال بريد إلكتروني صحيح",
      },
      password: {
        required: "يرجى إدخال كلمة مرور",
        minlength: "يجب أن لا تقل كلمة المرور عن ثمانية أحرف",
      },
      confirm_password: {
        required: "يرجى إدخال كلمة مرور",
        minlength: "يجب أن لا تقل كلمة المرور عن ثمانية أحرف",
        equalTo: "يجب أن تكون مطابقة لكلمة المرور أعلاه",
      },
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function (form) {
      form.submit();
    },
  });
});
