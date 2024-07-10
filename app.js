// =========HEADER=========
const headerMenu = document.querySelector('.header__menu');
const headerMenuText = document.querySelector(".header__menu-text.a11y-hidden");
const headerLinks = document.querySelector('.header__links');

const injectHeader = () => {
    let open = null;
    headerMenu.onclick = () => {
        open = !open;
        headerMenu.setAttribute("aria-expanded", (!!open).toString());
        headerMenuText.textContent = open ? 'Закрыть меню' : 'Открыть меню';
        const listClass = open === null ? '' : (open ? 'header__links_opened' : 'header__links-toggled');
        headerLinks.className = "header__links "+listClass;
    }
}


// =========TABS=========
/** @typedef {Object} Props
 * @property {(size: { width: number, height: number }) => void | undefined} onSize
 * @property {boolean | undefined} slim
 * @property {string} icon
 * @property {string} iconLabel
 * @property {string} title
 * @property {string | undefined} subtitle
 */

/** @param {Props} props */
const Event = (props) => {
    return `<li class="event ${props.slim ? 'event_slim' : ''}">
        <button class="event__button">
            <span class="event__icon event__icon_${props.icon}" role="img" aria-label="${props.iconLabel}"></span>
            <h4 class="event__title">${props.title}</h4>
            ${props.subtitle 
                ? `<span class="event__subtitle">${props.subtitle}</span>`
                : ''}
        </button>
    </li>`;
}

/** @param {string} activeTab */
const devicesList = (activeTab) => {
    const activeEvents = TABS[activeTab].items;
    const activeEventsString = activeEvents.map((item, index) => Event(item));

    const list = document.createElement('ul');
    list.className = 'section__panel-list';
    list.innerHTML = activeEventsString.join('');

    return list;
}




const DEVICE_LIST_ROOT = document.querySelector(".section__panel-wrapper");

const injectDeviceList = () => {
    let activeTab = new URLSearchParams(location.search).get('tab') ?? 'all';
    let hasRightScroll = false;
    let arrow = null;
    let panel = DEVICE_LIST_ROOT.querySelector('.section__panel-list');

    const onArrowCLick = () => {
        const scroller = DEVICE_LIST_ROOT.querySelector('.section__panel:not(.section__panel_hidden)');
        if (!scroller) { return; }
        scroller.scrollTo({
            left: scroller.scrollLeft + 400,
            behavior: 'smooth'
        });
    };

    const handleTab = (newTab) => {
        activeTab = newTab;
        const newPanel = devicesList(newTab);
        panel.replaceWith(newPanel);
        panel = newPanel;

        const sumWidth = DEVICE_LIST_ROOT.querySelector('ul')?.scrollWidth ?? -1;
        hasRightScroll = sumWidth > (DEVICE_LIST_ROOT.clientWidth ?? Infinity);

        if (hasRightScroll) {
            const newArrow = document.createElement('div');
            newArrow.onclick = onArrowCLick;
            newArrow.className = 'section__arrow';
            if (!arrow) {
                DEVICE_LIST_ROOT.appendChild(newArrow);
            } else {
                arrow.replaceWith(newArrow);
            }
            arrow = newArrow;
        } else if (arrow !== null) {
            DEVICE_LIST_ROOT.removeChild(arrow);
            arrow = null;
        }
    }



    const tabSelect = document.querySelector(".section__select");
    tabSelect.onchange = (e) => {
        const newTab = e.target.value;
        handleTab(newTab);
    }

    const tabListSelect = document.querySelector(".section__tabs");
    for(const li of tabListSelect.children) {
        li.onclick = (e) => {
            const newTab = li.dataset.tab;

            for (const inactive of tabListSelect.children) {
                inactive.setAttribute("aria-selected", String(inactive.dataset.tab === newTab));
                inactive.setAttribute("tabindex", inactive.dataset.tab === newTab ? "0" : undefined);
                inactive.classList.remove("section__tab_active");
            }
            li.classList.add("section__tab_active");

            handleTab(newTab);
        }
    }


    handleTab(activeTab);
}

injectDeviceList();
injectHeader();
