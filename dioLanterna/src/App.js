import React, {useEffect, useState} from "react"
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Torch from "react-native-torch";
import RNShake from 'react-native-shake';


const App = () =>{
  const [toggle, setToggle] = useState(false);
  const lightOn = require('./assets/icons/eco-light.png')
  const lightOff = require('./assets/icons/eco-light-off.png')
  const logoDioColor = require('./assets/icons/logo-dio.png')
  const logoDioWhite = require('./assets/icons/logo-dio-white.png')

  const handleOnPress = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    // liga flash
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    // Verifica chacoalho
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
    });

    // remove o estado
    return () => subscription.remove();
  }, [toggle])

  return <View style={toggle ? style.containerLight : style.container}>
            <TouchableOpacity onPress={handleOnPress}>
              <Image style={toggle ? style.lightOn : style.lightOff} source = {toggle ? lightOn : lightOff} />
              <Image style={style.dioLogo} source = {toggle ? logoDioColor : logoDioWhite} />
            </TouchableOpacity>
          </View>
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 250,
    width: 250,
  },
  lightOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 250,
    width: 250,
    tintColor: 'white',
  },
  dioLogo: {
    marginTop: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  }
});

export default App;
