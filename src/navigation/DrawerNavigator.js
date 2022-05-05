import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../config/colors';
import Home from '../screen/home/index';
import AddUser from '../screen/adduser/index';
import Userdatalist from '../screen/adduser/userdatalist';
import AddUserredux from '../screen/addUserRedux/index';
import NavigationRoutes from './NavigationRoutes';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import TabNavigator from './TabNavigation';

const Drawer = createDrawerNavigator();

Entypo.loadFont();

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Home"
                onPress={() => props.Navigation.navigate('Home')}
            />
        </DrawerContentScrollView>
    );
}

const MyDrawer = () => {
    return (
        <Drawer.Navigator
            useLegacyImplementation
            initialRouteName={NavigationRoutes.Home}
            screenOptions={{
                drawerStyle: styles.DrawerBar,
                drawerPosition: 'left'
            }}
            defaultStatus="closed"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name={NavigationRoutes.Home} component={TabNavigator}
                options={{
                    // drawerLabel: 'Home',
                    drawerIcon: ({ color }) => (
                        <Entypo name='Home' size={25} color={color} />
                    )
                }} />
            <Drawer.Screen name={NavigationRoutes.AddUser} component={AddUser}
                options={{
                    drawerIcon: ({ color }) => (
                        <Entypo name='e-icon-user-add' size={25} color={color} />
                    ),
                    drawerLabel: 'Add User'
                }} />
            <Drawer.Screen name={NavigationRoutes.AddUserredux} component={AddUserredux}
                options={{
                    drawerIcon: ({ color }) => (
                        <Entypo name='Home' size={25} color={color} />
                    ),
                    drawerLabel: 'Add User redux'
                }} />
            <Drawer.Screen name={NavigationRoutes.Userdatalist} component={Userdatalist}
                options={{
                    drawerIcon: ({ color }) => (
                        <Entypo name='Home' size={25} color={color} />
                    ),
                    drawerLabel: 'User data list'
                }} />
        </Drawer.Navigator >
    );
}

export default MyDrawer;

const styles = StyleSheet.create({
    DrawerBar: {
        backgroundColor: colors.colorWhite,
        width: 240,
    },
})