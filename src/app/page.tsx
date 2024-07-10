import { type FC, lazy, Suspense } from 'react';

const Header = lazy(()=>import('@/components/Header.tsx'));
const Devices = lazy(()=>import('@/components/sections/devices.tsx'));
import Scripts from '@/components/sections/scripts.tsx'
import General from '@/components/sections/general.tsx'
import Footer from '@/components/footer.tsx';

const App: FC = () => {
    return (<>
        <Suspense fallback='loading...'>
            <Header />
        </Suspense>
        <main className="main">
            <General />

            <Scripts />

            <Suspense fallback='loading...'>
                <Devices />
            </Suspense>
        </main>
        <Footer /> 
    </>);
};

export default App;
