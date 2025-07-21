import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './Application.js';
import HomeView from './views/home/view.js';
import E404View from './views/notFound/view';
import PrivacyView from './views/privacy/view.js';
import CookiesView from './views/cookies/view.js';
import TosView from './views/tos/view.js';

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route exact path='/' element={<HomeView />} />
          <Route exact path='/privacy' element={<PrivacyView />} />
          <Route exact path='/tos' element={<TosView />} />
          <Route exact path='/cookies' element={<CookiesView />} />
          <Route path='*' status="404" element={<E404View />} />
        </Routes>
      </AppProvider> 
   </Router>
  );
}

export default App;
