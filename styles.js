import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'start',

        paddingTop: 8,
    },
    modalContainer: {
        height: '80%',
        width: '80%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12
    },
    modal: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'start',
        padding: 4,
        height: '50%'
    },
    innerContainer: {

        width: '100%',
        marginBottom: 20,
    },
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(203 213 225)',
        padding: 10,
        borderRadius: 10,
        width: '80%',
        margin: 10,
        filter: 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.03))',
        alignSelf: 'center'
    },
    doneButton: {
        alignItems: 'center',
        backgroundColor: 'rgb(203 213 225)',
        padding: 10,
        borderRadius: 10,
        width: '80%',
        margin: 10,
        marginVertical: 20,
        filter: 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.03))',
        alignSelf: 'center'

    },
    todoDone: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    },
    todoText: {
        color: 'rgb(51 65 85)',
        fontSize: 18
    },
    heading: {
        fontSize: 24,
        color: 'rgb(51 65 85)',
        margin: 8,
        textAlign: 'center',
    },
    titleInput: {

        borderColor: 'rgb(203 213 225)',
        borderWidth: 1,
        width: '90%',
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },
    descInput: {
        flex: 1,
        borderColor: 'rgb(203 213 225)',
        borderWidth: 1,
        width: '90%',

        margin: 10,
        padding: 10,
        borderRadius: 10,
    }
});

export default styles;