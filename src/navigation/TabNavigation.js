import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../config/colors';
import Home from '../screen/home/index';
import AddUser from '../screen/adduser/index';
import Userdatalist from '../screen/adduser/userdatalist';
import AddUserredux from '../screen/addUserRedux/index';
import NavigationRoutes from './NavigationRoutes';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName={NavigationRoutes.Home}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.colorDarkBlue,
                tabBarInactiveTintColor: colors.colorBlack,
                // tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}>
            <Tab.Screen
                name={NavigationRoutes.Home}
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name='home' size={30} color={color} />
                    )
                }} />
            <Tab.Screen
                name={NavigationRoutes.AddUser}
                component={AddUser}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name='home' size={30} color={color} />
                    )
                }} />
            <Tab.Screen
                name={NavigationRoutes.AddUserredux}
                component={AddUserredux}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name='home' size={30} color={color} />
                    )
                }} />
            <Tab.Screen
                name={NavigationRoutes.Userdatalist}
                component={Userdatalist}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name='home' size={30} color={color} />
                    )
                }} />
        </Tab.Navigator>
    );
};

export default TabNavigator;

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.colorWhite,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
})