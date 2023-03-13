import React from 'react'

import PropTypes from 'prop-types'

const InputGeneral = (props) => {
  return (
    <>
      <div className={`input-general-container ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="input-general-image"
        />
        <div className="input-general-container1">
          <span className="input-general-text">{props.text}</span>
          <input
            type="text"
            maxLength="20"
            placeholder={props.textinput_placeholder}
            className="input-general-textinput input-flight"
          />
        </div>
      </div>
      <style jsx>
        {`
          .input-general-container {
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
          .input-general-image {
            width: 60px;
            height: 60px;
            align-self: center;
            object-fit: cover;
          }
          .input-general-container1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .input-general-text {
            color: #5d5f67;
            font-size: 1.1rem;
            font-family: Montserrat;
          }
          .input-general-textinput {
            font-family: Montserrat;
          }
        `}
      </style>
    </>
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

export default InputGeneral
