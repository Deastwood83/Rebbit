import { createContext } from 'react';

const AuthContext = createContext({
    isAuthenticated: false,
    user: {},
});

const AuthProvider = AuthContext.Provider;

export { AuthContext, AuthProvider };
