import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, Keyboard } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function App() {
    const router = useRouter();
    const [speed, setSpeed] = useState("");
    const [time, setTime] = useState("");
    const [distance, setDistance] = useState(0);

    function calDistance() {
        // ใช้ parseFloat เพื่อรองรับทศนิยม และ || 0 เพื่อป้องกันกรณีค่าว่าง
        const s = parseFloat(speed) || 0;
        const t = parseFloat(time) || 0;
        setDistance(s * t);
        Keyboard.dismiss(); // ปิดคีย์บอร์ดเมื่อกดคำนวณ
    }

    return (
        <View style={styles.container}>
            {/* ส่วนหัวแอป */}
            <Text style={styles.mainTitle}>คำนวณระยะทาง</Text>
            
            {/* เมนูนำทาง (Navigation) */}
            <View style={styles.navBar}>
                <TouchableOpacity style={styles.navButton} onPress={() => router.navigate('/')}>
                    <Text style={styles.navText}>หน้าแรก</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navButton, styles.navButtonActive]} onPress={() => router.navigate('/square')}>
                    <Text style={styles.navTextActive}>พื้นที่สี่เหลี่ยม</Text>
                </TouchableOpacity>
            </View>

            {/* การแสดงผล (Result Card) */}
            <View style={styles.card}>
                <Text style={styles.label}>ผลลัพธ์การคำนวณ</Text>
                <Text style={styles.resultValue}>{distance.toLocaleString()} <Text style={styles.unit}>กม.</Text></Text>
                <View style={styles.detailRow}>
                    <Text style={styles.detailText}>เร็ว: {speed || 0} กม./ชม.</Text>
                    <Text style={styles.detailText}>เวลา: {time || 0} ชม.</Text>
                </View>
            </View>

            {/* ช่องกรอกข้อมูล */}
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>ความเร็ว (กม./ชม.)</Text>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="ตัวอย่าง: 80" 
                    keyboardType="numeric"
                    value={speed} 
                    onChangeText={setSpeed}
                />
                
                <Text style={styles.inputLabel}>เวลา (ชม.)</Text>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="ตัวอย่าง: 2" 
                    keyboardType="numeric"
                    value={time} 
                    onChangeText={setTime}
                />
            </View>

            {/* ปุ่มคำนวณแบบแต่งเอง */}
            <TouchableOpacity style={styles.calcButton} onPress={calDistance}>
                <Text style={styles.calcButtonText}>คำนวณเลย</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F9FA",
        alignItems: "center",
        paddingTop: 60,
    },
    mainTitle: {
        fontSize: 28,
        fontWeight: "800",
        color: "#2D3436",
        marginBottom: 20,
    },
    navBar: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 30,
    },
    navButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        backgroundColor: '#dfe6e9',
    },
    navButtonActive: {
        backgroundColor: '#6C5CE7',
    },
    navText: { color: '#636E72', fontWeight: '600' },
    navTextActive: { color: '#FFF', fontWeight: '600' },
    
    card: {
        width: "85%",
        backgroundColor: "#FFF",
        borderRadius: 20,
        padding: 25,
        alignItems: "center",
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        marginBottom: 30,
    },
    label: { fontSize: 14, color: "#636E72", marginBottom: 5 },
    resultValue: { fontSize: 42, fontWeight: "bold", color: "#6C5CE7" },
    unit: { fontSize: 18, color: "#B2BEC3" },
    detailRow: { flexDirection: 'row', gap: 20, marginTop: 10 },
    detailText: { fontSize: 12, color: "#636E72" },

    inputContainer: { width: "85%", gap: 10 },
    inputLabel: { fontSize: 14, fontWeight: "600", color: "#2D3436", marginLeft: 5 },
    textInput: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 12,
        width: "100%",
        height: 50,
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 10,
    },
    calcButton: {
        backgroundColor: "#00B894",
        width: "85%",
        height: 55,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        elevation: 3,
    },
    calcButtonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "700",
    }
});