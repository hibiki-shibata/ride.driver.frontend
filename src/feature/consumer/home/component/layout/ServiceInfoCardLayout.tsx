import type { ReactNode } from "react"
import SignupButton from "../../../shared/component/ToSignupFormBtn"

export type ServiceInfoItem = {
  title: string
  description: string
}

type InfoListSectionProps = {
  title: string
  items: ServiceInfoItem[]
  className: string
  action?: ReactNode
}

function ServiceInfoCardLayout({
  title,
  items,
  className,
}: InfoListSectionProps) {
  return (
    <section className={className}>
      <h2 className="mb-6 text-center text-3xl font-bold">{title}</h2>

      <div className="flex flex-col items-center justify-center">
        <ul className="w-full max-w-3xl space-y-6">
          {items.map((item) => (
            <li key={item.title} className="rounded-xl bg-black/10 p-4">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-1 text-gray-200">{item.description}</p>
            </li>
          ))}
        </ul>

        <SignupButton />
      </div>
    </section>
  )
}

export default ServiceInfoCardLayout