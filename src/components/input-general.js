import PropTypes from 'prop-types'

import projectStyles from '@/pages/mainglobal.css'
import styles from '@/styles/input-general.module.css'

const InputGeneral = (props) => {
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
          type="text"
          maxLength="20"
          placeholder={props.textinput_placeholder}
          className={` ${styles['textinput']} ${projectStyles['input-flight']} `}
        />
      </div>
    </div>
  )
}

InputGeneral.defaultProps = {
  textinput_placeholder: 'Where are you from....',
  rootClassName: '',
  image_src: '/playground_assets/depature%20city%20icon2.svg',
  text: 'Departure City',
  image_alt: 'image',
}

InputGeneral.propTypes = {
  textinput_placeholder: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
}

export default InputGeneral;
