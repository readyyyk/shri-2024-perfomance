import './reset.css';
import './styles.css';

import type { ReactNode, FC } from "react";

const Layout: FC<{children: ReactNode}> = ({children}) => {
    return <html lang="ru">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport"
            content="width=device-width, initial-scale=1.0" />
      <title>Яндекс.Дом</title>
    </head>
    <body>
        {children}
    </body>
    </html>;
}

export default Layout;
