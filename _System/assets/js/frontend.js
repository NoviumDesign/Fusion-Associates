// Mobile menu
$( "#mobile-nav-button" ).click(function() {
    $(this).parent().find( ".mobile-nav-container" ).slideToggle();
});

// Header - Matching height on the two parallel boxes
$(function() {
    $('.header-container').each(function() {
      $(this).children('.header-item').matchHeight();
  });
});

$(document).ready(function () {
    var owl = $('#carousel');
    owl.owlCarousel({
        singleItem: true,
        navigation: true,
        loop: true,
        //Autoplay
        autoPlay : 8000,
        stopOnHover : true,
    	navigationText: ['<img src="_System/assets/icons/arrow-left.svg">', '<img src="_System/assets/icons/arrow-right.svg">']
    });
});

// Current Date
var m_names = new Array("January", "February", "March",
"April", "May", "June", "July", "August", "September",
"October", "November", "December");

var d = new Date();
var curr_date = d.getDate();
var curr_month = d.getMonth();
var curr_year = d.getFullYear();
document.getElementById("date").innerHTML=(curr_date + " " + m_names[curr_month]
+ " " + curr_year);

// Validation
$(document).ready(function() {

    $.validate({
      form : '.newsletterRegistration'
    });

    $.validate({
      form : '.specificNewsletterRegistration'
    });

    $.validate({
      form : '#resumeForm',
      onSuccess : function() {
		$('#sendCareers').prop("disabled", true);
        $("#sendCareers").attr('value', 'Submitting... Please wait...');
      }
    });

    $.validate({
      form : '#contactForm'
    });

    $.validate({
      form : '#awardSurvey'
    });

    $.validate({
      form : '.sidebarForm'
    });

});

// Form - when sector is checked, check equivalent newsletter
$('.performance-sport-outerwear').click(function () {
    if ($('.performance-sport-outerwear').is(':checked')) {
      $(".performance-sport-outerwear-newsletter").prop('checked', true);
    }
    else {
      $(".performance-sport-outerwear-newsletter").prop('checked', false);
    }
});

$('.fashion-luxury').click(function () {
    if ($('.fashion-luxury').is(':checked')) {
      $(".fashion-luxury-newsletter").prop('checked', true);
    }
    else {
      $(".fashion-luxury-newsletter").prop('checked', false);
    }
});

$('.sendFormButton').click(function () {
  if ($('#board-of-directors').is(':selected')) {
      $("#board-of-directors-newsletter").prop('checked', true);
    }
  if ($('#design-creative').is(':selected')) {
      $("#design-creative-newsletter").prop('checked', true);
    }
  if ($('#product-development').is(':selected')) {
      $("#product-development-newsletter").prop('checked', true);
    }
  if ($('#supply-chain').is(':selected')) {
      $("#supply-chain-newsletter").prop('checked', true);
    }
  if ($('#sales-commercial').is(':selected')) {
      $("#sales-commercial-newsletter").prop('checked', true);
    }
  if ($('#retail-operations').is(':selected')) {
      $("#retail-operations-newsletter").prop('checked', true);
    }
  if ($('#marketing-pr').is(':selected')) {
      $("#marketing-pr-newsletter").prop('checked', true);
    }
  if ($('#hr-talent').is(':selected')) {
      $("#hr-talent-newsletter").prop('checked', true);
    }
  if ($('#career-other').is(':selected')) {
      $("#career-other-newsletter").prop('checked', true);
    }
  if ($('#ecom-digital').is(':selected')) {
      $("#ecom-digital-newsletter").prop('checked', true);
    }
  if ($('#buying-merchandising').is(':selected')) {
      $("#buying-merchandising-newsletter").prop('checked', true);
    }
});

// Form submission
$(document).ready(function() {
    $('.newsletterRegistration').ajaxForm(function() {
        $('.newsletterMessage').addClass('success').fadeIn().html('<p><strong>You are now subscribed to out newsletter!</strong></p>');
        $('.newsletterMessageModal').addClass('success').fadeIn().html('<p>You are now subscribed to our general newsletter! Please complete the ‘Career discipline’ &amp; ‘Sector’ fields carefully to further customise your newsletter and receive items of interest specific to you.</p>');
        $('#newslettermodal').bPopup({
          follow: [false, false],
        });
        dataLayer.push({'event': 'signupOne'});
        $('.newsletterRegistration').fadeOut();

        // Store email adress
        var emailInput = $('.newsletter-input').val();
        $('.specific-newsletter-input').val(emailInput);
    });
});

$(document).ready(function() {
    $('#resumeForm').ajaxForm(function() {
        $('#resumeMessage').addClass('success').fadeIn().html('<p><strong>Your information was sent successfully!</strong></p>');
        dataLayer.push({'event': 'resumeSent'});
        $('#resumeForm').fadeOut();
    });
});

$(document).ready(function() {
    $('#contactForm').ajaxForm(function() {
        $('#contactMessage').addClass('success').fadeIn().html('<p><strong>Thanks for your message, we will return to you as soon as possible!</strong></p>');
        $('#contactForm').fadeOut();
    });
});

$(document).ready(function() {
    $('.specificNewsletterRegistration').ajaxForm(function() {
        $('.specificNewsletterMessage').addClass('success').fadeIn().html('<p><strong>The information was sent successfully!</strong></p>');
        dataLayer.push({'event': 'signupTwo'});
        $('.specificNewsletterRegistration').fadeOut();
        $('.newsletterMessage').fadeOut();
        $('.newsletterMessageModal').fadeOut();
    });
});

$(document).ready(function() {
    $('#awardSurvey').ajaxForm(function() {
        $('#surveyMessage').addClass('success').fadeIn().html('<p><strong>The information was sent successfully!</strong></p>');
        dataLayer.push({'event': 'awardSent'});
        $('#awardSurvey').fadeOut();
    });
});

$(document).ready(function() {
    $('.sidebarForm').ajaxForm(function() {
        $('.sidebarMessage').addClass('success').fadeIn().html('<p><strong>Thanks for your message, we will return to you as soon as possible!</strong></p>');
        $('.sidebarForm').fadeOut();
    });
});
