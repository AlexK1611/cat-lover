import { FC, useState, useEffect, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'app/helpers/appTypes'
import { selectFavouriteCount, selectFavourites } from 'cats/store/catsSelectors'
import { fetchFavourites } from 'cats/store/catsThunks'
import {
    Box,
    CircularProgress,
    Grid,
    IconButton,
    Pagination,
    Typography
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import CatItem from 'cats/components/CatItem'
import { appTheme } from 'app/components/App'

const Favourites: FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const favourites = useSelector(selectFavourites)
    const favouriteCount = useSelector(selectFavouriteCount)

    const [page, setPage] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(false)

    const handlePagination = (event: ChangeEvent<unknown>, value: number) => {
        setPage(value)
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
                    backgroundColor: appTheme.palette.primary.main,
                }}
            >
                <ArrowBackIcon />
            </IconButton>
            <Typography variant='h1' color='primary'>
                You have such lovely favourites!
            </Typography>
            {loading ? (
                <CircularProgress size={100} color='primary' />
            ) : (
                <>
                    {favourites.length > 0 && (
                        <Grid container spacing={3}>
                            {favourites.map(favourite => (
                                <Grid item xs={4} key={favourite.id}>
                                    <CatItem
                                        image={favourite.image.url}
                                        imageId={favourite.id}
                                        type='favourite'
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    )}
                    {favourites.length > 0 && (
                        <Pagination
                            count={Math.ceil(favouriteCount / 10)}
                            page={page}
                            onChange={handlePagination}
                            sx={{
                                backgroundColor: appTheme.palette.primary.main,
                                borderRadius: '25px'
                            }}
                        />
                    )}
                </>
            )}
        </Box>
    )
}

export default Favourites