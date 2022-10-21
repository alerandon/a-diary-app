import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import InputError from '@/Components/InputError';
import Label from '@/Components/Label';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

interface LoginProps {
  status: string;
  canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: '',
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const onHandleChange = event => {
    setData(
      event.target.name,
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value,
    );
  };

  const submit = e => {
    e.preventDefault();

    post(route('login'));
  };

  return (
    <Guest>
      <Head title="Log in" />
      <h2 className="text-4xl font-bold text-center mb-12">
        Log in your account
      </h2>
      <div className="mx-6 my-4">
        {status && (
          <div className="mb-4 font-medium text-sm text-green-600">
            {status}
          </div>
        )}

        <form onSubmit={submit}>
          <div>
            <Label forInput="email" value="Email" />

            <Input
              type="text"
              name="email"
              value={data.email}
              className="mt-1 block w-full h-10"
              autoComplete="username"
              isFocused={true}
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
              className="mt-1 block w-full h-10"
              autoComplete="current-password"
              handleChange={onHandleChange}
            />

            <InputError message={errors.password} className="mt-2" />
          </div>

          <div className="block mt-4">
            <label className="flex items-center">
              <Checkbox
                name="remember"
                value={data.remember}
                handleChange={onHandleChange}
              />

              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
          </div>

          <div className="flex items-center justify-between mt-8">
            <Button className="w-28 h-10 text-center" processing={processing}>
              Login
            </Button>

            {canResetPassword && (
              <Link
                href={route('password.request')}
                className="text-sm text-sky-600 hover:text-sky-900 font-semibold"
              >
                Forgot your password?
              </Link>
            )}
          </div>
          <h3 className="text-center text-gray-500 font-medium mt-10">
            Don`t have an account?{' '}
            <Link
              href={route('register')}
              className="text-sky-600 hover:text-sky-900 font-semibold"
            >
              Register here
            </Link>
          </h3>
        </form>
      </div>
    </Guest>
  );
}
