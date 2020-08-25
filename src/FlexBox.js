import React from 'react'
import {View,StyleSheet} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={styles.FlexV1}>
            <Quadrado cor='gold' lado = {150}/>
            <Quadrado cor='red' lado = {140}/>
            <Quadrado cor='orange' lado = {130}/>
            <Quadrado cor='yellow' lado = {120}/>
            <Quadrado cor='blue' lado = {110}/>
            <Quadrado cor='green' lado = {100}/>
        </View>
    );
}

const styles = StyleSheet.create({
    FlexV1:{
        flexGrow:1,
        flexDirection:'column',
        width:'100%',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
})