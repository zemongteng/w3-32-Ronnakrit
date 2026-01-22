import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* ส่วนหัวของหน้าแรก */}
                <View style={styles.header}>
                    <Text style={styles.welcomeText}>ยินดีต้อนรับสู่</Text>
                    <Text style={styles.mainTitle}>Calculator Plus</Text>
                    <View style={styles.underline} />
                </View>

                {/* ส่วนเมนูหลัก */}
                <View style={styles.menuContainer}>
                    <Text style={styles.menuLabel}>เลือกรายการคำนวณ</Text>
                    
                    {/* ปุ่มเมนูที่ 1: พื้นที่สี่เหลี่ยม */}
                    <TouchableOpacity 
                        style={[styles.menuButton, { backgroundColor: '#E67E22' }]} 
                        onPress={() => router.navigate('/square')}
                    >
                        <View style={styles.buttonIconBox}>
                            <Text style={styles.iconText}>⬛</Text>
                        </View>
                        <View>
                            <Text style={styles.buttonTitle}>พื้นที่สี่เหลี่ยม</Text>
                            <Text style={styles.buttonSubTitle}>กว้าง x ยาว</Text>
                        </View>
                    </TouchableOpacity>

                    {/* ปุ่มเมนูที่ 2: ระยะทาง */}
                    <TouchableOpacity 
                        style={[styles.menuButton, { backgroundColor: '#6C5CE7' }]} 
                        onPress={() => router.navigate('/distance')}
                    >
                        <View style={styles.buttonIconBox}>
                            <Text style={styles.iconText}>🚗</Text>
                        </View>
                        <View>
                            <Text style={styles.buttonTitle}>ระยะทาง</Text>
                            <Text style={styles.buttonSubTitle}>ความเร็ว x เวลา</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Footer ส่วนท้าย */}
                <Text style={styles.footerText}>เวอร์ชัน 1.0.0</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#F0F3F7",
    },
    container: {
        flex: 1,
        padding: 25,
        justifyContent: "space-between",
    },
    header: {
        marginTop: 50,
        alignItems: "center",
    },
    welcomeText: {
        fontSize: 18,
        color: "#636E72",
        marginBottom: 5,
    },
    mainTitle: {
        fontSize: 36,
        fontWeight: "900",
        color: "#2D3436",
    },
    underline: {
        width: 60,
        height: 5,
        backgroundColor: "#6C5CE7",
        marginTop: 10,
        borderRadius: 10,
    },
    menuContainer: {
        gap: 15,
        width: "100%",
    },
    menuLabel: {
        fontSize: 16,
        fontWeight: "600",
        color: "#B2BEC3",
        marginBottom: 10,
        marginLeft: 5,
    },
    menuButton: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        borderRadius: 20,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
    },
    buttonIconBox: {
        width: 50,
        height: 50,
        backgroundColor: "rgba(255,255,255,0.2)",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 15,
    },
    iconText: {
        fontSize: 24,
    },
    buttonTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFF",
    },
    buttonSubTitle: {
        fontSize: 13,
        color: "rgba(255,255,255,0.8)",
    },
    footerText: {
        textAlign: "center",
        color: "#B2BEC3",
        fontSize: 12,
        marginBottom: 10,
    },
});