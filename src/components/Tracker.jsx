import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, reset } from '../reducers/tracker';

import TrackerCard from './TrackerCard';

const Tracker = () => {
	const dispatch = useDispatch();
	const trackerList = useSelector(state => state.tracker.list);
	const [value, setValue] = useState('');

	const handleClick = () => {
		dispatch(add({ name: value }));
		setValue('');
	};

	return (
		<>
			<div className="flex items-center pb-8 -mx-2 justify-evenly">
				<input
					placeholder="name of tracked creature ..."
					className="w-3/4 px-2 py-4 mx-2 border border-gray-200 rounded-lg w-/3"
					type="text"
					value={value}
					onChange={e => setValue(e.target.value)}
				/>
				<button
					className="w-1/4 px-4 py-2 mx-2 bg-blue-500 border border-blue-900 rounded-lg text-blue-50"
					onClick={handleClick}>
					add
				</button>
			</div>
			<div>
				{trackerList.map((trackedPc, idx) => (
					<TrackerCard
						key={`tracker-id-${trackedPc.id}`}
						idx={idx}
						length={trackerList.length}
						trackedPc={trackedPc}
					/>
				))}
			</div>
			{trackerList.length !== 0 && (
				<div className="flex justify-end">
					<button
						onClick={() => dispatch(reset())}
						className="px-4 py-2 bg-red-500 border border-red-900 rounded-lg text-red-50">
						reset
					</button>
				</div>
			)}
		</>
	);
};

export default Tracker;
