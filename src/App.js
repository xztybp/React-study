import React from 'react';
import './App.css';
/* import Index from '../src/components/nested Router/index' */
/* import Index from '../src/components/router/index' */
/* import Index from '../src/components/redux/index' */
/* import Index from './components/heimabuy/index' */
import Index from './components/heima-buy-react-redux/index'
function App() {
    return (
        <div className="App">
            <Index />  {/* 声明式导航 */}
        </div>
    );
}

export default App;
