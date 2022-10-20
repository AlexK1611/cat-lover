import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import StarRating from 'breeds/ui/StarRating'
import { appTheme } from 'app/components/App'
import { CatBreed } from 'breeds/helpers/breedsTypes'

interface BreedItemProps {
    breed: Pick<CatBreed,
        'name' |
        'description' |
        'adaptability' |
        'affection_level' |
        'child_friendly' |
        'dog_friendly' |
        'energy_level' |
        'grooming' |
        'health_issues' |
        'intelligence' |
        'shedding_level' |
        'social_needs' |
        'stranger_friendly' |
        'vocalisation'
    >
}

const BreedItem: FC<BreedItemProps> = ({ breed }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                textAlign: 'center',
                backgroundColor: appTheme.palette.primary.main,
                boxShadow: `0px 0px 10px 10px ${appTheme.palette.primary.main}`,
                padding: '25px',
                borderRadius: '25px',
                maxWidth: '50%'
            }}
        >
            <Typography color='info' variant='h2'>{breed.name}</Typography>
            <Typography>{breed.description}</Typography>
            <Stack spacing={1} direction='row'>
                <Typography variant='subtitle1'>Adaptability:</Typography>
                <StarRating rating={breed.adaptability} />
            </Stack>
            <Stack spacing={1} direction='row'>
                <Typography variant='subtitle1'>Affection Level:</Typography>
                <StarRating rating={breed.affection_level} />
            </Stack>
            <Stack spacing={1} direction='row'>
                <Typography variant='subtitle1'>Child Friendly:</Typography>
                <StarRating rating={breed.child_friendly} />
            </Stack>
            <Stack spacing={1} direction='row'>
                <Typography variant='subtitle1'>Dog Friendly:</Typography>
                <StarRating rating={breed.dog_friendly} />
            </Stack>
            <Stack spacing={1} direction='row'>
                <Typography variant='subtitle1'>Energy Level:</Typography>
                <StarRating rating={breed.energy_level} />
            </Stack>
            <Stack spacing={1} direction='row'>
                <Typography variant='subtitle1'>Grooming:</Typography>
                <StarRating rating={breed.grooming} />
            </Stack>
            <Stack spacing={1} direction='row'>
                <Typography variant='subtitle1'>Health Issues:</Typography>
                <StarRating rating={breed.health_issues} />
            </Stack>
            <Stack spacing={1} direction='row'>
                <Typography variant='subtitle1'>Intelligence:</Typography>
                <StarRating rating={breed.intelligence} />
            </Stack>
            <Stack spacing={1} direction='row'>
                <Typography variant='subtitle1'>Shedding Level:</Typography>
                <StarRating rating={breed.shedding_level} />
            </Stack>
            <Stack spacing={1} direction='row'>
                <Typography variant='subtitle1'>Social Needs:</Typography>
                <StarRating rating={breed.social_needs} />
            </Stack>
            <Stack spacing={1} direction='row'>
                <Typography variant='subtitle1'>Stranger Friendly:</Typography>
                <StarRating rating={breed.stranger_friendly} />
            </Stack>
            <Stack spacing={1} direction='row'>
                <Typography variant='subtitle1'>Vocalisation:</Typography>
                <StarRating rating={breed.vocalisation} />
            </Stack>
        </Box>
    )
}

export default BreedItem