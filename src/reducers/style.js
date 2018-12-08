import { handleActions } from 'redux-actions';

const reducer = handleActions(
  {
    SET_GLOBAL_STYLE: () => Object.assign({}, { globalStyleSet: true })
  },
  { globalStyleSet: false }
);

export default reducer;
