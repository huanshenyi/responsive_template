import * as z from 'zod';

import { Button } from 'components/Elements';
import { Form, InputField } from 'components/Form';

type RecruitmentModalProps = {};

const schema = z.object({
  title: z.string().min(1, 'Required'),
  place: z.string().min(1, 'Required'),
});

type createValues = {
  title: string;
  place: string;
};

export const CreateRecruitmentForm = ({}: RecruitmentModalProps) => {
  return (
    <>
      <Form<createValues, typeof schema>
        onSubmit={async (values) => {
          console.log(values);
        }}
        schema={schema}
        options={{
          shouldUnregister: true,
        }}
        className="m-auto text-center"
      >
        {({ register, formState }) => (
          <>
            <InputField
              type="text"
              label="Title"
              error={formState.errors['title']}
              registration={register('title')}
              className="lg:w-3/5 m-auto"
            />
            <InputField
              type="text"
              label="place"
              error={formState.errors['place']}
              registration={register('place')}
              className="lg:w-3/5 m-auto"
            />
            <div>
              <Button
                type="submit"
                className="m-auto text-center lg:w-3/5 w-full flex justify-center border-indigo-600 bg-transparent dark:bg-sky-500 dark:text-white p-4 border rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline shadow-lg cursor-pointer transition ease-in duration-300"
              >
                募集追加
              </Button>
            </div>
          </>
        )}
      </Form>
    </>
  );
};
