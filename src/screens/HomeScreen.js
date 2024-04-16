"use strict";

import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Features from '../components/Features';
import { dummyMessage } from '../constant/DummyData';
import Voice from '@react-native-community/voice';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HomeScreen = () => {
  const [message, setMessage] = useState(dummyMessage);
  const [recording, setRecording] = useState(false);
  const [speaking, setSpeaking] = useState(true);

  const speechStartHandler = e => {
    console.log('Speech start handler');
  };

  const speechEndHandler = e => {
    setRecording(false);
    console.log('Speech end handler');
  };

  const speechResultsHandler = e => {
    console.log('Voice event:', e);
  };

  const speechErrorHandler = e => {
    console.log('Speech error handler:', e);
  };

  useEffect(() => {
    // voice handler    
    Voice.onSpeechStart = speechStartHandler;
    Voice.onSpeechEnd = speechEndHandler;
    Voice.onSpeechResults = speechResultsHandler;
    Voice.onSpeechError = speechErrorHandler;

    // clean up on unmount
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };

  }, []);

  // Start recording function
  const startRecording = async () => {
    setRecording(true);
    try {
      await Voice.start('en-US'); // en-US
    } catch (error) {
      console.log("Error starting recording: ", error);
    }
  };

  // Stop recording function
  const stopRecording = async () => {
    try {
      await Voice.stop();
      setRecording(false);
      // fetch response from Chatgpt-Dall-E
    } catch (error) {
      console.log("Error stopping recording: ", error);
    }
  };

  // Clear message
  const clearMsg = () => {
    setMessage([]);
  };

  // Stop conversation
  const stopConvo = () => {
    setSpeaking(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <SafeAreaView style={{ flex: 1, marginHorizontal: 5 }}>
        {/* Bot icon */}
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Image
            source={require('../../assets/img/logo.png')}
            style={{ height: hp(15), width: hp(21) }}
          />
        </View>

        {/* Features depends on Message */}
        {message.length > 0 ? (
          <View style={{ flex: 1, paddingTop: 10 }}>
            <Text style={{ fontSize: wp(5), color: '#333', fontWeight: 'bold', marginLeft: 5 }}>
              Avinya-Assistant
            </Text>
            <View style={{ height: hp(58), backgroundColor: '#F4F4F4', borderRadius: 20, padding: 16 }}>
              <ScrollView
                bounces={false}
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}>
                {message.map((message, index) => {
                  if (message.role === 'assistant') {
                    if (message.content.includes('https')) {
                      return (
                        <View key={index} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                          <View style={{ padding: 8, flex: 1, backgroundColor: '#5CE2B8', borderTopRightRadius: 20 }}>
                            <Image
                              source={{ uri: message.content }}
                              style={{ borderRadius: 20, width: wp(60), height: wp(60) }}
                              resizeMode="contain"
                            />
                          </View>
                        </View>
                      );
                    } else {
                      return (
                        <View key={index} style={{ width: wp(70), backgroundColor: '#5CE2B8', padding: 8, borderRadius: 20, marginLeft: 'auto' }}>
                          <Text>{message.content}</Text>
                        </View>
                      );
                    }
                  } else {
                    return (
                      <View key={index} style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <View style={{ width: wp(70), backgroundColor: '#FFFFFF', padding: 8, borderRadius: 20, marginRight: 'auto' }}>
                          <Text>{message.content}</Text>
                        </View>
                      </View>
                    );
                  }
                })}
              </ScrollView>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', opacity: 0.3 }}>
              <Text style={{ fontSize: 12 }}>powered by : Code.Tech.Society.3.10.8</Text>
            </View>
          </View>
        ) : (
          <Features />
        )}

        {/* Record, clear, stop buttons */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          {recording ? (
            <TouchableOpacity onPress={stopRecording}>
              <Image
                source={require('../../assets/img/close.gif')}
                style={{ width: hp(10), height: hp(10), borderRadius: hp(10) }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={startRecording}>
              <Image
                source={require('../../assets/img/open.gif')}
                style={{ width: hp(10), height: hp(10), borderRadius: hp(10) }}
              />
            </TouchableOpacity>
          )}

          {message.length > 0 && (
            <TouchableOpacity
              style={{ backgroundColor: '#CCCCCC', borderRadius: 20, padding: 8, position: 'absolute', right: 10 }}
              onPress={clearMsg}>
              <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Clear</Text>
            </TouchableOpacity>
          )}

          {speaking && (
            <TouchableOpacity
              style={{ backgroundColor: '#FF0000', borderRadius: 20, padding: 8, position: 'absolute', left: 10 }}
              onPress={stopConvo}>
              <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Stop</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
