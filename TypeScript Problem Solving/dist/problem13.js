"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatPlayerCard = (player) => {
    const { username, level, region } = player;
    return `${username} is a level ${level} player from ${region}`;
};
console.log(formatPlayerCard({
    username: "ShadowByte",
    level: 42,
    region: "Asia"
}));
//# sourceMappingURL=problem13.js.map