import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BagComp = () => {
  return (
    <View>
      <Text>index</Text>
    </View>
  )
}

export const Bag = React.memo(BagComp)

const styles = StyleSheet.create({})