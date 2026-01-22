import { View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Square() {
    const router = useRouter();
    const [width, setWidth] = useState("");
    const [length, setLength] = useState("");
    const [area, setArea] = useState(0);

    function calSquare() {
        const w = parseFloat(width) || 0;
        const l = parseFloat(length) || 0;
        setArea(w * l);
        Keyboard.dismiss(); // ปิดคีย์บอร์ดหลังกดคำนวณ
    }

    return (
        <View style={styles.container}>
            {/* Header */}
            <Text style={styles.mainTitle}>คำนวณพื้นที่สี่เหลี่ยม</Text>

            {/* Navigation Menu */}
            <View style={styles.navBar}>
                <TouchableOpacity style={styles.navButton} onPress={() => router.navigate('/')}>
                    <Text style={styles.navText}>หน้าแรก</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => router.navigate('/distance')}>
                    <Text style={styles.navText}>ระยะทาง</Text>
                </TouchableOpacity>
            </View>

            {/* Display Result Card */}
            <View style={styles.card}>
                <Text style={styles.label}>พื้นที่ทั้งหมด</Text>
                <Text style={styles.resultValue}>{area.toLocaleString()} <Text style={styles.unit}>ตร.ซม.</Text></Text>
                <View style={styles.detailRow}>
                    <Text style={styles.detailText}>กว้าง: {width || 0} ซม.</Text>
                    <Text style={styles.detailText}>ยาว: {length || 0} ซม.</Text>
                </View>
            </View>

            {/* Input Form */}
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>ความกว้าง (ซม.)</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="ระบุความกว้าง"
                    keyboardType="numeric"
                    value={width}
                    onChangeText={setWidth}
                />

                <Text style={styles.inputLabel}>ความยาว (ซม.)</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="ระบุความยาว"
                    keyboardType="numeric"
                    value={length}
                    onChangeText={setLength}
                />
            </View>

            {/* Calculate Button */}
            <TouchableOpacity style={styles.calcButton} onPress={calSquare}>
                <Text style={styles.calcButtonText}>คำนวณพื้นที่</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF9F0", // พื้นหลังโทนส้มอ่อน
        alignItems: "center",
        paddingTop: 60,
    },
    mainTitle: {
        fontSize: 26,
        fontWeight: "800",
        color: "#E67E22", // สีส้มเข้ม
        marginBottom: 20,
    },
    navBar: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 30,
    },
    navButton: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: '#FFE0B2',
    },
    navText: {
        color: '#D35400',
        fontWeight: '700',
    },
    card: {
        width: "85%",
        backgroundColor: "#FFF",
        borderRadius: 25,
        padding: 30,
        alignItems: "center",
        elevation: 6,
        shadowColor: "#E67E22",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        marginBottom: 30,
        borderWidth: 1,
        borderColor: '#FFECB3'
    },
    label: { fontSize: 14, color: "#95A5A6", marginBottom: 5 },
    resultValue: { fontSize: 40, fontWeight: "bold", color: "#D35400" },
    unit: { fontSize: 18, color: "#BDC3C7" },
    detailRow: { flexDirection: 'row', gap: 20, marginTop: 10 },
    detailText: { fontSize: 13, color: "#7F8C8D" },

    inputContainer: { width: "85%", gap: 10 },
    inputLabel: { fontSize: 15, fontWeight: "600", color: "#34495E", marginLeft: 5 },
    textInput: {
        backgroundColor: "#FFF",
        borderWidth: 1.5,
        borderColor: "#FFE0B2",
        borderRadius: 12,
        width: "100%",
        height: 55,
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 10,
    },
    calcButton: {
        backgroundColor: "#E67E22",
        width: "85%",
        height: 55,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 4,
    },
    calcButtonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    }
});