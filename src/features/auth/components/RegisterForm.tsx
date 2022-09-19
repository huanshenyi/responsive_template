import { Switch } from '@headlessui/react';
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
  const [chooseTeam, setChooseTeam] = React.useState(false);
  const [choosePrivacy, setChoosePrivacy] = React.useState(false);

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

            <Switch.Group>
              <div className="flex items-center">
                <Switch
                  checked={chooseTeam}
                  onChange={setChooseTeam}
                  className={`${
                    chooseTeam ? 'bg-blue-600' : 'bg-gray-200'
                  } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                >
                  <span
                    className={`${
                      chooseTeam ? 'translate-x-6' : 'translate-x-1'
                    } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                  />
                </Switch>
                <Switch.Label className="ml-4">
                  <Link href="terms">
                    <a className="text-sky-600">利用契約</a>
                  </Link>
                  利用契約に同意
                </Switch.Label>
              </div>
            </Switch.Group>
            <Switch.Group>
              <div className="flex items-center">
                <Switch
                  checked={choosePrivacy}
                  onChange={setChoosePrivacy}
                  className={`${
                    choosePrivacy ? 'bg-blue-600' : 'bg-gray-200'
                  } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                >
                  <span
                    className={`${
                      choosePrivacy ? 'translate-x-6' : 'translate-x-1'
                    } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                  />
                </Switch>
                <Switch.Label className="ml-4">
                  <Link href="terms">
                    <a className="text-sky-600">プライバシーポリシー</a>
                  </Link>
                  に同意する
                </Switch.Label>
              </div>
            </Switch.Group>
            <div>
              <Button
                isLoading={isRegistering}
                type="submit"
                className="lg:w-3/5 w-full flex justify-center border-indigo-600 bg-transparent text-gray-100 p-4 border rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-gray-900 shadow-lg cursor-pointer transition ease-in duration-300"
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
