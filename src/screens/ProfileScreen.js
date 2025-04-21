import { View, Text, Button } from 'react-native'
import React from 'react'

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5' }}>
    <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>👤 Meu Perfil</Text>
      <Text>Nome: Gabriel Soares</Text>
      <Text>Email: gabrielsoares25022005@gmail.com</Text>
      <Button title="Sair" onPress={() => navigation.replace('Login')} />
    </View>
  )
}

export default ProfileScreen