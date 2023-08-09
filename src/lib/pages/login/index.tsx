'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';

const Login: NextPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {};

  return (
    <article className="flex flex-col items-center w-full min-w-[60vw]">
      <section className="card">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don&apos;t have an account? <Link href="/signup">Sign up</Link>
        </p>
      </section>
    </article>
  );
};

export default Login;
