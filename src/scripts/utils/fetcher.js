export default async function fetcher(url) {
  const data = await (await fetch(url)).json()
  return data
}
