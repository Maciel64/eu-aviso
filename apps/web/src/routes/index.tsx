import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div>
      <h1 className="text-4xl">Olá, mundo!</h1>
      <Outlet />
    </div>
  )
}
