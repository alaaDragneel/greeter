$(document).ready(function () {
    $('#login').on('click', function (e) {
        $G('Alaa', 'Dragneel', $('#lang').val()).greet().html('#greeting', true).log();
    });
});