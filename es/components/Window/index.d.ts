import { PropsWithChildren, CSSProperties, ReactNode } from 'react';
declare function Window({ children, width, height, footer, navigationBarTitle, style, hideStatusBar, hideNavigationBar, }: PropsWithChildren<{
    width?: number;
    height?: number;
    footer?: ReactNode;
    navigationBarTitle?: string;
    style?: CSSProperties;
    hideStatusBar?: boolean;
    hideNavigationBar?: boolean;
}>): JSX.Element;
declare namespace Window {
    var Menu: any;
}
export default Window;
