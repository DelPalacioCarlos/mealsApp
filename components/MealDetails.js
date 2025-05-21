import { View, Text, StyleSheet } from 'react-native'

function MealDetails({duration, complexity, affordability}){
    return(

        <View style={styles.details}>
            <Text style={styles.detailsItem}>{duration}</Text>
            <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailsItem}>{affordability.toUpperCase()}</Text>
        </View>
    )
}

export default MealDetails

const styles = StyleSheet.create({
    details:{
        flexDirection: 'row',
        flexDirection: 'center',
        jutifyContent: 'center',
        padding: 8
    },
    detailsItem:{
        marginHorizotal: 4,
        fontSize: 12
    }
})