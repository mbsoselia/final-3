var $form = $('form#test-form'),
url = 'https://script.google.com/macros/s/AKfycbx_65T093yhAYIIfPg4h91CCNWT8YknQgUIvRhkhdxdAot-BUI/exec',
    redirectUrl = 'cf-success-page.html'

$('#postForm').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.get(url, $form.serialize(), function(data) {
            console.log("Success! Data: " + data.statusText);
      $(location).attr('href',redirectUrl);
        });
  })