import Devices from './sections/devices.tsx';
import Scripts from './sections/scripts.tsx';
import General from './sections/general.tsx';

function Main() {
    return <main className="main">
        <General />

        <Scripts />

        <Devices />
    </main>;
}

export default Main;
