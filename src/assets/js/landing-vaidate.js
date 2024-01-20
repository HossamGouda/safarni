$(document).ready(function () {
    // Initialize form validation on the booking form.
    // It has the name attribute "bookingForm"
    $("#bookingForm").validate({
      // Specify validation rules
      rules: {
        // The key "name" is the "name" attribute of an input field. Validation rules are defined here
        fullName: {
          required: true,
          minlength: 3
        },
        emailAddress: {
          required: true,
          email: true
        },
        phoneNumber: {
          required: true,
          digits: true,
          minlength: 10,
          maxlength: 15
        },
        tourDate: {
          required: true,
          date: true
        },
        participants: "required",
        additionalInfo: {
          required: false
        }
      },
      // Specify validation error messages
      messages: {
        fullName: {
          required: " يرجى إدخال اسمك الكامل",
          minlength: "يجب أن يكون الاسم مكوناً من 3 أحرف على الأقل"
        },
        emailAddress: "يرجى إدخال عنوان بريد إلكتروني صالح",
        phoneNumber: {
          required: "يرجى إدخال رقم الهاتف",
          digits: "يرجى إدخال أرقام صالحة فقط",
          minlength: "يجب ألا يقل رقم الهاتف عن 10 أرقام",
          maxlength: "يجب ألا يزيد رقم الهاتف عن 15 رقمًا"
        },
        tourDate: "يرجى إدخال تاريخ الجولة السياحية",
        participants: "يرجى اختيار عدد المشاركين في الجولة"
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  });