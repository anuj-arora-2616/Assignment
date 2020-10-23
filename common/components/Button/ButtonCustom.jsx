import PropTypes from 'prop-types';

import './buttonCustom.less';

export default function ButtonCustom({
  labelText,
  labelClassName,
  className,
  style,
  onClick,
  disabled,
}) {
  function handleClick(event) {
    event.preventDefault();
    if (!disabled) {
      onClick();
    }
  }
  function handleKeyPress(event) {
    const keyCode = event.which || event.keyCode;
    if (keyCode === 13 && !disabled) {
      onClick();
    }
  }
  return (
    <div
      className={`ButtonCustom ${className} ${disabled ? 'Disabled' : ''}`}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex="0"
      style={style}
    >
      {
        !!labelText
        && (
        <span className={labelClassName}>
          {labelText.name || labelText}
        </span>
        )
      }
    </div>
  );
}

ButtonCustom.defaultProps = {
  labelText: '',
  iconStyle: {},
  className: '',
  labelClassName: '',
  style: {},
  disabled: false,
  iconName: '',
};

ButtonCustom.propTypes = {
  labelText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  iconName: PropTypes.string,
  iconStyle: PropTypes.object,
  style: PropTypes.object,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
