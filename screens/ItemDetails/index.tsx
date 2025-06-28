import { Image, ScrollView, Text, View } from "react-native";

const ItemDetailsScreen = () => {
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <View style={{ width: "100%", height: 400 }}>
                    <Image
                        source={{
                            uri: "https://cdn.apartmenttherapy.info/image/upload/v1700248272/k/Photo/Series/2023-11-how-to-make-kimchi/how-to-make-kimchi-259.jpg",
                        }}
                        style={{ flex: 1, objectFit: "cover" }}
                    />
                    <Text></Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default ItemDetailsScreen;
