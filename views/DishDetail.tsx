import React from 'react'
import { Image, Dimensions, ScrollView, Text, View, Animated } from 'react-native'
import { connect } from 'react-redux'
import { SvgUri } from 'react-native-svg';

type Props = {
  detail: any
}

const DishDetail = (props: Props) => {
  const [open, setOpen] = React.useState(true)
  const posAnim = React.useRef(new Animated.Value((Dimensions.get('screen').height / 1.5) - (open ? 30 : (Dimensions.get('screen').height / 1.9)))).current;
  const setPosition = () => {
    // Will change heightAnim value to 1 in 5 seconds
    setOpen(!open)
    Animated.timing(posAnim, {
      toValue: Number(Dimensions.get('screen').height / 1.5) - (open ? (Dimensions.get('screen').height / 1.9) : 30),
      duration: 500,
      useNativeDriver: true
    }).start();
  }
  const arrayMaker = (hot: number) => {
    let myArray = []
    for (let index = 0; index < hot; index++) {
      myArray.push(index)
    }
    return myArray
  }
  const [current, setCurrent] = React.useState(0)
  const contentChange = (data: any) => {
    setCurrent(Number((Number(data.nativeEvent.contentOffset.x)/Number(Dimensions.get('screen').width)).toFixed(0)))
  }
  return (
    <View style={{
      position: 'relative'
    }}>
      <ScrollView
        style={{
          position: 'absolute'
        }}
        horizontal
        pagingEnabled
        onScroll={data => contentChange(data)}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        decelerationRate="fast"
      >
        {props.detail.Images.map((gallery: { image: string }) => <View
          key={gallery.image}
          style={{
            width: Dimensions.get('screen').width,
            height: Dimensions.get('screen').height / 1.5
          }}>
          <Image
            source={{ uri: gallery.image }}
            style={{ height: Dimensions.get('screen').height / 1.5 }}
          />
        </View>)}
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'row',
          top: Dimensions.get('screen').height / 1.7,
          width: Dimensions.get('screen').width,
          justifyContent: "center",
          alignItems: 'center'
        }}
      >
        {arrayMaker(props.detail.Images.length).map(bul => 
          <View
            key={bul}
            style={{
              borderWidth: 2,
              borderColor: 'white',
              height: bul === current ? 20 : 10,
              width: bul === current ? 20 : 10,
              borderRadius: bul === current ? 20 : 10,
              marginHorizontal: 5
            }}
          />)}
      </View>
      <Animated.View
        onTouchEndCapture={() => {
          setPosition()
        }}
        style={{
          padding: 30,
          position: "relative",
          backgroundColor: "white",
          width: Dimensions.get('screen').width,
          top: posAnim,
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
          height: Dimensions.get('screen').height
        }}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: 'bold'
          }}>
          {props.detail.name}
        </Text>
        <Text
          style={{
            color: '#00A24A',
            fontSize: 18,
            fontWeight: '700',
            marginBottom: 25,
            marginRight: 30
          }}>
          {props.detail.category.toString().toUpperCase()}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700'
          }}>
          Spiciness
      </Text>
        <View
          style={{
            display: "flex",
            flexDirection: 'row',
            marginBottom: 25,
            height: 30
          }}>
          {arrayMaker(props.detail.hot).map(spicy =>
            <SvgUri
              key={spicy}
              width={30}
              height={30}
              uri="https://pranaa-frontend-assets.s3-ap-southeast-1.amazonaws.com/static/icons/chilly.svg"
            />
          )}
        </View>

        <Text
          style={{
            fontSize: 18,
            fontWeight: '700'
          }}>
          Description
      </Text>
        <Text
          style={{
            fontSize: 16,
            marginBottom: 25
          }}>
          {props.detail.description}
        </Text>

        <Text
          style={{
            fontSize: 18,
            fontWeight: '700'
          }}>
          Ingredients
      </Text>
        <Text
          style={{
            fontSize: 16,
            marginBottom: 25
          }}>
          {props.detail.ingredients}
        </Text>

        <Text
          style={{
            fontSize: 18,
            fontWeight: '700'
          }}>
          Nutritional Information
      </Text>
        <Text
          style={{
            fontSize: 16
          }}>
          {props.detail.nutrition.split(',')[0]}
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginBottom: 25
          }}>
          {props.detail.nutrition.split(',')[1]}
        </Text>

        <Text
          style={{
            fontSize: 18,
            fontWeight: '700'
          }}>
          Allergens
      </Text>
        <View
          style={{
            marginBottom: 25
          }}>
          {props.detail.Allergens.map((all: any) =>
            <View
              key={all.id}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5
            }}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 10,
                  marginEnd: 10
                }}
                width={30}
                height={30}
                source={{ uri: all.allergenImage }}
              />
              <Text
                style={{
                  fontSize: 16
                }}>
                {all.allergenName}
              </Text>
            </View>)}
        </View>
      </Animated.View>
    </View>
  )
}

const mapStateToProps = (state: any) => {
  return {
    detail: state.dish.detail
  }
}

export default connect(mapStateToProps)(DishDetail)
