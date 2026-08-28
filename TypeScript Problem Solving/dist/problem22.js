"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatTicketConfirmation = (ticket) => {
    const { name, movie, time } = ticket;
    return `${name}'s ticket for ${movie} is confirmed at ${time}.`;
};
console.log(formatTicketConfirmation({ name: "Jamal", movie: "Inception", time: "6:00 PM" }));
//# sourceMappingURL=problem22.js.map