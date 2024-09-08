// src/App.tsx
import React from 'react';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './pages/login';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Landpage from './pages/landpage';
import ListKandidatMPK from './pages/listKandidatMPK';
import ListKandidatOsis from './pages/listKandidatOsis';
import MainPageLayout from './pages/mainpagelayout';
import Information from './pages/information';

const App: React.FC = () => {
  const query = new QueryClient()
  return (
    <QueryClientProvider client={query}>
      <Router>
        <Routes>
          <Route path="/" Component={Login} />
          <Route element={<MainPageLayout />}>
            <Route path="/landpage" element={<Landpage />} />
            <Route path="/" element={<Landpage />} />
            <Route path="/listkandidat/MPK" Component={ListKandidatMPK} />
            <Route path="/listkandidat/OSIS" Component={ListKandidatOsis} />
          </Route>
          
            <Route path="/information" Component={Information} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};


export default App;
