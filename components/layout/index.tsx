import type { NextPage } from 'next'
import Head from 'next/head'
import { LayoutProps } from '../../types/pagePropTypes'
import { Layout, Menu, Breadcrumb, Typography } from 'antd'
import { useRouter } from 'next/dist/client/router'
import { route } from 'next/dist/server/router'

const { Header, Content, Footer, Sider } = Layout
const { Title } = Typography

const WholeLayout: NextPage<LayoutProps> = ({
  children,
  title,
}): JSX.Element => {
  const router = useRouter()

  return (
    <div className="whole-layout">
      <Head>
        <title>{title}</title>
      </Head>
      <Layout style={{ height: '100vh' }}>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Dashboard</Menu.Item>
            <Menu.Item key="2">Help</Menu.Item>
            <Menu.Item key="3">Contact</Menu.Item>
          </Menu>
        </Header>

        <Content
          className="site-layout"
          style={{ padding: '0 50px', marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>

            {router.pathname?.split('/').find((path) => path) ? (
              router.pathname
                ?.split('/')
                .map(
                  (route) =>
                    route && (
                      <Breadcrumb.Item>
                        {route?.[0]?.toUpperCase() + route?.slice(1)}
                      </Breadcrumb.Item>
                    )
                )
            ) : (
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            )}
          </Breadcrumb>
          <Title>{title}</Title>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            {children}
          </div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>@2021 Yadab Sutradhar</Footer>
      </Layout>
      ,
    </div>
  )
}

export default WholeLayout
