// helper to reduce verbosity in ThunkAction
import { Action, ThunkAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { StoreType } from '../state/store';

export type SimpleThunk = ThunkAction<void, StoreType, unknown, Action<string>>;