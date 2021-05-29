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
export type CurrencyFieldProps = {
  inputMode?: string
  currencyOptions?: typeof defaultCurrencyOptions
} & TextFieldProps

const useCurrency = ({ currencyOptions, ...rest }: CurrencyFieldProps) => {
  const mask = createNumberMask({ ...defaultCurrencyOptions, ...currencyOptions })
  return {
    ...rest,
    showMask: false,
    mask,
  }
}

const CurrencyField = (props: CurrencyFieldProps): JSX.Element => {
  const maskProps = useCurrency(props)

  return <MaskedField {...maskProps} />
}

export { CurrencyField }
