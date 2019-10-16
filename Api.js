async function getVehicle(){
    let myVehicle= await fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/bmw?format=json")
    let cars = await myVehicle.json();
    return cars.Results
}

async function render(){
    // Call and wait for getData() to return the array of users
    let list = await getVehicle()

    // Store the <ul> tag
    let ul = document.querySelector("ul")
    //Store the <li class="prototype"> tag
    let itemPrototype = document.querySelector("li.prototype")
    // Iterate over each user in the array of users
    for(let item of list){
        // Copy the prototype and remove the prototype class
        let newItem = itemPrototype.cloneNode(true)
        newItem.classList.remove("prototype")
        
        // Change the text of the paragraph inside the prototype
        let p = newItem.querySelector("p")
        p.innerText = item.Model_ID
        p = newItem.querySelector("p.modelName")
        p.innerText = item.Model_Name

        // Add it to the <ul> tag
        ul.append(newItem)

        newItem.addEventListener("click", function(){
            p.classList.toggle("hidden")


        })
    }
}

// Start the process
render()



// getData()