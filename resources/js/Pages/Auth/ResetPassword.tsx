import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import InputError from '@/Components/InputError';
import Label from '@/Components/Label';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

interface ResetPasswordProps {
  token: string;
  email: string;
}

export default function ResetPassword({ token, email }: ResetPasswordProps) {
  const { data, setData, post, processing, errors, reset } = useForm({
    token: token,
    email: email,
    password: '',
    password_confirmation: '',
  });

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation');
    };
  }, []);

  const onHandleChange = event => {
    setData(event.target.name, event.target.value);
  };

  const submit = e => {
    e.preventDefault();

    post(route('password.update'));
  };

  return (
    <Guest>
      <Head title="Reset Password" />
      <h2 className="text-[32px] font-bold text-center mb-6">
        Enter your new password
      </h2>

      <form onSubmit={submit}>
        <div>
          <Input
            type="hidden"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="username"
            handleChange={onHandleChange}
          />

          <InputError message={errors.email} className="mt-2" />
        </div>

        <div className="mt-4">
          <Label forInput="password" value="Password" />

          <Input
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="new-password"
            isFocused={true}
            handleChange={onHandleChange}
          />
          <p className="text-xs font-medium text-gray-500">
            Must be at least 8 characters.
          </p>

          <InputError message={errors.password} className="mt-2" />
        </div>

        <div className="mt-4">
          <Label forInput="password_confirmation" value="Confirm Password" />

          <Input
            type="password"
            name="password_confirmation"
            value={data.password_confirmation}
            className="mt-1 block w-full"
            autoComplete="new-password"
            handleChange={onHandleChange}
          />
          <p className="text-xs font-medium text-gray-600">
            Both passwords must match.
          </p>

          <InputError message={errors.password_confirmation} className="mt-2" />
        </div>

        <div className="flex items-center justify-center my-10">
          <Button className="h-10 text-center" processing={processing}>
            Reset Password
          </Button>
        </div>
        <h3 className="text-center text-gray-600 font-medium mt-10">
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
