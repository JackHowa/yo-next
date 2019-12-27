import { useRouter } from "next/router";
import Layout from "../components/Layout";

export default function Page() {
  // using the router's query object,
  //  which has the query string params.
  // can work outside of exported page
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
}
