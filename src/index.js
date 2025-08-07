import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import CommentList from './chapter_05/CommentList';
import UseToggle from './CustomHook/UseToggle';
import EventHandling from './EventHandling/EventHandlingMain';
import LifingState from './lifting state up/liftingstate';
import RouteMain from './Routing/RoutingTest';
import CssStyled from './Component_styling/css_class_styling';
import CssButton from './Component_styling/css_module';


//여기가 메인. index.html에 있는 'root'에 아래 UI를 렌더한다. 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<Library />*/}
    {/*<CommentList />*/}
    {/*<UseToggle />*/}
    {/*<EventHandling />*/}
    {/*<LifingState />*/}
    {/*<RouteMain />*/}
    {/*<CssStyled />*/}
    <CssButton />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
