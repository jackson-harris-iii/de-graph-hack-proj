import styles from '../styles/Home.module.css'
import { Container, Card, Row, Text } from "@nextui-org/react";
import Header from '../Components/header'
import Layout from "../Components/layout"

export default function IndexPage() {
  return (
    <Layout>
      <h1>NextAuth.js Example</h1>
      <p>
        This is an example site to demonstrate how to use{" "}
        <a href="https://next-auth.js.org">NextAuth.js</a> for authentication.
      </p>
    </Layout>
  )
}
