import React from 'react';
import cycleService from '../../services/cycleService';

const LogCycle = ({ token }) => {
    const logCycle = async () => {
        const startDate = prompt('Enter start date (YYYY-MM-DD)');
        const endDate = prompt('Enter end date (YYYY-MM-DD)');
        try {
            await cycleService.logCycle(token, startDate, endDate);
            alert('Cycle logged');
        } catch (error) {
            alert('Failed to log cycle');
        }
    };

    return (
        <div className="card p-4">
            <button className="btn btn-success" onClick={logCycle}>Log Cycle</button>
        </div>
    );
};

export default LogCycle;
