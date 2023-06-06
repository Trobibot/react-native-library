import { StyleSheet, View, Image } from 'react-native';
import { Tag } from './Tag'

export function Card({ imageUrl, categorieId, onTagPress }) {
  return (
    <View style={ styles.cardWrapper }>
        <Image style={{ height: '100%' }} source={{ uri: imageUrl }} />
        <View style={ styles.tagsWrapper }>
          { categorieId.map((tag, index) => <Tag key={ index  } id={ tag } onPress={ onTagPress } />) }
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardWrapper: {
    height: 450,
    width: 300,
    borderRadius: 32,
    shadowOpacity: .8,
    shadowRadius: 5,
    overflow: 'hidden',
  },

  tagsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    gap: 4,
    position: 'absolute',
    bottom: 16,
    left: 16
  }
})
