import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { getPokemons } from '../redux/actions/pokeActions'
import styles from '../styles/styles'

const { button, buttonText, textInput, pad } = styles

type Props = {
  getPokemons: Function
  pokemons: Array<{
    name: string
    url: string
  }>
  navigation: {navigate: Function}
}

const Pokemons = (props: Props) => {

  const [pokemon, setPokemon] = React.useState('')

  React.useEffect(() => {
    props.getPokemons(30)
  }, [])

  return (
    <View >
      <TextInput
        style={textInput}
        placeholder='Enter Pokemon'
        value={pokemon}
        onChangeText={(text: string) => setPokemon(text)} />
      <TouchableOpacity
        style={button}
        disabled={!pokemon}
        onPress={() => props.getPokemons(pokemon)}>
          <Text style={buttonText}>
            SUBMIT
          </Text>
        </TouchableOpacity>
      <View style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: 'auto' }}>
        {props.pokemons.map(poke =>
        <View
          key={poke.name}
          style={{
            margin: 5,
            backgroundColor: 'white',
            alignItems: 'center',
            borderRadius: 5,
            padding: 10 }}>
          <Image
            resizeMode='contain'
            style={{width: (Dimensions.get('screen').width / 4), height: Dimensions.get('screen').width / 4}}
            source={{ uri: poke.url }} />
          <Text>
            {poke.name}
          </Text>          
        </View>)}
    </View>
    </View>
  )
}

const mapStateToProps = (state: any) => {
  return {
    pokemons: state.poke.pokemons
  }
}

export default connect(mapStateToProps, { getPokemons })(Pokemons)
