import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import {header, productList, orderDetails, orderStatus, printBtn, btnBack, btnContact, btnDetails, contactDetails, checkbox, content, contactFormWrapper, photo, description, shopingListContainer, inputField, submitButton, row, contactForm} from './style.scss';

var shopItems = require('json!./data/data.json');

var time = new Date(shopItems.data.assignedAt);
var hour = time.getHours();
var minutes = time.getMinutes();
var getDay = time.getDate("dd-m-yy");
var getMonth = time.getMonth("dd-m-yy");
var getYear = time.getFullYear("dd-m-yy");
var shopingItems = shopItems.data.items;

var ShopingElements = React.createClass({
 getDefaultProps: function() {
  return {
    shopingItems: [],
   }
 },
 render: function(color) {
  var listItems = this.props.shopingItems.map(function(shopingItem) {
   return (
    <li key={shopingItem.id}>
      <div className={checkbox}>
      </div>
      <div className={content}>
        <img className={photo} src={shopingItem.product.imageUrl} />
        <div className={description}>
          <h3>{shopingItem.product.name}</h3>
          <p>{shopingItem.product.description}</p>
        </div>
        <span className={btnDetails}></span>
      </div>
    </li>
   );
  });

  return (
      <div className={shopingListContainer}>
        <div className={header}>
            <span className={btnBack}></span>
            <h3>{shopItems.data.assignee.name} </h3>
            <p>{shopItems.data.assignee.id}</p>
            <span className={printBtn}></span>
        </div>
        <div className={orderDetails}>
          <ul>
            <li><strong>Aangevraagd om:</strong> {hour}.{minutes} ({getDay}-{getMonth}-{getYear})</li>
            <li><strong>Email:</strong> {shopItems.data.customer.email}</li>
            <li><strong>Telefoon:</strong> {shopItems.data.customer.phoneNumber}</li>
          </ul>
        </div>
        <div className={orderStatus}>
          <table>
            <tr>
              <td>Status</td>
              <td>Door</td>
              <td>Om</td>
            </tr>
            <tr>
              <td>{shopItems.data.status}</td>
              <td>{shopItems.data.assignee.name}</td>
              <td>{shopItems.data.assignedAt}</td>
            </tr>
          </table>
        </div>
       <ul className={productList}>
        {listItems}
       </ul>
      </div>
  );
 }
});

ReactDom.render( <ShopingElements shopingItems={shopingItems} />, document.getElementById("app"))
