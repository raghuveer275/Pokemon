import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'

type Props = {
  detail: any
}

const DishDetail = (props: Props) => {
  return (
    <View>
      <Text>
        {props.detail.name}
      </Text>
    </View>
  )
}

const mapStateToProps = (state: any) => {
  return {
    detail: state.dish.detail
  }
}

export default connect(mapStateToProps)(DishDetail)
