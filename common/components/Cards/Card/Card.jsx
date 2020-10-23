import './card.less';

function Card({ mission_name = 'NA',
  links: { mission_patch_small = '' },
  flight_number = 'NA', mission_id = [],
  launch_year = '', launch_success, launch_landing }) {
  return (
    <div className="Common-Card Flex Flex-Direction-Column">
      <div style={{ width: '180px', height: '180px', backgroundColor: 'rgb(238, 234, 234)', margin: '0 auto' }}>
        <img src={mission_patch_small} alt="No image" />
      </div>
      <div className="Card-Title">{`${mission_name} #${flight_number}`}</div>
      <div className="Field-Title">Mission Id:
        <div className="List-Item-Wrap"><ul>
          {mission_id.map((mission) => {
            return <li>{mission}</li>
          })}
        </ul>
        </div>
      </div>
      <div>
        <span className="Field-Title">Launch Year:</span> <span>{launch_year}</span>
      </div>
      <div>
        <span className="Field-Title">Succesful Launch:</span> <span>{launch_success ? 'true' : 'false'}</span>
      </div>
      <div>
        <span className="Field-Title">Succesful Landing:</span> <span>{launch_landing ? 'true' : 'false'}</span>
      </div>
    </div>
  );

}

export default Card;