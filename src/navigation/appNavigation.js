import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import NavigationRoutes from './NavigationRoutes';
import colors from '../config/colors';
import Home from '../screen/home/index';
import Login from '../screen/login/index';
import Signup from '../screen/signup/index';
import ApiContainer from '../screen/apidata/ApiAllLogics';
import AddUser from '../screen/adduser/index';
import Userdatalist from '../screen/adduser/userdatalist';
import AddUserredux from '../screen/addUserRedux/index';


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
                    name={NavigationRoutes.Home}
                    component={Home}
                />
                <RootStack.Screen
                    options={{ headerShown: false }}
                    name={NavigationRoutes.Signup}
                    component={Signup}
                />
                <RootStack.Screen
                    options={{ headerShown: false }}
                    name={NavigationRoutes.Apidata}
                    component={ApiContainer}
                />
                <RootStack.Screen
                    options={{ headerShown: false }}
                    name={NavigationRoutes.AddUser}
                    component={AddUser}
                />
                <RootStack.Screen
                    options={{ headerShown: false }}
                    name={NavigationRoutes.Userdatalist}
                    component={Userdatalist}
                />
                <RootStack.Screen
                    options={{ headerShown: false }}
                    name={NavigationRoutes.AddUserredux}
                    component={AddUserredux}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;