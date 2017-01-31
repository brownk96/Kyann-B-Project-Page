/**
 * Created by kyann.brown on 1/31/2017.
 */
// Main Javascript File

function updateTable() {
    // Here's where your code is going to go.

    var url = "api/name_list_get";

    $.getJSON(url, null, function(json_result)
        {
            for (var count = 0; count < json_result.length; count++)
            {
                var row = $("<tr><td>" + json_result[count] + "</tr></td>")
                console.log(json_result[count].first);
                console.log(json_result[count].last);

            }

            /*if (row != "")
            {
                $("#datatable").append(row);
            }*/
            console.log("Done");
            console.log("Hi, this is working")
        }
    );
}

// Call your code.
updateTable();
