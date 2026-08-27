interface Player {
    name: string;
    scores: number[];
}
type Rank = "MVP" | "Rookie";
interface NewPlayers{
    name: string;
    average: number;
    rank: Rank;
}

const getPlayerStats = (player: Player): NewPlayers | null =>{

    if(player.scores.length === 0) return null;

    const total: number = player.scores.reduce((acc,curr)=>acc + curr,0);

    const average: number = total / player.scores.length;
    let rank: Rank;
    if(average >= 80) rank = "MVP"
    else rank = "Rookie";
    return {
        name: player.name,
        average: average,
        rank: rank
    }
}

console.log(getPlayerStats({
    name: "Zex",
    scores: []
}));