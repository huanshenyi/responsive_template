import { Fragment, useEffect, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

type SelectOption = {
  id: number;
  name: string;
};

type ComboboxFieldProps = FieldWrapperPassThroughProps & {
  options: SelectOption[];
  maxSelectd?: number;
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
  handelLinkData: (values: number[]) => void;
};

export const ComboboxField = (props: ComboboxFieldProps) => {
  const { options, label, className, registration, error, maxSelectd = 3, handelLinkData } = props;
  const [selected, setSelected] = useState(options[0]);
  const [slist, setSList] = useState<SelectOption[]>([]);
  const [selectdValues, setSelectdValues] = useState<number[]>([]);
  const [query, setQuery] = useState('');

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) =>
          option.name.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  const handelSetSelected = (value: SelectOption) => {
    if (slist.length < maxSelectd && slist.indexOf(value) === -1) {
      setSelected(value);
      setSList([...slist, { id: value.id, name: value.name }]);
      setSelectdValues([...selectdValues, value.id]);
    }
  };

  const handelDelectTag = (id: number) => {
    setSList(
      slist.filter((item) => {
        return item.id !== id;
      })
    );

    setSelectdValues(
      selectdValues.filter((item) => {
        return item !== id;
      })
    );
  };

  useEffect(() => {
    handelLinkData(selectdValues);
  }, [selectdValues]);

  return (
    <FieldWrapper label={label} error={error}>
      <>
        <Combobox value={selected} onChange={handelSetSelected}>
          <div className="relative mt-1">
            <div className="relative">
              <Combobox.Input
                className={clsx(
                  'block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm',
                  className
                )}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={`最大${maxSelectd}まで追加可能`}
              />
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery('')}
            >
              <Combobox.Options
                className={clsx(
                  'mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
                  className
                )}
              >
                {filteredOptions.length === 0 && query !== '' ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">Nothing found.</div>
                ) : (
                  filteredOptions.map((option) => (
                    <Combobox.Option
                      key={option.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-teal-600 text-white' : 'text-gray-900'
                        }`
                      }
                      value={option}
                    >
                      {({ selected, active }) => (
                        <>
                          <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                            {option.name}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? 'text-white' : 'text-teal-600'
                              }`}
                            >
                              <svg
                                className="h-5 w-5"
                                fill="none"
                                aria-hidden="true"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                ></path>
                              </svg>
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
        {slist.map((item, key) => {
          return (
            <div
              className="badge badge-info gap-2 mt-2"
              key={key}
              onClick={() => {
                handelDelectTag(item.id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-4 h-4 stroke-current"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
              {item.name}
            </div>
          );
        })}
        {/* <select multiple {...registration} defaultValue={selectdValues} style={{ visibility: 'hidden', height: '0px' }}>
          <option disabled>disabled</option>
          {slist.map((item, key) => {
            return (
              <option value={item.id.toString()} key={key}>
                {item.name}
              </option>
            );
          })}
        </select> */}
      </>
    </FieldWrapper>
  );
};
