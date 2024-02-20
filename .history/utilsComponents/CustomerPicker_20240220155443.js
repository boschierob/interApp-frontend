import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function CustomerPicker({ customersArray, selectedValue, onValueChange }) {

    return (
        <View>
            <Text>Sélectionnez une option :</Text>
            <Picker
                selectedValue={selectedValue}
                onValueChange={onValueChange}
            >

                {
                    customersArray.map((item) => (
                        <Picker.Item label={item.nom} value={item.nom} key={item._id} />
                    ))
                }
            </Picker>
        </View>
    );
}