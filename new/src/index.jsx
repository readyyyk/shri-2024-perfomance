import "./styles/reset.css";
import "./styles/styles.css";

import ReactDOM from 'react-dom/client'
import Main from './Main.jsx';
import Header from './Header.jsx';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <>
        <Header />
        <Main />
    </>
);
