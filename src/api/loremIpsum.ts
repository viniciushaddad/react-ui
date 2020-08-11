const LOREM_HOST = 'https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text'

type LoremParams = {
  type?: 'all-meat' | 'meat-and-filler'
  paras: string
  sentences: string
  format?: string
}

const getLoremIpsum = (search: LoremParams): Promise<string> => {
  const urlParams = new URLSearchParams({ type: 'meat-and-filler', format: 'text', ...search })

  return fetch(`${LOREM_HOST}?${urlParams.toString()}`).then((response) => response.text())
}

export { getLoremIpsum }
