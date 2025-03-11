const ageOne = [5, 2, 4, 1, 15, 8, 3,10,20];
const ageTwo = [16, 6, 10, 5, 6, 1, 4];

//cau1
const ageThree = [...new Set([...ageOne, ...ageTwo])];
console.log(ageThree);
//cau 2
const ageFinal = ageThree.map(num => num % 2 === 0 ? num : num ** 2);
console.log(ageFinal);

    //tinh tong so chan
    const sumChan = ageFinal.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
    console.log("Tổng các phần tử chẵn:", sumChan);
//cau3
ageFinal.sort((a, b) => a - b);
console.log(ageFinal);
//cau4
console.log(ageOne.length > ageTwo.length ? "ageOne có nhiều phần tử hơn" : "ageTwo có nhiều phần tử hơn");

//cau5
let sum = 0;
ageFinal.forEach(num => {
    if (num >= 10) sum += num;
});
console.log("Tổng các phần tử >= 10:", sum);