import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

Object.defineProperty(navigator, 'mimeTypes', { value: {}, writable: false });
