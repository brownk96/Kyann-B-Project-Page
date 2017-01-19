//Part 1
function printFunction(event)
{
    console.log("Hello");
}

var printButton = $('#button1');
printButton.on("click", printFunction);

//Part 2
function addNumbers(event)
{
    var number1 = parseInt($('#field1').val());
    var number2 = parseInt($('#field2').val());
    var sum = number1 + number2;
    $('#field3').val(sum);

}

var addButton = $('#button2');
addButton.on("click", addNumbers);

//Part 3
function hideFunction(event)
{
    if ($('#paragraphToHide').is(":visible"))
    {
        $('#paragraphToHide').hide(500);
    }
    else
    {
        $('#paragraphToHide').show(500);
    }

}

var hideButton = $('#button3');
hideButton.on("click", hideFunction);