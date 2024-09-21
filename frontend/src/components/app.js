import React, { useState } from 'react';
import Login from './Auth/Login';
import Register from './Auth/Register';
import LogCycle from './Cycle/LogCycle';
import SubscribePackage from './Package/SubscribePackage';

const App = () => {
    const [token, setToken] = useState('');

    return (
        <div className="container">
            <h1 className="text-center my-4">Crimson Cove ♡</h1>
            <div className="row">
                <div className="col-md-6">
                    <Register />
                </div>
                <div className="col-md-6">
                    <Login setToken={setToken} />
                </div>
            </div>
            {token && (
                <div className="row mt-4">
                    <div className="col-md-6">
                        <LogCycle token={token} />
                    </div>
                    <div className="col-md-6">
                        <SubscribePackage token={token} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
