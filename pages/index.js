import Layout from "../components/Layout";
import Link from "next/link";
/*
In order to support client-side navigation,
 we need to use Next.js's Link API, which is exported via next/link. 
 <Link /> will prefetch the page and navigation will happen without a page refresh.
*/
const PostLink = ({ title }) => (
  <li>
    <Link href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title={"Hello Next.js"} />
        <PostLink title={"Learn NExt.js is awesome"} />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  );
}
