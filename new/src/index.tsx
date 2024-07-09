import "./styles/reset.css";
import "./styles/styles.css";

import ReactDOM from 'react-dom/client'
import Main from './Main.tsx';
import Header from './Header.tsx';

const root = ReactDOM.createRoot(document.getElementById('app')!);
root.render(
    <>
        <Header />
        <Main />
    </>
);
