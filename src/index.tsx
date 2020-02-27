import React from "react";

const CONTAINER_ID = "commento";
const COMMENTO_URL = "https://cdn.commento.io/js/commento.js";

const Commento = ({
  cssOverride,
  autoInit,
  noFonts,
  hideDeleted,
  pageId
}: {
  cssOverride?: string;
  autoInit?: boolean;
  noFonts?: boolean;
  hideDeleted?: boolean;
  pageId?: string;
}) => (
  <>
    <div id={CONTAINER_ID} />
    <script
      src={COMMENTO_URL}
      defer
      data-css-override={cssOverride}
      data-auto-init={autoInit}
      data-no-fonts={noFonts}
      data-hide-delete={hideDeleted}
      data-page-id={pageId}
    />
  </>
);
export default Commento;
