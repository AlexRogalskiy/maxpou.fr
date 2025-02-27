import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  transition: background 1s ease;
}

body {
  font-family: "Lato", sans-serif;
  color: var(--color-text);
  background-color: var(--color-siteBackground);
}

::-webkit-scrollbar {
  width: 0.5rem;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(var(--color-lightYellow), var(--color-secondary)); 
  border-radius: 8px;

  &:hover {
    background: linear-gradient(var(--color-secondary), var(--color-lightYellow)); 
  }
}


img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border: 0;
}

a {
  text-decoration: none;
  color: var(--color-text);
}

hr {
  border: 0;
  border-top: 1px solid var(--color-grey100);
  margin: 50px 0 5px 0;
}

ul,
ol {
  padding-left: 2em;
  margin: 1em 0 0 0;
}

*::selection {
  background-color: var(--color-secondary);
  color: var(--color-grey500);
}
`
export const Link = styled.a`
  box-shadow: 0 2px 0 0 var(--color-secondary);

  &:hover {
    filter: brightness(150%);
    box-shadow: none;
  }
`

export const StyledLink = styled(GatsbyLink)`
  box-shadow: 0 2px 0 0 var(--color-secondary);

  &:hover {
    filter: brightness(150%);
    box-shadow: none;
  }
`

export const Text = styled.p`
  line-height: 1.6;
  margin: 1em 0 0 0;
`

export const Bull = styled.span`
  display: inline-block;
  color: var(--color-textSecondary);
  margin: 0 4px;
  &::before {
    content: '•';
  }
`

const ReadingTimeContainer = styled.span`
  text-transform: uppercase;
  color: var(--color-textSecondary);
`

export const ReadingTime = props => {
  return <ReadingTimeContainer>{props.min} min read</ReadingTimeContainer>
}
