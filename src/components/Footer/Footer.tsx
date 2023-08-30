import './Footer.scss';
import { FooterLink } from './components/FooterLink';
import { brandsLinks } from './brandsLinks';

export const Footer = () => (
  <footer>
    Footer
    {brandsLinks.map((item, index) => (
      <div className="brands-block" key={index}>
        {item.links.map((link) => (
          <FooterLink url={'brand/' + link.toLowerCase()} text={link} key={link} />
        ))}
      </div>
    ))}
    <div className="info"></div>
  </footer>
);
