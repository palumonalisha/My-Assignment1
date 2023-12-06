import React, { useState , useRef } from 'react';
import { View, Text, StyleSheet,Image, TextInput, TouchableOpacity } from 'react-native'
import { styles } from '../styleSheet/Styles';
import { Button } from '@rneui/themed';
import { cloneDeep } from 'lodash/lang';
import { useNavigation } from '@react-navigation/native';


export default function Login() {
    const navigation = useNavigation();
    const inputRef = useRef(null);

    const [signInReg, setSignInReg] = useState({
        username: '',
        password: '',
      });
      const [signInError, setSignInError] = useState({
        username: '',
        password: '',
      });
    
      const handleSignIn = () => {
        const updatedSignInError = cloneDeep(signInError);
    
        if (signInReg.username.trim() === '') {
          updatedSignInError.username = 'This field is required';
        } else {
          updatedSignInError.username = '';
        }
    
        if (signInReg.password.trim() === '') {
          updatedSignInError.password = 'This field is required';
        } else {
          updatedSignInError.password = '';
        }
        if (signInReg.username.trim() !== '' && signInReg.password.trim() !== '') {
            navigation.navigate('ProductList');
            // const userType = username;
            // onLogin(userType);
    
          }
    
        setSignInError(updatedSignInError);
        console.log('signInReg clicked. Username:', signInReg.username, 'Password:', signInReg.password);
      };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Image source={require('../images/loginScreen.png')} />

      <View>

      <TextInput
           ref={inputRef}
          style={styles.textInput}
          placeholder="Username"
          onChangeText={(value) => {
            setSignInReg((prev) => ({ ...prev, username: value }));
          }}
          value={signInReg.username}
        />
        {signInError.username !== '' && (
          <View style={{top:5,left:10 }}>
            <Text style={{ color:'red' }}>{signInError.username}</Text>
          </View>
        )}

        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(value) => {
            setSignInReg((prev) => ({ ...prev, password: value }));
          }}
          value={signInReg.password}
        />
         {signInError.password !== '' && (
          <View style={{ top:5,left:10 }}>
            <Text style={{ color:'red' }} >{signInError.password}</Text>
          </View>
        )}

      <Button onPress={handleSignIn} buttonStyle={styles.button} title="Login" type="fill"
       titleStyle={{ fontWeight: 'bold', fontSize: 18 , color:'#ffff',}} />

      <TouchableOpacity onPress={() => navigation.navigate('Registration')} >
        <Text style = {{marginTop:20,color:'blue' }}> Registration Now</Text>
        </TouchableOpacity>

      </View>
     

    </View>
  )
}

