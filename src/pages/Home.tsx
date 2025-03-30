import { useNavigate } from 'react-router';

export default function Home() {
  const navigate = useNavigate();
  const goToAbout = () => {
    navigate('/about');
  };
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to my website!</p>
      <button onClick={goToAbout}>go to about</button>
    </div>
  );
}
