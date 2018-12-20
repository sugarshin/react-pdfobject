import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import * as React from 'react';
import { PDFObject } from '../src';

test('should render self and sub-components', () => {
  const tree = shallow(<PDFObject url="path/to/example.pdf" />);
  expect(toJson(tree)).toMatchSnapshot();
});
