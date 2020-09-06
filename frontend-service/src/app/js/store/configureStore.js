//USiNG REDUX TOOL KIT

import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit';

import reducer from './combineReducer';
import func from './middleware/func';
import api from './middleware/api';

export default function() {
   return configureStore({
      reducer,
      middleware: [
         ...getDefaultMiddleware(),
          api, func,]
   });
}
