export default async function fetcher(url) {
  try {
    const data = await (await fetch(url)).json()
    return data
  } catch (error) {
    return {
      error: true,
      message: 'failed to fetch 😥',
    }
  }
}
