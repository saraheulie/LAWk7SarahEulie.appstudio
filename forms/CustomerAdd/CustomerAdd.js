customerAdd.onshow = function() {
  query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        console.log(`The results are /n ${results}`)
        if (results.length === 0)    
           lblMessageAdd.value = "There are no customers in the database."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
           txtaCustomerNamesAdd.value = message
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        lblMessageAdd.value = "Error code: " + req.status
}



btnAdd.onclick=function(){
    let name = inptCustomerName.value
    let street = inptCustomerStreet.value
    let city = inptCustomerCity.value
    let state = inptCustomerState.value
    let zipcode = inptCustomerZIP.value
    
    let query = "INSERT INTO customer (name, street, city, state, zipcode) VALUES ('" + name + "', '" + street + "', '" + city + "','" + state + "','" + zipcode + "')"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) { 
        if (req.responseText == 500)    
            lblMessageAdd.value = "You have successfully added the new customer! /n See the new customer in the updated list above."
        else
            lblMessageAdd.value = "There was a problem with adding the customer to the database."
    } else 
        lblMessageAdd.textContent = "Error: " + req.status
        
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        console.log(`The results are /n ${results}`)
        if (results.length === 0)    
           lblMessageAdd.value = "There are no customers in the database."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
           txtaCustomerNamesAdd.value = message
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        lblMessageAdd.value = "Error code: " + req.status
  
}
