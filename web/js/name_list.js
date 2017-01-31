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
                console.log(json_result[count].first);
            }
            console.log("Done");
        }
    );
}

// Call your code.
updateTable();
