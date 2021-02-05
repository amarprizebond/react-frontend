import React from 'react';

export const UserContext = React.createContext({
    user: null,
    setUser: () => {},
    numbers: [],
    setNumbers: () => {},
    total: 0,
    setTotal: () => {}
});
