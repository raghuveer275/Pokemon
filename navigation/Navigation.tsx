import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Dishes from '../views/Dishes'
import DishDetail from '../views/DishDetail'
import { connect } from 'react-redux'

const Stack = createStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Dishes'
          component={Dishes}
          options={{
            headerTitle: 'PranaaFood',
            headerTitleStyle: {
              color: '#FFF',
              fontWeight: 'bold'
            },
            headerStyle: {
              backgroundColor: '#00A24A'
            }
          }}
        />
        <Stack.Screen
          name='DishDetail'
          component={DishDetail}
          options={{
            headerTitle: '',
            headerTintColor: '#FFF',
            headerLeft: null,
            headerStyle: {
              height: 0
            },
            animationEnabled: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
