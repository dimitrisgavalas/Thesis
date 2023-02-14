import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PopularCourses from './components/PopularCourses';
import Universities from './components/Universities';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import ECoursesPage from './pages/ECoursesPage';
import AboutUsPage from './pages/AboutUsPage';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <SearchBar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/e-courses" component={ECoursesPage} />
        <Route exact path="/about-us" component={AboutUsPage} />
      </Switch>
      <PopularCourses />
      <Universities />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
