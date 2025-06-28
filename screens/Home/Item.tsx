import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface Data {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
}
interface Item {
    data: Data;
    onPress: (data: Data) => void;
}

const Item = ({ data, onPress }: Item) => {
    const { imageUrl, name, price } = data;

    const onPressHandler = () => {
        onPress(data);
    };

    return (
        <Pressable
            style={({ pressed }) => [styles.card, pressed && styles.pressed]}
            onPress={onPressHandler}
        >
            <View style={styles.imageContainer}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
            </View>
            <View style={styles.description}>
                <Text style={styles.name} numberOfLines={2}>
                    {name}
                </Text>
                <Text style={styles.price}>₱{price}</Text>
            </View>
        </Pressable>
    );
};

export default Item;

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 6,
        backgroundColor: "white",
        borderRadius: 8,
        maxWidth: "47%",
        overflow: "hidden",
    },
    imageContainer: {
        width: "100%",
        height: 200,
    },
    image: {
        flex: 1,
        objectFit: "cover",
    },
    description: { minHeight: 80, padding: 12, justifyContent: "space-between" },
    name: {
        fontSize: 16,
        fontWeight: "bold",
    },
    price: {
        fontSize: 18,
    },
    pressed: {
        opacity: 0.75,
    },
});
