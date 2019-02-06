const allCars = [
    {
        model: "Mustang",
        color: "Midnight Blue",
        year: 1976,
        length: 120,
        width: 62,
        height: 47
    },
    {
        model: "Xterra",
        color: "Forest Green",
        year: 2011,
        length: 144,
        width: 71,
        height: 55
    },
    {
        model: "Thunderbird",
        color: "Red",
        year: 2005,
        length: 115,
        width: 58,
        height: 42
    },
    {
        model: "Suburban",
        color: "Grey",
        year: 2015,
        length: 149,
        width: 73,
        height: 58
    }
]

const outputElement = document.querySelector("#app")

// // Iterate the array of cars. Individual objects stored in `car`.
// allCars.forEach(car => {

//     // Iterate all of the values of the current car
//     for (const value of Object.values(car)) {
//         outputElement.innerHTML += `<div>${value}</div>`
//     }
// })

/*
    Just get a reference to the first object since
    they all have the same properties
*/
const firstCar = allCars[0]

// Now iterate its keys
outputElement.innerHTML += "<h1>Properties</h1>"
for (const key of Object.keys(allCars[0])) {
  outputElement.innerHTML += `<div>${key}</div>`
}

// Iterate the array of cars. Individual objects stored in `car`.
outputElement.innerHTML += "<h1>Car List</h1>"
allCars.forEach(car => {

    // Iterate all of the values of the current car
    for (const value of Object.values(car)) {
      outputElement.innerHTML += `<div>${value}</div>`
    }
})

outputElement.innerHTML += "<h1>Car List</h1>"

allCars.forEach(car => {
    outputElement.innerHTML += "<hr/>"

    for (const entry of Object.entries(car)) {
        outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
    }
})

// Lightning Exercise 2: Copy the code below and paste it above your object.
const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

// object representing doctors bill
const doctorsBill = {
    officeName: "Smith Doctors",
    streetAddress: "123 Some St",
    doctorName: "Dr Smith",
    patientName: "Bill O'Dee",
    visitDate: "1/12/2019",
    amountBilled: "274.01",
    dueDate: "1/1/2020"
}

// Use square bracket notation to output the value of those three properties to the console in Chrome.
console.log(`${doctorsBill[dateVisited]}
$${doctorsBill[owed]}
${doctorsBill[[patient]]}`)


// Lightning Exercise 3: Use Object.values() to output all the property values to the console in Chrome.
for (const value of Object.values(doctorsBill)) {
    console.log(`${value}`)
}

// Object.keys
// Lightning Exercise 1: Output all of the key names from your doctor's office bill to the console in Chrome.
for (const key of Object.keys(doctorsBill)) {
    console.log(`${key}`)
}

// Lightning Exercise 2: Output all of the key names from your doctor's office bill
// to the DOM inside a parent <section> element. Wrap each one in a <span> element.
docEl = document.querySelector("#docs")
for (const key of Object.keys(doctorsBill)) {
docEl.innerHTML += `
<section>
<span>${key}</span>
</section>
`
}

// Lightning Exercise 1: Create an object to represent your favorite dinner item (e.g. meatloaf, spaghetti, fried fish, gumbo).
// Each object should have a name property,
//  but you can add any other properties that you like, such as size, weight, ethnicity, vegetarian boolean.

const alfredo = {
    type: "Pasta",
    color: "White",
    meat: "Chicken",
}

mealEl = document.querySelector("#food")
for (const entry of Object.entries(alfredo)) {
    mealEl.innerHTML += `<div>${entry[0]}:  ${entry[1]}</div>`
}


