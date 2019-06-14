import React, { Component } from 'react';
import api from '../../services/api';
import io from 'socket.io-client';

import { View, Image, TouchableOpacity, FlatList, Text } from 'react-native';

import camera from '../../assets/camera.png';
import { Post } from './components';

import styles from './styles';

export default class Feed extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('New')}>
        <Image source={camera} />
      </TouchableOpacity>
    ),
  });

  state = {
    feed: [],
  };

  async componentDidMount() {
    this.registerToSocket();

    const response = await api.get('posts');

    this.setState({
      feed: response.data,
    });
  }

  registerToSocket = () => {
    const socket = io('http://localhost:3333');

    socket.on('post', newPost => {
      this.setState({
        feed: [newPost, ...this.state.feed],
      });
    });

    socket.on('like', likedPost => {
      this.setState({
        feed: this.state.feed.map(post => (post._id === likedPost._id ? likedPost : post)),
      });
    });
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.feed}
          keyExtractor={post => post._id}
          renderItem={({ item }) => <Post data={item} />}
        />
      </View>
    );
  }
}
