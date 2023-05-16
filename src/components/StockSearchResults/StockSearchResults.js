import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const StockSearchResults = ({ result }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      {result
        .slice(0)
        .reverse()
        .map((item, index) => (
          <Card key={index} style={{ width: 300, margin: '0 10px' }}>
            <CardContent>
              <Typography
                variant="h6"
                component="div"
                style={{ fontWeight: 'bold', marginBottom: '10px' }}
              >
                {item.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ marginBottom: '5px' }}
              >
                <strong>Sigla:</strong> {item.symbol}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ marginBottom: '5px' }}
              >
                <strong>Tipo:</strong> {item.type}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ marginBottom: '5px' }}
              >
                <strong>Mercado:</strong> {item.exchange}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ marginBottom: '5px' }}
              >
                <strong>País:</strong> {item.country}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </div>
  )
}

export default StockSearchResults
