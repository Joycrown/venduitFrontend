import {Center, Spinner } from '@chakra-ui/react'
import { Suspense, lazy} from 'react';










const DashboardPage = () => {
  const [Dashboard, Layout] = [
    lazy(() => import('../../components/Dashboard/Dashboard')),
    lazy(() => import('../../components/layout/layout')),
  ];


  return (
    <Suspense
      fallback={
        <Center h="100vh" w="100%">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="brand.400"
            size="xl"
            />
        </Center>
      }
    >
      <Layout>
        <Dashboard/>
      </Layout>
  </Suspense>
 
   
  )
}

export default DashboardPage