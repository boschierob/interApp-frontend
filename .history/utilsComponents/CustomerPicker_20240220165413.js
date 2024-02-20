import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function CustomerPicker({ customersArray, selectedValue, onValueChange }) {

    return (
        <View>
            <Text>Sélectionnez un client :</Text>
            <Picker
                selectedValue={selectedValue}
                onValueChange={onValueChange}
            >
<Picker.Item label="Choisir ..." value={null} key={null} />
                {
                    customersArray.map((item) => (
                        <Picker.Item label={item.nom} value={item.nom} key={item._id} />
                    ))
                }
            </Picker>
        </View>
    );
}