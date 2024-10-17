/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import Button from '../elements/Button';
// Impor gambar dari folder assets
import brandImage from '../assets/images/logo.png'; // Sesuaikan path sesuai lokasi gambar

export default function BrandIcon() {
  return (
    <Button
      className=""
      type="link"
      href="/"
    >
      <img 
        src={brandImage} 
        alt="Brand Icon" 
        className="w-24 h-auto"  // Sesuaikan ukuran gambar sesuai kebutuhan
      />
    </Button>
  );
}
