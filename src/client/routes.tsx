import { FC } from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

import { ProductListPage } from '@/pages/product/list'
import { UserListPage } from '@/pages/user/list'
import { HomePage } from '@/pages/home'

const createRouter = () =>
  createBrowserRouter(createRoutesFromElements(
    <>
      <Route element={<HomePage />} path='/' />
      <Route path='users'>
        <Route element={<UserListPage />} index />
      </Route>
      <Route path='products'>
        <Route element={<ProductListPage />} index />
      </Route>
    </>
    )
  )

export const AppRoutes: FC = () => {
  const router = createRouter()

  return <RouterProvider router={router} />
}
