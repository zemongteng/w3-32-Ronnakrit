import { View , Text , Button , StyleSheet , TextInput } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Square(){

    const router = useRouter()
    const [width , setWidth] = useState(0)
    const [lenght , setLenght] = useState(0)
    const [area , setArea] = useState(0)

    return(

        <View style={styles.container}>
            <Text style={styles.mainTitle}>Calculate</Text>
            <Button title="Home" onPress={() => router.navigate('/')}/>

                <TextInput style={styles.textInput} placeholder="width" value={width.toString()} onChangeText={(w) => setWidth(Number(w))}/>
                <TextInput style={styles.textInput} placeholder="lenght"/>

                <Button title="enter"/>
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