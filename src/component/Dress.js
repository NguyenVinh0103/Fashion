import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DressComp = () => {
  return (
    <View>
      <Text>index</Text>
    </View>
  )
}

export const Dress = React.memo(DressComp)

const styles = StyleSheet.create({})