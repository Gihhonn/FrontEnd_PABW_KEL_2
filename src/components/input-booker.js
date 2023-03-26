import React from 'react'

import PropTypes from 'prop-types'

const InputBooker = (props) => {
  return (
    <>
      <div className={`input-booker-container ${props.rootClassName} `}>
        <div className="input-booker-container1">
            <span className="input-booker-text">{props.text}</span>
            <select className="input-booker-select selectinput">
              <option value="Business" >Booker Title</option>
              <option value="Economy">Tuan</option>
              <option value="Business">Nyonya</option>
              <option value="Business">Nona</option>
            </select>
        </div>
      </div>
      <div className='Label'>
        <label>{props.label}</label>
        <input 
        type='text' 
        name='name' 
        placeholder='Enter Your Name'/>
      </div>
      <div className='Label'>
        <label>{props.label}</label>
        <input 
        type='text' 
        name='name' 
        placeholder='Enter Your Email'/>
      </div>
      <div className='Label'>
        <label>{props.label}</label>
        <input 
        type='text' 
        name='name' 
        placeholder='Enter Your Phone'/>
      </div>

      <style jsx>
        {`
          .input-booker-container {
            flex: 0 0 auto;
            height: 100px;
            display: flex;
            margin-top: 50px;
            margin-left: 40px;
            padding-left: 40%;
            padding-right: 40%;
          }
          .input-booker-container1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: ;gi
            align-items: flex-start;
            flex-direction: column;
          }
          .input-booker-text {
            color: #5d5f67;
            font-size: 1.1rem;
            font-family: Montserrat;
          }
          .input-booker-select selectinput {
            font-family: Montserrat;
          }
          .Label {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: ;
            align-items: flex-start;
            flex-direction: column;
            flex: 0 0 auto;
            height: 100px;
            display: flex;
            margin-top: 10px;
            margin-left: 40px;
            padding-left: 40%;
            padding-right: 40%;
            font-size: 20px;
          }

        `}
      </style>
    </>
  )
}

InputBooker.defaultProps = {
  rootClassName: '',
  textinput_placeholder: 'Where are you from....',
  text: 'Departure City',
}

InputBooker.propTypes = {
  rootClassName: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text: PropTypes.string,
}

export default InputBooker
