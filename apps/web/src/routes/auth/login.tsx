import { createFileRoute } from '@tanstack/react-router'
import { Card } from '@workspace/ui/components/card'

export const Route = createFileRoute('/auth/login')({
  component: () => <Card>Login Page</Card>,
})
