import { useNavigation } from "@react-navigation/native";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const WelcomeScreen = ()=>{

    const navigation = useNavigation();
    return(
        <SafeAreaView  className="bg-teal-200 flex-1 flex justify-around " >
            <View className="space-y-2">
                <Text style={{fontSize:wp(10)}}  className="text-center font-bold  text-gray-700">Avi-Chat</Text>
                <Text  style={{fontSize:wp(4)}} className="text-gray-500 text-center tracking-wider font-semibold" >powered by Code.Tech.Society.3108.</Text>
            </View>
            <View className="flex row justify-center">
                <Image source={require('../../assets/img/logo.png')} />
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')} className="bg-emerald-600 mx-5 p-4 rounded-2xl">
                <Text style={{fontSize:wp(6)}} className="text-center font-bold text-white ">Let's Started</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}





export default WelcomeScreen