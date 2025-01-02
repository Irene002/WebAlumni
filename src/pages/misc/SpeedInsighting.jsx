import { SpeedInsights } from "@vercel/speed-insights/react"

const SpeedInsighting = () => {
  return (
    <>
    <section  className="bg-orange-100">
      <div className="p-32">
        <SpeedInsights/>
      </div>
    </section>
    </>
  )
}

export default SpeedInsighting