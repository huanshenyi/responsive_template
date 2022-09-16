import { useAuth } from 'lib/auth';
import { useRouter } from 'next/router';
import { Layout, LoginForm } from 'features/auth';

const Auth = () => {
  const { login, isLoggingIn } = useAuth();
  const router = useRouter();
  return (
    <Layout title="Login the app">
      <div>
        <LoginForm
          login={login}
          isLoggingIn={isLoggingIn}
          onSuccess={() => {
            router.replace('/');
          }}
        />
      </div>
    </Layout>
  );
};

export default Auth;
