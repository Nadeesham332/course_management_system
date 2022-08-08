import React from 'react';
import index from './index';

it("Api testing 01", async function() {
    const response = new index();
    console.warn(await response.api());
    expect("hello").toEqual("hello")
})