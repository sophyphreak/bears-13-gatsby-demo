import React from "react"
import Homepage from '../components/homepage/Homepage';

import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Homepage />
  </>
)

export default IndexPage
