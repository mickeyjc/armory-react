import { PropTypes } from 'react';
import styles from './styles.less';
import cx from 'classnames/bind';
import SvgIcon from 'common/components/Icon/Svg';
import ProgressIcon from 'common/components/Icon/Progress';

import Message from 'common/components/Message';

const Textbox = ({
  valid,
  label,
  containerClassName,
  id,
  busy,
  error,
  iconLeft,
  iconRight,
  showStatus,
  type,
  autoSelect,
  singleClickSelect,
  ...props,
}) => {
  const validity = valid ? <SvgIcon name="done" /> : <SvgIcon name="clear" />;
  const status = valid ? 'valid' : 'invalid';

  return (
    <div className={cx(containerClassName, styles.container)}>
      {label && <label htmlFor={id}>{label}</label>}

      {iconLeft}

      <input
        {...props}
        onClick={singleClickSelect && ((e) => e.target.select())}
        ref={autoSelect && ((c) => c.select())}
        disabled={busy}
        id={id}
        type={type || 'text'}
        className={cx(styles.textbox, showStatus && status)}
      />

      {error &&
        <Message className={styles.error} type="error" size="small">
          {error}
        </Message>}

      {iconRight}

      {showStatus &&
        <div className={styles.validityContainer}>
          {busy ? <ProgressIcon size="micro" /> : validity}
        </div>}
    </div>
  );
};

Textbox.propTypes = {
  autoSelect: PropTypes.bool,
  singleClickSelect: PropTypes.bool,
  showStatus: PropTypes.bool,
  valid: PropTypes.bool,
  label: PropTypes.string,
  busy: PropTypes.bool,
  type: PropTypes.string,
  containerClassName: PropTypes.string,
  error: PropTypes.any,
  id: PropTypes.string,
  iconRight: PropTypes.any,
  iconLeft: PropTypes.any,
};

export default Textbox;
