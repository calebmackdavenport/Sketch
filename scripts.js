$(document).ready(function() {
    for(var x = 0; x < 16; x++) {
        $('#container').append('<div class="row" id=row' + (x+1) + '></div>');
        for(var y = 0; y < 16; y++) {
            var unit = $("<div class='units' id='x" + (y+1) + "' y" + (x+1) + "'></div>");
            unit.appendTo('#row' + (x+1));
            }
        }

    $(".units").hover(function(e){
        $(this).css("background-color", random_rgba());
      },function(){
        $(this).css("background-color","");
      });
});

function remove() {
    $('.units').remove();
}

function create() {
    remove();
    let newx = $('#height').val();
    let newy = $('#width').val();
    for(let x = 0; x < newx; x++) {
        $('#container').append('<div class="row" id=row' + (x+1) + '></div>');
        for(let y = 0; y < newy; y++) {
            var unit = $("<div class='units' id='x" + (y+1) + "' y" + (x+1) + "'></div>");
            unit.appendTo('#row' + (x+1));
            }
        }
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}