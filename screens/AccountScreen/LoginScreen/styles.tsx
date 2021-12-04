import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    screenTitle: {
        fontSize: 40,
        fontFamily: 'Raleway_600SemiBold',
        marginVertical: 30
    },
    credentialsContainer: {
        marginVertical: 10
    },
    label: {
        textAlign: 'center',
        fontSize: 24,
        paddingVertical: 7,
        fontFamily: 'Raleway_500Medium',
    },
    createAccountLabel: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 5
    },
    createAccountLink: {
        textAlign: 'center',
        fontSize: 20,
    },
    loadingScreen: {
        backgroundColor: 'gray',
        opacity: 0.5,
        zIndex: 10,
        position: 'absolute',
        top: 0,
        left: 0,
        flex: 1
    }
});
