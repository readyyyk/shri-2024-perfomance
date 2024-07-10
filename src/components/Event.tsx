'use client';

import { useRef, FC, memo } from 'react';

type Props = {
    onSize?: (size: { width: number, height: number }) => void;
    slim?: boolean;
    icon: string;
    iconLabel: string;
    title: string;
    subtitle?: string;
}
const Event: FC<Props> = (props) => {
    const ref = useRef<HTMLLIElement>(null);

    return <li ref={ref} className={'event' + (props.slim ? ' event_slim' : '')}>
        <button className="event__button">
            <span className={`event__icon event__icon_${props.icon}`} role="img" aria-label={props.iconLabel}></span>
            <h4 className="event__title">{props.title}</h4>
            {props.subtitle &&
                <span className="event__subtitle">{props.subtitle}</span>
            }
        </button>
    </li>;
}

const memoizedEvent = memo(Event);
export default memoizedEvent;
