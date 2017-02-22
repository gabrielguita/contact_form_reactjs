import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import btn from './style.css'


// const Form = React.createClass({
//     render () {
//
//       return (
//           <div>asdasdas</div>
//       )
//     }
// });
//

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
       message: ''
     },
   }
 },
 handleClick (e) {
   // e.preventDefault()
   let field = e.target.name
   let contact = this.state.contact
   contact[field] = e.target.value
   this.setState({contact}, function () {
    // console.log(this.state)
   })
   // console.log('clicked!!!')
   // this.setState({'name': 'Gabriel', 'lastName': 'from Ireland'})
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
const FormChild = ({handleClick, contact, handleSubmit}) => {
 return (
    <div>
         {`Hi, I'm a component, / my name is: ${contact["name"]} / my last name is:  ${contact["lastName"]} / this is my message: ${contact["message"]}`}
      <div class="forms">
        <label>
            Your first name:  <input onChange={handleClick} name='name' value={contact['name']} type='text' placeholder="your name" />
        </label>
         <br />
        <label>
          Your last name:
          <input onChange={handleClick} name='lastName' value={contact['lastName']} type='text' placeholder="your last name" />
        </label>
         <br />
        <label>
          Your sex:
          <select onChange={handleClick} name='sex' value={contact['sex']}>
            <option value="">Select an option</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="noSex">No Sex</option>
          </select>
        </label>
         <br />
        <label> Your message:
          <textarea onChange={handleClick} name='message' value={contact['message']}  placeholder="your message"  /><br />
        </label>
         <br />
        <input className={btn.red} onClick={handleSubmit} type='submit' value='submit' /><br />
      </div>
    </div>
 )
}

FormChild.propTypes = {
 handleClick: PropTypes.func.isRequired,
 contact: PropTypes.object,
}

ReactDom.render( <Form />, document.getElementById("app"))
