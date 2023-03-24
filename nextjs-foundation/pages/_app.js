import "@/styles/globals.css";
import "jquery";
import { useEffect, useState } from "react";

import "foundation-sites/dist/css/foundation.min.css";

export default function App({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      import("foundation-sites/dist/js/foundation.min.js").then(() => {
        $(document).foundation();
      });
    }
  }, [mounted]);

  return <Component {...pageProps} />;
}
