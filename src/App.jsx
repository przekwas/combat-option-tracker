import Options from './components/Options';
import Tracker from './components/Tracker';

const App = () => {
	return (
		<div className="flex items-start justify-between p-4 -mx-4">
			<div className="w-1/3 px-8 py-6 mx-4 bg-white border-b-4 border-gray-500 rounded-lg shadow">
				<Options />
			</div>
			<div className="w-2/3 px-8 py-6 mx-4 bg-white border-b-4 border-gray-500 rounded-lg shadow">
				<Tracker />
			</div>
		</div>
	);
};

export default App;
