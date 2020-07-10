import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Dishes from '../views/Dishes'
import DishDetail from '../views/DishDetail'
import { connect } from 'react-redux'
import { Image, Dimensions, Text, View } from 'react-native'

const Stack = createStackNavigator()

type Props = {
  bgrdImage: string
}

const Navigation = (props: Props) => {
  const [open, setOpen] = useState(true)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Dishes'
          component={Dishes}
          options={{
            headerTitle: 'PranaaFood',
            headerTitleStyle: {
              color: '#FFF'
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
            headerBackground: () => (
              <View
                onTouchEndCapture={() => setOpen(!open)}
                style={{ height: Dimensions.get('screen').height / (open ? 2 : 4) }}
              >
                <Image
                  style={{ height: Dimensions.get('screen').height / (open ? 2 : 4) }}
                  source={{ uri: props.bgrdImage }}
                />
              </View>
            ),
            animationEnabled: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const mapStateToProps = (state: any) => {
  return {
    bgrdImage: state.dish.bgrdImage
  }
}

export default connect(mapStateToProps)(Navigation)
