import { FC, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'app/helpers/appTypes'
import { selectCatImages } from 'cats/store/catsSelectors'
import { fetchCatImages, saveImageAsFavourite } from 'cats/store/catsThunks'
import { SortingOrder } from 'cats/helpers/catsTypes'
import { Box, Button, CardMedia, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const CatImages: FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const catImages = useSelector(selectCatImages)

    const [page, setPage] = useState(0)

    const loadMoreImages = () => {
        setPage(prevPage => prevPage + 1)
    }

    const handleSaveImageAsFavourite = (imageId: string) => {
        return () => {
            dispatch(saveImageAsFavourite(imageId))
        }
    }

    useEffect(() => {
        dispatch(fetchCatImages({
            limit: 10,
            page,
            order: SortingOrder.Desc
        }))
    }, [dispatch, page])

    const navigate = useNavigate()
    const goToFavouritesPage = () => {
        navigate('favourites')
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
                Welcome to our cat lover hub!
            </Typography>
            <Button variant='contained' onClick={goToFavouritesPage}>
                Favorites
            </Button>
            {catImages.length > 0 && (
                <>
                    <Grid container spacing={3}>
                        {catImages.map(catImage => (
                            <Grid
                                item
                                xs={4}
                                key={catImage.id}
                            >
                                <Box sx={{ position: 'relative' }}>
                                    <CardMedia component='img' image={catImage.url} />
                                    <Button
                                        variant='contained'
                                        onClick={handleSaveImageAsFavourite(catImage.id)}
                                        sx={{
                                            position: 'absolute',
                                            top: '25px',
                                            right: '25px'
                                        }}
                                    >
                                        Save
                                    </Button>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                    <Button variant='contained' onClick={loadMoreImages}>
                        Load more
                    </Button>
                </>
            )}
        </Box>
    )
}

export default CatImages