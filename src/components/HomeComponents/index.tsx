import React from 'react';

import InputSearch from '@/ui/inputSearch';
import Menu from '@/ui/menu';
import ThemeToglle from '@/ui/themeToggle';

const Home = () => {
  return (
    <div>
      <Menu />
      <InputSearch placeholder="PESQUISA..." />
      <ThemeToglle />
    </div>
  );
};

export default Home;
