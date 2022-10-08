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
import home from './screens/home'
import login from './screens/login'
import navigator from './routes/homeStack'
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
  
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
export default function home({navigation}){

  const presshandler=()=>{
    navigation.navigate('login')

  }

}

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
    <NavigationContainer>
      <ImageBackground
        source={require('./img/AppIntrobg.png')}
        resizeMode="cover"
        style={{flex: 1, justifyContent: 'center'}}>
        <TouchableOpacity>
          <Text
            style={{
              positon: 'absolute',
              top: 20,
              color: 'white',
              fontSize: 11.5,
              fontWeight: 'bold',
              textAlign: 'right',
              marginRight: 10,
            }}>
            SKIP LOGIN {' >'}
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('./img/brandLogo.png')}
            style={{marginBottom: 25, width: 180, height: 30}}
          />
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              fontSize: 15,
            }}>
            Find the brew you are looking for
          </Text>
          <Text></Text>
          <Text
            style={{
              color: 'white',
              marginLeft: 36,
              marginRight: 36,
              textAlign: 'center',
              fontSize: 13,
              fontWeight: '300',
              lineHeight: 19.5,
            }}>
            Easily order 1,000+ beer brands online for pick-up{'\n'} or delivery
            in select communities. It’s as simple as{'\n'} browsing, shopping
            and sipping. Save time{'\n'} shopping online and also save an
            average of $9{'\n'} when you buy a 2-4. Our pack-up pricing provides
            {'\n'}
            the best deal for you!
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'orange',
              width: 345,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }} onPress={presshandler}>
            <Text style={{fontWeight: '900', fontSize: 16, lineHeight: 16.8}}>
              LOGIN
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              color: 'white',
              marginTop: 50,
              fontSize: 12,
            }}>
            New to The Beer Store?{' '}
            <Text
              style={{
                color: 'orange',

                marginTop: 50,
                fontSize: 12,
              }}>
              Create an account
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </NavigationContainer>
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
