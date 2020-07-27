import React from 'react'
import { View, ScrollView, Text, TextInput, Image } from 'react-native'
import { connect, useDispatch } from 'react-redux'
import { getDishes } from '../redux/actions/dishActions'

type Props = {
  getDishes: Function
  dishes: Array<any>
  navigation: { navigate: Function }
}

const Dishes = (props: Props) => {

  const [dish, setDish] = React.useState('')

  React.useEffect(() => {
    props.getDishes()
  }, [])

  const dispatch = useDispatch()

  return (
    <View>
      <TextInput
        style={{
          margin: 10,
          borderWidth: 1,
          borderRadius: 3,
          borderColor: '#00A24A',
          paddingHorizontal: 15,
          paddingVertical: 5,
          backgroundColor: 'white'
        }}
        placeholder='Search Dishes'
        value={dish}
        onChangeText={(text: string) => setDish(text)} />
      <ScrollView style={{
        height: '90%'
      }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            padding: 5,
            height: '100%'
          }}>
          {props.dishes.map(dis =>
            dis.name.toLowerCase().includes(dish.toLowerCase()) &&
            <View
              key={dis.name}
              onTouchEndCapture={() => {
                dispatch({
                  type: 'GET_DISH_DETAIL',
                  detail: dis
                })
                props.navigation.navigate('DishDetail')
              }}
              style={{
                padding: 5,
                alignItems: 'center',
                borderRadius: 5,
                width: '50%'
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  width: '100%',
                  height: 205,
                  borderRadius: 5
                }}>
                <Image
                  resizeMode='cover'
                  style={{
                    borderRadius: 5,
                    width: '100%',
                    height: 150
                  }}
                  source={{ uri: dis.Images[0].image }} />
                <Text
                  style={{
                    width: '100%',
                    padding: 8,
                    fontWeight: 'bold',
                    textAlign: 'center'
                  }}>
                  {dis.name}
                </Text>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  )
}

const mapStateToProps = (state: any) => {
  return {
    dishes: state.dish.dishes
  }
}

export default connect(mapStateToProps, { getDishes })(Dishes)
