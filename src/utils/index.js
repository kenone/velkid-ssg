export const excerpText = text => {
  const LENGHT_LIMIT = 100
  if (text.length > LENGHT_LIMIT) {
    return text.slice(0, LENGHT_LIMIT).concat(" (Read more)")
  } else {
    return text
  }
}
