import { NextPage } from "next";

import { Text } from "../src/components/base/text";

const Home: NextPage<{}> = (props) => (
  <>
    <Text type="paragraph">Hello world</Text>

    <style jsx>{``}</style>
  </>
);

export default Home;
