import { type FC, memo } from 'react';
import Event from '@/components/Event.tsx';
import { type TabKey, TABS } from '@/components/data.ts';

type Props = {
    activeTab: string;
};
const DevicesList: FC<Props> = ({activeTab}) => {
    const activeEvents = TABS[activeTab as TabKey].items //.slice(0, toShowCnt);

    return (<ul className="section__panel-list">
        {activeEvents.map((item, index) =>
            <Event
                key={index}
                {...item}
            />
        )}
    </ul>);
};

export default memo(DevicesList);
