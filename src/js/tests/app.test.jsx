/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import '@testing-library/jest-dom';

import 'jsdom-global/register';

import AppScreen from '../components/appScreen';
import Menu from '../components/menu';
import About from '../components/about';
import Work from '../components/work';
import Skills from '../components/skills';
import Contact from '../components/Contact';

describe('Test en <AppScren /> ', () => {
  test('Se debe mostrar el componente correctamente', () => {
    const pantalla = mount(<AppScreen />);
    expect(pantalla).toMatchSnapshot();
  });

  test('Los textos se muestran correctamente en Menu', () => {
    const wrapper = mount(<Menu />);

    const title = wrapper.find('span').text();
    expect(title).toBe('Full Stack React developer');

    const screen = wrapper.find('h4').text();
    expect(screen).toBe('Angel Higueros');
  });

  test('Se debe mostrar el componente correctamente', () => {
    const pantalla = mount(<Menu />);
    expect(pantalla).toMatchSnapshot();
  });

  test('Los textos se muestran correctamente en About', () => {
    const wrapper = mount(<About />);

    const title = wrapper.find('h1').text();
    expect(title).toBe('SOBRE MI');

    const screen = wrapper.find('h3').text();
    expect(screen).toBe('Quien soy');
  });

  test('Se debe mostrar el componente correctamente', () => {
    const pantalla = mount(<About />);
    expect(pantalla).toMatchSnapshot();
  });

  test('Los textos se muestran correctamente en Skills', () => {
    const wrapper = mount(<Skills />);

    const title = wrapper.find('h1').text();
    expect(title).toBe('MIS HABILIDADES');

    const screen = wrapper.find('h3');
    expect(screen[0]).toBe('Experiencia');
    expect(screen[1]).toBe('Habilidades');
    expect(screen[2]).toBe('Educación');
    expect(screen[3]).toBe('Idiomas');
  });

  test('Se debe mostrar el componente correctamente', () => {
    const pantalla = mount(<Skills />);
    expect(pantalla).toMatchSnapshot();
  });

  test('Los textos se muestran correctamente en Contact', () => {
    const wrapper = mount(<Contact />);

    const title = wrapper.find('h1').text();
    expect(title).toBe('HABLAME');
  });

  test('Se debe mostrar el componente correctamente', () => {
    const pantalla = mount(<Contact />);
    expect(pantalla).toMatchSnapshot();
  });

  test('Los textos se muestran correctamente en Work', () => {
    const wrapper = mount(<Work />);

    const title = wrapper.find('h1').text();
    expect(title).toBe('MI PORTAFOLIO');
  });

  test('Se debe mostrar el componente correctamente', () => {
    const pantalla = mount(<Work />);
    expect(pantalla).toMatchSnapshot();
  });
});
