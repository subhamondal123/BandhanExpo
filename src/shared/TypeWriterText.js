// import React, { useEffect, useMemo } from 'react';
// import { Animated, StyleSheet, View } from 'react-native';

// const LoopingTypewriter = ({ text = "" }) => {
//   const letters = text.split("");

//   // Create an animated value for each letter
//   const animatedValues = useMemo(
//     () => letters.map(() => new Animated.Value(0)),
//     [text]
//   );

//   useEffect(() => {
//     // 1. One-by-one Appear (Staggered)
//     const appearAnimations = animatedValues.map((value) =>
//       Animated.timing(value, {
//         toValue: 1,
//         duration: 400,
//         useNativeDriver: true,
//       })
//     );

//     // 2. Simultaneous Disappear (to clear the screen for the next loop)
//     const disappearAnimations = animatedValues.map((value) =>
//       Animated.timing(value, {
//         toValue: 0,
//         duration: 600,
//         useNativeDriver: true,
//       })
//     );

//     // 3. The Infinite Loop
//     Animated.loop(
//       Animated.sequence([
//         Animated.stagger(80, appearAnimations), // Letters show up one by one
//         Animated.delay(2000),                   // Stay visible for 2 seconds
//         Animated.parallel(disappearAnimations), // All fade out together
//         Animated.delay(500),                    // Pause before restarting
//       ])
//     ).start();
    
//   }, [animatedValues]);

//   return (
//     <View style={styles.container}>
//       {letters.map((letter, index) => (
//         <Animated.Text
//           key={`${index}-${letter}`}
//           style={[
//             {
//               opacity: animatedValues[index],
//               transform: [{
//                 translateY: animatedValues[index].interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [5, 0],
//                 }),
//               }],
//             },
//           ]}
//           className="text-slate-100 text-sm font-pregular"
//         >
//           {letter === " " ? "\u00A0" : letter}
//         </Animated.Text>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'flex-start',
//     marginTop: -2,
//   },
// });

// export default LoopingTypewriter;

import React, { useEffect, useMemo } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

const LoopingTypewriter = ({ 
  text = "", 
  containerStyle = {}, 
  textClassName = "text-slate-100 text-sm font-poppins", // For NativeWind / Tailwind
  textStyle = {}      // For standard React Native styles
}) => {
  const letters = text.split("");

  const animatedValues = useMemo(
    () => letters.map(() => new Animated.Value(0)),
    [text]
  );

  useEffect(() => {
    const appearAnimations = animatedValues.map((value) =>
      Animated.timing(value, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      })
    );

    const disappearAnimations = animatedValues.map((value) =>
      Animated.timing(value, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      })
    );

    const mainLoop = Animated.loop(
      Animated.sequence([
        Animated.stagger(80, appearAnimations),
        Animated.delay(2000),
        Animated.parallel(disappearAnimations),
        Animated.delay(500),
      ])
    );

    mainLoop.start();

    // Cleanup to prevent memory leaks if the component unmounts
    return () => mainLoop.stop();
    
  }, [animatedValues]);

  return (
    <View style={[styles.defaultContainer, containerStyle]}>
      {letters.map((letter, index) => (
        <Animated.Text
          key={`${index}-${letter}`}
          style={[
            textStyle, // Custom style prop
            {
              opacity: animatedValues[index],
              transform: [{
                translateY: animatedValues[index].interpolate({
                  inputRange: [0, 1],
                  outputRange: [5, 0],
                }),
              }],
            },
          ]}
          className={textClassName} // Tailwind prop
        >
          {letter === " " ? "\u00A0" : letter}
        </Animated.Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  defaultContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
});

export default LoopingTypewriter;