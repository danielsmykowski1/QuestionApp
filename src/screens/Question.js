import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native'; 

import * as actions from '../redux/actions';

export default Question = (props) => {
  const dispatch = useDispatch()
  const questions = useSelector(state => state.app.questions);
  const questionIndex = useSelector(state => state.app.questionIndex);

  if (questions.length == 0 || questionIndex >= questions.length) {
    return (
      <View style={{
        alignItems: 'center'
      }}>
        <Text>
          {
            questions.length == 0 ? 'No questions' : 'Invalid question'
          }
        </Text>
      </View>
    )
  }

  return (
    <View style={{
      alignItems: 'center'
    }}>
      <Text>
        Question Screen
      </Text>
    </View>
  );
};