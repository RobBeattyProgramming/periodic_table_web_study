// element array info orgabized by periodic row and includes info in the order of name, symbol, atomic number, atomic mass, group
// add more values for valency and other qualities

let periodicInfo = {};
periodicInfo[0] = ["Hydrogen", "H", 1, 1.0078, 1];
periodicInfo[1] = ["Helium", "He", 2, 4.0026, 18];
periodicInfo[2] = ["Lithium", "Li", 3, 6.9410, 1];
periodicInfo[3] = ["Beryllium", "Be", 4, 9.0122, 2];
periodicInfo[4] = ["Boron", "B", 5, 10.811, 13];
periodicInfo[5] = ["Carbon", "C", 6, 12.011, 14];
periodicInfo[6] = ["Nitrogen", "N", 7, 14.007, 15];
periodicInfo[7] = ["Oxygen", "O", 8, 15.999, 16];
periodicInfo[8] = ["Flourine", "F", 9, 18.998, 17];
periodicInfo[9] = ["Neon", "Ne", 10, 20.180, 18, 18];
periodicInfo[10] = ["Sodium", "Na", 11, 22.990, 1];
periodicInfo[11] = ["Magnesium", "Mg", 12, 24.305, 2];
periodicInfo[12] = ["Aluminum", "Ak", 14, 28.086, 3];

function getRandomNumber(maxMinusOne){
    return Math.floor(Math.random() * maxMinusOne);
}

function descriptionCreator(elementInfo){
    let elementGroup = elementInfo[4];

    // don't think anythings needed for if states before 3
    if (elementGroup == 3-12) 
    {
        elementGroup = 2;
    }
    // lazy idea of cutting out the first digit of groups past 12
    else if (elementGroup > 12)
    {
        elementGroup = elementGroup - 10;
    }

    return `The random element is ${elementInfo[0]} (${elementInfo[1]}). ${elementInfo[0]} is part of group ${elementInfo[4]} on the periodic table, meaning it has ${elementGroup} valence electrons.`;
}

function getRandomElement()
{
    let randomNumber = getRandomNumber(10); // change to 104 (one above)
    let chosenElement = periodicInfo[randomNumber];

    let elementName = document.getElementById("elementName");
    elementName.textContent = chosenElement[0];
    let elementSymbol = document.getElementById("elementSymbol");
    elementSymbol.textContent = chosenElement[1];
    let atomicNumber = document.getElementById("atomicNumber");
    atomicNumber.textContent = chosenElement[2];
    let atomicMass = document.getElementById("atomicMass");
    atomicMass.textContent = chosenElement[3];

    let description = descriptionCreator(chosenElement);
    elementDescription.textContent = description;

}   