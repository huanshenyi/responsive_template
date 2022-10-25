import * as z from 'zod';

import { Button } from 'components/Elements';
import { Form, InputField } from 'components/Form';

type RecruitmentModalProps = {};

const schema = z.object({
  title: z.string().min(1, 'Required'),
  place: z.string().min(1, 'Required'),
  start: z.string(),
  end: z.string(),
  content: z.string().min(1, 'Required'),
  reward: z.string().min(1, 'Required'),
});

type createValues = {
  title: string;
  place: string;
  start: string;
  end: string;
  content: string;
  reward: string;
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
            <InputField
              type="time"
              label="start"
              error={formState.errors['start']}
              registration={register('start')}
              className="lg:w-3/5 m-auto"
            />
            <InputField
              type="time"
              label="end"
              error={formState.errors['end']}
              registration={register('end')}
              className="lg:w-3/5 m-auto"
            />
            <InputField
              type="text"
              label="content"
              error={formState.errors['content']}
              registration={register('content')}
              className="lg:w-3/5 m-auto"
            />
            <InputField
              type="text"
              label="reward"
              error={formState.errors['reward']}
              registration={register('reward')}
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
