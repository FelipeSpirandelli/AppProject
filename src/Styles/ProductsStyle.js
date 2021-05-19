import { StyleSheet } from 'react-native'

const productStyle = StyleSheet.create({
    textContainer: {
        backgroundColor: '#00BFFF',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 5,
        paddingBottom: 30,
        margin: '2%',
        width: '46%',
        borderColor: '#000',
        borderWidth: 1,
    },
    productsContainer: {
        backgroundColor: '#FFF',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexGrow: 20
    },
    buttonAdd: {
        backgroundColor: "#28B463",
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 30,
        paddingLeft: 10,
        paddingTop: 3,
        paddingBottom: 3,
        paddingRight: 10,
        flexDirection: 'row',
    },
    buttonRemove:{
        backgroundColor: "#E74C3C",
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 30,
        paddingLeft: 10,
        paddingTop: 3,
        paddingBottom: 3,
        paddingRight: 10,
        flexDirection: 'row',
    },
    pruductField: {
        flexGrow: 1
    },
})

export default productStyle