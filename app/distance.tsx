import { View , Text , Button , TextInput , StyleSheet} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Background } from "@react-navigation/elements";

export default function App(){

    const router = useRouter()
    const [speed , setSpeed] = useState(0)
    const [time , setTime] = useState(0)
    const [distance , setDistance] = useState(0)

    function calDistance(){
        let result = speed * time
        setDistance (result)
    }

    return(

        <View style={styles.container}>

            <Text style={styles.mainTitle}>ระยะทาง</Text>
            <Button title="Calculater" onPress={() => router.navigate('/')}/>
            <Button title="พื้นที่สี่เหลี่ยม" onPress={() => router.navigate('/square')}/>

            <Text>ความเร็ว {speed} กม./ชม. เวลา {time} ชม. ระยะทาง {distance} กม.</Text>
            <TextInput style={styles.textInput} placeholder="speed" value={speed.toString()} onChangeText={(s) => setSpeed(Number(s))}/>
            <TextInput style={styles.textInput} placeholder="time" value={time.toString()} onChangeText={(t) => setTime(Number(t))}/>

            <Button title="คำนวณ" onPress={() => calDistance()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        gap:10
    },

    mainTitle:{
        fontSize:20,
        fontWeight:"700"
    },

    textInput:{
        borderWidth:1,
        width:"80%",
        height:40
    }
})