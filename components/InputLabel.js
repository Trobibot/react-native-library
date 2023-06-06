import { StyleSheet, View, Text, TextInput } from 'react-native';

export function InputLabel({ label, numeric, onChange }) {
  return (
    <View style={{ width: '100%', justifyContent: 'flex-start' }}>
      <Text style={ styles.label }>{ label }:</Text>
      <TextInput
        style={ styles.textInput }
        keyboardType={ numeric ? "number-pad" : "default" }
        onChangeText={ onChange } />
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    height: 54,
    paddingHorizontal: 16,
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#cccccc'
  },

  label: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 500
  }
})
