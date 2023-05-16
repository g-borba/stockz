import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

import { formatDate } from '../../utils/dateUtils'

const NewsSearchResults = ({ result }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      {result
        .slice(0)
        .reverse()
        .map((item, index) => (
          <Link
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Card style={{ width: 300, margin: '0 10px' }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  <strong> {item.title} </strong>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ marginTop: '10px' }}
                >
                  <strong>Descrição:</strong> {item.description}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ marginTop: '10px' }}
                >
                  <strong>Data de Publicação:</strong>{' '}
                  {formatDate(item.published_at)}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ marginTop: '10px' }}
                >
                  <strong>Fonte:</strong> {item.source}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
    </div>
  )
}

export default NewsSearchResults
