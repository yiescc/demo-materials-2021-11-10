import { createElement, PropsWithChildren, useMemo, CSSProperties, ReactNode } from 'react';

// Comps
import StatusBar from './StatusBar';
import NavigatorBar from './NavigatorBar';
import Footer from './Footer';
import Menu from './Menu';

import styles from './index.module.scss';

const BaseWidth = 375;
const BaseHeight = 667;

function Window({
  children,
  width,
  height,
  footer,
  navigationBarTitle,
  style,
  hideStatusBar,
  hideNavigationBar,
}: PropsWithChildren<{
  width?: number;
  height?: number;
  footer?: ReactNode;
  navigationBarTitle?: string;
  style?: CSSProperties;
  hideStatusBar?: boolean;
  hideNavigationBar?: boolean;
}>) {
  const styleInfo = useMemo(() => {
    const res: CSSProperties = {
      width: `${BaseWidth}px`,
      height: `${BaseHeight}px`,
    };

    if (width) {
      const scale = width / BaseWidth;
      res.transform = `scale(${scale})`;

      if (height) {
        res.height = `${(height / scale).toFixed(2)}px`;
      } else {
        res.height = '100%';
      }
    }

    return res;
  }, [width, height]);

  return (
    <div
      style={{
        width,
        height,
        ...style,
      }}
    >
      <div className={styles.Window} style={{ ...styleInfo }}>
        <header className={styles.Header}>
          {!hideStatusBar && <StatusBar />}
          {!hideNavigationBar && <NavigatorBar title={navigationBarTitle} />}
        </header>
        <div className={styles.Container}>{children}</div>
        {footer && <Footer>{footer}</Footer>}
      </div>
    </div>
  );
}

Window.Menu = Menu;

export default Window;
