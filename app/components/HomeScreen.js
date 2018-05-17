import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';
import { View, Text, TouchableHighlight, Button } from 'react-native';

class HomeScreen extends React.Component {
  incrementCount(){
    this.props.addCount();
  }

  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ marginTop: 20 }}>
          Count: { this.props.Count }
        </Text>
        <TouchableHighlight onPress={() => { this.incrementCount() }}>
          <Text>Press me</Text>
        </TouchableHighlight>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {
  return {
    Count: state.Count
  }
}, mapDispatchToProps)(HomeScreen);
