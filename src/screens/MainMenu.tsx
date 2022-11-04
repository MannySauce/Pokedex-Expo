import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const MainMenu = () => {
    return ( 
        <View>
            <Text>Welcome</Text>
            <Button title='PokeDex'></Button>
            <Button title='Earn coins'></Button>
            <Button title='Shop'></Button>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
 
export default MainMenu;