import Homepage from '../pages/Homepage'
import RestoDetail from '../pages/RestoDetail'

import Favorite from '../pages/Favorite'

const routes = {
  '/': Homepage, // default page
  '/favorite': Favorite,
  '/resto/:id': RestoDetail,
}

export default routes
