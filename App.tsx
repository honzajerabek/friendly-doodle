import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Stack = createNativeStackNavigator<{A: undefined; B: undefined}>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="A">
        <Stack.Screen name="A" component={A} options={{headerShown: false}} />
        <Stack.Screen name="B" component={B} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const B = () => {
  const {setOptions, navigate} = useNavigation();

  useEffect(() => {
    setOptions({
      headerRight: () => (
        <TouchableOpacity style={{padding: 10}} onPress={() => navigate('A')}>
          <Text style={{fontSize: 20}}>Go to A</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>This is B</Text>
    </View>
  );
};

const A = () => {
  const {navigate} = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>This is A</Text>
      <TouchableOpacity style={{ marginTop: 50, padding: 10 }} onPress={() => navigate('B')}>
        <Text style={{fontSize: 20}}>Go to B</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
