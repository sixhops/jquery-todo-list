console.log('Scripts running...');

$(document).ready(function() {
  console.log("DOM loaded...");

  $('[name=addbutton]').on('click', function() {
    // get the name of the task from the textbox
    var itemText = $('[name=itemtoadd]').val();
    // Create a li with that text
    var item = $('<li>').html("<span class='delete'>x</span> " + itemText);
    $('ul').append(item);
    $('[name=itemtoadd]').val('');
    $('[name=itemtoadd]').focus();
  });

  $('ul').on('click', 'span', function(e) {
    $(e.target).parent().remove();
  });

});

