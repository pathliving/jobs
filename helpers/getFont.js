const getFont = (name, extension) => {
  return require(`../assets/fonts/${name}.${extension}`)
}

export default getFont;
