import styled from 'styled-components';

const FooterStyle = styled.div`
  margin-top: 1em;
`

const Footer = () => (
    <FooterStyle>
        Anecdote app for <a href='https://fullstackopen.com/'>Full Stack -sovelluskehitys</a>.
    
        See <a href='https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js'>https://github.com/mluukkai/routed-anecdotes</a> for the source code.
    </FooterStyle>
);

export default Footer;