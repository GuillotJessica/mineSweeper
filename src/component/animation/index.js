import React, { useState, useEffect } from 'react';
import {Animated, Dimensions, Easing, Text} from 'react-native';
const {height} = Dimensions.get('screen');
export default ({state, children}) => {
    const heightModal = 100;
    const halfScreen = (height - heightModal) / 2;
    const [slideUp] = useState(new Animated.Value(0));
    const [grow] = useState(new Animated.ValueXY({x:1, y:1}));

useEffect(
    ()=>{Animated.sequence([
        Animated.timing(slideUp, {
            toValue: halfScreen,
            duration: 1000,
        }),
        Animated.timing(grow, {
            toValue: 1.4,
            duration: 500,
        }),
        Animated.timing(grow, {
            toValue: 1,
            duration: 500,
        }),
    ]).start(),
    [slideUp, grow, state];});


    return (
        <Animated.View
            style={{
                height:300,
                width:200,
                transform: [
                    {
                        scaleX: grow.x,
                    },
                    {
                        scaleY: grow.y,
                    },
                ],
                backgroundColor:'yellow',
                position:'absolute',
                bottom: slideUp,
                alignItems:'center',
                justifyContent:'center'
            }}
        >
            <Text>{state}</Text>
            {children}
        </Animated.View>
    );
};
