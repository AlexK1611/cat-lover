import { FC } from 'react'
import { Box, CssBaseline } from '@mui/material'
import { Navigate, Route, Routes } from 'react-router-dom'
import CatImages from 'cats/components/CatImages'
import Favourites from 'cats/components/Favourites'

const App: FC = () => {
    return (
        <>
            <CssBaseline />
            <Box
                sx={{
                    height: '100vh',
                    overflowX: 'hidden',
                    overflowY: 'auto',
                    padding: '50px'
                }}
            >
                <Routes>
                    <Route path='/' element={<CatImages />} />
                    <Route path='/favourites' element={<Favourites />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </Box>
        </>
    )
}

export default App