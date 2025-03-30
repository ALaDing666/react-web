import { useNavigate } from 'react-router';
export default function About() {
  const navigate = useNavigate();
  const goback = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>About</h1>
      <p>welcome about</p>
      <button onClick={goback}>go back</button>
    </div>
  );
}
