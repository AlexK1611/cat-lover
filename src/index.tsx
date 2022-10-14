import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from 'app/components/App'
import { store } from 'app/store/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)