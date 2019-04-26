import React from 'react';

import nonScoped from './NonModule.scss'
import scoped from './Module.module.scss'

console.log(nonScoped);
// {}

console.log(scoped);
// {moduleStyle: "Module_moduleStyle__rQ__0"}

const App: React.FC = () => (
    <div>
        <div className="global-style">global (works)</div>
        <div className="global-from-module">global from module (works)</div>
        <div className={scoped.moduleStyle}>module (works)</div>
        <div className={nonScoped.localizedStyle}>localized (broken)</div>
    </div>
);

export default App;
