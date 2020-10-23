import {
  FETCH_MISSIONS_START,
  FETCH_MISSIONS_END,
  ERROR_MISSIONS,
} from '../constants/missions';
import {
  fetchMissions as fetchMissionsApi,
} from '../../apis/missions';

export function fetchMissionsStart() {
  return ({ type: FETCH_MISSIONS_START });
}

export function fetchMissionsEnd(payload = {}) {
  return ({ type: FETCH_MISSIONS_END, payload });
}

export function raiseErrorFetchMissions() {
  return ({ type: ERROR_MISSIONS });
}

export function fetchMissions(query) {
  return (dispatch) => {
    dispatch(fetchMissionsStart());
    fetchMissionsApi(query)
      .then((res) => {
        dispatch(fetchMissionsEnd(res.body));
      })
      .catch(() => {
        dispatch(raiseErrorFetchMissions());
      });
  };
}