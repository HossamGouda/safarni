$(function () {
  console.log('Hello form register')
  $("#register").validate({
    debug: true,
    rules: {
      username: {
        required: true,
        minlength: 2,
      },
      date: {
        required: true,
        date: true,
        dateFormat: "yyyy/mm/dd",
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
    messages: {
      username: {
        required: "يرجى إدخال اسم المستخدم",
        minlength: "يجب أن لا يقل عن 2 حرف",
      },
      date: {
        required: "يرجى إدخال تاريخ",
      },
      email: {
        required: "يرجى إدخال بريد إلكتروني صحيح",
      },
      password: {
        required: "يرجى إدخال كلمة مرور",
        minlength: "يجب أن لا تقل كلمة المرور عن 8 أحرف",
      },
      confirm_password: {
        required: "يرجى إدخال كلمة مرور",
        minlength: "يجب أن لا تقل كلمة المرور عن 8 أحرف",
        equalTo: "يجب أن تكون مطابقة لكلمة المرور أعلاه",
      },
    },
  });
});

