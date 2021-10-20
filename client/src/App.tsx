import { MessageList } from './components/MessageList';
import { LoginBox } from './components/LoginBox';
import styles from './styles/app.module.scss';
import { useAuth } from './hooks/useAuth';

export function App() {
  const { user } = useAuth();

  return (
    <main className={styles.contentWrapper}>
      <MessageList />
      <LoginBox />
    </main>
  );
}
