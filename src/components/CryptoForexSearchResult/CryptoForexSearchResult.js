import React, { useEffect } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import { formatDate } from '../../utils/dateUtils'

const CryptoForexSearchResults = ({ data }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <Card style={{ width: 300 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            <strong>{data.symbol}</strong>
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ marginTop: '10px' }}
          >
            <strong>Preço atual: </strong> US$ {data.price}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ marginTop: '10px' }}
          >
            <strong>Valor abertura:</strong> US$ {data.day_open}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ marginTop: '10px' }}
          >
            <strong>Maior valor diário: </strong> US$ {data.day_high}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ marginTop: '10px' }}
          >
            <strong>Fechamento anterior:</strong> US${' '}
            {data.previous_close_price}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ marginTop: '10px' }}
          >
            <strong>Volume:</strong> {data.volume}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ marginTop: '10px' }}
          >
            <strong>Market cap:</strong> {data.market_cap}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ marginTop: '10px' }}
          >
            <strong>Última atualização:</strong> {formatDate(data.last_update)}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default CryptoForexSearchResults
