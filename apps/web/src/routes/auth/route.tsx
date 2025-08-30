import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth')({
  component: AuthLayout,
})

export function AuthLayout() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded bg-white p-8 shadow">
        <h1 className="mb-6 text-center text-2xl font-bold">
          Welcome to the Auth Page
        </h1>

        <Outlet />
      </div>
    </div>
  )
}
