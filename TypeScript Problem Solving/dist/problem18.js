"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const renderNotification = (notification) => {
    if (notification.type === "like")
        return `${notification.fromUser} liked your post`;
    else if (notification.type === "system")
        return `System: ${Object.hasOwn(notification, 'actionUrl') ? `${notification.message} (Tap to view)` : `${notification.message}`}`;
    return null;
};
console.log(renderNotification({ type: "system", message: "Your subscription is expiring soon.", actionUrl: "/billing" }));
//# sourceMappingURL=problem18.js.map