import Homepage from '../pages/Homepage'

const routes = {
  '/': Homepage, // default page
  '/favorite': Homepage,
  '/resto/:id': Homepage,
}

export default routes
