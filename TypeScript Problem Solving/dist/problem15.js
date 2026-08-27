"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPlayerStats = (player) => {
    if (player.scores.length === 0)
        return null;
    const total = player.scores.reduce((acc, curr) => acc + curr, 0);
    const average = total / player.scores.length;
    let rank;
    if (average >= 80)
        rank = "MVP";
    else
        rank = "Rookie";
    return {
        name: player.name,
        average: average,
        rank: rank
    };
};
console.log(getPlayerStats({
    name: "Zex",
    scores: []
}));
//# sourceMappingURL=problem15.js.map