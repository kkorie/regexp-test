// let str = `
// 010-1234-5678
// thesecon@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// http://localhost:1234
// 동해물과 백두산이 마르고 닳도록
// `

// const regexp = new RegExp('the', 'g')
// const regexp = /the/gi
// console.log(str.match(regexp))

// 원본 손상 x
// const regexp = /fox/gi
// console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA'))
// console.log(str)

// 재할당
// str = str.replace(regexp, 'AAA')
// console.log(str)

// const regexp = /the/g
// console.log(str.match(regexp))
// console.log(str.match(/the/gi))

// console.log(str.match(/\.$/gim))

// console.log(
//   str.match(/d$/g)
// )
// console.log(
//   str.match(/https?/g)
// )

// console.log(
//   str.match(/d{2}/)
// )
// console.log(
//   str.match(/\b\w{2,3}\b/g)
// )

// console.log(
//   str.match(/[fox]/g)
// )
// console.log(
//   str.match(/[가-힣]{1,}/g)
// )

// console.log(
//   str.match(/\bf\w{1,}\b/g)
// )
// const h = `  the hello  world   !

// `
// console.log(
//   h.replace(/\s/g, '')
// )

const str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
// console.log(
//   str.match(/.{1,}(?=@)/g)
// )
console.log(
  str.match(/(?<=@).{1,}/g)
)