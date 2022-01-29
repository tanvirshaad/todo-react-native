import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Task(props) {
    const { text } = props;
    const date = new Date();
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{text}</Text>
            </View>
            <View>
                <Text style={styles.date}>
                    {date.toDateString().slice(4, 11)}
                </Text>
            </View>
            {/* <View style={styles.circle}></View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#188fa6',
        opacity: 0.6,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    circle: {
        width: 12,
        height: 12,
        borderColor: '#55b6fc',
        borderWidth: 2,
        borderRadius: 5,
    },
    date: {
        fontSize: 10,
        marginLeft: '5%',
        color: '#5e9aa6',
    },
});
