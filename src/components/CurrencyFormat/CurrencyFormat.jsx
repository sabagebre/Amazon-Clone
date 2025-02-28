import React from 'react'
import numeral from 'numeral'
function CurrencyFormat({amount}) {
    const currencyFormated= numeral(amount).format('$0,0.00')
  return (
    <>
      {currencyFormated}
    </>
  )
}

export default CurrencyFormat