import PropTypes from 'prop-types'

import projectStyles from '@/pages/mainglobal.css'
import styles from '@/styles/input-date.module.css'

const InputDate = (props) => {
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
          type="date"
          placeholder={props.textinput_placeholder}
          className={` ${styles['textinput']} ${projectStyles['input-flight1']} `}
        />
      </div>
    </div>
  )
}

InputDate.defaultProps = {
  text: 'Departure City',
  textinput_placeholder: 'Where are you from....',
  image_alt: 'image',
  rootClassName: '',
  image_src: '/playground_assets/depature%20city%20icon2.svg',
}

InputDate.propTypes = {
  text: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default InputDate