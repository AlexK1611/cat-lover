import { FC, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'app/helpers/appTypes'
import { selectBreeds, selectSelectedBreed } from 'cats/store/catsSelectors'
import { fetchBreeds, fetchSelectedBreed } from 'cats/store/catsThunks'
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
import BreedItem from 'cats/ui/BreedItem'
import MainPageButton from 'cats/ui/MainPageButton'
import { appTheme } from 'app/components/App'

const Breeds: FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const breeds = useSelector(selectBreeds)
    const selectedBreed = useSelector(selectSelectedBreed)

    const [breed, setBreed] = useState<string>(
        selectedBreed?.id ? selectedBreed.id : ''
    )
    const handleSelectBreed = (event: SelectChangeEvent) => {
        setBreed(event.target.value)
    }

    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true)
        dispatch(fetchBreeds()).finally(() => {
            setLoading(false)
        })
    }, [dispatch])

    useEffect(() => {
        if (breed) {
            setLoading(true)
            dispatch(fetchSelectedBreed(breed)).finally(() => {
                setLoading(false)
            })
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
            {loading ? (
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