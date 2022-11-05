import * as z from 'zod';
import { DateClickArg } from '@fullcalendar/interaction';

import { Button } from 'components/Elements';
import { Form, InputField, TextAreaField, SelectField, ComboboxField } from 'components/Form';
import { useEffect, useState } from 'react';
import { formatDay, formatTime, getAfterHalfHour, formatISOTime } from 'utils/format';
import { useCreateRecruitment, RecruitmentType, RECRUITMENT, FREETIME, useTags } from 'features/schedule';

type RecruitmentModalProps = {
  selectedDate: DateClickArg | undefined;
  handelCreateSuccess: () => void;
};

const schema = z.object({
  title: z.string().min(1, 'Required'),
  place: z.string().min(1, 'Required'),
  start: z.string().min(1, 'Required'),
  end: z.string().min(1, 'Required'),
  content: z.string().min(1, 'Required'),
  reward: z.string(),
  memberLimit: z.number().gte(1).lte(10),
  tags: z.array(z.string().min(1).max(3)).optional(),
});

type createValues = {
  title: string;
  place: string;
  start: string;
  end: string;
  content: string;
  reward: string;
  type: RecruitmentType;
  paid: boolean;
  memberLimit: number;
  tags: number[];
};

export const CreateRecruitmentForm = ({ selectedDate, handelCreateSuccess }: RecruitmentModalProps) => {
  const [slectedDay, setSlectedDay] = useState<string>();
  const [tags, setTags] = useState<number[]>([]);
  const createRecruitment = useCreateRecruitment();
  const { data } = useTags();

  useEffect(() => {
    if (selectedDate) {
      setSlectedDay(formatDay(selectedDate.dateStr));
    }
  }, [selectedDate]);

  useEffect(() => {
    if (createRecruitment.isSuccess) {
      handelCreateSuccess();
    }
  }, [createRecruitment.isSuccess]);

  // TODO: 苦渋な選択、いつかは直す
  const handelGetTags = (values: number[]) => {
    setTags(Array.from(new Set(values)));
  };

  return (
    <>
      <Form<createValues, typeof schema>
        onSubmit={async (values) => {
          values.start = formatISOTime(slectedDay + ' ' + values.start);
          values.end = formatISOTime(slectedDay + ' ' + values.end);
          values.paid = !!values.reward;
          values.tags = tags;
          // console.log(values);
          await createRecruitment.mutateAsync({ data: values });
        }}
        schema={schema}
        options={{
          shouldUnregister: true,
          defaultValues: {
            start: selectedDate?.dateStr && formatTime(selectedDate?.dateStr),
            end: selectedDate?.dateStr && getAfterHalfHour(selectedDate?.dateStr),
            type: RECRUITMENT,
            memberLimit: 1,
          },
        }}
        className="m-auto text-center"
      >
        {({ register, formState }) => (
          <>
            <InputField
              type="text"
              label="タイトルを追加"
              error={formState.errors['title']}
              registration={register('title')}
              className="lg:w-3/5 m-auto"
            />
            <InputField
              type="text"
              label="場所を追加"
              error={formState.errors['place']}
              registration={register('place')}
              className="lg:w-3/5 m-auto"
            />
            <InputField
              type="time"
              label={slectedDay + ' ' + '開始時間'}
              error={formState.errors['start']}
              registration={register('start')}
              className="lg:w-3/5 m-auto"
            />
            <InputField
              type="time"
              label={slectedDay + ' ' + '終了時間'}
              error={formState.errors['end']}
              registration={register('end')}
              className="lg:w-3/5 m-auto"
            />
            <TextAreaField
              label="説明を追加"
              error={formState.errors['content']}
              registration={register('content')}
              className="lg:w-3/5 m-auto"
              placeholder="...より詳細な説明ほど人の目にとまる"
            />
            <InputField
              type="number"
              label="人数制限"
              error={formState.errors['memberLimit']}
              registration={register('memberLimit', { valueAsNumber: true })}
              className="lg:w-3/5 m-auto"
            />
            <SelectField
              options={[
                { label: '一般募集', value: RECRUITMENT },
                { label: '空き時間', value: FREETIME },
              ]}
              label="募集タイプ"
              placeholder="募集タイプを選びください"
              registration={register('type')}
              error={formState.errors['type']}
              className="lg:w-3/5 m-auto"
            />
            <InputField
              type="text"
              label="報酬内容"
              error={formState.errors['reward']}
              registration={register('reward')}
              className="lg:w-3/5 m-auto"
            />
            <ComboboxField
              label="タグ選択"
              registration={register('tags')}
              className="lg:w-3/5 m-auto"
              options={data ? data : []}
              handelLinkData={handelGetTags}
            />
            <div>
              <Button
                isLoading={createRecruitment.isLoading}
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
