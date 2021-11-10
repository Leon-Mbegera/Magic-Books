import { CHANGE_FILTER } from '../actions/index';

const filterReducer = (state = 'All', action) => ((action.type === CHANGE_FILTER) ? action.payload : state);

export default filterReducer;
