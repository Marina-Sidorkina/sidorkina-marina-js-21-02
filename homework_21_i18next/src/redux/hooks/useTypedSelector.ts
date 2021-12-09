import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../@types/rootState';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
