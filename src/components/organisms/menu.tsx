import MenuLink from '../atoms/menu-link';
import { useRouter } from 'next/router';

const Menu = () => {
  const router = useRouter();
  return (
    <nav>
      <MenuLink href="/" content="Home" active={router.route === '/'} />
      <MenuLink
        href="/privacy"
        content="Privacy"
        active={router.route === '/privacy'}
      />
      <MenuLink href="/test" content="Test" active={router.route === '/test'} />
    </nav>
  );
};
export default Menu;
