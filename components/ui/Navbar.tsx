import React, { useContext, useState } from 'react';
import { UiContext } from '../../context';

import { useRouter } from 'next/router';
import NextLink from 'next/link';

import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  Link,
  Toolbar,
  Typography,
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { ClearOutlined } from '@mui/icons-material';

type Props = {};

export const Navbar = (props: Props) => {
  const router = useRouter();
  const { toggleSideMenu } = useContext(UiContext);

  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;
    router.push(`/search/${searchTerm}`);
  };

  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref>
          <Link display="flex" alignItems="center">
            <Typography variant="h6">Teslo |</Typography>
            <Typography sx={{ ml: 0.5 }}>shop</Typography>
          </Link>
        </NextLink>

        <Box flex={1} />

        <Box
          className="fadeIn"
          sx={{
            display: isSearchVisible ? 'none' : { xs: 'none', sm: 'block' },
          }}
        >
          <NextLink href="/category/men" passHref>
            <Link>
              <Button
                color={router.asPath == '/category/men' ? 'primary' : 'info'}
              >
                Hombres
              </Button>
            </Link>
          </NextLink>

          <NextLink href="/category/women" passHref>
            <Link>
              <Button
                color={router.asPath == '/category/women' ? 'primary' : 'info'}
              >
                Mujeres
              </Button>
            </Link>
          </NextLink>

          <NextLink href="/category/kid" passHref>
            <Link>
              <Button
                color={router.asPath == '/category/kid' ? 'primary' : 'info'}
              >
                Niños
              </Button>
            </Link>
          </NextLink>
        </Box>

        <Box flex={1} />

        {/* Pantallas grandes */}

        {isSearchVisible ? (
          <Input
            className="fadeIn"
            autoFocus
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => (e.key === 'Enter' ? onSearchTerm() : null)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setIsSearchVisible(false)}>
                  <ClearOutlined />
                </IconButton>
              </InputAdornment>
            }
          />
        ) : (
          <IconButton
            sx={{
              display: { xs: 'none', sm: 'flex' },
            }}
            onClick={() => setIsSearchVisible(true)}
            className="fadeIn"
          >
            <SearchOutlinedIcon />
          </IconButton>
        )}

        {/* Pantallas pequeñas */}
        <IconButton
          sx={{ display: { xs: 'flex', sm: 'none' } }}
          onClick={toggleSideMenu}
        >
          <SearchOutlinedIcon />
        </IconButton>

        <NextLink href="/cart" passHref>
          <Link>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>

        <Button onClick={() => toggleSideMenu()}>Menú</Button>
      </Toolbar>
    </AppBar>
  );
};
