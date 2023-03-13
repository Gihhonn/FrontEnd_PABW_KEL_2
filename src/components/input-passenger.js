import PropTypes from 'prop-types'

import projectStyles from '@/pages/mainglobal.css'
import styles from '@/styles/input-passenger.module.css'

const InputPassenger = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <div className={styles['container1']}>
        <span className={styles['text']}>{props.text}</span>
        <input
          type="number"
          min="1"
          maxLength="20"
          placeholder={props.textinput_placeholder}
          className={` ${styles['textinput']} ${projectStyles['input-flight']} `}
        />
      </div>
    </div>
  )
}

InputPassenger.defaultProps = {
  rootClassName: '',
  textinput_placeholder: 'Where are you from....',
  image_src: '/playground_assets/depature%20city%20icon2.svg',
  image_alt: 'image',
  text: 'Departure City',
}

InputPassenger.propTypes = {
  rootClassName: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
}

export default InputPassenger;
