import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Product from './components/Product.jsx';
import NewLetter from './components/NewLetter.jsx';
import Donate from './components/Donate.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import ProductList from './components/ProductList.jsx';
import PageNoteFound from './components/PageNotFound.jsx';

import Language from './components/Language.jsx';
import LanguageEn from './components/LanguageEn.jsx';
import LanguageTh from './components/LanguageTh.jsx';
import LanguageSri from './components/LanguageSri.jsx';
import LanguageNone from './components/LanguageNone.jsx';

const member = false;

createRoot(document.getElementById('root')).render(
  <div>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to={'/home'}>Home</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/product/1001'}>Product</Link>
          </li>
          <li>
            <Link to={'/newletter'}>NewLetter</Link>
          </li>
          <li>
            <Link to={'/donate'}>Donate</Link>
          </li>
          <li>
            <Link to={'/product/redbull/1101'}>Product Detail</Link>
          </li>
          <li>
            <Link to={'/product/?q=reactjs'}>Product List by query</Link>
          </li>
          <li>
            <Link to={'/product/?keyword=reactjs&batch=2&fee=40000'}>
              Product List by multi query
            </Link>
          </li>

          <li>
            <Link to={'/language'}>Language</Link>
          </li>
          <li>
            <Link to={'/language/en'}>LanguageEn</Link>
          </li>
          <li>
            <Link to={'/language/th'}>LanguageTh</Link>
          </li>
          <li>
            <Link to={'/language/sri'}>LanguageSri</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />

        {/* Dynamic Routing and Route singe Parameter */}
        <Route path='/product/:id' element={<Product />} />

        {/* Dynamic Routing and Route singe Parameter */}
        <Route path='/newletter' element={<NewLetter />} />

        {/* Dynamic Routing and Route singe Parameter */}
        <Route path='/donate' element={<Navigate to='/home' />} />
        {/* <Route path='/donate' element={member ? <Donate /> : <Navigate to='/home' />} /> */}

        {/* Dynamic Routing and Route singe Parameter */}
        <Route path='/product/:name/:id' element={<ProductDetail />} />
        <Route path='/product' element={<ProductList />} />

        <Route path='*' element={<PageNoteFound title='404' />} />

        {/* Nested Routes */}

        {/* <Route path='/language' element={<Language />} />
        <Route path='/language/en' element={<LanguageEn />} />
        <Route path='/language/th' element={<LanguageTh />} />
        <Route path='/language/sri' element={<LanguageSri />} /> */}

        <Route path='/language' element={<Language />}>
          <Route path='en' element={<LanguageEn />} />
          <Route path='th' element={<LanguageTh />} />
          <Route path='sri' element={<LanguageSri />} />
          <Route path='*' element={<LanguageNone />} />
        </Route>
      </Routes>
    </Router>
  </div>
);

// Router - Routes - Route (path(/-as you like), element(you want show emelement))
