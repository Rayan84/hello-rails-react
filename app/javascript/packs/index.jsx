// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, Provider } from 'react-redux';
import App from '../components/App';
import store from '../redux/configureStore';
import getGreetings from '../redux/actions/greetingsAction';


store.dispatch(getGreetings());
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={ store }>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})


