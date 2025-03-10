# Wazza

Wazza is a quiz platform built on [SvelteKit](https://svelte.dev/) and [Hono](https://hono.dev/).

It is my submission for the Web Development SIG open recruitment task for RISTEK 2025.

### Local testing instructions

The application runs on the Bun JavaScript runtime.

To start the frontend development server, navigate to the `frontend/` folder, then run the following:

```bash
bun install
bun run dev
```

To start the backend server, navigate to the `backend/` folder, then run the same commands:

```bash
bun install
bun run dev
```

### Deployment

The frontend is deployed on Vercel, as it natively supports running applications built with Vite.

**It can be accessed here: https://wazza-ruby.vercel.app/**

The backend is deployed on Google Cloud Run, Google Cloud's serverless deployment platform.

**It can be accessed through API calls here: https://wazza-153493249272.northamerica-northeast2.run.app**
