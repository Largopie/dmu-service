import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from './config';
import Department from './department';


const Test = () => {

  return (
      <form>
        <input type="email"/><br/>
        <input type="password" /><br/>
        <Department />
        <input type="submit" />
      </form>
  );
}

export default Test;
