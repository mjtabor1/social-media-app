import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/feed" element={<div>Home Page</div>} />
      </Routes>
    </Layout>
  );
};

export default App;
