var x = [
  [760, 801, 848, 895, 965],
  [533, 653, 739, 780, 880, 1100],
  [714, 817, 862, 870, 918],
  [724, 802, 806, 871, 950],
  [834, 836, 864, 882, 910],
];

console.log("x.length: ", x.length);
console.log("x[5]", x[5]);
console.log("x", x);
var count = 0;
var sum = 0;
var avg = 0;
for (let i = 0; i <= x.length; i++) {
  for (let j = 0; j <= x[i].length; j++) {
    sum += x[i][j];
    console.log("x[i][j]", "i", i, "j", j, x[i][j]);
    count++;
  }
}
avg = sum / (i * 5);

console.log("x[length][length]", x.length * x);
console.log("count", count);
