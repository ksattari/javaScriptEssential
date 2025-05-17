let userRole = "subscriber";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;

if (userRole === "employee") {
    accessLevel = "Access Dietary to Dietary Services";
} else if (userRole === "enrolled member") {
    accessLevel = "Access Dietary to Dietary Services and one-on-one interation with a dietician";
} else if (userRole === "subscriber") {
    accessLevel = "Partial Access to facilitate Dietary Services";
} else {
     accessLevel = "No access granted, need to enroll";
}


console.log("Access Level:", accessLevel);

if (isLoggedIn) {
    if (userRole === "employee") {
        userMessage = "Welcome, Employee!";
    } else if (userRole === "enrolled member") {
        userMessage = "Welcome, Enrolled Member!";
    } else if (userRole === "subscriber") {
        userMessage = "Welcome, Subscriber!"
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

switch (userType) {
    case "employee":
        userCategory = "Employee";
        break;
    case "enrolled member":
        userCategory = "Enrolled Member";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status: ", authenticationStatus)