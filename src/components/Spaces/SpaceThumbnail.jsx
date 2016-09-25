import React from 'react';
import Space from 'containers/Spaces/SpaceContainer';
import SpaceTitle from './SpaceTitle';

const propTypes = {
  queryID: React.PropTypes.string,
  query: React.PropTypes.string,
  queryParams: React.PropTypes.object,
  isSelected: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  sounds: React.PropTypes.array,
  currentPositionInMap: React.PropTypes.shape({
    x: React.PropTypes.number,
    y: React.PropTypes.number,
  }),
  onRemoveClick: React.PropTypes.func,
};

function SpaceThumbnail(props) {
  return (
    <li
      className={`space-thumbnail${(props.isSelected) ? ' active' : ''}`}
      onClick={props.onClick}
    >
      <SpaceTitle
        query={props.query}
        queryParams={props.queryParams}
        sounds={props.sounds}
        currentPositionInMap={props.currentPositionInMap}
        isThumbnail
      />
      <svg><Space queryID={props.queryID} isThumbnail /></svg>
      <i
        className="fa fa-lg fa-times-circle-o"
        aria-hidden
        onClick={(evt) => {
          evt.stopPropagation();
          props.onRemoveClick();
        }}
      />
    </li>
  );
}

SpaceThumbnail.propTypes = propTypes;
export default SpaceThumbnail;