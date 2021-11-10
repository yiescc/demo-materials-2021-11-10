import { PropsWithChildren } from 'react';
import { IStoreDispatcher, IStoreState } from './store';
import './index.scss';
export default function OfficeAccountUI(props: PropsWithChildren<{
    state?: IStoreState;
    menuDispatcher?: IStoreDispatcher;
}>): JSX.Element;
