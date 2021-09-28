import React from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.scss';

function App() {

    return (
        <main className="app">
            <Navbar title="Github Finder"/>
            <div className="container">
                <Users/>
            </div>
        </main>
    );
}

export default App;
