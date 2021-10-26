
$('button').click (() => {
    $('ul').append("<li>" + $('input:text').val() +"</li>");
    $('input').val("");
});