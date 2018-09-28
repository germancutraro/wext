import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

export default code => {
    if (!code.startsWith('01')) 
        code = code.substring(0, 2);
    
    switch(code) {
        case '01d':
            return <Icon name="sun" size={160} />
        case '01n':
            return <Icon name="moon" size={160} />
        case '02': case '03': case '04':
            return <Icon name="cloud" size={160} />
        case '09':
            return <Icon name="cloud-drizzle" size={160} />
        case '10':
            return <Icon name="cloud-rain" size={160} />
        case '11':
            return <Icon name="cloud-lightning" size={160} />
        case '13':
            return <Icon name="cloud-snow" size={160} />
        case '50':
            return <Icon name="wind" size={160} />
    }
};