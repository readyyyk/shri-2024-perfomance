'use client';

import { useCallback, useState, memo } from 'react';


const List = memo(() => <>
    <li className="header__item">
        <a className="header__link header__link_current" href="/" aria-current="page">Сводка</a>
    </li>
    <li className="header__item">
        <a className="header__link" href="/devices">Устройства</a>
    </li>
    <li className="header__item">
        <a className="header__link" href="/scripts">Сценарии</a>
    </li>
</>);

function Header() {
    // prevent flickering on first render
    const [open, setOpen] = useState<null | boolean>(null);

    const onClick = useCallback(() => {
        setOpen(a => !a);
    }, []);

    const listClass = open === null ? '' : (open ? ' header__links_opened' : ' header__links-toggled');

    return <header className="header">
        <a href="/" className="header__logo" aria-label="Яндекс.Дом"></a>
        <button className="header__menu" aria-expanded={open ? 'true' : 'false'} onClick={onClick}>
            <span className="header__menu-text a11y-hidden">
                {open ? 'Закрыть меню' : 'Открыть меню'}
            </span>
        </button>
        <ul className={'header__links' + listClass}>
            <List />
        </ul>
    </header>;
}

export default Header;
