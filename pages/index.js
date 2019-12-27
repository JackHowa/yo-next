import Layout from "../components/Layout";
/*
In order to support client-side navigation,
 we need to use Next.js's Link API, which is exported via next/link. 
 <Link /> will prefetch the page and navigation will happen without a page refresh.
*/

const Index = () => (
  <Layout>
    <p>Hello Next.js</p>
  </Layout>
);

// has a fixed URL based on the file name.
export default Index;
