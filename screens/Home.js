import { Dimensions, StyleSheet, View, Text, Pressable, FlatList, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';

import { LIVRES } from '../data/data'

import { Card } from '../components/Card'
import { InputLabel } from '../components/InputLabel'
import { tags } from '../components/Tag'

export default function Home({ navigation }) {
  const [books, setBooks] = useState(LIVRES)

  const [tagfilter, setTagFilter] = useState("all")
  const [searchfilter, setsearchfilter] = useState("")

  const allTag = { id: 'all', genre: 'all', couleur: '#cccccc' }

  // HELPERS
  useEffect(() => {
    let filteredBooks = [...books]
    filteredBooks = LIVRES.filter(({ titre }) => titre.toLowerCase().match(searchfilter.toLowerCase()))
    filteredBooks = filteredBooks.filter(({ categorieId }) => tagfilter === "all" || categorieId.includes(tagfilter))
    setBooks(filteredBooks)

  }, [tagfilter, searchfilter])

  // COMPONENTS
  function TagListItem(props) {
    const selected = tagfilter === props.id && styles.selectedTag
    return (
      <Pressable style={[ styles.tagButton, selected, { backgroundColor: props.couleur }]} onPress={() => setTagFilter(props.id)}>
        <Text>{ props.genre }</Text>
      </Pressable>
    )
  }

  return (
    <View style={ styles.appWrapper }>
      <View style={ styles.appBody }>
        <View style={ styles.searchForm }>
          <InputLabel label="Rechercher un livre" onChange={ setsearchfilter } />
          <View style={ styles.tagList }>{ [allTag, ...tags].map(tag => <TagListItem key={tag.id} {...tag} />) }</View>
        </View>

        <ScrollView contentContainerStyle={ styles.cardList }>
         { books.map( book => <Card key={book.id} { ...book } onTagPress={ setTagFilter } />) }
        </ScrollView>

        {/*
          <FlatList
            contentContainerStyle={{ alignItems: 'center' }}
            numColumns={ 1 }
            data={ books }
            renderItem={ CardListItem }
            keyExtractor={ item => item.id }
            ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          />
        */}
      </View>

      <Pressable style={ styles.FAB } onPress={ () => navigation.navigate('add-book') }>
        <Text style={ styles.FABIcon }>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  appWrapper: {
    alignItems: 'center',
  },

  searchForm: {
    gap: 16,
    marginBottom: 32,
    marginTop: 32
  },

  cardList: {
    alignItems: 'center',
    gap: 32,
    paddingBottom: 32
  },

  tagList: {
    flexDirection: 'row',
    width: '100%',
    gap: 8
  },
  tagButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16
  },
  selectedTag: {
    borderColor: '#0070FF',
    borderWidth: 2
  },

  FAB: {
    height: 64,
    width: 64,
    position: 'absolute',
    right: 8,
    bottom: 8,
    borderRadius: 50,
    backgroundColor: '#6bc4e7',
    justifyContent: 'center',
  },
  FABIcon: {
    fontSize: 20,
    fontWeight: 600,
    textAlign: 'center'
  }
})