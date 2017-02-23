import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import {inputField, submitButton, row, contactForm, contactFormWrapper} from './style.scss';

//converting component

//after this routing

//sync info


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

 getInitialState () {
   return {
     contact: {
       name: '',
       lastName: '',
       message: '',
       work: '',
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
     console.log(e.target.value)
     let contact = this.state.contact;
     contact['work'] = e.target.value
     this.setState({contact})
},

 handleSubmit (e) {
  console.log(this.state.contact)
  e.preventDefault();
 },
 render () {
   return (
       <FormChild handleClick={this.handleClick} contact={this.state.contact} handleSubmit={this.handleSubmit} handleRadioChange={this.handleRadioChange}/>
   )
 }
})

// Component Presentation
const FormChild = ({handleClick, contact, handleSubmit, handleRadioChange}) => {
console.log(contact);
 return (
    <div className={contactForm}>
         {`Hi, I'm a component, / my name is: ${contact["name"]} / my last name is:  ${contact["lastName"]} / this is my message: ${contact["message"]}`}
      <div className={contactFormWrapper}>
        <label className={row}>
            Your first name:  <input className={inputField} onChange={handleClick} name='name' value={contact['name']} type='text' placeholder="your name" />
        </label>
         <br />
        <label className={row}>
          Your last name:
          <input className={inputField} onChange={handleClick} name='lastName' value={contact['lastName']} type='text' placeholder="your last name" />
        </label>
      <br />
  <label htmlFor="work">
    <input
    type="radio"
    name="work"
    value="male"
    checked={contact['work'] === 'male'}
    onChange={handleRadioChange}
  />
 Public</label>

 <label htmlFor="personal"> <input
    type="radio"
    name="work"
    value="female"
    checked={contact['work'] === 'female'}
    onChange={handleRadioChange}
  />
  Private</label>
         <br/>
        <label className={row}>
          Your sex:
          <select className={inputField} onChange={handleClick} name='sex' value={contact['sex']}>
            <option value="">Select an option</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="noSex">No Sex</option>
          </select>
        </label>
         <br />
        <label className={row}> Your message:
          <textarea className={inputField} onChange={handleClick} name='message' value={contact['message']}  placeholder="your message"  /><br />
        </label>
         <br />
        <input className={submitButton} onClick={handleSubmit} type='submit' value='submit' /><br />
      </div>
    </div>
 )
}

FormChild.propTypes = {
 handleClick: PropTypes.func.isRequired,
 contact: PropTypes.object,
}

ReactDom.render( <Form />, document.getElementById("app"))
