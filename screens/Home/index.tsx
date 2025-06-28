import { FlatList } from "react-native";
import StatusBarSpacer from "../../components/StatusBarSpacer";
import Item from "./Item";

const data = [
    {
        id: 1,
        imageUrl:
            "https://cdn.apartmenttherapy.info/image/upload/v1700248272/k/Photo/Series/2023-11-how-to-make-kimchi/how-to-make-kimchi-259.jpg",
        name: "Wireless Headphones Wireless Headphones Wireless Headphones",
        price: 59.99,
    },
    {
        id: 2,
        imageUrl:
            "https://cdn.apartmenttherapy.info/image/upload/v1700248272/k/Photo/Series/2023-11-how-to-make-kimchi/how-to-make-kimchi-259.jpg",
        name: "Smart Watch",
        price: 129.99,
    },
    {
        id: 3,
        imageUrl:
            "https://cdn.apartmenttherapy.info/image/upload/v1700248272/k/Photo/Series/2023-11-how-to-make-kimchi/how-to-make-kimchi-259.jpg",
        name: "Bluetooth Speaker",
        price: 39.99,
    },
    {
        id: 4,
        imageUrl:
            "https://cdn.apartmenttherapy.info/image/upload/v1700248272/k/Photo/Series/2023-11-how-to-make-kimchi/how-to-make-kimchi-259.jpg",
        name: "Gaming Mouse",
        price: 25.99,
    },
    {
        id: 5,
        imageUrl:
            "https://cdn.apartmenttherapy.info/image/upload/v1700248272/k/Photo/Series/2023-11-how-to-make-kimchi/how-to-make-kimchi-259.jpg",
        name: "Portable Charger",
        price: 19.99,
    },
    {
        id: 6,
        imageUrl:
            "https://cdn.apartmenttherapy.info/image/upload/v1700248272/k/Photo/Series/2023-11-how-to-make-kimchi/how-to-make-kimchi-259.jpg",
        name: "LED Monitor",
        price: 199.99,
    },
    {
        id: 7,
        imageUrl:
            "https://cdn.apartmenttherapy.info/image/upload/v1700248272/k/Photo/Series/2023-11-how-to-make-kimchi/how-to-make-kimchi-259.jpg",
        name: "Mechanical Keyboard",
        price: 89.99,
    },
    {
        id: 8,
        imageUrl:
            "https://cdn.apartmenttherapy.info/image/upload/v1700248272/k/Photo/Series/2023-11-how-to-make-kimchi/how-to-make-kimchi-259.jpg",
        name: "Webcam HD",
        price: 49.99,
    },
    {
        id: 9,
        imageUrl:
            "https://cdn.apartmenttherapy.info/image/upload/v1700248272/k/Photo/Series/2023-11-how-to-make-kimchi/how-to-make-kimchi-259.jpg",
        name: "External Hard Drive",
        price: 79.99,
    },
];

const HomeScreen = ({ navigation }: any) => {
    const onPressHandler = ({ id }: any) => {
        navigation.navigate("ItemDetails", { id: id });
    };

    return (
        <StatusBarSpacer>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                renderItem={({ item }) => <Item data={item} onPress={onPressHandler} />}
                contentContainerStyle={{
                    padding: 6,
                }}
            />
        </StatusBarSpacer>
    );
};

export default HomeScreen;
