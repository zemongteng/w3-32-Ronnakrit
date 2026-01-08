import { View , Text , Button , StyleSheet , TextInput} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Square(){

    const router = useRouter()
    const [width , setWidth] = useState(0)
    const [lenght , setLenght] = useState(0)
    const [area , setArea] = useState(0)

    function calSquare(){
        let result = width * lenght
        setArea (result)
    }

    return(

        <View style={styles.container}>
            <Text style={styles.mainTitle}>พื้นที่สี่เหลี่ยม</Text>
            <Button title="Calculater" onPress={() => router.navigate('/')}/>
            <Button title="ระยะทาง" onPress={() => router.navigate('/distance')}/>

                <Text>กว้าง {width} ชม. ยาว {lenght} ชม. พื้นที่ {area} ตร.ชม.</Text>

                <TextInput style={styles.textInput} placeholder="width" value={width.toString()} onChangeText={(w) => setWidth(Number(w))}/>
                <TextInput style={styles.textInput} placeholder="lenght" value={lenght.toString()} onChangeText={(l) => setLenght(Number(l))}/>

                <Button title="คำนวณ" onPress={() => calSquare()}/>
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