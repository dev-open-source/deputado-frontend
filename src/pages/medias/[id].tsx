
export default function Index(props: GaleryTemplateProps) {
  const router = useRouter()
  // se rota não tiver sido gerada ainda pode mostrar o que quisermos
  if (router.isFallback) return null
  return <Galery {...props} />
}
