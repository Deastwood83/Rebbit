import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from '../lib/api/auth';
import { reset } from '../lib/store/reducers/auth';
import AuthRequired from './AuthRequired';

const Signout = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const onSignout = async () => {
        setLoading(true);
        await authService.signout();
        setLoading(false);
        dispatch(reset());
    };

    useEffect(() => {
        onSignout();
    }, []);

    return loading ? <div>Loading...</div> : <AuthRequired />;
};

export default Signout;
