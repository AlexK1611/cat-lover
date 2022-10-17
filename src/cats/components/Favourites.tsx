import { FC, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'app/helpers/appTypes'
import { selectFavourites } from 'cats/store/catsSelectors'
import { removeImageFromFavourites, fetchFavourites } from 'cats/store/catsThunks'
import { Box, Button, CardMedia, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Favourites: FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const favourites = useSelector(selectFavourites)

    const [page, setPage] = useState(0)

    const loadMoreFavourites = () => {
        setPage(prevPage => prevPage + 1)
    }

    const handleRemoveImageFromFavourites = (imageId: number) => {
        return () => {
            dispatch(removeImageFromFavourites(imageId))
        }
    }

    useEffect(() => {
        dispatch(fetchFavourites({
            limit: 10,
            page
        }))
    }, [dispatch, page])

    const navigate = useNavigate()
    const goToHomePage = () => {
        navigate('/')
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '50px'
            }}
        >
            <Typography variant='h1'>
                You have such lovely favourites!
            </Typography>
            <Button variant='contained' onClick={goToHomePage}>
                Home
            </Button>
            {favourites.length > 0 && (
                <Grid container spacing={3}>
                    {favourites.map(favourite => (
                        <Grid
                            item
                            xs={4}
                            key={favourite.id}
                        >
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia component='img' image={favourite.image.url} />
                                <Button
                                    variant='contained'
                                    onClick={handleRemoveImageFromFavourites(favourite.id)}
                                    sx={{
                                        position: 'absolute',
                                        top: '25px',
                                        right: '25px'
                                    }}
                                >
                                    Remove
                                </Button>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            )}
            {favourites.length > 10 && (
                <Button variant='contained' onClick={loadMoreFavourites}>
                    Load more
                </Button>
            )}
        </Box>
    )
}

export default Favourites