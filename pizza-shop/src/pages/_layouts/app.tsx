import { Outlet } from "react-router-dom"

export const AppLayout = () => {
  return (
    <>
      <h1>CABECALHO</h1>
      <Outlet />
    </>
  )
}