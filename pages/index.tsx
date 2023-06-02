import React from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '@components/Layout/layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

export const getServerSideProps = async () => {
  const response = await fetch('https://platzi-avocado-nextjs-tau.vercel.app/api/avogit ')
  const { data: productList }: TAPIAvoResponse = await response.json()
      
  return {
    props: {
      productList,
    },
  }
}

const HomePage = ({ productList }: {productList: TProduct[]}) => {

  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
