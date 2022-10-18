import { Box, Stack } from '@mui/material'
import { FC } from 'react'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'

interface StarRatingProps {
    rating: number
}

const StarRating: FC<StarRatingProps> = ({ rating }) => {
    const indexes = [0, 1, 2, 3, 4]
    return (
        <Stack spacing={1} direction='row'>
            {indexes.map(item => (
                <Box>
                    {item < rating ? <StarIcon /> : < StarBorderIcon />}
                </Box>
            ))}
        </Stack>
    )
}

export default StarRating