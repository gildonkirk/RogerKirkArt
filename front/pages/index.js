import React, { Component } from 'react';
import Link from 'next/link';

class Index extends Component {
  render() {
    return (
      <div>
        <div>Hello world</div>
        <Link href="/about">
          <button type="button">go to about</button>
        </Link>
      </div>
    )
  }
};

export default Index;
