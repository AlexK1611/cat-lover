import ReactDOM from 'react-dom/client'
import App from 'app/components/App'
import { store } from 'app/store/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)