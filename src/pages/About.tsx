import { useNavigate } from 'react-router';
import { Button } from 'antd';
import styles from './About.module.less';

export default function About() {
  const navigate = useNavigate();
  const goback = () => {
    navigate(-1);
  };
  return (
    <div className={styles.About}>
      <h1>About</h1>
      <p>welcome about</p>
      <Button onClick={goback} type='primary'>
        go back
      </Button>
    </div>
  );
}
