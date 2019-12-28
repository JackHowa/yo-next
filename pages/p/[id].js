import { useRouter } from "next/router";
import Layout from "../../components/Layout";

/*

Having brackets ([]) in the page name makes it a dynamic route. 
Currently, you can not make part of a page name dynamic,
 only the full name. 
 For example, /pages/p/[id].js is supported but /pages/p/post-[id].js is not currently.
*/

export default function Post() {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
}
