import * as React from 'react';
import pdfobject = require('pdfobject');

export interface Props {
  url: string;
  containerId?: string;
  containerProps?: React.HTMLProps<HTMLDivElement>;
  width?: string;
  height?: string;
  page?: string | number;
  id?: string;
  fallbackLink?: string | false;
}

export class PDFObject extends React.PureComponent<Props> {
  public static defaultProps = {
    width: '100%',
    height: '100%',
    containerId: 'pdfobject',
  };

  public componentDidMount() {
    const { url, containerId, containerProps, ...options } = this.props;
    pdfobject.embed(url, `#${containerId}`, options);
  }

  public render() {
    return <div {...this.props.containerProps} id={this.props.containerId} />;
  }
}
