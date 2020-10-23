import apiCall from './apiRequest';

export function fetchMissions(filters) {
  let query = {};
  query.limit = 100;
  query.land_success = filters.successfulLanding ? ((filters.successfulLanding === 'True' && true) || (filters.successfulLanding === 'False' && false)) : undefined;
  query.launch_year = filters.year ? Number(filters.year) : undefined;
  query.launch_success = filters.successfulLaunch ? ((filters.successfulLaunch === 'True' && true) || (filters.successfulLaunch === 'False' && false)) : undefined;

  return apiCall({
    url: 'https://api.spaceXdata.com/v3/launches',
    query,
    method: 'get',
  });
}

export default {
  fetchMissions,
};
