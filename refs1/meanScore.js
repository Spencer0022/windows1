const scores1 = [0, 1.5, 2.5, 3.7];
const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2];
const scores3 = [1.3, 2.5, 1.9];
const scores4 = ["abc", 1.3, true, 2.5, 1.9];

// const meanScore = (...scores) => {
//     if (scores.every(score => typeof score === "number")){
//         return scores.reduce((avg, score) => {
//             return avg + score / scores.length
//         },0).toFixed(2);
//     } else {console.log("Arguments must be all numbers.")}
// };

const meanScore = (...scores) => {
    if (scores.every(score => typeof score === "number")) {
        return scores.reduce((avg,score) => {
            return avg + score / scores.length
        },0).toFixed(2)
    } else {console.log("All arguments must be numbers.")}
};
console.log(meanScore(...scores1));
console.log(meanScore(...scores1, ...scores2));
console.log(meanScore(...scores1, ...scores2, ...scores3));
console.log(meanScore(...scores4));
