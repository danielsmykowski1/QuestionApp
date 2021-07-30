import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import * as actions from './redux/actions';
import * as Config from './config';

import Question from './screens/Question';
import Result from './screens/Result';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stage: 'question',
      isLoading: true
    }
  }

  componentDidMount() {
    this.initialize()
  }

  initialize = () => {
    this.props.setQuestions([]);
    this.props.setQuestionIndex(0);
    this.props.setCorrectNum(0);

    this.setState({
      stage: 'question'
    });

    this.loadQuestions();
  };

  loadQuestions = async () => {
    this.setState({
      isLoading: true
    });

    console.log('before calling api');
    const questions = await fetch(Config.API_URL)
      .then(response => response.json())
      .then(json => {
        console.log('results:', json.results);
        return json.results;
      })
      .catch((error) => {
        console.error('ERROR in getting questions:', error);
      });

    this.props.setQuestions(questions);
    this.setState({
      isLoading: false
    });
  }

  render() {
    const { stage, isLoading } = this.state;

    if (isLoading) {
      return (
        <View style={{
          alignItems: 'center',
          paddingTop: 100
        }}>
          <Text>Loading ...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        { stage == "question" ?
          <Question />
        :
          <Result />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: '100%'
  }
});

const mapStateToProps = (state) => {
  return {
    state: state.app
  };
};

export default connect(mapStateToProps, actions)(AppContainer);