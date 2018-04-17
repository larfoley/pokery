class RandomColor {
  constructor() {
    this.usedColors = []
    this.alphabet = [
      "a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
    ]
  }

  generate() {
    let hexCode = ["", "", "", "", "", ""]

    hexCode.forEach((code, i) => {
      hexCode[i] = this.alphabet[Math.round((Math.random() * this.alphabet.length))]
    })

    hexCode = hexCode.join('')

    this.usedColors.push("#" + hexCode)
    return "#" + hexCode
  }

  generateUnique() {
    let color = this.generate()
    let colorIsUsed = !!this.usedColors.filter(usedColor => usedColor === color).length
    while (!colorIsUsed && this.usedColors.length <= 16777216) {
      color = this.generate()
    }
    return color
  }
}

export default RandomColor
