import { StyleSheet, Pressable, Text } from 'react-native';
import { CATEGORIES } from '../data/data'

export function Tag({ id, style, onPress }) {
  const tag = findTagById(id)
  return (
    <Pressable style={[ styles.tagWrapper, style, { backgroundColor: tag.couleur }]} onPress={() => onPress(id) }>
      <Text>{ tag.genre }</Text>
    </Pressable>
  )
}

export function findTagById(tagId) {
  return CATEGORIES.find(tag => tag.id === tagId)
}

export const tags = CATEGORIES

const styles = StyleSheet.create({
  tagWrapper: {
    borderRadius: 32,
    paddingHorizontal: 8,
    paddingVertical: 2,
  }
})
