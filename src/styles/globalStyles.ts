import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import { fontFamily } from "../constants/fontsFamily";

export const globalStyles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.bgColor,
        padding:20,
        paddingTop:42
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
    },
    section: {
        marginBottom:16,
    },
    inputContainer: {
        backgroundColor: colors.gray,
        borderRadius:12,
        paddingHorizontal:10,
        paddingVertical:12,
    },
    text: {
        fontSize:14,
        fontFamily:fontFamily.regular,
        color: colors.text
    },
    

})