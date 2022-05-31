import React, { useContext } from 'react';
import authService from '../lib/api/auth';
import { AuthContext } from '../lib/providers/auth';
import rebbitLogo from '../rebbitLogo.png';

const Home = () => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <div className="max-w-[1000px] mx-auto px-8 flex  justify-center h-full text-[#EC7357]">
            <p>
                {isAuthenticated
                    ? "You're logged in."
                    : "You're not logged in."}
            </p>
            <h2>
                {' '}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
                maxime dolores, ea consectetur est ipsum possimus quia itaque
                soluta perspiciatis alias nihil, sed voluptatibus commodi
                recusandae. Nihil velit veritatis omnis.
            </h2>
            <div className="display flex items-center justify-center">
                <img src={rebbitLogo} alt="Rebbit Logo" className="mx-auto" />
            </div>
        </div>
    );
};

export default Home;
