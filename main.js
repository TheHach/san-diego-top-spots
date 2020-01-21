$(document).ready(function(){
// write your code here
    $.getJSON("data.json", function (data) {
    $.each(data, function (key, value) {
        $('#dataTable').append(`<tr>
        <td>${value.name}</td>
        <td>${value.description}</td>
        <td><a href="https://www.google.com/maps?q=" + ${value.location}>Google Maps</a>
        </td></tr>`);
        });
    });
});