import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
  font-size: 3.5rem;
  line-height: 4.375rem;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  transition: ${({ theme }) => theme.transitions.normal};
  &::after {
    content: '';
    position: absolute;
    bottom: 8px;
    height: 8px;
    width: 0%;
    left: 0;
    background: ${({ theme }) => theme.colors.black};
    transition: ${({ theme }) => theme.transitions.normal};
  }
  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primaryDarker};
    &::after {
      background: ${({ theme }) => theme.colors.primaryDarker};
      width: 100%;
    }
  }
`;

const MenuLink = (props: any) => {
  return (
    <Link href={props.href}>
      <StyledLink className={props.active ? 'active' : ''}>
        {props.content}
      </StyledLink>
    </Link>
  );
};

export default MenuLink;
