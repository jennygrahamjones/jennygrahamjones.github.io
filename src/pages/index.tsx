import * as React from "react";

import Page from "../components/Page";
import Container from "../components/Container";
import IndexLayout from "../layouts";

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Hi! 😅</h1>
        <p>Oops, this website isn't quite ready yet.</p>
        <p>
          For now, find games on <a href="https://canny.itch.io/">Itch.io</a>.
        </p>
      </Container>
    </Page>
  </IndexLayout>
);

export default IndexPage;
