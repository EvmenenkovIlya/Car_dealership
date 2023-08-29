import './Footer.scss';
import { FooterLink } from './components/FooterLink';
import { brandsLinks } from './brandsLinks';

export const Footer = () => (
  <footer>
    Footer
    {brandsLinks.map((item) => (
      <div className="brands-block">
        {item.links.map((link) => (
          <FooterLink url={'brand/' + link.toLowerCase()} text={link} key={link} />
        ))}
      </div>
    ))}
    <div className="info"></div>
  </footer>
);
