import React, { useEffect } from "react";

const CONTAINER_ID = "commento";
const SCRIPT_ID = "commento-script";
const COMMENTO_URL = "https://cdn.commento.io/js/commento.js";

const insertScript = (src: string, id: string, parentElement: HTMLElement) => {
  const script = window.document.createElement("script");
  script.async = true;
  script.src = src;
  script.id = id;
  parentElement.appendChild(script);
  return script;
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
      insertScript(COMMENTO_URL, SCRIPT_ID, document.body);
    }
    return () => removeScript(SCRIPT_ID, document.body);
  }, [id]);

  return <div id={CONTAINER_ID} />;
};
export default Commento;
