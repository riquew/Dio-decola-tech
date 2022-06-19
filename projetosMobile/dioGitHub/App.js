import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, Image, Pressable, Linking} from 'react-native';
import Dio from './components/dio-logo'

const colorGitHub = '#010409';
const colorDefaultText = '#C9D1D9';
const colorNickName = '#4F565E';
const imageGitHub = 'https://avatars.githubusercontent.com/u/90727595?v=4';
const urlMyGitHub = 'https://github.com/riquew'; 

const App = () => {

    const handlePressGoToGItHub = async () => {
        const res = await Linking.canOpenURL(urlMyGitHub);
        console.log('Verificando Link...');
        if (res){
            console.log('Link aprovado')
            await Linking.openURL(urlMyGitHub);
        }
    }

    return (
    <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGitHub} barStyle="light-content" />
        <View style={style.content}>
            <Image 
            accessibilityLabel='Minha foto do github'
            style={style.avatar} 
            source={{uri: imageGitHub}} />
            <Text style={[style.defaultText, style.name]}>Henrique Windlin</Text>
            <Text style={[style.defaultText, style.nickname]}>@riquew</Text>

            <Dio />
            
            <Pressable onPress={handlePressGoToGItHub}>
                <View style={style.button}>
                    <Text style={[style.defaultText, style.textButton]}>Open in GitHub</Text>
                </View>
            </Pressable>
        </View>
    </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGitHub,
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center', 
    },
    defaultText: {
        color: colorDefaultText,
        margin: 10,
        fontSize: 15,
    },
    name: {
        fontSize: 35,
    },
    nickname: {
        color: colorNickName,
        fontSize: 25,
        fontWeight: 'bold',
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: colorNickName,
        borderWidth: 2,
    },
    button: {
        marginTop: 20,
        backgroundColor: colorNickName,
        borderRadius: 10,
        border: 2,
        borderColor: 'red',
        padding: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    }
});


// npx react-native run-android