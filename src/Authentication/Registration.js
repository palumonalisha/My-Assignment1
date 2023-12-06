import React, { useState, useRef } from 'react';
import { StatusBar, SafeAreaView, StyleSheet, TextInput, View, Text,Image, TouchableOpacity, Keyboard } from 'react-native';
import { Icon } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import { CheckBox } from '@rneui/themed';
import { Button } from '@rneui/themed';
import { cloneDeep } from 'lodash/lang';
import { useNavigation } from '@react-navigation/native';


const Registration = () => {
const navigation = useNavigation();

const data = [
    { label: 'Jaffna', value: '1' },
    { label: 'Ampara', value: '2' },
    { label: 'Colombo', value: '3' },
    { label: 'kandy', value: '4' },
    { label: 'Badhula', value: '5' },

];

const FirstName = useRef(null);
const LastName = useRef(null);
const passwordRef = useRef(null);
const confirmPasswordRef = useRef(null);


const [show, setShow] = useState(false);
const [date, setDate] = useState(new Date(2023, 0, 1));
const [dob, setDob] = useState('');

const [selectedValue, setSelectedValue] = useState('option1');
const [value, setValue] = useState(null);
const [isFocus, setIsFocus] = useState(false);
const [check1, setCheck1] = useState(false);


  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
        navigation.navigate('Login');
      // Perform sign-up logic
      // Clear the error message
      setError('');
    }
  };
  
  return (
    <SafeAreaView onPress={() => { Keyboard.dismiss(); }} style={styles.container}>
        <StatusBar />
        <View  style={styles.container}>
        <View >
            <Text style={{ fontSize: 18, fontWeight: 'bold', right:130,marginBottom:10, }}>Registration</Text>
           
        </View>

        <View style={styles.inputBox}>
            
        <TextInput
        ref={FirstName }
      style={styles.textInput}
      placeholder="Username"
 
    />          
              </View>
        <View style={styles.inputBox}>
            <TextInput
             style={styles.textInput}
                ref={LastName}
                
                placeholder={'LastName'}
            />
        </View>

        <Text style={styles.gender}>
            Gender
        </Text>

        <View style={styles.radioGroup}>
            <View style={styles.radioButton}>
                <RadioButton.Android
                    value="option1"
                    status={selectedValue === 'option1' ?
                        'checked' : 'unchecked'}
                    onPress={() => setSelectedValue('option1')}
                    color="#007BFF"
                />
                <Text style={styles.radioLabel}>
                    Male
                </Text>
            </View>

            <View style={styles.radioButton}>
                <RadioButton.Android
                    value="option2"
                    status={selectedValue === 'option2' ?
                        'checked' : 'unchecked'}
                    onPress={() => setSelectedValue('option2')}
                    color="#007BFF"
                />
                <Text style={styles.radioLabel}>
                    Female
                </Text>
            </View>

            <View style={styles.radioButton}>
                <RadioButton.Android
                    value="option3"
                    status={selectedValue === 'option3' ?
                        'checked' : 'unchecked'}
                    onPress={() => setSelectedValue('option3')}
                    color="#007BFF"
                />
                <Text style={styles.radioLabel}>
                    Other
                </Text>
            </View>
        </View>

        <View style={{ backgroundColor: '#fff', padding: 20, width: '100%', }}>
            <Dropdown
                
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select District' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
            />
        </View>
      

    <View style={styles.inputBox}>
      <TextInput
        placeholder="Enter password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      </View>
      <View style={styles.inputBox}>
      <TextInput
        placeholder="Confirm password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      
    </View>
    {error !== '' && <Text style={{ color: 'red',right:94 }}>{error}</Text>}

        <View style={{ right: 120 }}>
            <CheckBox
                center
                title="Favorite "
                checked={check1}
                onPress={() => setCheck1(!check1)}
            />
        </View>

        <View style={{ marginTop: 15, marginLeft: -18 }} >
            <Button buttonStyle={styles.button} title="SUBMIT" type="fill" titleStyle={styles.buttonText} onPress={handleSignUp} />
        </View>
        </View>
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
    container: {
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height:'100%',
        paddingTop:10
    },

    inputBox: {
        width: 350,
        height: 44,
        borderColor: '#BDBDBD',
        borderRadius: 8,
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        borderWidth: 1
    },
    errorText: {
        marginTop: 10,
        color: 'red',
    },
    radioGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 0,
        marginLeft: -90,
        borderRadius: 8,
        padding: 16,
        elevation: 0,
        shadowColor: 'red',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioLabel: {
        marginLeft: 8,
        fontSize: 16,
        color: '#333',
    },
    gender: {
        marginLeft: -280,
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#545454'
    },
    dropdown: {
        height: 40,
        width: 350,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 16,
        borderColor: '#BDBDBD',
    },
    button: {
        backgroundColor: '#055C9D',
        height: 46,
        width: 350,
        marginTop: 30,
        marginBottom: 50,
        marginLeft: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#ffff',
        fontSize: 18
    },

    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
        borderRadius: 8,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },


    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        borderRadius: 8,
    },
   
    
    



});


export default Registration;
