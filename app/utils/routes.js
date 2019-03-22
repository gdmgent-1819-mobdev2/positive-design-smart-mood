import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Home, Activity } from '../screens'

const AppNavigator = createStackNavigator(
    {
        Home: Home,
        Activity: Activity,
    },
    {
        initialRouteName: "Home",

        defaultNavigationOptions: {
            headerStyle: {
              display: "none"
            },
        },
    }
);

export const AppContainer = createAppContainer(AppNavigator);