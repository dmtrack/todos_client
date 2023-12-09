import { Suspense } from 'react';
import './styles/index.scss';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import GlobalStyleProvider from './providers/GlobalStyleProvider';
import ContextProvider from './providers/ContextProvider/ContextProvider';

const App = () => (
    <Suspense fallback="">
        <ContextProvider>
            <GlobalStyleProvider>
                <Sidebar />
                <AppRouter />
            </GlobalStyleProvider>
        </ContextProvider>
    </Suspense>
);

export default App;
