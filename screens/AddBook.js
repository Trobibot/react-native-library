import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useState } from 'react';

import { LIVRES } from '../data/data';
import Livre from '../classes/livre';

import { InputLabel } from '../components/InputLabel';
import { DropDownLabel } from '../components/DropDownLabel';
import { tags } from '../components/Tag';

export default function AddBook({ navigation }) {
  const [bookTitle, setBookTitle] = useState("")
  const [bookSummary, setBookSummary] = useState("")
  const [bookVolumeAmount, setBookVolumeAmount] = useState("")
  const [bookCover, setBookCover] = useState("")
  const [bookTag, setBookTag] = useState("")

  function createBook() {
    LIVRES.push(new Livre(
      'm6',
      [bookTag],
      bookTitle,
      bookSummary,
      bookVolumeAmount,
      bookCover
    ))
    navigation.navigate('home')
  }

  return (
    <View style={ styles.appWrapper }>
      <View style={ styles.appBody }>
        <InputLabel label="Titre du livre" onChange={ setBookTitle } />
        <InputLabel label="Résumé" onChange={ setBookSummary } />
        <InputLabel label="Numbre de tome" numeric={true} onChange={ setBookVolumeAmount } />
        <InputLabel label="Couverture (url)" onChange={ setBookCover } />
        <DropDownLabel
          label="Catégorie du livre"
          data={ tags }
          labelField="genre"
          valueField="id"
          onChange={({ id }) => setBookTag(id) }
        />
        <Pressable style={ styles.button } onPress={createBook}><Text>Ajouter</Text></Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appWrapper: {
    alignItems: 'center',
    paddingTop: 64,
  },
  appBody: {
    width: '100%',
    paddingHorizontal: 16,
    gap: 16
  },

  textInput: {
    height: 54,
    paddingHorizontal: 16,
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#cccccc'
  },
  button: {
    height: 40,
    paddingHorizontal: 24,
    borderRadius: 20,
    backgroundColor: '#6bc4e7',
    justifyContent: 'center',
    textAlign: 'center'
  },
})