function showInfo(data, tabletop) {
  
  $data = new Array();
  $("#table_info").text("We found the tables " + tabletop.model_names.join(", "));
  $.each( tabletop.sheets(), function(i, sheet) {
    $("#table_info").append("<p>" + sheet.name + " has " + sheet.column_names.join("< ") + "</p>");
  });
  $product = tabletop.sheets($resource).all();
  
  //grab token from cookie
  $oAuthToken = Cookies.get('token');
  
  var github = new Github({token: $oAuthToken, auth: "oath"});
  
  $count = 30;
  
  $total_count = $product.length;
  
  $where = $count - $total_count;
  
  if($where == $page){
    //display we are leaving...
    $("#result").append("p>Everything should be built!</p>");
  }
}

//$(function() {
//
//  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
//    preventSubmit: true,
//    submitError: function($form, event, errors) {
//      // additional error messages or events
//    },
//    submitSuccess: function($form, event) {
//      event.preventDefault(); // prevent default submit behaviour
//      // get values from FORM
//      var name = $("input#name").val();
//      var email = $("input#email").val();
//      var phone = $("input#phone").val();
//      var message = $("textarea#message").val();
//      var firstName = name; // For Success/Failure Message
//      // Check for white space in name for Success/Fail message
//      if (firstName.indexOf(' ') >= 0) {
//        firstName = name.split(' ').slice(0, -1).join(' ');
//      }
//      $this = $("#sendMessageButton");
//      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
//      $.ajax({
//        url: "././mail/contact_me.php",
//        type: "POST",
//        data: {
//          name: name,
//          phone: phone,
//          email: email,
//          message: message
//        },
//        cache: false,
//        success: function() {
//          // Success message
//          $('#success').html("<div class='alert alert-success'>");
//          $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//            .append("</button>");
//          $('#success > .alert-success')
//            .append("<strong>Your message has been sent. </strong>");
//          $('#success > .alert-success')
//            .append('</div>');
//          //clear all fields
//          $('#contactForm').trigger("reset");
//        },
//        error: function() {
//          // Fail message
//          $('#success').html("<div class='alert alert-danger'>");
//          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//            .append("</button>");
//          $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
//          $('#success > .alert-danger').append('</div>');
//          //clear all fields
//          $('#contactForm').trigger("reset");
//        },
//        complete: function() {
//          setTimeout(function() {
//            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
//          }, 1000);
//        }
//      });
//    },
//    filter: function() {
//      return $(this).is(":visible");
//    },
//  });
//
//  $("a[data-toggle=\"tab\"]").click(function(e) {
//    e.preventDefault();
//    $(this).tab("show");
//  });
//});
//
///*When clicking on Full hide fail/success boxes */
//$('#name').focus(function() {
//  $('#success').html('');
//});
