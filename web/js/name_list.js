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
                    var phoneNumber;

                    if(personValue.length === 12)
                    {
                        phoneNumber= personValue;
                    }
                    else
                    {
                        phoneNumber = personValue.substring(0,3) + "-" + personValue.substring(3,6) + "-" + personValue.substring(6);

                    }
                    personValue = phoneNumber;
                }

                var rowValue = "<td>" + personValue + "</td>";
                row += rowValue;
            }

            row += "</tr>";
        }

        $("#datatable tbody").empty();
        $("#datatable").append(row);
    });
}

// Call your code.
updateTable();

//Show the form box
function showDialogAdd()
{
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

//Save changes in form - at this point, validate
function saveFormChanges()
{
    var valid_Form = true;

    var firstNameString = $('#firstName').val();
    var lastNameString = $('#lastName').val();
    var emailString = $('#email').val();
    var phoneString = $('#phone').val();
    var birthdayString = $('#birthday').val();

    var regFirstName = /^[A-Za-z]{1,20}$/;
    var regLastName = /^[A-Za-z']{1,30}$/;
    var regEmail = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var regPhone = /^\d{3}-\d{3}-\d{4}$/;
    var regBirthday = /^(18|19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;

    if (regFirstName.test(firstNameString))
    {
        $('#firstNameDiv').removeClass("has-error");
        $('#firstNameDiv').addClass("has-success");

        $('#firstNameGlyph').removeClass("glyphicon-remove");
        $('#firstNameGlyph').addClass("glyphicon-ok");

        $('firstNameStatus').val("(success)");
    } else {
        $('#firstNameDiv').removeClass("has-success");
        $('#firstNameDiv').addClass("has-error");

        $('#firstNameGlyph').removeClass("glyphicon-ok");
        $('#firstNameGlyph').addClass("glyphicon-remove");

        $('firstNameStatus').val("(error)");
        valid_Form = false;
    }

    if (regLastName.test(lastNameString))
    {
        $('#lastNameDiv').removeClass("has-error");
        $('#lastNameDiv').addClass("has-success");

        $('#lastNameGlyph').removeClass("glyphicon-remove");
        $('#lastNameGlyph').addClass("glyphicon-ok");

        $('lastNameStatus').val("(success)");
    } else{
        $('#lastNameDiv').removeClass("has-success");
        $('#lastNameDiv').addClass("has-error");

        $('#lastNameGlyph').removeClass("glyphicon-ok");
        $('#lastNameGlyph').addClass("glyphicon-remove");

        $('lastNameStatus').val("(error)");
        valid_Form = false;
    }

    if (regEmail.test(emailString))
    {
        $('#emailDiv').removeClass("has-error");
        $('#emailDiv').addClass("has-success");

        $('#emailGlyph').removeClass("glyphicon-remove");
        $('#emailGlyph').addClass("glyphicon-ok");

        $('emailStatus').val("(success)");
    } else {
        $('#emailDiv').removeClass("has-success");
        $('#emailDiv').addClass("has-error");

        $('#emailGlyph').removeClass("glyphicon-ok");
        $('#emailGlyph').addClass("glyphicon-remove");

        $('emailStatus').val("(error)");
        valid_Form = false;
    }

    if (regPhone.test(phoneString))
    {
        $('#phoneDiv').removeClass("has-error");
        $('#phoneDiv').addClass("has-success");

        $('#phoneGlyph').removeClass("glyphicon-remove");
        $('#phoneGlyph').addClass("glyphicon-ok");

        $('phoneStatus').val("(success)");
    } else {
        $('#phoneDiv').removeClass("has-success");
        $('#phoneDiv').addClass("has-error");

        $('#phoneGlyph').removeClass("glyphicon-ok");
        $('#phoneGlyph').addClass("glyphicon-remove");

        $('phoneStatus').val("(error)");
        valid_Form = false;
    }

    if (regBirthday.test(birthdayString))
    {
        $('#birthdayDiv').removeClass("has-error");
        $('#birthdayDiv').addClass("has-success");

        $('#birthdayGlyph').removeClass("glyphicon-remove");
        $('#birthdayGlyph').addClass("glyphicon-ok");

        $('birthdayStatus').val("(success)");
    } else {
        $('#birthdayDiv').removeClass("has-success");
        $('#birthdayDiv').addClass("has-error");

        $('#birthdayGlyph').removeClass("glyphicon-ok");
        $('#birthdayGlyph').addClass("glyphicon-remove");

        $('birthdayStatus').val("(error)");
        valid_Form = false;
    }

    if (valid_Form)
    {
        var url = "api/name_list_edit";
        var dataToServer = {firstName : firstNameString, lastName : lastNameString, email : emailString, phone : phoneString, birthday : birthdayString};

        console.log(dataToServer);

        $.post(url, dataToServer, function (dataFromServer) {
            console.log("Finished calling servlet");
            console.log(dataFromServer);
            updateTable();
        });
    }
    else {
        console.log("Oh no");
    }



}

var saveButtonChanges = $('#saveChanges');
saveButtonChanges.on("click", saveFormChanges);

