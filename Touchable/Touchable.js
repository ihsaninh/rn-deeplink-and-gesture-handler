import React, { useState } from 'react';
import {
  TouchableHighlight as RNTouchableHighlight,
  TouchableOpacity as RNTouchableOpacity,
  TouchableNativeFeedback as RNTouchableNativeFeedback,
  TouchableWithoutFeedback as RNTouchableWithoutFeedback,
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import {
  RectButton,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  BaseButton
} from 'react-native-gesture-handler';

function Touchable() {
  const onPress = () => {
    //Do what you want
  };
  return (
    <View style={styles.container}>
      <View style={styles.button} accessible>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.SelectableBackground()}>
          <Text style={{ padding: 10 }}>
            Touchable Native Feedback(Only Android)
          </Text>
        </TouchableNativeFeedback>
      </View>
      <RectButton onPress={onPress}>
        <View accessible style={{ backgroundColor: 'red', padding: 10 }}>
          <Text>Bar</Text>
        </View>
      </RectButton>
    </View>
  );
}

export default Touchable;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    // alignItems: 'center',
    // padding: 10,
    overflow: 'hidden',
    backgroundColor: 'lightblue',
    borderRadius: 12
  }
});
