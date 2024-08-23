import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin:10,
        padding: 10,
        backgroundColor: 'orange',
        marginBottom: 10,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius:50,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        borderRadius: 30,
        
    },
    body_container: {
        justifyContent: 'center',
        marginLeft: 10,
    },
    title: {
        fontSize: 18,
        fontWeight:'450',
        color:'black',

    },
});

export default styles;
