import { FC, useState, useEffect, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppDispatch } from 'app/helpers/appTypes'
import { selectCatImageCount, selectCatImages } from 'cats/store/catsSelectors'
import { fetchCatImages, saveImageAsFavourite } from 'cats/store/catsThunks'
import { SortingOrder } from 'cats/helpers/catsTypes'
import {
    Box,
    Button,
    CardMedia,
    CircularProgress,
    Grid,
    Pagination,
    Typography
} from '@mui/material'

const CatImages: FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const catImages = useSelector(selectCatImages)
    const catImageCount = useSelector(selectCatImageCount)

    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const handlePagination = (event: ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }

    const handleSaveImageAsFavourite = (imageId: string) => {
        return () => {
            dispatch(saveImageAsFavourite(imageId))
        }
    }

    useEffect(() => {
        setLoading(true)
        dispatch(fetchCatImages({
            limit: 10,
            page,
            order: SortingOrder.Desc
        })).finally(() => {
            setLoading(false)
        })
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
            {loading ? (
                <CircularProgress size={100} />
            ) : (
                <>
                    {catImages.length > 0 && (
                        <Grid container spacing={3}>
                            {catImages.map(catImage => (
                                <Grid item xs={4} key={catImage.id}>
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
                    )}
                    <Pagination
                        count={Math.ceil(catImageCount / 10)}
                        page={page}
                        onChange={handlePagination}
                    />
                </>
            )}
        </Box>
    )
}

export default CatImages