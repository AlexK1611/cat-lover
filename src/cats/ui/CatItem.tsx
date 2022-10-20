import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'app/helpers/appTypes'
import {
    saveImageAsFavourite,
    removeImageFromFavourites
} from 'favourites/store/favouritesThunks'
import { Box, CardMedia, CircularProgress, IconButton } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import DeleteIcon from '@mui/icons-material/Delete'
import { appTheme } from 'app/components/App'

interface CatItemProps {
    image: string,
    imageId: string | number,
    type: 'image' | 'favourite'
}

const CatItem: FC<CatItemProps> = ({ image, imageId, type }) => {
    const dispatch = useDispatch<AppDispatch>()

    const [loading, setLoading] = useState<boolean>(false)

    const handleSaveImageAsFavourite = () => {
        setLoading(true)
        dispatch(saveImageAsFavourite(imageId as string)).finally(() => {
            setLoading(false)
        })
    }

    const handleRemoveImageFromFavourites = () => {
        setLoading(true)
        dispatch(removeImageFromFavourites(imageId as number)).finally(() => {
            setLoading(false)
        })
    }

    return (
        <Box
            sx={{
                position: 'relative',
                '@keyframes fade-appearance': {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 }
                },
                animationDuration: '0.5s',
                animationName: 'fade-appearance'
            }}
        >
            <CardMedia
                component='img'
                loading='lazy'
                image={image}
                sx={{
                    border: `10px solid ${appTheme.palette.primary.main}`,
                    borderRadius: '25px'
                }}
            />
            {type === 'image' && (
                <IconButton
                    onClick={handleSaveImageAsFavourite}
                    sx={{
                        position: 'absolute',
                        top: '25px',
                        right: '25px',
                        width: '50px',
                        height: '50px',
                        backgroundColor: appTheme.palette.primary.main
                    }}
                >
                    {loading ? (
                        <CircularProgress size={25} color='info' />
                    ) : (
                        <StarIcon />
                    )}
                </IconButton>
            )}
            {type === 'favourite' && (
                <IconButton
                    onClick={handleRemoveImageFromFavourites}
                    sx={{
                        position: 'absolute',
                        top: '25px',
                        right: '25px',
                        width: '50px',
                        height: '50px',
                        backgroundColor: appTheme.palette.primary.main
                    }}
                >
                    {loading ? (
                        <CircularProgress size={25} color='info' />
                    ) : (
                        <DeleteIcon />
                    )}
                </IconButton>
            )}
        </Box>
    )
}

export default CatItem