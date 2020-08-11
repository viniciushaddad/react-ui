const px2vw = (fontSize: number, widthInPixels = 1440): string => `${(fontSize / widthInPixels) * 100}vw`

export { px2vw }
