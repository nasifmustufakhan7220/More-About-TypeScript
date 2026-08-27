interface Upload {
    type: "upload";
    sizeMB: number;
}

interface Delete {
    type: "delete";
    sizeMB: number;
}

type Action = Upload | Delete;

const updateStorageUsage = (currentUsageMB: number,action: Action): number=>{
    if(action.type === "upload"){
        
        return currentUsageMB + action.sizeMB;
    }
    else if(action.type === "delete") {
        if(currentUsageMB < action.sizeMB) return 0;
        return currentUsageMB - action.sizeMB;
    }
    return currentUsageMB;
}

console.log(updateStorageUsage(300, { type: "delete", sizeMB: 1000 }));