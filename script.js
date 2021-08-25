let petName = prompt("Name your pet.");
let petHappiness = 0;
let petEnergy = 0;

for (let i = 0; i < 6; i++) {
    let action = prompt("feed, pet, or walk?");
    if (action === "feed") {
        petEnergy += 2;
    } else if (action === "pet") {
        petHappiness += 1;
    } else if (action === "walk") {
        if (petEnergy === 0) {
            alert("Not enough energy to enjoy a walk.")
        } else {
            petHappiness += 2;
            petEnergy -= 1; 
        }
    } else {
        alert("Please choose to feed, pet, or walk your pet!")
    }
}

console.log(petName + " has " + petHappiness + " happiness and " + petEnergy + " energy.");
