import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import StarRating from 'cats/components/StarRating'
import { appTheme } from 'app/components/App'

interface CatBreedProps {
    name: string,
    description: string,
    adaptability: number,
    affectionLevel: number,
    childFriendly: number,
    dogFriendly: number
    energyLevel: number,
    grooming: number,
    healthIssues: number,
    intelligence: number,
    sheddingLevel: number,
    socialNeeds: number,
    strangerFriendly: number,
    vocalisation: number
}

const CatBreed: FC<CatBreedProps> = ({
    name,
    description,
    adaptability,
    affectionLevel,
    childFriendly,
    dogFriendly,
    energyLevel,
    grooming,
    healthIssues,
    intelligence,
    sheddingLevel,
    socialNeeds,
    strangerFriendly,
    vocalisation
}) => {
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
            {name && (
                <Typography color='info' variant='h2'>
                    {name}
                </Typography>
            )}
            {description && <Typography>{description}</Typography>}
            {adaptability && (
                <Stack spacing={1} direction='row'>
                    <Typography variant='subtitle1'>
                        Adaptability:
                    </Typography>
                    <StarRating rating={adaptability} />
                </Stack>
            )}
            {affectionLevel && (
                <Stack spacing={1} direction='row'>
                    <Typography variant='subtitle1'>
                        Affection Level:
                    </Typography>
                    <StarRating rating={affectionLevel} />
                </Stack>
            )}
            {childFriendly && (
                <Stack spacing={1} direction='row'>
                    <Typography variant='subtitle1'>
                        Child Friendly:
                    </Typography>
                    <StarRating rating={childFriendly} />
                </Stack>
            )}
            {dogFriendly && (
                <Stack spacing={1} direction='row'>
                    <Typography variant='subtitle1'>
                        Dog Friendly:
                    </Typography>
                    <StarRating rating={dogFriendly} />
                </Stack>
            )}
            {energyLevel && (
                <Stack spacing={1} direction='row'>
                    <Typography variant='subtitle1'>
                        Energy Level:
                    </Typography>
                    <StarRating rating={energyLevel} />
                </Stack>
            )}
            {grooming && (
                <Stack spacing={1} direction='row'>
                    <Typography variant='subtitle1'>
                        Grooming:
                    </Typography>
                    <StarRating rating={grooming} />
                </Stack>
            )}
            {healthIssues && (
                <Stack spacing={1} direction='row'>
                    <Typography variant='subtitle1'>
                        Health Issues:
                    </Typography>
                    <StarRating rating={healthIssues} />
                </Stack>
            )}
            {intelligence && (
                <Stack spacing={1} direction='row'>
                    <Typography variant='subtitle1'>
                        Intelligence:
                    </Typography>
                    <StarRating rating={intelligence} />
                </Stack>
            )}
            {sheddingLevel && (
                <Stack spacing={1} direction='row'>
                    <Typography variant='subtitle1'>
                        Shedding Level:
                    </Typography>
                    <StarRating rating={sheddingLevel} />
                </Stack>
            )}
            {socialNeeds && (
                <Stack spacing={1} direction='row'>
                    <Typography variant='subtitle1'>
                        Social Needs:
                    </Typography>
                    <StarRating rating={socialNeeds} />
                </Stack>
            )}
            {strangerFriendly && (
                <Stack spacing={1} direction='row'>
                    <Typography variant='subtitle1'>
                        Stranger Friendly:
                    </Typography>
                    <StarRating rating={strangerFriendly} />
                </Stack>
            )}
            {vocalisation && (
                <Stack spacing={1} direction='row'>
                    <Typography variant='subtitle1'>
                        Vocalisation:
                    </Typography>
                    <StarRating rating={vocalisation} />
                </Stack>
            )}
        </Box>
    )
}

export default CatBreed