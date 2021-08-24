import type { NextPage } from 'next'
import Layout from '../components/layout'

const Home: NextPage = () => {
  const title = 'Dashboard'

  return (
    <>
      <Layout title={title}>
        <div></div>
      </Layout>
    </>
  )
}

export default Home
