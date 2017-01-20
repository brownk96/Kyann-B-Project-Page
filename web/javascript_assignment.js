/**
 * Created by kyann.brown on 1/19/2017..
 */
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

//Part 4
function correctPhoneNumber(event)
{
    var phoneNumber = $('#phoneField').val();
    var regularExpression = /^\d{3}-\d{3}-\d{4}$/;

    if (regularExpression.test(phoneNumber))
    {
        console.log("OK");
    }
    else
    {
        console.log("Bad");
    }
}

var phoneButton = $('#button4');
phoneButton.on("click", correctPhoneNumber);

//Part 5
function jsonFunction(event)
{
    var jsonObject = {};

    jsonObject.firstName = $('#firstName').val();
    jsonObject.lastName = $('#lastName').val();
    jsonObject.email = $('#email').val();

    var jsonString = JSON.stringify(jsonObject);

    console.log(jsonObject);
}

var jsonButton = $('#button5');
jsonButton.on("click", jsonFunction);
