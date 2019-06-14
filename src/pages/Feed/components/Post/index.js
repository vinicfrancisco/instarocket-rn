import React, { Component } from 'react';
import api from '../../../../services/api';

import { View, Text, Image, TouchableOpacity } from 'react-native';

import more from '../../../../assets/more.png';
import like from '../../../../assets/like.png';
import comment from '../../../../assets/comment.png';
import send from '../../../../assets/send.png';

import styles from './styles';

export default class Post extends Component {
  handleLike = id => {
    api.post(`/posts/${id}/like`);
  };

  render() {
    const { data } = this.props;
    const { author, place, image, likes, description, hashtags, _id } = data;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Text style={styles.name}>{author}</Text>
            <Text style={styles.place}>{place}</Text>
          </View>
          <Image soure={more} />
        </View>

        <Image style={styles.image} source={{ uri: `http://localhost:3333/files/${image}` }} />

        <View style={styles.footer}>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress={() => this.handleLike(_id)}>
              <Image source={like} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.action} onPress={() => {}}>
              <Image source={comment} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.action} onPress={() => {}}>
              <Image source={send} />
            </TouchableOpacity>
          </View>

          <Text style={styles.likes}>{likes}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.hashtags}>{hashtags}</Text>
        </View>
      </View>
    );
  }
}
