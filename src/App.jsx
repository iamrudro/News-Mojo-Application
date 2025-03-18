import React from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Route, Routes } from 'react-router';

const App = () => {
  const pageSize = 15;
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path='/' element={<News key="general" pageSize={pageSize} country="us" category="general" />}></Route>
        <Route exact path='/general' element={<News key="general" pageSize={pageSize} country="us" category="general" />}></Route>
        <Route exact path='/entertainment' element={<News key="entertainment" pageSize={pageSize} country="us" category="entertainment" />}></Route>
        <Route exact path='/business' element={<News key="business" pageSize={pageSize} country="us" category="business" />}></Route>
        <Route exact path='/health' element={<News key="health" pageSize={pageSize} country="us" category="health" />}></Route>
        <Route exact path='/science' element={<News key="science" pageSize={pageSize} country="us" category="science" />}></Route>
        <Route exact path='/sports' element={<News key="sports" pageSize={pageSize} country="us" category="sports" />}></Route>
        <Route exact path='/technology' element={<News key="technology" pageSize={pageSize} country="us" category="technology" />}></Route>
      </Routes>

      {/* Refer News API Documentation for all infos */}
    </>
  )
}

export default App;