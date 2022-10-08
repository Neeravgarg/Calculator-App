/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import Node from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigator from './routes/homeStack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Button,
  TouchableHighlight,
  TextInput,
  ImageBackground,
  node,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [isClicked, setisClicked] = useState(false);
  const [test, setTest] = useState(false);
  const [isSecure, setisSecure] = useState(false);
  const [isImage, setisImage] = useState(false);

  return (
    <ImageBackground
      source={require('./img/Login-bg.png')}
      style={{height: '70%', width: '100%'}}>
      <View style={{flex: 3}}>
        <TouchableOpacity style={{marginTop: 20, marginLeft: 10}}>
          <Image source={require('./img/back.png')} />
        </TouchableOpacity>
        <Image
          source={require('./img/brandLogo.png')}
          style={{alignSelf: 'center', marginTop: -17.5}}
        />
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 24,
            lineHeight: 28.8,
            marginLeft: 15,
            marginTop: '32.5%',
          }}>
          Login
        </Text>
        <Text
          style={{
            color: 'white',
            fontWeight: '300',
            marginLeft: 15,
            marginTop: 15,
            fontSize: 12,
            lineHeight: 18,
            letterSpacing: 0.35,
          }}>
          It’s time to rock n roll! Let's get started now.
        </Text>
      </View>
      <View
        style={{
          flex: 3,
          backgroundColor: '#FFFFFF',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}>
        <TextInput
          style={{
            backgroundColor: '#F9F9F9',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#EEEEEE',
            width: '90%',
            height: 40,
            alignSelf: 'center',
            marginTop: 30,
            paddingLeft: 15,
            paddingVertical: 13,
            fontSize: 12,
            lineHeight: 14.4,
          }}
          placeholder="Email Adress"
        />
        <View
          style={{
            backgroundColor: '#F9F9F9',
            borderWidth: 1,
            borderColor: '#EEEEEE',
            marginTop: 20,
            width: '90%',
            height: 40,
            alignSelf: 'center',
            borderRadius: 10,
            flexDirection: 'row',
          }}>
          <TextInput
            style={{
              fontSize: 12,
              lineHeight: 14.4,
              paddingLeft: 15,
              paddingVertical: 13,
              width: '80%',
            }}
            placeholder="Passsword"
            secureTextEntry={isImage}
          />
          <TouchableOpacity
            style={{justifyContent: 'center'}}
            onPress={() => {
              setisImage(!isImage);
            }}>
            <Image
              source={
                isImage
                  ? require('./img/Facebook.png')
                  : require('./img/passwordEye.png')
              }
              style={{marginLeft: 40}}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            marginRight: 20,
            marginTop: 20,
            alignSelf: 'flex-end',
          }}>
          <Text style={{color: 'orange', fontWeight: 'bold'}}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '90%',
            height: 50,
            backgroundColor: 'orange',
            alignSelf: 'center',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'orange',
            elevation: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 14,
              lineHeight: 17,
              letterSpacing: 0.2,
            }}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 20,
            width: '100%',
            height: 30,
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <Text style={{color: '#F7F9F7'}}> {'  __________________'}</Text>
          </View>
          <View
            style={{
              flex: 1,

              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 14, color: 'lightgrey'}}>
              or login with
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={{color: '#F7F9F7'}}> {'  __________________'}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            width: '100%',
            marginTop: 20,
          }}>
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={{
                height: '100%',
                width: '87.5%',
                backgroundColor: 'white',
                alignSelf: 'center',
                borderWidth: 1,
                borderColor: '#EFEFEF',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                elevation: 0.75,
                marginLeft: 7.5,
              }}>
              <Image source={require('./img/Google.png')} />
              <Text style={{fontWeight: 'bold'}}>{'     GOOGLE'}</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={{
                height: '100%',
                width: '87.5%',
                backgroundColor: 'white',
                alignSelf: 'center',
                borderWidth: 1,
                borderColor: '#EFEFEF',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                elevation: 0.75,
                marginRight: 7.5,
              }}>
              <Image source={require('./img/Facebook.png')} />
              <Text style={{fontWeight: 'bold'}}>{'    FACEBOOK'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 12,
            lineHeight: 14,
            alignSelf: 'center',
            marginTop: 25,
            letterSpacing: 0.2,
            color: 'grey',
          }}>
          New to The Beer Store?
          <Text style={{color: 'orange', fontWeight: 'bold'}}>
            {' '}
            Create a new account
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  input: {
    width: 350,
    height: 50,
    backgroundColor: '#F9F9F9',
    borderRadius: 7,
    position: 'absolute',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
  neerav: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '30%',
    borderRadius: 15,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
