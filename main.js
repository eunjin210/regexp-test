const str = `
010-1234-5678
TheMaru@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
the quick brown fox jumps over the lazy dog.
abbcccddddd
`

console.log(
  str.match(/(?<=@).{1,}/g)
)