const gameEvent = new Map([
    [10, 'Ghi bàn'],
    [25, 'Thẻ vàng'],
    [40, 'Thẻ đỏ'],
    [60, 'Ghi bàn'],
    [30, 'Ghi bàn'],
    [55, 'Thẻ vàng'],
    [80, 'Thẻ đỏ'],
    [89, 'Thay người'],
    [92, 'Ghi bàn']
]);

const hiepOne = [];
const hiepTow = [];

gameEvent.forEach((event, time) => {
    if (time <= 45) {
        hiepOne.push(`[Phút ${time}]: ${event}`);
    } else {
        hiepTow.push(`[Phút ${time}]: ${event}`);
    }
});

console.log(' hiệp 1:');
console.log(hiepOne.join('\n'));

console.log('\n hiệp 2:');
console.log(hiepTow.join('\n'));