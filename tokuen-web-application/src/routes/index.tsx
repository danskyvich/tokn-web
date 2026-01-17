import { createFileRoute } from '@tanstack/react-router'
import AuthEntry from './authentication'

export const Route = createFileRoute('/')({
  component: AuthEntry,
})

