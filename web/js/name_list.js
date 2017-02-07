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
    console.log("Openign add item dialog");
}


var addItemButton = $('#addItem');
addItemButton.on("click", showDialogAdd);
