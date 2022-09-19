import { Layout, RegisterForm } from 'features/auth';
import { useRouter } from 'next/router';

const Regist = () => {
  const router = useRouter();
  return (
    <Layout title="Regist the app">
      <div>
        <RegisterForm
          onSuccess={() => {
            router.replace('/auth');
          }}
        />
      </div>
    </Layout>
  );
};

export default Regist;
