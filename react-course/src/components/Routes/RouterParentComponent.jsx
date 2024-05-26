import React from 'react'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'
import DynamicalRoute from './DynamicalRoute'
import {BrowserRouter, Route, Routes, Link, Switch} from 'react-router-dom'

const RouterParentComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={Component1}></Route>
                <Route path='/component-2' Component={Component2}></Route>
                <Route path='/component-3' Component={Component3}></Route>
                <Route path='/users/:id' element={<DynamicalRoute/>}>
                    
                </Route>
            </Routes>
            <Link to="/">Back</Link><br/>
            <Link to="/component-2">Go to Component 2</Link><br/>
            <Link to="/component-3">Go to Component 3</Link><br/>
        </BrowserRouter>
    )
}

export default RouterParentComponent