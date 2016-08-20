import styles from './styles.less';
import Container from 'common/components/Container';
import SvgIcon from 'common/components/Icon/Svg';

const Footer = () => (
  <Container className={styles.footer}>
    <div className={styles.linkContainer}>
      <a title="Check out the code on Github!" href="https://github.com/madou/armory-react"><SvgIcon name="github" /></a>
      <a title="Check out what features are coming next!" href="https://trello.com/b/qGvDe622"><SvgIcon name="trello" /></a>
    </div>

    © 2015-2016 gw2armory.com © 2010–2016 ArenaNet, LLC. All
    rights reserved. Guild Wars, Guild Wars 2, Guild Wars 2:
    Heart of Thorns, ArenaNet, NCSOFT, the Interlocking NC Logo,
    and all associated logos and designs are trademarks or registered
    trademarks of NCSOFT Corporation. All other trademarks are the property
    of their respective owners.
  </Container>
);

export default Footer;
