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
    var regLastName = /^[A-Za-z]{1,30}$/;
    var regEmail = /^\w+@[A-Za-z]+\.+[A-Za-z]{3}$/;
    var regPhone = /^\d{3}-\d{3}-\d{4}$/;
    var regBirthday = /^\d{4}-\d{2}-\d{2}$/;

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
    }else{
        console.log("Bad last name");
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
    }

}



var saveButtonChanges = $('#saveChanges');
saveButtonChanges.on("click", saveFormChanges);

