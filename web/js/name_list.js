/**
 * Created by kyann.brown on 1/31/2017.
 */
// Main Javascript File

function updateTable() {

    var url = "api/name_list_get";

    $.getJSON(url, null, function(json_result)
    {
        var row = "";

        for (var count = 0; count < json_result.length; count++)
        {
            var person = json_result[count];

            row += "<tr>";

            for (var key in person)
            {
                personKey = key;
                personValue = person[key].toString();

                if(personKey === "phone")
                {
                    var phoneNumber = personValue.substring(0,3) + "-" + personValue.substring(3,6) + "-" + personValue.substring(6);
                    personValue = phoneNumber;
                }

                var rowValue = "<td>" + personValue + "</td>";
                row += rowValue;
            }

            row += "</tr>";
        }

        $("#datatable tbody tr")[0].remove();
        $("#datatable").append(row);

        console.log("Done");
    });
}

// Call your code.
updateTable();

function showDialogAdd()
{
    console.log("Opening add item dialog");

    $('#id').val("");
    $('#firstName').val("");
    $('#lastName').val("");
    $('#email').val("");
    $('#phone').val("");
    $('#birthday').val("");

    $('#myModal').modal('show');

    $('#firstNameDiv').removeClass("has-error");
    $('#lastNameDiv').removeClass("has-error");
    $('#emailDiv').removeClass("has-error");
    $('#phoneDiv').removeClass("has-error");
    $('#birthdayDiv').removeClass("has-error");

    $('#firstNameDiv').removeClass("has-success");
    $('#lastNameDiv').removeClass("has-success");
    $('#emailDiv').removeClass("has-success");
    $('#phoneDiv').removeClass("has-success");
    $('#birthdayDiv').removeClass("has-success");

    $('#firstNameGlyph').removeClass("glyphicon-remove");
    $('#lastNameGlyph').removeClass("glyphicon-remove");
    $('#emailGlyph').removeClass("glyphicon-remove");
    $('#phoneGlyph').removeClass("glyphicon-remove");
    $('#birthdayGlyph').removeClass("glyphicon-remove");

    $('#firstNameGlyph').removeClass("glyphicon-ok");
    $('#lastNameGlyph').removeClass("glyphicon-ok");
    $('#emailGlyph').removeClass("glyphicon-ok");
    $('#phoneGlyph').removeClass("glyphicon-ok");
    $('#birthdayGlyph').removeClass("glyphicon-ok");
}


var addItemButton = $('#addItem');
addItemButton.on("click", showDialogAdd);


function saveFormChanges()
{
    console.log("Hi, save changes works");

    var firstNameString = $('#firstName').val();
    var lastNameString = $('#lastName').val();
    var emailString = $('#email').val();
    var phoneString = $('#phone').val();
    var birthdayString = $('#birthday').val();

    var regFirstName = /^[A-Za-z]{1,20}$/;
    var regLastName = /^[A-Za-z']{1,30}$/;
    var regEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var regPhone = /^\d{3}-\d{3}-\d{4}$/;
    var regBirthday = /^(18|19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;

    if (regFirstName.test(firstNameString))
    {
        console.log("Okay first name");
        $('#firstNameDiv').removeClass("has-error");
        $('#firstNameDiv').addClass("has-success");

        $('#firstNameGlyph').removeClass("glyphicon-remove");
        $('#firstNameGlyph').addClass("glyphicon-ok");

        $('firstNameStatus').val("(success)");
    } else {
        console.log("Bad first name");
        $('#firstNameDiv').removeClass("has-success");
        $('#firstNameDiv').addClass("has-error");

        $('#firstNameGlyph').removeClass("glyphicon-ok");
        $('#firstNameGlyph').addClass("glyphicon-remove");

        $('firstNameStatus').val("(error)");
    }

    if (regLastName.test(lastNameString))
    {
        console.log("Okay last Name");
        $('#lastNameDiv').removeClass("has-error");
        $('#lastNameDiv').addClass("has-success");

        $('#lastNameGlyph').removeClass("glyphicon-remove");
        $('#lastNameGlyph').addClass("glyphicon-ok");

        $('lastNameStatus').val("(success)");
    } else{
        console.log("Bad last name");
        $('#lastNameDiv').removeClass("has-success");
        $('#lastNameDiv').addClass("has-error");

        $('#lastNameGlyph').removeClass("glyphicon-ok");
        $('#lastNameGlyph').addClass("glyphicon-remove");

        $('lastNameStatus').val("(error)");
    }

    if (regEmail.test(emailString))
    {
        console.log("Good email");
        $('#emailDiv').removeClass("has-error");
        $('#emailDiv').addClass("has-success");

        $('#emailGlyph').removeClass("glyphicon-remove");
        $('#emailGlyph').addClass("glyphicon-ok");

        $('emailStatus').val("(success)");
    } else {
        console.log("Bad email");
        console.log("Bad last name");
        $('#emailDiv').removeClass("has-success");
        $('#emailDiv').addClass("has-error");

        $('#emailGlyph').removeClass("glyphicon-ok");
        $('#emailGlyph').addClass("glyphicon-remove");

        $('emailStatus').val("(error)");
    }

    if (regPhone.test(phoneString))
    {
        console.log("Good phone");
        $('#phoneDiv').removeClass("has-error");
        $('#phoneDiv').addClass("has-success");

        $('#phoneGlyph').removeClass("glyphicon-remove");
        $('#phoneGlyph').addClass("glyphicon-ok");

        $('phoneStatus').val("(success)");
    } else {
        console.log("Bad phone");
        console.log("Bad last name");
        $('#phoneDiv').removeClass("has-success");
        $('#phoneDiv').addClass("has-error");

        $('#phoneGlyph').removeClass("glyphicon-ok");
        $('#phoneGlyph').addClass("glyphicon-remove");

        $('phoneStatus').val("(error)");
    }

    if (regBirthday.test(birthdayString))
    {
        console.log("Good birthday");
        $('#birthdayDiv').removeClass("has-error");
        $('#birthdayDiv').addClass("has-success");

        $('#birthdayGlyph').removeClass("glyphicon-remove");
        $('#birthdayGlyph').addClass("glyphicon-ok");

        $('birthdayStatus').val("(success)");
    } else {
        console.log("Bad birthday");
        console.log("Bad last name");
        $('#birthdayDiv').removeClass("has-success");
        $('#birthdayDiv').addClass("has-error");

        $('#birthdayGlyph').removeClass("glyphicon-ok");
        $('#birthdayGlyph').addClass("glyphicon-remove");

        $('birthdayStatus').val("(error)");
    }

}



var saveButtonChanges = $('#saveChanges');
saveButtonChanges.on("click", saveFormChanges);

