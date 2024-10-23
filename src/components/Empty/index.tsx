import Link from 'next/link'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}
const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
    {hasLink && (
      <Link href="/" passHref>
        <button>Go back to Home</button>
      </Link>
    )}
  </div>
)

export default Empty
