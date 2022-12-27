import { Github, Linkedin } from 'react-bootstrap-icons';
import Container from '../Container';
import * as S from './style';

const Footer = () => {
  return (
    <S.FooterTag>
      <Container>
        <p>Adriel Santos, {new Date().getFullYear()}</p>
        <div>
          <a
            href='https://github.com/br-adriel'
            target='_blank'
            rel='noopener noreferrer'
            title='Github'
          >
            <Github />
          </a>
          <a
            href='https://linkedin.com/in/adriel-fsantos'
            target='_blank'
            rel='noopener noreferrer'
            title='Linkedin'
          >
            <Linkedin />
          </a>
        </div>
      </Container>
    </S.FooterTag>
  );
};

export default Footer;
