import { lazy } from 'react';

//name imports here

//import {sometjign,asdapas,dasd} from 'asdasd'

//lazy imports here

const Demo = lazy(() => import('./Demo/demo'));
const SignIn = lazy(() => import('./SignIn'));

//exports
export { Demo, SignIn };
