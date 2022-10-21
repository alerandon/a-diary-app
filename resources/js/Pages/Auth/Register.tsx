import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import InputError from '@/Components/InputError';
import Label from '@/Components/Label';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
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

    post(route('register'));
  };

  return (
    <Guest>
      <Head title="Register" />
      <h2 className="text-4xl font-bold text-center mb-10">
        Register your account
      </h2>
      <form onSubmit={submit}>
        <div>
          <Label forInput="first_name" value="First name" />

          <Input
            type="text"
            name="first_name"
            value={data.first_name}
            className="mt-1 block w-full h-10"
            autoComplete="first_name"
            isFocused={true}
            handleChange={onHandleChange}
            required
          />

          <InputError message={errors.first_name} className="mt-2" />
        </div>

        <div className="mt-4">
          <Label forInput="name" value="Last name" />

          <Input
            type="text"
            name="name"
            value={data.name}
            className="mt-1 block w-full h-10"
            autoComplete="name"
            isFocused={true}
            handleChange={onHandleChange}
            required
          />

          <InputError message={errors.name} className="mt-2" />
        </div>

        <div className="mt-4">
          <Label forInput="email" value="Email" />

          <Input
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full h-10"
            autoComplete="username"
            handleChange={onHandleChange}
            required
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
            autoComplete="new-password"
            handleChange={onHandleChange}
            required
          />

          <InputError message={errors.password} className="mt-2" />
        </div>

        <div className="flex justify-center mt-6">
          <Button className="w-32" processing={processing}>
            Register
          </Button>
        </div>
        <h3 className="text-center text-gray-500 font-medium mt-6">
          Already have an account?{' '}
          <Link
            href={route('login')}
            className="font-semibold text-sky-600 hover:text-sky-900"
          >
            Login here
          </Link>
        </h3>
      </form>
    </Guest>
  );
}
