/*let newName = inptNewName.value
    let oldName = inptOldName.value
    query = "SELECT * FROM pets WHERE `petName` = '" + oldName + "'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)
    if (req.status == 200) {
        allPetData = JSON.parse(req.responseText)
        if (allPetData.length > 0) {
            query = "UPDATE pets SET `petName` ='" + newName + "' WHERE `petName` = '" + oldName + "'"
            req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)
            if (req.status ==  200)  
                if (req.responseText == 500)   
                    lblMessage7.textContent = `You have successfully updated ${oldName} to ${newName}.`
                else
                    lblMessage7.textContent = `There was a problem updating ${oldName} to ${newName}.`
            else   
                lblMessage7.textContent = `Error: ${req.status}`
        }
    } 
    */