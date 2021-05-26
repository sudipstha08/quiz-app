const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5)

export { shuffleArray }
