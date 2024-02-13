import React from "react";
import { View, Text } from "react-native";
import { Button } from 'react-native-paper';
import { enGB, registerTranslation, DatePickerInput } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function DatePickerComponent() {
    const [inputDate, setInputDate] = React.useState(undefined)

registerTranslation('en-GB', enGB)

    return (
        <SafeAreaProvider>
            <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                <Button onPress={() => setVisible(true)} uppercase={false} mode="outlined">
                    Pick time
                </Button>
                <DatePickerInput
                    locale="en"
                    label="Birthdate"
                    value={inputDate}
                    onChange={(d) => setInputDate(d)}
                    inputMode="start"
                />
            </View>
        </SafeAreaProvider>
    );
}