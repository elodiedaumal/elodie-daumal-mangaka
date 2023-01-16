import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://animechan.vercel.app/api/random';
const AppContext = React.createContext();
