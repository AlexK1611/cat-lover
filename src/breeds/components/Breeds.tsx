import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'app/helpers/appTypes'
import {
    selectBreedId,
    selectBreedsLoading,
    selectCatBreeds,
    selectSelectedBreed
} from 'breeds/store/breedsSelectors'
import { fetchBreeds, fetchSelectedBreed } from 'breeds/store/breedsThunks'
import { setBreedId } from 'breeds/store/breedsSlice'
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
import MainPageButton from 'app/ui/MainPageButton'
import { appTheme } from 'app/components/App'

const Breeds: FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const breeds = useSelector(selectCatBreeds)
    const breedsLoading = useSelector(selectBreedsLoading)
    const selectedBreed = useSelector(selectSelectedBreed)
    const breedId = useSelector(selectBreedId)

    const handleSelectBreed = (event: SelectChangeEvent) => {
        dispatch(setBreedId(event.target.value))
    }

    useEffect(() => {
        dispatch(fetchBreeds())
    }, [dispatch])

    useEffect(() => {
        if (breedId) {
            dispatch(fetchSelectedBreed(breedId))
        }
    }, [dispatch, breedId])

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
                            <Select value={breedId} label="Breed" onChange={handleSelectBreed}>
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