import ToggleSelect from '../ToggleSelect';
import './filter.less';

const toggleValues = ['2006', '2007', '2008', '2009', '2010', '2011',
  '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];

function Filter({ handleFilterSelect, filters }) {
  return (
    <div className="Common-Filter">
      <div className="Filter-Title">Filters</div>
      <div className="Sub-Title">Launch Year</div>
      <div className="Divider-Bottom" style={{
        width: '200px',
        margin: '0 auto',
      }}></div>
      <div className="Flex Flex-Wrap" style={{ justifyContent: 'center' }}>
        <ToggleSelect values={toggleValues}
          onSelect={(value) => handleFilterSelect({ year: value })}
          selected={filters.year}
        />
      </div>
      <div className="Sub-Title" style={{ marginTop: '20px' }}>Successful Launch</div>
      <div className="Divider-Bottom" style={{
        width: '200px',
        margin: '0 auto',
      }}></div>
      <div className="Flex Flex-Wrap" style={{ justifyContent: 'center' }}>
        <ToggleSelect values={['True', 'False']}
          onSelect={(value) => handleFilterSelect({ successfulLaunch: value })}
          selected={filters.successfulLaunch}
        />
      </div>
      <div className="Sub-Title" style={{ marginTop: '20px' }}>Successful Laing</div>
      <div className="Divider-Bottom" style={{
        width: '200px',
        margin: '0 auto',
      }}></div>
      <div className="Flex Flex-Wrap" style={{ justifyContent: 'center' }}>
        <ToggleSelect values={['True', 'False']}
          onSelect={(value) => handleFilterSelect({ successfulLanding: value })}
          selected={filters.successfulLanding}
        />
      </div>
    </div>
  );
}

export default Filter;