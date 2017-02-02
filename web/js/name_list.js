/**
 * Created by kyann.brown on 1/31/2017.
 */
// Main Javascript File

function updateTable() {
    // Here's where your code is going to go.

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
                var rowValue = "<td>" + personValue + "</td>";
                console.log(personValue);
                row += rowValue;

            }

            row += "</tr>";
        }

        console.log( $("#datatable").closest('tr'));

        $("#datatable tbody tr")[0].remove();
        $("#datatable").append(row);

        console.log(row);
        console.log("Done");
    });
}

// Call your code.
updateTable();
