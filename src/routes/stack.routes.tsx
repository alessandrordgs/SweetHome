import React from 'react'
import { createStackNavigator} from '@react-navigation/stack'
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Neighborhood } from '../pages/Neighborhood';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () =>(
    <stackRoutes.Navigator headerMode='none' screenOptions={{
        cardStyle:{backgroundColor:"#fff"}
    }} >
        <stackRoutes.Screen
          name='Home'
          component={Home}
        />
        <stackRoutes.Screen
          name='Login'
          component={Login}
        />
        <stackRoutes.Screen
          name='Neighborhood'
          component={Neighborhood}
        />
    </stackRoutes.Navigator>
)

export default AppRoutes