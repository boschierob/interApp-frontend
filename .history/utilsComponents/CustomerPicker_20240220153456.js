import { View } from "react-native";

export default function CustomerPicker({selectedValue, onValueChange}) {

    return (
        <View>
          <Text>Sélectionnez une option :</Text>
          <Picker
            selectedValue={selectedValue}
            onValueChange={onValueChange}
          >
            <Picker.Item label="Option 1" value="option1" />
            <Picker.Item label="Option 2" value="option2" />
            <Picker.Item label="Option 3" value="option3" />
            <Picker.Item label="Option 4" value="option4" />
            <Picker.Item label="Option 5" value="option5" />
          </Picker>
        </View>
      );
}