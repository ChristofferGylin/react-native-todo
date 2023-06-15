import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../styles';
import { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

const DetailsScreen = ({ navigation, route, todos, setTodos }) => {

    const [todo, setTodo] = useState(undefined);

    const handleClickDone = () => {
        setTodos((oldTodos) => {

            const newTodos = [...oldTodos];

            newTodos[todo.todoNum].isDone = !newTodos[todo.todoNum].isDone;

            return newTodos;

        })
    };

    const handleClickDel = () => {
        setTodos((oldTodos) => {

            const newTodos = oldTodos.filter(td => td.id !== todo.id);
            return newTodos;

        })
        navigation.navigate('Todos');
    };

    useEffect(() => {

        let newTodo;

        for (let i = 0; i < todos.length; i++) {

            if (todos[i].id === route.params.id) {

                newTodo = { ...todos[i], todoNum: i };
                break;

            }

        }

        setTodo(newTodo);

        navigation.setOptions({
            footerLeft: () => <Text>{toLocaleDateString(todos[i].time)}</Text>
        })

    }, [todos]);

    if (!todo) {
        return <></>
    }

    let buttonText;

    if (todo.isDone) {

        buttonText = 'Undo';

    } else {

        buttonText = 'Done';

    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 10, width: '100%', paddingHorizontal: 8 }}>
                <ScrollView style={{ width: '100%', borderColor: 'rgb(203 213 225)', borderWidth: 1, borderRadius: 10 }}>
                    <Text style={styles.heading}>{todo.description}</Text>
                </ScrollView>

            </View>
            <TouchableOpacity
                style={styles.doneButton}
                onPress={handleClickDone}>
                <Text>{buttonText}</Text>
            </TouchableOpacity>
            <View style={{ borderTopColor: 'rgb(203 213 225)', borderTopWidth: 1, flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingHorizontal: 8 }}>

                <Text style={{ fontSize: 18, fontWeight: 'semibold', color: 'rgb(71 85 105)' }}>{todo.time.toLocaleDateString()}</Text>
                <TouchableOpacity
                    onPress={handleClickDel}>
                    <AntDesign name="delete" size={24} color='rgb(71 85 105)' />
                </TouchableOpacity>


            </View>
            <StatusBar style="auto" />
        </View>
    );
}

export default DetailsScreen;