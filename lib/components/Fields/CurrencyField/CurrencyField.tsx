import React from 'react'
import { createNumberMask } from 'text-mask-addons'
import { TextFieldProps } from '../Input'
import { MaskedField } from '../MaskedField'

const defaultCurrencyOptions = {
  prefix: 'R$ ',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: '.',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2,
  integerLimit: 7,
}

const CurrencyField = (props: TextFieldProps): JSX.Element => {
  const mask = createNumberMask(defaultCurrencyOptions)
  return <MaskedField {...props} mask={mask} />
}

export { CurrencyField }
