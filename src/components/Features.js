import { Image, Text, View } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Features = ()=>{
    return(
        <View className="space-y-4" style={{height:hp(70)}}>
            <Text style={{fontSize:wp(6.5)}} className="font-semibold text-gray-700">Features</Text>
            <View className="bg-emerald-200 p-4 rounded-xl space-y-2">
                <View className="flex-row items-center space-x-1">
                    <Image source={require('../../assets/img/chatgpt.png')} style={{height:hp(4), width:hp(4)}}/>
                    <Text className="font-semibold text-gray-700" style={{fontSize:wp(4.8)}}>ChatGPT</Text>
                </View>
                <Text style={{fontSize:wp(3.8)}} className="text-gray-700 font-medium">
                It provides natural language understanding and generation capabilities, facilitating conversations.</Text>
            </View>

            <View className="bg-gray-200 p-4 rounded-xl space-y-2">
                <View className="flex-row items-center space-x-1">
                    <Image source={require('../../assets/img/dallE.png')} style={{height:hp(4), width:hp(4)}}/>
                    <Text className="font-semibold text-gray-700" style={{fontSize:wp(4.8)}}>Dall-E</Text>
                </View>
                <Text style={{fontSize:wp(3.8)}} className="text-gray-700 font-medium">
                It is an AI system that can create realistic images and art from a description in natural language.</Text>
            </View>


            <View className="bg-purple-200 p-4 rounded-xl space-y-2">
                <View className="flex-row items-center space-x-1">
                    <Image source={require('../../assets/img/SmartAI.png')} style={{height:hp(5.5), width:hp(5.5)}}/>
                    <Text className="font-semibold text-gray-700" style={{fontSize:wp(4.8)}}>Avinya-Chat</Text>
                </View>
                <Text style={{fontSize:wp(3.8)}} className="text-gray-700 font-medium">
                    We use Api of ChatGPT and Dall-E and provide merged service of text and image service at one place by CTS3108.
                </Text>
            </View>


        </View>
    )
}


export default Features