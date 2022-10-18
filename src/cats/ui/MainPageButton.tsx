import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from 'app/helpers/appTypes'
import { IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { appTheme } from 'app/components/App'

const MainPageButton: FC = () => {
    const navigate = useNavigate()
    const goToHomePage = () => {
        navigate(AppRoutes.Main)
    }
    return (
        <IconButton
            onClick={goToHomePage}
            sx={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '40px',
                height: '40px',
                backgroundColor: appTheme.palette.primary.main
            }}
        >
            <ArrowBackIcon />
        </IconButton>
    )
}

export default MainPageButton