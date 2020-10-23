import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMissions } from '../../redux/actions/missions';
import Filters from '../../common/components/Filter/Filter';
import Cards from '../../common/components/Cards';
import useCustomState from '../../common/hooks/useCustomState';
import './home.less';

function Home({ fetchMissions: fetchMissionsAction, missions }) {
  const [filters, setFilters] = useCustomState({});

  useEffect(() => {
    fetchMissionsAction(filters);
  }, [filters]);

  function handleFilterSelect(values) {
    setFilters(values);
  }

  return (
    <div className="Home">
      <div className="Flex Flex-Direction-Column">
        <div className="Home--Header">SpaceEx Launch programs</div>
        <div>
          <div className="Row">
            <div className="col-xs-12 col-sm-5 col-md-4 col-lg-3">
              <div className="Filter">
                <Filters handleFilterSelect={handleFilterSelect} filters={filters} />
              </div>
            </div>
            <div className="col-xs-12 col-sm-7 col-md-8 col-lg-9">
              <Cards details={missions.info || []} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function mapStateToProps({ missions }) {
  return { missions };
}

export default connect(
  mapStateToProps,
  {
    fetchMissions,
  },
)(Home);