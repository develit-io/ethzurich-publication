export default eventHandler(async (event) => {
  const articles = await $fetch('/api/publications')

  if (!event.context.params?.address)
    throw new Error('No address provided')

  return articles.find(article => article.address === event.context.params!.address)
})
