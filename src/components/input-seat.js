import PropTypes from 'prop-types'

import projectStyles from '@/pages/mainglobal.css'
import styles from '@/styles/input-seat.module.css'

const InputSeat = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <div className={styles['container1']}>
        <span className={styles['text']}>{props.text}</span>
        <select
          className={` ${styles['select']} ${projectStyles['selectinput']} `}
        >
          <option value="Economy">Economy</option>
          <option value="Business">Business</option>
          <option value="First">First</option>
        </select>
      </div>
    </div>
  )
}

InputSeat.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  text: 'Departure City',
  image_src: '/playground_assets/depature%20city%20icon2.svg',
}

InputSeat.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
}

export default InputSeat;
