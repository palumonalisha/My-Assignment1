import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '@rneui/themed';
import { cloneDeep } from 'lodash/lang';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', marginTop: -35 }}>
          <TouchableOpacity onPress={() => navigation.navigate('ProductList')}>
            <Icon
              name="angle-left"
              size={29}
              color='#000000'
              style={{ bottom: 0, marginRight: 298 }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: 'bold', right: 270 }}>Profile</Text>
        </View>

        <Image source={require('../images/image.png')} style={{ width: 100, height: 100, marginTop: 20, marginBottom: 20, }} />
        <View style={{ width: 350, right: 7, backgroundColor: 'gray', borderRadius: 8, padding: 10 }}>
          <Text style={{ fontSize: 20 }}>FirstName: linta harry</Text>
          <Text style={{ fontSize: 20 }}>LastName : harry</Text>
          <Text style={{ fontSize: 20 }}>Email Address : linta@Gmail.com </Text>
          <Text style={{ fontSize: 20 }}>district:Jaffna</Text>

        </View>

        <Button onPress={() => navigation.navigate('EditProfile')} buttonStyle={styles.button} title="Edit Profile" type="fill"
          titleStyle={{ fontWeight: 'bold', fontSize: 18, color: '#ffff', }} />

      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 80,
    height: '100%'

  },
  button: {
    marginTop: 15,
    width: 180,
    height: 40,
    borderRadius: 5,
    backgroundColor: 'blue',
    marginLeft: 150

  },







});
