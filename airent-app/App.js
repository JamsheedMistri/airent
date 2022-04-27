import React from 'react';
import { GlobalProvider } from './context/GlobalContext';
import Navigation from './components/Navigation';

const App = () => (
	<GlobalProvider>
		<Navigation />
	</GlobalProvider>
);

export default App;
