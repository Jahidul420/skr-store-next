import { useRouter } from 'next/router'

type Props = {}

export default function index({}: Props) {
    const router= useRouter()
    const {pageID}= router.query

  return (
    <div>{pageID}</div>
  )
}