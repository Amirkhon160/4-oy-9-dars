const names = ["Amirxon", "Salohiddin", "MirsaidBot", "non", "CSS", "Java", "IT", "Son", "adolf", "stalin"]
console.log(names);

const bor = []
const yoq = []
// const ikkalasi = []

for (let index = 0; index < names.length; index++) {
    if (names[index].includes(`n`)) {
        bor.push(names[index])
    }
    else {
        yoq.push(names[index])
    }
}

// for (let index = 0; index < names.length; index++) {
//     if (names[index].includes (`o`)) {
//         o.push(names[index])
//     }
// }

// for (let index = 0; index < names.length; index++) {
//     if (names[index].includes (`o`) && (`a`)) {
//         ikkalasi.push(names[index])
//     }
// }


console.log(bor);
console.log(yoq);
// console.log(ikkalasi);

