import { FC, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'app/helpers/appTypes'
import { selectCatImages } from 'cats/store/catsSelectors'
import { fetchCatImages } from 'cats/store/catsThunks'
import { SortingOrder } from 'cats/helpers/catsTypes'
import { Box, Button, CardMedia, CircularProgress, Grid, Typography } from '@mui/material'

const CatImages: FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const catImages = useSelector(selectCatImages)

    const [page, setPage] = useState(0)

    const loadMoreImages = () => {
        setPage(prevPage => prevPage + 1)
    }

    useEffect(() => {
        dispatch(fetchCatImages({
            limit: 10,
            page,
            order: SortingOrder.Desc
        }))
    }, [dispatch, page])

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
            {catImages.length > 0 && (
                <>
                    <Grid container spacing={3}>
                        {catImages.map(catImage => (
                            <Grid
                                item
                                xs={4}
                                key={catImage.id}
                            >
                                <CardMedia component='img' image={catImage.url} />
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