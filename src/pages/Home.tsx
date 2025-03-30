import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { getTest } from '@api/home';
import './Home.less';
import { Button } from 'antd';

export default function Home() {
  const navigate = useNavigate();
  const goToAbout = () => {
    navigate('/about');
  };
  useEffect(() => {
    getTest()
      .then((res) => {
        console.log(res);
      })
      .catch(console.error);
  }, []);
  return (
    <div className='App'>
      <h1>Home</h1>
      <p>Welcome to my website!</p>
      <Button onClick={goToAbout}>go to about</Button>
    </div>
  );
}
