
$('button').click (() => {
    $('ul').append("<li>" + $('input:text').val() +"</li>");
    $('input').val("");
});


$('ul').click(function(event) {
    $(event.target).css('text-decoration-line','line-through');
});



/*
$('li').click(function(event) {
    $(event.target).css('text-decoration-line','line-through');
});
*/