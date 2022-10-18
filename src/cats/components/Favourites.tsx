import { FC, useState, useEffect, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'app/helpers/appTypes'
import { selectFavouriteCount, selectFavourites } from 'cats/store/catsSelectors'
import { fetchFavourites } from 'cats/store/catsThunks'
import {
    Box,
    CircularProgress,
    Grid,
    Pagination,
    Typography
} from '@mui/material'
import CatItem from 'cats/ui/CatItem'
import MainPageButton from 'cats/ui/MainPageButton'
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
            <MainPageButton />
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