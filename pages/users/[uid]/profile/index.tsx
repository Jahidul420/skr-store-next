import { useRouter } from "next/router"

type Props = {}

export default function index({}: Props) {
    const router= useRouter()
    const {uid}= router.query
  return (
    <div>{uid}</div>
  )
}