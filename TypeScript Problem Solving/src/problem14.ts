interface Track {
    title: string;
    minutes: number;
}

const calculateTotalListeningTime = (tracks: Track[]): number=>{
    const total = tracks.reduce((acc, curr)=>acc + curr.minutes,0);

    if(tracks.length !== 0){
        return total;
    }
    return 0;
}

console.log(calculateTotalListeningTime([]));