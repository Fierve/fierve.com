import * as React from "react";

import { config } from "../../config";
import { colors, gridCss, sizeCss } from "../../styles";
import { Text } from "../base/text";

export const LayoutMaxWidth = ({ children }: { children: React.ReactNode }) => (
  <>
    <div>{children}</div>

    <style jsx>{`
      div {
        display: flex;
        flex-direction: column;
        width: 100%;
        min-width: ${sizeCss(400)};
        max-width: ${sizeCss(600)};
        margin: 0 auto;
      }
    `}</style>
  </>
);

export const LayoutPage = ({ children }: { children: React.ReactNode }) => (
  <>
    <div className="layout">
      <header>
        <Text type="title" color="orange">
          Fierve.com
        </Text>
      </header>

      <main>
        <LayoutMaxWidth>{children}</LayoutMaxWidth>
      </main>

      <footer>
        <LayoutMaxWidth>
          <Text>
            {config.site.yearFounded}
            <br />
            {config.site.companyName}
          </Text>
        </LayoutMaxWidth>
      </footer>
    </div>

    <style jsx>{`
      :global(body) {
        /*
        Always show Y scrollbar on whole layout to prevent content jumping
        when switching between scrollbar and non scrollbar pages.
        */
        overflow-y: scroll;
      }

      .layout {
        box-sizing: border-box;
        display: grid;
        grid-template-areas:
          "header"
          "main"
          "footer";
        grid-template-rows: auto 1fr auto;
        grid-template-columns: 1fr;
        min-height: 100vh; // (sticky)
        margin: 0 auto;
        padding: ${gridCss(3)} ${gridCss(2)};
      }

      header {
        grid-area: header;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: ${gridCss(1)};
        padding-bottom: ${gridCss(3)};
        background-color: ${colors.orangeLight};
      }

      main {
        grid-area: main;
        flex-grow: 1; // (sticky) To make footer sticky, in case of content being smaller than screen height
        display: flex;
        flex-direction: column;
        overflow-x: auto;
      }

      footer {
        grid-area: footer;
        padding-top: ${gridCss(2)};
        text-align: center;
      }
    `}</style>
  </>
);
