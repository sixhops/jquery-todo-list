console.log('Scripts running...');

$(document).ready(function() {
  console.log("DOM loaded...");

  $('[name=addbutton]').on('click', function() {
    // get the name of the task from the textbox
    var itemText = $('[name=itemtoadd]').val();
    // Create a li with a span and that text
    var item = $('<li>').html("<span class='delete'>x</span> " + itemText);
    // Append the li to the ul
    $('ul').append(item);
    // Clear the input textbox
    $('[name=itemtoadd]').val('');
    // Set forcus on the textbox
    $('[name=itemtoadd]').focus();
  });

  $('ul').on('click', 'span', function(e) {
    // User clicked on the span - remove the span's parent
    $(e.target).parent().remove();
  });

});
