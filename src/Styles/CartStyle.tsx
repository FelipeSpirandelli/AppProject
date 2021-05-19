import { StyleSheet } from 'react-native';

const cartStyle = StyleSheet.create({
    cartContainer: {
        flexDirection: 'column',
        flexGrow: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        margin: 0, 
        paddingHorizontal: 20
    },
    cart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginTop: 10,
        width: '90%',
        backgroundColor:'#00BFFF',
    },
    emptyCart:{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default cartStyle;
