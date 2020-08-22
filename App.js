import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GestureScreen from './GestureScreen/GestureScreen';
import TouchableScreen from './Touchable/Touchable';

function HomeScreen({ navigation }) {
  return (
    <View style={Styles.container}>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            id: 58
          })
        }
      />
    </View>
  );
}

function DetailsScreen({ route }) {
  return (
    <View style={Styles.container}>
      <Text>User ke-{route?.params?.id}</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  const linking = {
    prefixes: ['https://deeplink.com', 'deeplink://'],
    config: {
      Home: HomeScreen,
      Details: {
        path: 'details/:id',
        params: {
          id: null
        }
      }
    }
  };
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Touchable">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Gesture" component={GestureScreen} />
        <Stack.Screen name="Touchable" component={TouchableScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
