import { FC, useState, useEffect, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'app/helpers/appTypes'
import { selectFavouriteCount, selectFavourites } from 'cats/store/catsSelectors'
import { removeImageFromFavourites, fetchFavourites } from 'cats/store/catsThunks'
import { Box, Button, CardMedia, CircularProgress, Grid, IconButton, Pagination, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'

const Favourites: FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const favourites = useSelector(selectFavourites)
    const favouriteCount = useSelector(selectFavouriteCount)

    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const handlePagination = (event: ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }

    const handleRemoveImageFromFavourites = (imageId: number) => {
        return () => {
            dispatch(removeImageFromFavourites(imageId))
        }
    }

    useEffect(() => {
        setLoading(true)
        dispatch(fetchFavourites({
            limit: 10,
            page
        })).finally(() => {
            setLoading(false)
        })
    }, [dispatch, page])

    const navigate = useNavigate()
    const goToHomePage = () => {
        navigate('/')
    }

    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '50px'
            }}
        >
            <IconButton
                onClick={goToHomePage}
                sx={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#FF90B2',
                    '&:hover': {
                        backgroundColor: '#FFAAC4'
                    }
                }}
            >
                <ArrowBackIcon />
            </IconButton>
            <Typography
                color='#FF90B2'
                sx={{
                    fontSize: '75px',
                    fontWeight: 'bold',
                    textShadow: '0 0 25px #FF90B2'
                }}
            >
                You have such lovely favourites!
            </Typography>
            {loading ? (
                <CircularProgress size={100} sx={{ color: '#FF90B2' }} />
            ) : (
                <>
                    {favourites.length > 0 && (
                        <Grid container spacing={3}>
                            {favourites.map(favourite => (
                                <Grid item xs={4} key={favourite.id}>
                                    <Box sx={{ position: 'relative' }}>
                                        <CardMedia
                                            component='img'
                                            image={favourite.image.url}
                                            sx={{ border: '10px solid #FF90B2', borderRadius: '25px' }}
                                        />
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
                    <Pagination
                        count={Math.ceil(favouriteCount / 10)}
                        page={page}
                        onChange={handlePagination}
                        sx={{
                            backgroundColor: '#FF90B2',
                            boxShadow: '0px 0px 10px 10px #FF90B2',
                            borderRadius: '25px'
                        }}
                    />
                </>
            )}
        </Box>
    )
}

export default Favourites