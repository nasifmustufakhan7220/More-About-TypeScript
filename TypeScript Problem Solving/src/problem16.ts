type Tier = "Free" | "Pro" | "Premium";

const canAccessOfflineMode = (tier: Tier): boolean=>{
    if(tier === "Free") return false;
    else if (tier === "Pro") return true;
    else return true

}

console.log(canAccessOfflineMode("Premium"));