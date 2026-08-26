interface Player {
    username: string;
    level: number;
    region: "Asia" | "Africa" | "Russia" | "America";
}

const formatPlayerCard = <T extends Player> (player: T): string=>{
    const {username, level, region} = player;

    return `${username} is a level ${level} player from ${region}`;
}

console.log(formatPlayerCard({
    username: "ShadowByte",
    level: 42,
    region: "Asia"
}));