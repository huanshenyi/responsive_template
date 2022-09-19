import * as React from 'react';
import * as z from 'zod';
import Link from 'next/link';

import { Button } from 'components/Elements';
import { Form, InputField } from 'components/Form';
import { useAuth } from 'lib/auth';

const schema = z.object({
  identfier: z.string().min(1, 'Required'),
  password: z.string().min(1, 'Required'),
});

type RegisterValues = {
  identfier: string;
  password: string;
};

type RegisterFormProps = {
  onSuccess: () => void;
};

export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const { register, isRegistering } = useAuth();
  const [chooseTeam, setChooseTeam] = React.useState<boolean>(false);
  const [choosePrivacy, setChoosePrivacy] = React.useState(false);

  const handelChangeChooseTeam = () => {
    setChooseTeam((state) => !state);
  };
  const handelChangeChoosePrivacy = () => {
    setChoosePrivacy((state) => !state);
  };
  return (
    <div>
      <Form<RegisterValues, typeof schema>
        onSubmit={async (values) => {
          if (chooseTeam && choosePrivacy) {
            await register(values);
            onSuccess();
          }
        }}
        schema={schema}
        options={{
          shouldUnregister: true,
        }}
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
            <div className="flex items-center">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    className="toggle"
                    checked={chooseTeam}
                    onClick={() => {
                      handelChangeChooseTeam();
                    }}
                  />
                  <span className="pl-3 label-text">
                    <Link href="terms">
                      <a className="text-sky-600">利用契約</a>
                    </Link>
                    利用契約に同意
                  </span>
                </label>
              </div>
            </div>
            <div className="flex items-center">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    className="toggle"
                    checked={choosePrivacy}
                    onClick={() => {
                      handelChangeChoosePrivacy();
                    }}
                  />
                  <span className="pl-3 label-text">
                    <Link href="terms">
                      <a className="text-sky-600">プライバシーポリシー</a>
                    </Link>
                    に同意する
                  </span>
                </label>
              </div>
            </div>
            <div>
              <Button
                isLoading={isRegistering}
                type="submit"
                className="lg:w-3/5 w-full flex justify-center border-indigo-600 bg-transparent dark:bg-sky-500 dark:text-white p-4 border rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline shadow-lg cursor-pointer transition ease-in duration-300"
              >
                Register
              </Button>
            </div>
          </>
        )}
      </Form>
      <div className="mt-2 flex items-center justify-end lg:w-3/5">
        <div className="text-sm">
          もしアカウントを持っている場合
          <Link href="/auth">
            <a className="text-sky-600">Log In</a>
          </Link>
          から
        </div>
      </div>
    </div>
  );
};
