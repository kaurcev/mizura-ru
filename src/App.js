import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './Application.js';
import HomeView from './views/home/view.js';
import E404View from './views/notFound/view';

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route exact path='/' element={<HomeView />} />
          <Route path='*' status="404" element={<E404View />} />
        </Routes>
      </AppProvider> 
   </Router>
  );
}

export default App;
