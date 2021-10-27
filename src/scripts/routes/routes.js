import Homepage from '../pages/Homepage'
import RestoDetail from '../pages/RestoDetail'

const routes = {
  '/': Homepage, // default page
  '/favorite': Homepage,
  '/resto/:id': RestoDetail,
}

export default routes
