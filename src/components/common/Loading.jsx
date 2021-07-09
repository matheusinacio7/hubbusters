import React from 'react';

function Loading({ isLoading, hasError, result }) {
  if (isLoading) {
    return <p>Loading...</p>
  }

  if (hasError) {
    return <p>Oops... looks like something went wrong.</p>
  }

  return result;
}

export default Loading;
