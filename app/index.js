import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';

const submitButton = {
  color: '#000',
  backgroundColor: 'white',
  padding: '8px',
  border: 'solid 1px #222'
}

const inputField = {
  padding: '5px 8px',
  border: 'solid 1px #717171',
  borderRadius: '2px'
}

const row = {
  fontSize: '14px',
  paddingBottom: '10px',
  display: 'inline-block',
  textAlign: 'left'
}

const contactForm = {
    textAlign: 'center',
}

const contactFormWrapper = {
  marginTop: '20px'
}

// New file Container
const Form = React.createClass({
 /*
     ** import and export es6
     Declaration
     Anathomy of a component...
     JSX: apply HTML of Javascript...
     Mandatory.... render mothod...
       Properties: Not mutable, they wont change...
       State: what it mutable... what makes the UI RE-RENDER
       setState({prop: value})
       propTypes

       StateLess Component is...
 */
 propTypes: {
   name: PropTypes.string.isRequired,
   lastName: PropTypes.string.isRequired,
 },

selectedRadioState () {
  return{
    optionRadio: {
      selectedRadio: 'work'
    }
  }
},
 getInitialState () {
   return {
     contact: {
       name: '',
       lastName: '',
       message: '',
       sex: {
         male: 'male',
         female: 'female'
       }
     },
   }
 },
 handleClick (e) {
   // e.preventDefault()
   let field = e.target.name
   let contact = this.state.contact
   contact[field] = e.target.value
   this.setState({contact}, function () {
    console.log(this)
   })
     console.log('clicked!!!')
   // this.setState({'name': 'Gabriel', 'lastName': 'from Ireland'})
 },
 handleRadioChange (e) {
   this.setState({e}, function () {
    console.log(this)
   })
  // this.setState({
  //   selectedRadioState: e.currentTarget.value
  // })
   console.log(e)
},

 handleSubmit (e) {
  console.log(this.state.contact)
  e.preventDefault();
 },
 render () {
   return (
       <FormChild handleClick={this.handleClick} contact={this.state.contact} handleSubmit={this.handleSubmit} />
   )
 }
})

// Component Presentation
const FormChild = ({handleClick, contact, handleSubmit, selectedRadioState, handleRadioChange, optionRadio}) => {
 return (
    <div className="contactForm" style={contactForm}>
         {`Hi, I'm a component, / my name is: ${contact["name"]} / my last name is:  ${contact["lastName"]} / this is my message: ${contact["message"]}`}
      <div className="contactFormWrapper" style={contactFormWrapper}>
        <label className="row" style={row}>
            Your first name:  <input className="inputField" style={inputField} onChange={handleClick} name='name' value={contact['name']} type='text' placeholder="your name" />
        </label>
         <br />
        <label className="row" style={row}>
          Your last name:
          <input className="inputField" style={inputField} onChange={handleClick} name='lastName' value={contact['lastName']} type='text' placeholder="your last name" />
        </label>
      <br />
  <label htmlFor="work">
     <input
    type="radio"
    name="work"
    value="work"
    checked={contact['sex'] === 'male'}
    onChange={handleClick}
  />
 Public</label>

 <label htmlFor="personal"> <input
    type="radio"
    name="personal"
    value="personal"
    checked={contact['sex'] === 'female'}
    onChange={handleClick}
  />
  Private</label>
         <br/>
        <label className="row" style={row}>
          Your sex:
          <select className="inputField" style={inputField} onChange={handleClick} name='sex' value={contact['sex']}>
            <option value="">Select an option</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="noSex">No Sex</option>
          </select>
        </label>
         <br />
        <label className="row" style={row}> Your message:
          <textarea className="inputField" style={inputField} onChange={handleClick} name='message' value={contact['message']}  placeholder="your message"  /><br />
        </label>
         <br />
        <input className="button" style={submitButton} onClick={handleSubmit} type='submit' value='submit' /><br />
      </div>
    </div>
 )
}

FormChild.propTypes = {
 handleClick: PropTypes.func.isRequired,
 contact: PropTypes.object,
}

ReactDom.render( <Form />, document.getElementById("app"))
