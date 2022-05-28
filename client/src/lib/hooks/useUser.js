import { useEffect, useState } from 'react';
import authService from '../api/auth';

export default function useUser() {
    const [user, setUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            const user = await authService.status();

            if (!user) {
                setUser({});
                setIsAuthenticated(false);
            } else {
                setUser(user);
                setIsAuthenticated(true);
            }
        };

        fetchUser();
    }, []);

    return {
        user,
        isAuthenticated,
    };
}
