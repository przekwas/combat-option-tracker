import { useSelector, useDispatch } from 'react-redux';
import { toggle, newTurn } from '../reducers/options';

const Options = () => {
	const dispatch = useDispatch();
	const optionsList = useSelector(state => state.options.list);

	return (
		<>
			{optionsList.map((option, idx) => (
				<div
					key={`option-key-${option.id}`}
					className="flex items-center justify-between pb-8 text-2xl tracking-wider"
					onClick={() => dispatch(toggle({ idx }))}>
					<span className={`${option.checked ? 'line-through' : ''}`}>{option.name}</span>
				</div>
			))}
			<div className="flex justify-end mt-4">
				<button
					className="px-4 py-2 bg-red-500 border border-red-900 rounded-lg text-red-50"
					onClick={() => dispatch(newTurn())}>
					new turn
				</button>
			</div>
		</>
	);
};

export default Options;
