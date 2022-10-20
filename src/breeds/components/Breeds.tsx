import { FC, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'app/helpers/appTypes'
import {
    selectBreedsLoading,
    selectCatBreeds,
    selectSelectedBreed
} from 'breeds/store/breedsSelectors'
import { fetchBreeds, fetchSelectedBreed } from 'breeds/store/breetsThunks'
import {
    Box,
    CircularProgress,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Typography
} from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'
import BreedItem from 'breeds/ui/BreedItem'
import MainPageButton from 'cats/ui/MainPageButton'
import { appTheme } from 'app/components/App'

const Breeds: FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const breeds = useSelector(selectCatBreeds)
    const breedsLoading = useSelector(selectBreedsLoading)
    const selectedBreed = useSelector(selectSelectedBreed)

    const [breed, setBreed] = useState<string>(
        selectedBreed?.id ? selectedBreed.id : ''
    )
    const handleSelectBreed = (event: SelectChangeEvent) => {
        setBreed(event.target.value)
    }

    useEffect(() => {
        dispatch(fetchBreeds())
    }, [dispatch])

    useEffect(() => {
        if (breed) {
            dispatch(fetchSelectedBreed(breed))
        }
    }, [dispatch, breed])

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
            <Typography color='primary' variant='h1'>
                There are so many wonderful breeds!
            </Typography>
            {breedsLoading ? (
                <CircularProgress size={100} color='primary' />
            ) : (
                <>
                    {breeds.length > 0 && (
                        <FormControl
                            sx={{
                                width: '300px',
                                backgroundColor: appTheme.palette.primary.main,
                                boxShadow: `0px 0px 10px 10px ${appTheme.palette.primary.main}`
                            }}>
                            <InputLabel>Breed</InputLabel>
                            <Select value={breed} label="Breed" onChange={handleSelectBreed}>
                                {breeds.map(catBreed => (
                                    <MenuItem key={catBreed.id} value={catBreed.id}>
                                        {catBreed.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                    {selectedBreed && (
                        <BreedItem breed={selectedBreed} />
                    )}
                </>
            )}
        </Box>
    )
}

export default Breeds