import { createFileRoute } from '@tanstack/react-router'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@workspace/ui/components/card'
import { Button } from '@workspace/ui/components/button'

export const Route = createFileRoute('/auth/register')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Card>
      <CardContent>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <Button>Olá, button</Button>
        </CardHeader>
      </CardContent>
    </Card>
  )
}
