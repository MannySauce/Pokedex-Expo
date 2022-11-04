import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainMenu from '../screens/MainMenu';
const Routes = () => {
    const Stack = createNativeStackNavigator();
    return ( 
        <Stack.Navigator>
            <Stack.Screen name="MainMenu" component={MainMenu}/>
        </Stack.Navigator>
     );
}
 
export default Routes;