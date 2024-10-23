
export default function Index(props: PostTemplateProps) {
  const router = useRouter()
  // se rota não tiver sido gerada ainda pode mostrar o que quisermos
  if (router.isFallback) return null

  return <Post {...props} />
}
