import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Feed from './modules/Feed';
import Profile from './modules/Profile';
import Settings from './modules/Settings';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
};

export default App;
