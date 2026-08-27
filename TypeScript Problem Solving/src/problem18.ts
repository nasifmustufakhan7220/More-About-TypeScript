interface Like {
    type: "like";
    fromUser: string;
}

interface System {
    type: "system";
    message: string;
    actionUrl?: string
}

type Notification = Like | System;

const renderNotification = (notification: Notification): string | null =>{
    if(notification.type === "like") return `${notification.fromUser} liked your post`;
    else if(notification.type === "system") return `System: ${Object.hasOwn(notification, 'actionUrl') ? `${notification.message} (Tap to view)` : `${notification.message}`}`
    
    return null;
}

console.log(renderNotification({ type: "system", message: "Your subscription is expiring soon.", actionUrl: "/billing" }));