import { FC, useState, useEffect, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'app/helpers/appTypes'
import { selectFavouriteCount, selectFavourites } from 'cats/store/catsSelectors'
import { removeImageFromFavourites, fetchFavourites } from 'cats/store/catsThunks'
import { Box, Button, CardMedia, CircularProgress, Grid, Pagination, Typography } from '@mui/material'
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
            {loading ? (
                <CircularProgress size={100} />
            ) : (
                <>
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
                    <Pagination
                        count={Math.ceil(favouriteCount / 10)}
                        page={page}
                        onChange={handlePagination}
                    />
                </>
            )}
        </Box>
    )
}

export default Favourites