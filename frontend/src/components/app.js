import React, { useState } from 'react';
import Login from './Auth/Login';
import Register from './Auth/Register';
import LogCycle from './Cycle/LogCycle';
import SubscribePackage from './Package/SubscribePackage';

const App = () => {
    const [token, setToken] = useState('');

    return (
        <div>
            <h1>Crimson Cove ♡</h1>
            <Register />
            <Login setToken={setToken} />
            {token && (
                <>
                    <LogCycle token={token} />
                    <SubscribePackage token={token} />
                </>
            )}
        </div>
    );
};

export default App;
