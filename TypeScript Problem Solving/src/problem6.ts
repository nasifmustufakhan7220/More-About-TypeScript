type Role = "admin" | "editor" | "viewer";

const canEdit = (role: Role): boolean=>{
    if(role === "admin") return true;
    else if(role === "editor") return true;
    else return false;
}


console.log(canEdit("viewer"));