import React from "react";

const UsernameContext = React.createContext({
    username: "saisyam",
    setUsername: () => {}
});

export default UsernameContext;