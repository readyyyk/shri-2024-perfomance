import { type FC } from 'react';

import Header from '@/components/Header.tsx'
import Devices from '@/components/sections/devices.tsx'
import Scripts from '@/components/sections/scripts.tsx'
import General from '@/components/sections/general.tsx'
import Footer from '@/components/footer.tsx';

const App: FC = () => {
    return (<>
        <Header />
        <main className="main">
            <General />

            <Scripts />

            <Devices />
        </main>
        <Footer /> 
    </>);
};

export default App;
