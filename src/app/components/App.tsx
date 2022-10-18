import { FC } from 'react'
import { Box, CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Navigate, Route, Routes } from 'react-router-dom'
import CatImages from 'cats/components/CatImages'
import Favourites from 'cats/components/Favourites'
import AppBackground from 'assets/images/app-background.jpg'

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
})

const App: FC = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box
                sx={{
                    height: '100vh',
                    overflowX: 'hidden',
                    overflowY: 'auto',
                    padding: '50px',
                    background: `url(${AppBackground}) repeat`,
                    backgroundSize: 'contain'
                }}
            >
                <Routes>
                    <Route path='/' element={<CatImages />} />
                    <Route path='/favourites' element={<Favourites />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </Box>
        </ThemeProvider>
    )
}

export default App