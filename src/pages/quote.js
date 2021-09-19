import React from "react"

import QuoteForm from "../components/quote-form"
import Layout from "../Layouts/Layout"
import SEO from "../components/seo"

const QuotePage = () => (
  <Layout>
    <SEO title="Contact" />
    <QuoteForm />
  </Layout>
)

export default QuotePage