var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';

$(document).ready(function() {
    $('img').click(function(e) {
        var offset = $(this).offset();
        var X = (e.pageX - offset.left);
        var Y = (e.pageY - offset.top);
        $('#coord').text('X: ' + X + ', Y: ' + Y);

        console.log(X, Y);
    });
});

document.getElementsByTagName('head')[0].appendChild(script);