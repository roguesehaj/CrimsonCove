import React from 'react';
import packageService from '../../services/packageService';

const SubscribePackage = ({ token }) => {
    const subscribePackage = async () => {
        const packageType = prompt('Enter package type (e.g., Basic, Premium)');
        const deliveryDate = prompt('Enter delivery date (YYYY-MM-DD)');
        try {
            await packageService.subscribePackage(token, packageType, deliveryDate);
            alert('Subscribed to package');
        } catch (error) {
            alert('Failed to subscribe to package');
        }
    };

    return (
        <div>
            <button onClick={subscribePackage}>Subscribe to Package</button>
        </div>
    );
};

export default SubscribePackage;
