import React from 'react';
import { 
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Rating,
  CardActionArea,
  Container
} from '@mui/material';

const ProductCard = () => {
    return (
      <Container maxWidth="small"  sx={{
        display: 'flex',
      flexDirection: 'column',
        alignItems:'center',
        overflow: 'hidden'
    }}>
      <Typography component="h1" variant="h5" sx={{ mb: 3, mt:5 }}>
                  Product Card
                </Typography>
    <Card sx={{ 
       width: 450,
        height: 500,
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 6px 16px rgba(0,0,0,0.15)'
      }
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="https://images.pexels.com/photos/249597/pexels-photo-249597.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Wireless Headphones"
          sx={{ objectFit: 'cover' }}
        />
      </CardActionArea>

      <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
    
        <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>
          Wireless Headphones
        </Typography>

       
        <Rating 
          name="product-rating" 
          value={4.5} 
          precision={0.5} 
          readOnly 
          size="large"
        />

    
        <Box sx={{ 
          width: '100%',
          py: 0.5,
          bgcolor: 'success.light',
          borderRadius: '4px',
          textAlign: 'center'
        }}>
          <Typography 
            variant="body2" 
            sx={{  py: 1.5,
              fontWeight: 'bold',
              color: 'success.contrastText'
            }}
          >
            IN STOCK
          </Typography>
        </Box>

      
        <Typography variant="h6" sx={{ fontWeight: 700, textAlign: 'left' }}>
          $129.99
        </Typography>

   
        <Button
          fullWidth
          variant="contained"
          size="medium"
          sx={{
            mt: 1,
            py: 1.5,
            fontWeight: 600,
            borderRadius: '8px',
            textTransform: 'none'
          }}
        >
          ADD TO CART
        </Button>
      </CardContent>
            </Card>
            </Container>
  );
};

export default ProductCard;