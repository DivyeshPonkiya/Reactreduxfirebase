import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import NavigationRoutes from './NavigationRoutes';
import colors from '../config/colors';
import Login from '../screen/login/index';
import Signup from '../screen/signup/index';
import ApiContainer from '../screen/apidata/ApiAllLogics';
import MyDrawer from './DrawerNavigator';

const RootStack = createNativeStackNavigator();

const stackScreenOptions = {
    headerBackTitleVisible: false,
    headerTintColor: colors.colorBackground,
    headerTitleAlign: 'center',
    cardStyle: {
        backgroundColor: colors.colorWhite,
    },
};

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator
                screenOptions={stackScreenOptions}
                initialRouteName={NavigationRoutes.Login}>
                <RootStack.Screen
                    options={{ headerShown: false }}
                    name={NavigationRoutes.Login}
                    component={Login}
                />
                <RootStack.Screen
                    options={{ headerShown: false }}
                    name={NavigationRoutes.Signup}
                    component={Signup}
                />
                <RootStack.Screen
                    options={{ headerShown: false }}
                    name={NavigationRoutes.Home}
                    component={MyDrawer}
                />
                <RootStack.Screen
                    options={{ headerShown: false }}
                    name={NavigationRoutes.Apidata}
                    component={ApiContainer}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;