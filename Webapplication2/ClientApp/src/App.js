import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { UI } from './components/PWA_Bildkommunikation';
import { UITest } from './components/Machbarkeitsprototyp';
import { UITabs } from './components/Test';
import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
        <Layout>
            <Routes>
            <Route path="/Machbarkeitsprototyp" element={<UITest></UITest>} />
            <Route path="/" element={<UI></UI>} />
            <Route path="/Test" element={<UITabs></UITabs>} />
            </Routes>
      </Layout>
    );
  }
}
