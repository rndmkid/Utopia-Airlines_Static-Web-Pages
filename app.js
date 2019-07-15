$(document).ready(function() {

  $('#booking-search-bar').hide();

  $('.navBar').delegate('#booking-search', 'click', function(e) {
    e.preventDefault();
    $(this).remove();
    $('#booking-search-bar').show();
    // $.get($(this).attr('href'), function(data) {
    // 	$('#new-contact').hide();
    // 	that.parent().parent().remove();
    // 	$('#cd-body').append(data);
    // })
  });
});