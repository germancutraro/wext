import { createDrawerNavigator } from 'react-navigation';

//import App from '../';
import Home from '../screens/Home';
import Search from '../screens/Search';

export default createDrawerNavigator({
    Home: {
        screen: Home
    },
    Search: {
        screen: Search
    }
})

