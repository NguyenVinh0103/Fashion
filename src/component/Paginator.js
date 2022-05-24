import { StyleSheet, Text, View,useWindowDimensions, Animated } from 'react-native'
import React from 'react'
import { normalize, normalizeHorizontal } from '../helper/normalize';
const PaginatorComp = ({data,scrollX}) => {
    const { width } = useWindowDimensions();
  return (
    <View style={{flexDirection:'row',height:normalize(64)}}>
        {data.map((_, i) => {
            const inputRange =[(i - 1)*width, i*width, (i+1)*width];
            const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange:[10,20,10],
                extrapolate:'clamp'
            });
            const opacity =scrollX.interpolate({
                inputRange,
                outputRange:[0.3,1,0.3],
                extrapolate:'clamp'
            })
            return (<Animated.View style={[styles.dot,{width:10,opacity}]} key={i.toString()}/>)
            // return (<Animated.View style={[styles.dot,{width:dotWidth,opacity}]} key={i.toString()}/>)
            
        })}
    </View>
  )
}

export const Paginator =React.memo(PaginatorComp)

const styles = StyleSheet.create({
    dot:{
        aspectRatio:1,
        height:normalize(2),
        borderRadius:100,
        marginHorizontal:normalizeHorizontal(8),
        backgroundColor:'#FCFCFC',
        marginTop:normalize(-30)
       
    }
})