import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFA500',
    },
    inner_container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Saydam siyah arka plan
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    recipeContainer: {
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden', // Çerçeve kenarlarının içindeki her şeyi kesmek için
    },
    recipeImage: {
        width: '100%',
        height: 200,
    },
    recipeTitle: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default styles;
