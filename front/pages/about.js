import React, { Component } from 'react';
import Link from 'next/link';

class Index extends Component {
  render() {
    return (
      <div>
        <div>About</div>
        <Link href="/">
          <button type="button">go to home</button>
        </Link>
      </div>
    )
  }
};

export default Index;
