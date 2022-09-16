import Link from 'next/link';
import * as z from 'zod';

import { Button } from 'components/Elements';
import { Form, InputField } from 'components/Form';

const schema = z.object({
  identfier: z.string().min(1, 'Required'),
  password: z.string().min(1, 'Required'),
});

type LoginValues = {
  identfier: string;
  password: string;
};

type LoginFormProps = {
  isLoggingIn: boolean;
  login: (values: LoginValues) => void;
  onSuccess: () => void;
};

export const LoginForm = ({ login, onSuccess, isLoggingIn }: LoginFormProps) => {
  return (
    <div>
      <Form<LoginValues, typeof schema>
        onSubmit={async (values) => {
          await login(values);
          onSuccess();
        }}
        schema={schema}
      >
        {({ register, formState }) => (
          <>
            <InputField
              type="text"
              label="Username"
              error={formState.errors['identfier']}
              registration={register('identfier')}
              className="lg:w-3/5"
            />
            <InputField
              type="password"
              label="Password"
              error={formState.errors['password']}
              registration={register('password')}
              className="lg:w-3/5"
            />
            <div>
              <Button
                isLoading={isLoggingIn}
                type="submit"
                className="lg:w-3/5 w-full flex justify-center border-indigo-600 bg-transparent text-gray-100 p-4 border rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-gray-900 shadow-lg cursor-pointer transition ease-in duration-300"
              >
                Log in
              </Button>
            </div>
            <div className="text-left text-sm">
              アカウントお持ちでない場合
              <Link href="/regist">
                <a className="text-sky-600"> 新規登録</a>
              </Link>
              してください
            </div>
          </>
        )}
      </Form>
    </div>
  );
};
