import {
  FETCH_MISSIONS_START,
  FETCH_MISSIONS_END,
  ERROR_MISSIONS,
} from '../constants/missions';

export const initialState = {
  isFetching: false,
  info: [],
  isError: false,
};

const REDUCER_HANDLERS = {
  [FETCH_MISSIONS_START]: (state) => ({
    ...state,
    isFetching: true,
    isError: false,
  }),
  [ERROR_MISSIONS]: (state) => ({
    ...state,
    isFetching: false,
    isError: true,
  }),
  [FETCH_MISSIONS_END]: (state, action) => ({
    ...state,
    isFetching: false,
    info: action.payload,
  }),
};


export default function missionsReducer(state = initialState, action = {}) {
  const handler = REDUCER_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
