import { FC, useState, useEffect, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppDispatch } from 'app/helpers/appTypes'
import { selectCatImageCount, selectCatImages } from 'cats/store/catsSelectors'
import { fetchCatImages } from 'cats/store/catsThunks'
import { SortingOrder } from 'cats/helpers/catsTypes'
import {
    Box,
    Button,
    CircularProgress,
    Grid,
    Pagination,
    Typography
} from '@mui/material'
import CatItem from 'cats/components/CatItem'
import { appTheme } from 'app/components/App'

const CatImages: FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const catImages = useSelector(selectCatImages)
    const catImageCount = useSelector(selectCatImageCount)

    const [page, setPage] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(false)

    const handlePagination = (event: ChangeEvent<unknown>, value: number) => {
        setPage(value)
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
    const goToBreedsPage = () => {
        navigate('breeds')
    }
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
            <Typography variant='h1' color='primary'>
                Welcome to our cat lover hub!
            </Typography>
            <Box sx={{ display: 'flex', gap: '10px' }}>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={goToBreedsPage}
                    sx={{ flex: 1, color: appTheme.palette.info.main }}
                >
                    Breeds
                </Button>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={goToFavouritesPage}
                    sx={{ flex: 1, color: appTheme.palette.info.main }}
                >
                    Favourites
                </Button>
            </Box>

            {loading ? (
                <CircularProgress size={100} color='primary' />
            ) : (
                <>
                    {catImages.length > 0 && (
                        <Grid container spacing={3}>
                            {catImages.map(catImage => (
                                <Grid item xs={4} key={catImage.id}>
                                    <CatItem
                                        image={catImage.url}
                                        imageId={catImage.id}
                                        type='image'
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    )}
                    <Pagination
                        count={Math.ceil(catImageCount / 10)}
                        page={page}
                        onChange={handlePagination}
                        sx={{
                            backgroundColor: appTheme.palette.primary.main,
                            borderRadius: '25px'
                        }}
                    />
                </>
            )}
        </Box>
    )
}

export default CatImages