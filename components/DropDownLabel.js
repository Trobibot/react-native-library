import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

export function DropDownLabel({ data, labelField, valueField, label, onChange }) {
  return (
    <View style={{ width: '100%', justifyContent: 'flex-start' }}>
      <Text style={ styles.label }>{ label }:</Text>
      <Dropdown
          style={styles.textInput}
          data={data}
          labelField={labelField}
          valueField={valueField}
          onChange={onChange}
        />
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
