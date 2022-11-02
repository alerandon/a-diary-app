import React from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Label from '@/Components/Label';

interface ForgotPasswordProps {
  status: string;
}

export default function ForgotPassword({ status }: ForgotPasswordProps) {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
  });

  const onHandleChange = event => {
    setData(event.target.name, event.target.value);
  };

  const submit = e => {
    e.preventDefault();

    post(route('password.email'));
  };

  return (
    <Guest>
      <Head title="Forgot Password" />
      <h2 className="text-[35px] font-bold text-center mb-6">
        Forgot your password?
      </h2>
      <div className="mb-4 px-16 text-md font-medium text-gray-500 leading-tight text-center">
        Enter the email address associated with your account
      </div>

      {status && (
        <div className="mb-4 font-medium text-sm text-green-600">{status}</div>
      )}

      <form onSubmit={submit}>
        <Label forInput="email" value="Email" />
        <Input
          type="text"
          name="email"
          value={data.email}
          className="mt-1 block w-full"
          isFocused={true}
          handleChange={onHandleChange}
        />

        <InputError message={errors.email} className="mt-2" />

        <div className="flex items-center justify-center my-10">
          <Button className="w-24 h-10 text-center" processing={processing}>
            Send
          </Button>
        </div>
        <h3 className="text-center text-gray-500 font-medium mt-10">
          Click here to{' '}
          <Link
            href={route('login')}
            className="text-sky-600 hover:text-sky-900 font-semibold"
          >
            Login in your account
          </Link>
        </h3>
      </form>
    </Guest>
  );
}
