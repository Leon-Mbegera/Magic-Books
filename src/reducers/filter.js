import { CHANGE_FILTER } from '../actions/index';

const filterReducer = (state = 'All', action) => (
  action.filter ? (action.type === CHANGE_FILTER) : state
);
export default filterReducer;
