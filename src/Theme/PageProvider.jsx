import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./createEmotionCache";

const clientSideEmotionCache = createEmotionCache();
const PageProvider = ({ children, emotionCache = clientSideEmotionCache }) => (
  <CacheProvider value={emotionCache}>
    <>{children}</>
  </CacheProvider>
);

export default PageProvider;
