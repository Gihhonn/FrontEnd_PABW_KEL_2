import React from 'react'

import PropTypes from 'prop-types'

const InputPassenger = (props) => {
  return (
    <>
      <div className={`input-passenger-container ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="input-passenger-image"
        />
        <div className="input-passenger-container1">
          <span className="input-passenger-text">{props.text}</span>
          <input
            type="number"
            min="1"
            maxLength="20"
            placeholder={props.textinput_placeholder}
            className="input-passenger-textinput input-flight"
          />
        </div>
      </div>
      <style jsx>
        {`
          .input-passenger-container {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: auto;
            height: 100px;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: auto;
            padding-top: var(--dl-space-space-halfunit);
            border-color: #d9d9d9;
            border-width: 1px;
            margin-right: auto;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .input-passenger-image {
            width: 60px;
            height: 60px;
            align-self: center;
            object-fit: cover;
          }
          .input-passenger-container1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .input-passenger-text {
            color: #5d5f67;
            font-size: 1.1rem;
            font-family: Montserrat;
          }
          .input-passenger-textinput {
            font-family: Montserrat;
          }
        `}
      </style>
    </>
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

export default InputPassenger
