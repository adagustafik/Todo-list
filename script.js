
let number = 0;
$('button').click (() => {
    number++;
    $('ul').append(`<li id=` + number + `>` + $('input:text').val() + 
    `<div><img src='./images/103224_trash_icon.svg' class='delete' id=` + number + `>
    <img src='./images/3669380_check_circle_icon_empty.svg' class='complete' id=` + number + `>
     </div></li>`);
    $('input').val("");
});

$('.complete').click((event) => {
    let numberClicked = $(event.target).attr('id');
    $(`li id=` + numberClicked).toggleClass('complete');
    $(`.complete id=` + numberClicked).html("<img src='./images/3669380_check_circle_icon_full.svg'>");
});


/* PREVIOUS - "LI" LINE THROUGH ON CLICK FUNCTION
$('ul').click(function(event) {
    $(event.target).css('text-decoration','line-through');
});
*/
