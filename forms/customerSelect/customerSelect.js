let netID = "sme89450"
let pw = "Chocolate-0-"
let databaseSchema = "sme89450"

query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)

    if (req.status == 200) { //transit trip worked. 
        customerList = JSON.parse(req.responseText)
        if (customerList.length === 0)    
           txtCustomerNames.value = "There are no customers in the database."
        else {        
           let message = ""
           for (i = 0; i < customerList.length; i++)
               message = message + customerList[i][1] + "\n"
           txtCustomerNames.value = message
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        txtCustomerNames.value = "Error code: " + req.status