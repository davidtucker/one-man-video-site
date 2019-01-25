import styles from './social-share.module.css'
import {
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    PinterestIcon,
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    PinterestShareButton,
    WhatsappShareButton
  } from 'react-share';

  class SocialShare extends Component {
    render() {
      const shareUrl = 'http://github.com';
      const title = 'GitHub';
  
      return (
        <div className="Demo__container">
          <div className="Demo__some-network">
            <FacebookShareButton
              url={shareUrl}
              quote={title}
              className="Demo__some-network__share-button">
              <FacebookIcon
                size={32}
                round />
            </FacebookShareButton>
          </div>
  
          <div className="Demo__some-network">
            <TwitterShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button">
              <TwitterIcon
                size={32}
                round />
            </TwitterShareButton>
          </div>

          <div className="Demo__some-network">
            <WhatsappShareButton
              url={shareUrl}
              title={title}
              separator=":: "
              className="Demo__some-network__share-button">
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
  
          <div className="Demo__some-network">
            <LinkedinShareButton
              url={shareUrl}
              title={title}
              windowWidth={750}
              windowHeight={600}
              className="Demo__some-network__share-button">
              <LinkedinIcon
                size={32}
                round />
            </LinkedinShareButton>
          </div>
  
          <div className="Demo__some-network">
            <PinterestShareButton
              url={String(window.location)}
              media={`${String(window.location)}/${exampleImage}`}
              windowWidth={1000}
              windowHeight={730}
              className="Demo__some-network__share-button">
              <PinterestIcon size={32} round />
            </PinterestShareButton>
          </div>
        </div>
      );
    }
  }
  
  export default SocialShare;