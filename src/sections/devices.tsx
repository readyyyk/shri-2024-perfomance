import { type FC, useCallback, useEffect, useRef, useState } from 'react';
import { TABS, TABS_KEYS } from '../data.ts';
import Event from '../Event.jsx';
import DevicesTabSelect from './devices.tab-select.tsx';

const Devices: FC = () => {
    const [activeTab, setActiveTab] = useState<string>(new URLSearchParams(location.search).get('tab') ?? 'all');

    const ref = useRef<HTMLDivElement>(null);
    const [hasRightScroll, setHasRightScroll] = useState(false);

    useEffect(() => {
        const sumWidth = ref.current?.querySelector('div[aria-hidden="false"] ul')?.scrollWidth ?? -1;

        const newHasRightScroll = sumWidth > (ref.current?.offsetWidth ?? Infinity);
        if (newHasRightScroll !== hasRightScroll) {
            setHasRightScroll(newHasRightScroll);
        }
    }, [activeTab, hasRightScroll]);

    const onArrowCLick = useCallback(() => {
        const scroller = ref.current?.querySelector('.section__panel:not(.section__panel_hidden)');
        if (!scroller) {
            return;
        }
        scroller.scrollTo({
            left: scroller.scrollLeft + 400,
            behavior: 'smooth'
        });
    }, []);

    return (<section className="section main__devices">
        <DevicesTabSelect activeTab={activeTab} setActiveTab={setActiveTab}/>

        <div className="section__panel-wrapper" ref={ref}>
            {TABS_KEYS.map(key =>
                <div
                    key={key}
                    role="tabpanel"
                    className={'section__panel' + (key === activeTab ? '' : ' section__panel_hidden')}
                    aria-hidden={key === activeTab ? 'false' : 'true'}
                    id={`panel_${key}`}
                    aria-labelledby={`tab_${key}`}
                >
                    <ul className="section__panel-list">
                        {TABS[key].items.map((item, index) =>
                            <Event
                                key={index}
                                {...item}
                            />
                        )}
                    </ul>
                </div>
            )}
            {hasRightScroll &&
                <div className="section__arrow" onClick={onArrowCLick}></div>
            }
        </div>
    </section>);
};

export default Devices;
