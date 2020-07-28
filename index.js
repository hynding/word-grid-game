// Word Grid Game

const applyMapWord = (map, word) => {
  let result = map
  word.split('').forEach(char => {
    if (!result[char]) {
      result[char] = {}
    }
    result = result[char]
  })
  result['!'] = word
  
  return map
}

const buildWordCharMap = (wordList) => {
  return wordList.reduce((map, word) => {
    return applyMapWord(map, word)
  }, {})
}

const test = ['acorn','bile','bite','biter']

console.log('?', buildWordCharMap(test))

const createGameTile = ({row, column, letter, points}) => ({
  row,
  column,
  letter,
  points
})

const createGameBoard = props => {
  const {
    rows,
    columns,
    
  } = props
  return new Array(rows).fill(new Array(columns).fill(null))
}
