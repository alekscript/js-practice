const fnError = () => {
  throw new Error('Some error')
}






try {
  fnError()
  // Выполнение блок кода в котором возможна ошибка
} catch (error) {
  console.error(error)
  console.log(error.message)
  // Выполнения блок, если появилась ошибка
}

console.log('Continue...')