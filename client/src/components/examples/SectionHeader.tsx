import { SectionHeader } from '../SectionHeader'

export default function SectionHeaderExample() {
  return (
    <div className="w-full">
      <SectionHeader
        title="Amazon Offers"
        subtitle="Exclusive deals handpicked for you"
        dealCount={156}
        brandColor="#FF9900"
        onViewAll={() => console.log('View all clicked')}
      />
    </div>
  )
}
