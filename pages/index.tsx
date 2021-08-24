import type { NextPage } from 'next'
import Layout from '../components/layout'
import Geo from '../components/geo'

const Home: NextPage = () => {
  const title = 'Dashboard'

  return (
    <Layout title={title}>
      <Geo />
    </Layout>
  )
}

export default Home
