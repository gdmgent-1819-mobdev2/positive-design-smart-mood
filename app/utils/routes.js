import React from "react";
import { createSwitchNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import { Home, Activity, Login, Register, SplashScreen } from '../screens';


const AuthNavigator = createSwitchNavigator({
    Login: Login,
    Register: Register,
  });
  
  const AppNavigator = createStackNavigator(
    {
        Home: Home,
        Auth: AuthNavigator,
        Activity: Activity,
    },
    {
      defaultNavigationOptions: () => ({
        header: null,
      })
    }
  );
  
  const InitialNavigator = createSwitchNavigator({
    Splash: SplashScreen,
    App: AppNavigator,
  });
  
  export const AppContainer = createAppContainer(InitialNavigator);