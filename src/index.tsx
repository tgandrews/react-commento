import React, { useEffect } from "react";

const CONTAINER_ID = "commento";
const SCRIPT_ID = "commento-script";
const COMMENTO_URL = "https://cdn.commento.io/js/commento.js";

interface DataAttributes {
  [key: string]: string | boolean | undefined;
}

const insertScript = (
  src: string,
  id: string,
  parentElement: HTMLElement,
  dataAttributes: DataAttributes
) => {
  const script = window.document.createElement("script");
  script.async = true;
  script.src = src;
  script.id = id;

  Object.entries(dataAttributes).forEach(([key, value]) => {
    if (!value) {
      return;
    }
    script.setAttribute(`data-${key}`, value.toString());
  });

  parentElement.appendChild(script);
};

const removeScript = (id: string, parentElement: HTMLElement) => {
  const script = window.document.getElementById(id);
  if (script) {
    parentElement.removeChild(script);
  }
};

const Commento = ({
  id,
  cssOverride,
  autoInit,
  noFonts,
  hideDeleted,
  pageId
}: {
  id: string;
  cssOverride?: string;
  autoInit?: boolean;
  noFonts?: boolean;
  hideDeleted?: boolean;
  pageId?: string;
}) => {
  useEffect(() => {
    if (!window) {
      return;
    }
    const document = window.document;
    if (document.getElementById("commento")) {
      insertScript(COMMENTO_URL, SCRIPT_ID, document.body, {
        "css-override": cssOverride,
        "auto-init": autoInit,
        "no-fonts": noFonts,
        "hide-deleted": hideDeleted,
        "page-id": pageId
      });
    }
    return () => removeScript(SCRIPT_ID, document.body);
  }, [id]);

  return <div id={CONTAINER_ID} />;
};
export default Commento;
