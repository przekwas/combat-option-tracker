import { useDispatch } from 'react-redux';
import { move, toggleStatus, remove } from '../reducers/tracker';

import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa';
import { GiHalfDead, GiCancel } from 'react-icons/gi';

const TrackerCard = ({ trackedPc, idx, length }) => {
	const dispatch = useDispatch();

	return (
		<>
			<div className="flex items-center justify-between pb-12 font-semibold">
				<div className="w-1/3 break-words">
					{trackedPc.dead ? (
						<>
							<span className="text-2xl font-bold text-red-500">DEAD</span>
						</>
					) : (
						<>
							<span className="text-2xl">{trackedPc.name}</span>
						</>
					)}
				</div>

				<div className="flex items-center justify-end w-2/3">
					<button
						className="pr-6 text-6xl text-red-900"
						onClick={() => dispatch(toggleStatus({ idx }))}>
						<GiHalfDead />
					</button>
					<button
						className={`pr-6 text-6xl ${
							idx === 0 ? 'text-gray-500' : 'text-purple-500'
						}`}
						disabled={idx === 0 ? true : false}
						onClick={() => dispatch(move({ from: idx, to: idx - 1 }))}>
						<FaChevronCircleUp />
					</button>
					<button
						className={`pr-6 text-6xl ${
							idx === length - 1 ? 'text-gray-500' : 'text-indigo-500'
						}`}
						disabled={idx === length - 1 ? true : false}
						onClick={() => dispatch(move({ from: idx, to: idx + 1 }))}>
						<FaChevronCircleDown />
					</button>
					<button
						onClick={() => dispatch(remove({ idx }))}
						className="text-6xl text-pink-500">
						<GiCancel />
					</button>
				</div>
			</div>
		</>
	);
};

export default TrackerCard;
