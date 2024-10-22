import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/family-photos')({
  component: () => <div>Hello /family-photos!</div>,
})
