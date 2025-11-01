import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Bell, X, Clock } from 'lucide-react'

export interface NotificationBannerProps {
  id: string
  title: string
  message: string
  time: string
  onDismiss?: (id: string) => void
}

export function NotificationBanner({
  id,
  title,
  message,
  time,
  onDismiss,
}: NotificationBannerProps) {
  return (
    <Card
      className="p-4 flex items-start gap-3"
      data-testid={`notification-${id}`}
    >
      <div className="p-2 rounded-lg bg-primary/10">
        <Bell className="h-5 w-5 text-primary" />
      </div>
      
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-sm">{title}</h4>
        <p className="text-sm text-muted-foreground mt-0.5">{message}</p>
        <div className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>{time}</span>
        </div>
      </div>
      
      {onDismiss && (
        <Button
          size="icon"
          variant="ghost"
          className="h-8 w-8"
          onClick={() => onDismiss(id)}
          data-testid={`button-dismiss-${id}`}
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </Card>
  )
}
