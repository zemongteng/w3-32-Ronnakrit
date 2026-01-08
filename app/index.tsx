import { View , Text , Button , StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App(){

    const router = useRouter()

    return(

        <View style={styles.container}>
            <Text style={styles.mainTitle}>Calculater</Text>
            <Button title="พื้นที่สี่เหลี่ยม" onPress={() => router.navigate('/square')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center"
    },

    mainTitle:{
        fontSize:30,
        fontWeight:"700"
    },

})