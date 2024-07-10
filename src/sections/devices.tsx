import { type FC, useCallback, useEffect, useRef, useState } from 'react';
import { TabKey, TABS } from '../data.ts';
import Event from '../Event.jsx';
import DevicesTabSelect from './devices.tab-select.tsx';

const Devices: FC = () => {
    const [activeTab, setActiveTab] = useState<string>(new URLSearchParams(location.search).get('tab') ?? 'all');

    const ref = useRef<HTMLDivElement>(null);
    const [hasRightScroll, setHasRightScroll] = useState(false);
    const [scrolled, setScrolled] = useState(0);

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
        setScrolled(a => a+400);
    }, []);

    const toShowCnt = Math.ceil(((ref.current?.clientWidth ?? window.innerWidth) + scrolled) / 215) + 10;
    const activeEvents = TABS[activeTab as TabKey].items.slice(0, toShowCnt);

    return (<section className="section main__devices">
        <DevicesTabSelect activeTab={activeTab} setActiveTab={setActiveTab}/>

        <div className="section__panel-wrapper" ref={ref}>
            <div
                key={activeTab}
                role="tabpanel"
                className={'section__panel'}
                aria-hidden={activeTab === activeTab ? 'false' : 'true'}
                id={`panel_${activeTab}`}
                aria-labelledby={`tab_${activeTab}`}
            >
                <ul className="section__panel-list">
                    {activeEvents.map((item, index) =>
                        <Event
                            key={index}
                            {...item}
                        />
                    )}
                </ul>
            </div>
            {hasRightScroll &&
                <div className="section__arrow" onClick={onArrowCLick}></div>
            }
        </div>
    </section>);
};

export default Devices;
