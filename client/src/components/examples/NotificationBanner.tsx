import { NotificationBanner } from '../NotificationBanner'

export default function NotificationBannerExample() {
  return (
    <div className="space-y-3 max-w-md">
      <NotificationBanner
        id="1"
        title="Meal Prep Reminder"
        message="Time to prepare your healthy lunch for tomorrow!"
        time="2 hours ago"
        onDismiss={(id) => console.log('Dismissed:', id)}
      />
      <NotificationBanner
        id="2"
        title="New Recipe Match"
        message="We found 3 new recipes that match your ingredients"
        time="5 hours ago"
        onDismiss={(id) => console.log('Dismissed:', id)}
      />
    </div>
  )
}
