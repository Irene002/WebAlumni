import { SpeedInsights } from "@vercel/speed-insights/next"

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