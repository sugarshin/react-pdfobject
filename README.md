# react-pdfobject

[![CircleCI][circleci-image]][circleci-url]
[![Codecov][codecov-image]][codecov-url]
[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

A React component for [PDFObject](https://github.com/pipwerks/PDFObject) .

```sh
npm install react-pdfobject
```

## Usage

```ts
import * as React from 'react'
import { PDFObject } from 'react-pdfobject'

<PDFObject url="path/to/example.pdf" />
```

### Props

```ts
interface Props {
  url: string;
  containerId?: string;
  containerProps?: React.HTMLProps<HTMLDivElement>;
  width?: string;
  height?: string;
  page?: string | number;
  id?: string;
  fallbackLink?: string | false;
}
```

ref: https://pdfobject.com/#api

## License

[MIT][license-url]

© sugarshin

[circleci-image]: https://circleci.com/gh/sugarshin/react-pdfobject/tree/master.svg?style=svg&circle-token=5faa6707fd0e1803cf6e01a16b6bacaba92b23b3
[circleci-url]: https://circleci.com/gh/sugarshin/react-pdfobject/tree/master
[codecov-image]: https://codecov.io/gh/sugarshin/react-pdfobject/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/sugarshin/react-pdfobject
[npm-image]: https://img.shields.io/npm/v/react-pdfobject.svg?style=flat-square
[npm-url]: https://www.npmjs.org/package/react-pdfobject
[license-image]: https://img.shields.io/:license-mit-blue.svg?style=flat-square
[license-url]: https://sugarshin.mit-license.org/
