import { NextPage } from "next";

const Home: NextPage<{}> = (props) => (
  <main>
    <h1>Fierve</h1>

    <style jsx>{`
      main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
      }

      h1 {
        margin: 0;
        font-size: 6rem;
        font-family: Times, sans;
      }

      @media (max-width: 800px) {
        h1 {
          font-size: 4rem;
        }
      }
    `}</style>
  </main>
);

export default Home;
