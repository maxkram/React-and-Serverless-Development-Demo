import React from "react";
import { Link } from "react-router-dom";
import { Accent } from "../styled/Random";
import {
  StyledNavbar,
  StyledNavBrand,
  StyledNavItems,
  StyledLink,
} from "../styled/Navbar";

export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledNavBrand>
        <Link to='/'>
          Learn.Build.<Accent>Type.</Accent>
        </Link>
      </StyledNavBrand>
      <StyledNavItems>
        <li>
          <StyledLink to='/'>Home</StyledLink>
        </li>
        <li>
          <StyledLink to='/highScores'>High Scores</StyledLink>
        </li>
      </StyledNavItems>
    </StyledNavbar>
  );
}
