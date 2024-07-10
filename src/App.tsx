import { type FC, lazy, Suspense } from 'react';

const Header = lazy(()=>import('./Header.tsx'));
// import Header from './Header.tsx'
const Devices = lazy(()=>import('./sections/devices.tsx'));
// import Devices from './sections/devices.tsx'
const Scripts = lazy(()=>import('./sections/scripts.tsx'));
// import Scripts from './sections/scripts.tsx'
const General = lazy(()=>import('./sections/general.tsx'));
// import General from './sections/general.tsx'

const App: FC = () => {
    return (<>
        <Suspense fallback={<div>Loading...</div>}>
            <Header />
        </Suspense>
        <main className="main">
            <Suspense fallback={<div>Loading...</div>}>
                <General />
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
                <Scripts />
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
                <Devices />
            </Suspense>
        </main>
    </>);
};

export default App;
