import { Separator } from "@/components/ui/separator"
import { ReasonType } from "."

type ReasonProps = {
  reason: ReasonType
}

export default function Reason({ reason }: ReasonProps) {
  return (
    <div className="grid grid-cols-3 items-center justify-between lg:gap-40 gap-24" >
      {
        reason.number % 2 === 0 ? (
          <div className="col-span-1 w-full md:flex hidden justify-end">
            <div className="w-48 h-48 min-w-48 bg-gradient-to-t to-blue from-blue/20 rounded-full">

            </div>
          </div>
        ) : (

          <div className="space-y-5 md:col-span-2 col-span-3">
            <p className="text-pink text-5xl font-bold">
              0{
                reason.number
              }.
            </p>
            <Separator className="bg-neutral-600" />
            <h3 className="text-3xl">
              {
                reason.title
              }
            </h3>
            <p>
              {
                reason.description
              }
            </p>
          </div>
        )
      }
      {
        reason.number % 2 !== 0 ? (
          <div className="col-span-1 w-full md:flex hidden">
            <div className="w-48 h-48 min-w-48 bg-gradient-to-t to-blue from-blue/20 rounded-full">

            </div>
          </div>
        ) : (

          <div className="space-y-5 md:col-span-2 col-span-3">
            <p className="text-pink text-5xl font-bold">
              0{
                reason.number
              }.
            </p>
            <Separator className="bg-neutral-600" />
            <h3 className="text-3xl">
              {
                reason.title
              }
            </h3>
            <p>
              {
                reason.description
              }
            </p>
          </div>
        )
      }
    </div>
  )
}