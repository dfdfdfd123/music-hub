

import React from 'react';
import { FaHome, FaSearch, FaEnvelope } from 'react-icons/fa';
import { IoPaperPlaneOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <Link to="/"><FaHome size={30} /></Link>
      <Link to="/search"><FaSearch size={30} /></Link>
      <Link to="/messages"><FaEnvelope size={30} /></Link>
      <Link to="/social"><IoPaperPlaneOutline size={30} /></Link>
    </aside>
  );
};

export default Sidebar;

