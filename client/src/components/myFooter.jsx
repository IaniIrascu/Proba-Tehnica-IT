import "../componentStyles/myFooter.css"
import logoInsta from "../pngs/logoInsta.png"
import logoFB from "../pngs/logoFB.png"
import logoTwitch from "../pngs/logoTwitch.png"

function Footer () {
    
  return (
      <div className="myFooter">
        <div href="https://www.instagram.com/lsacbucuresti/" 
        className="footerImage">
          <img src={logoInsta}/> 
        </div>
        <div href="https://www.facebook.com/LsacBucuresti/?locale=ro_RO"
        className="footerImage">
          <img src={logoFB}/> 
        </div>
        <div 
        href="https://www.twitch.tv/lsac_bucuresti" 
        className="footerImage">
        <img src={logoTwitch}/> 
        </div>
      </div>
  );
}

export default Footer;