import * as React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      search: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}