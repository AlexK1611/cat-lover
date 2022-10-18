import { FC } from 'react'
import { Box, CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Navigate, Route, Routes } from 'react-router-dom'
import CatImages from 'cats/components/CatImages'
import Breeds from 'cats/components/Breeds'
import Favourites from 'cats/components/Favourites'
import AppBackground from 'assets/images/app-background.jpg'

export const appTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#FF90B2' },
        info: { main: '#FFFFFF' }
    },
    typography: {
        h1: {
            fontSize: '70px',
            fontWeight: 'bold'
        },
        h2: {
            fontSize: '35px',
            fontWeight: 'bold'
        },
        subtitle1: {
            fontSize: '15px',
            fontWeight: 'bold'
        }
    }
})

const App: FC = () => {
    return (
        <ThemeProvider theme={appTheme}>
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
                    <Route path='/breeds' element={<Breeds />} />
                    <Route path='/favourites' element={<Favourites />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </Box>
        </ThemeProvider>
    )
}

export default App