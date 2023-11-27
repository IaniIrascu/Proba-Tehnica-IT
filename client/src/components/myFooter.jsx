import "../componentStyles/myFooter.css"
import logoInsta from "../pngs/logoInsta.png"
import logoFB from "../pngs/logoFB.png"
import logoTwitch from "../pngs/logoTwitch.png"

function Footer () {
    
  return (
      <div className="myFooter">
        <a href="https://www.instagram.com/lsacbucuresti/" 
        className="footerImage">
          <img src={logoInsta}/> 
        </a>
        <a href="https://www.facebook.com/LsacBucuresti/?locale=ro_RO"
        className="footerImage">
          <img src={logoFB}/> 
        </a>
        <a 
        href="https://www.twitch.tv/lsac_bucuresti" 
        className="footerImage">
        <img src={logoTwitch}/> 
        </a>
      </div>
  );
}

export default Footer;