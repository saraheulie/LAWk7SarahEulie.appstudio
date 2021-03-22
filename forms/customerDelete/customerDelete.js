 let customerNameDel = inptDelName.value
    let found = false
    for (i = 0; i < customerList.length; i++) {
        if (customerNameDel == customerList[i][1]){
            found = true
            break 
        }
    }
    if (found == false) 
       lblMessage5.textContent = "That customer is not in the database."
    else if (found == true) {
      query = "DELETE FROM customer WHERE name = '" + customerNameDel + "'"      
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)
      if (req.status == 200) //transit worked.
            if (req.responseText == 500)    
                lblMessage5.textContent = `You have successfully deleted the pet named ${petNameDel}`
            else
                lblMessage5.textContent = `There was a problem deleting ${petNameDel} from the database.`
      else
        lblMessage5.textContent = `Error: ${req.status}`
    } 
