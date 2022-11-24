import type { NextPage } from 'next';
import { Box, Typography } from '@mui/material';

import { ShopLayout } from '../../components/layout';
import { ProductList } from '../../components/products';
import { useProducts } from '../../hooks';
import { FullScreenLoading } from '../../components/ui';

interface Props {
  products: IProduct[];
  query: string;
  foundProducts: boolean;
}
const SearchPage: NextPage<Props> = ({ products, query, foundProducts }) => {
  // const { products, isLoading, isError } = useProducts('/products');

  return (
    <ShopLayout
      title={'Teslo-Shop - Búsqueda'}
      pageDescription={'Encuentra los mejores productos de Teslo aquí'}
    >
      <Typography variant="h1" component="h1">
        Buscar producto
      </Typography>
      {foundProducts ? (
        <Typography variant="h2" sx={{ mb: 1 }} textTransform="capitalize">
          Productos relaciones con: {query}
        </Typography>
      ) : (
        <Box display="flex">
          <Typography variant="h2" sx={{ mb: 1 }} textTransform="capitalize">
            No encontramos ningún producto
          </Typography>
          <Typography
            variant="h2"
            sx={{ ml: 1 }}
            color="secondary"
            textTransform="capitalize"
          >
            {query}
          </Typography>
        </Box>
      )}

      <ProductList products={products} />
    </ShopLayout>
  );
};

export default SearchPage;

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from 'next';
import { dbProducts } from '../../database';
import { IProduct } from '../../interfaces';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = '' } = params as { query: string };

  if (query.length === 0) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }

  let products = await dbProducts.getProductsByTerm(query);
  const foundProducts = products.length > 0;

  if (!foundProducts) {
    products = await dbProducts.getAllProducts();
  }

  return {
    props: {
      products,
      query,
      foundProducts,
    },
  };
};
