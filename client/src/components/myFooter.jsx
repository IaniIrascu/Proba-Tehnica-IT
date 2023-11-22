import "../componentStyles/myFooter.css"
import logoInsta from "../pngs/logoInsta.png"
import logoFB from "../pngs/logoFB.png"
import logoTwitch from "../pngs/logoTwitch.png"

function Footer () {
    
  return (
    <div className="footerContainer myFooter">
      <div className="myFooter">
        <a href="https://www.instagram.com/lsacbucuresti/">
          <img src={logoInsta} className="footerImage"/> 
        </a>
        <a href="https://www.facebook.com/LsacBucuresti/?locale=ro_RO">
          <img src={logoFB} className="footerImage"/> 
        </a>
        <a href="https://www.twitch.tv/lsac_bucuresti">
        <img src={logoTwitch} className="footerImage"/> 
        </a>
      </div>
    </div>
  );
}

export default Footer;