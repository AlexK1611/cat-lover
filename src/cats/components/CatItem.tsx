import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'app/helpers/appTypes'
import { saveImageAsFavourite, removeImageFromFavourites } from 'cats/store/catsThunks'
import { Box, CardMedia, CircularProgress, IconButton } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import DeleteIcon from '@mui/icons-material/Delete'

interface CatItemProps {
    image: string,
    imageId: string | number,
    type: 'image' | 'favourite'
}

const CatItem: FC<CatItemProps> = ({ image, imageId, type }) => {
    const dispatch = useDispatch<AppDispatch>()

    const [loading, setLoading] = useState(false)

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
                    '1000%': { opacity: 1 }
                },
                animationDuration: '0.5s',
                animationName: 'fade-appearance'
            }}
        >
            <CardMedia
                component='img'
                image={image}
                sx={{
                    border: '10px solid #FF90B2',
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
                        backgroundColor: '#FF90B2',
                        '&:hover': {
                            backgroundColor: '#FFAAC4'
                        }
                    }}
                >
                    {loading ? (
                        <CircularProgress size={25} sx={{ color: '#FFFFFF' }} />
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
                        backgroundColor: '#FF90B2',
                        '&:hover': {
                            backgroundColor: '#FFAAC4'
                        }
                    }}
                >
                    {loading ? (
                        <CircularProgress size={25} sx={{ color: '#FFFFFF' }} />
                    ) : (
                        <DeleteIcon />
                    )}
                </IconButton>
            )}
        </Box>
    )
}

export default CatItem