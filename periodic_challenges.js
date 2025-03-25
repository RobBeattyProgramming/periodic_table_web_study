// element array info orgabized by periodic row and includes info in the order of name, symbol, atomic number, atomic mass
// add more values for valency and other qualities

let periodicInfo = {};
periodicInfo[0] = ["Hydrogen", "H", 1, 1.0078];
periodicInfo[1] = ["Helium", "He", 2, 4.0026];
periodicInfo[2] = ["Lithium", "Li", 3, 6.9410];
periodicInfo[3] = ["Beryllium", "Be", 4, 9.0122];
periodicInfo[4] = ["Boron", "B", 5, 10.811];
periodicInfo[5] = ["Carbon", "C", 6, 12.011];
periodicInfo[6] = ["Nitrogen", "N", 7, 14.007];
periodicInfo[7] = ["Oxygen", "O", 8, 15.999];
periodicInfo[8] = ["Flourine", "F", 9, 18.998];
periodicInfo[9] = ["Neon", "Ne", 10, 20.180];

function getRandomNumber(maxMinusOne){
    return Math.floor(Math.random() * maxMinusOne);
}

function getRandomElement()
{
    let randomNumber = getRandomNumber(10); // change to 104 (one above)
    console.log(periodicInfo[randomNumber]);

}