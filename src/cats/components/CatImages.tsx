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
            <Typography
                color='#FF90B2'
                sx={{
                    fontSize: '75px',
                    fontWeight: 'bold',
                    textShadow: '0 0 25px #FF90B2'
                }}
            >
                Welcome to our cat lover hub!
            </Typography>
            <Button
                variant='contained'
                onClick={goToFavouritesPage}
                sx={{
                    backgroundColor: '#FF90B2',
                    color: '#FFFFFF',
                    fontSize: '15px',
                    fontWeight: 'bold',
                    padding: '10px 20px',
                    '&:hover': {
                        backgroundColor: '#FFAAC4'
                    }
                }}
            >
                Favourites
            </Button>
            {loading ? (
                <CircularProgress size={100} sx={{ color: '#FF90B2' }} />
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

export default CatImages