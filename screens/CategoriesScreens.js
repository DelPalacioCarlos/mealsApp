import { FlatList, StyleSheet, ImageBackground } from "react-native";
import { CATEGORIES } from "../data/dummy_data";
import CategoryGridTile from "../components/CategoryGridTile";


function CategoriesScreen({navigation}) {

    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id
            })
        }

        return (
            <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} imageurl ={itemData.item.imageurl}/>
        )
    }

    return (
        <FlatList 
        style = {{backgroundColor: '393D35', }}
        
            data={CATEGORIES} 
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}


export default CategoriesScreen