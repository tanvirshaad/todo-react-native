import { useState } from 'react';
import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Keyboard,
} from 'react-native';
import Task from './components/Task';

export default function App() {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task]);
        setTask(null);
    };

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    };
    return (
        <View style={styles.container}>
            {/* todays task */}
            <View style={styles.taskWrapper}>
                <Text style={styles.sectionTitle}>Todays task's</Text>
                <View style={styles.items}>
                    {/* tasks will be here */}
                    {taskItems.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => completeTask(index)}
                            >
                                <Task text={item}></Task>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>

            {/* writing a task */}
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.writeTaskWrapper}
            >
                <TextInput
                    style={styles.input}
                    placeholder={'Write a task'}
                    value={task}
                    onChangeText={(text) => setTask(text)}
                ></TextInput>
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
        // backgroundColor: '#041C32',
    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        color: '#188fa6',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    items: {},
    writeTaskWrapper: {
        position: 'absolute',
        bottom: '5%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 15,
        width: '75%',
        borderColor: '#188fa6',
        borderWidth: 2,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#188fa6',
        borderWidth: 2,
    },
    addText: {
        color: '#188fa6',
        fontWeight: 'bold',
        fontSize: 20,
    },
});
