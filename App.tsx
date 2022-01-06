import React from 'react';
import { MotiView } from '@motify/components';
import { Easing } from 'react-native-reanimated';
import { Feather } from 'expo-vector-icons';
import { StyleSheet, Text, View } from 'react-native';

const _color = '#6e01ef'
const _size = 100

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.dot, styles.center]}>
        {[...Array(3).keys()].map((index) => {
          return (
          <MotiView
            from={{opacity: 0.7, scale: 1}}
            animate={{opacity: 0, scale: 4}}
            transition={{ 
              type: 'timing', 
              duration: 2000, 
              easing: Easing.out(Easing.ease),
              delay: index * 400,
              repeatReverse: false,
              loop: true
            }}
            key={index}
            style={[StyleSheet.absoluteFillObject, styles.dot]}
          >

          </MotiView>
          )
        })}
      <Feather name="phone-outgoing" size={32} color="#FFF" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    backgroundColor: _color,
    width: _size,
    height: _size,
    borderRadius: _size,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
