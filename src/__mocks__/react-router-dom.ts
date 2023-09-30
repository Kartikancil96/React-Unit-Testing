// src/__mocks__/react-router-dom.ts

import * as ReactRouterDom from 'react-router-dom';

const originalModule = jest.requireActual('react-router-dom');

export const useNavigate = jest.fn();

export { originalModule as default, useNavigate };
