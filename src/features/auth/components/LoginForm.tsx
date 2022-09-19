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
            <div className="lg:w-3/5">
              <button
                type="button"
                className="flex break-inside bg-[#2ea44f] text-white border-2 border-transparent rounded-3xl px-6 py-3 mb-4 w-full"
              >
                <div className="m-auto">
                  <div className="flex items-center justify-start flex-1 space-x-4">
                    <svg width="25" height="25" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                      />
                    </svg>
                    <span className="font-medium">Continue with Github</span>
                  </div>
                </div>
              </button>
            </div>
            <div className="lg:w-3/5">
              <button
                type="button"
                className="flex break-inside bg-white text-black border-2 border-black rounded-3xl px-6 py-3 mb-4 w-full dark:bg-slate-800 dark:text-white"
              >
                <div className="m-auto">
                  <div className="flex items-center justify-start flex-1 space-x-4">
                    <svg width="25" height="25" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"
                      />
                    </svg>
                    <span className="font-medium mb-[-2px]">Continue with Google</span>
                  </div>
                </div>
              </button>
            </div>
            <div className="text-left text-sm">
              アカウントお持ちでない場合
              <Link href="auth/regist">
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
