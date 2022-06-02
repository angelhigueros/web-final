/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import '@testing-library/jest-dom';

import 'jsdom-global/register';

import AppScreen from '../components/appScreen';
import Menu from '../components/menu';

describe('Test en <AppScren /> ', () => {
  test('Se debe mostrar el componente correctamente', () => {
    const pantalla = mount(<AppScreen />);
    expect(pantalla).toMatchSnapshot();
  });

  test('Los textos se muestran correctamente en Menu', () => {
    const wrapper = mount(<Menu />);

    const title = wrapper.find('h4').text();
    expect(title).toBe('Angel Higueros');

    const screen = wrapper.find('h4').text();
    expect(screen).toBe('Angel Higueros');
  });
});
