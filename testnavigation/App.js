import React from 'react';
import {View,Button,Image,StyleSheet} from 'react-native';
import {DrawerNavigator} from 'react-navigation'
class MyHomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./chats-icon.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <View style={{flex:1,backgroundColor:"blue"}}>
                <Button style={{backgroundColor:"yellow"}}
                    onPress={() => this.props.navigation.navigate('DrawerToggle')}
                    title="Open Menu"
                />
            <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title="Go to notifications"
            />
            </View>
        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./notif-icon.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <View style={{flex:1,backgroundColor:"red"}}>
                <Button
                    style={{backgroundColor:"yellow"}}
                    onPress={() => this.props.navigation.navigate('DrawerToggle')}
                    title="Open Menu"
                />
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
            </View>
        );
    }
}


const App = DrawerNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
});


const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

export default App