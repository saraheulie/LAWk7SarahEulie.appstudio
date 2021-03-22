let name = inptName.value
    let animalType = inptType.value
    let query = "INSERT INTO pets (`petName`,`petType`) VALUES ('" + name + "', '" + animalType + "')"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)
    if (req.status == 200) { 
        if (req.responseText == 500)    
            lblMessage3.textContent = "You have successfully added the pet!"
        else
            lblMessage3.textContent = "There was a problem with adding the pet to the database."
    } else 
        lblMessage3.textContent = "Error: " + req.status