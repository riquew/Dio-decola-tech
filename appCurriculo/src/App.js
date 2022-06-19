import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Card from './components/Card'

// import photo from './assets/photo.jpg'

const App = () => {
  const photo = require('./assets/photo.jpg')
  const urlMyGitHub = 'https://github.com/riquew';
  const urlMyLinkedIn = 'https://www.linkedin.com/in/henrique-de-rossi-windlin/'
  const urlMyTwitter = 'https://twitter.com/HWindlin'

  const handlePressGoToGitHub = async () => {
    const res = await Linking.canOpenURL(urlMyGitHub);
    console.log('Verificando Link...');
    if (res){
        console.log('Link aprovado')
        await Linking.openURL(urlMyGitHub);
    }
}

const handlePressGoToLinkedIn = async () => {
  const res = await Linking.canOpenURL(urlMyGitHub);
  console.log('Verificando Link...');
  if (res){
      console.log('Link aprovado')
      await Linking.openURL(urlMyLinkedIn);
  }
}

const handlePressGoToTwitter = async () => {
  const res = await Linking.canOpenURL(urlMyGitHub);
  console.log('Verificando Link...');
  if (res){
      console.log('Link aprovado')
      await Linking.openURL(urlMyTwitter);
  }
}



  return (
    <>
      <View style={style.container}>

        <View style={style.container_cabecalho}>
          <Image source={photo} style={style.photo} />
          <Text style={style.name}>Henrique Windlin</Text>
          <Text style={style.subtitle}>Developer</Text>

          <View style={style.container_social}>
            <TouchableOpacity onPress={handlePressGoToGitHub}>
              <Icon name="github" size={30} color="#1B2430" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePressGoToLinkedIn}>
              <Icon name="linkedin" size={30} color="#1B2430"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePressGoToTwitter}>
              <Icon name="twitter" size={30} color="#1B2430"/>
            </TouchableOpacity>
          </View>
        </View>

        <Card titulo='Formação acadêmica'>
          <Text style={style.study_description}>APMBB 2012-2014</Text>
          <Text style={style.study_description}>UNICSUL - Direito 2012-2015</Text>
          <Text style={style.study_description}>Impacta - ADS 2021-2023</Text>
          <Text style={style.study_description}>Univesp - Eng Comp. 2022-2027</Text>
        </Card>
        
      </View>
    </>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#827397',
    flex: 1,
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  photo: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: '#4D4C7D',
    borderWidth: 4,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1B2430',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 24,
    textDecorationLine: 'underline',
    color: '#363062',
  },
  container_social: {
    flexDirection: 'row',
    marginVertical: 30,
    justifyContent: 'space-between',
    width: '50%',
  },
  study_description: {
    fontSize: 20,
  }

})

export default App;
