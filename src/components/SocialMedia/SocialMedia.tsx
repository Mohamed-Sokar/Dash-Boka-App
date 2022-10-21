import {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import styles from './styles';
// import FacebookIcon from '../../../src/assets/Icons/svg/facebook.svg';
// import GoogleIcon from '../../../src/assets/Icons/svg/google.svg';
// import AppleIcon from '../../../src/assets/Icons/svg/apple.svg';

const SocialMediaIcons = {
  appleIcon: `<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.5" y="0.5" width="43" height="43" rx="7.5" fill="#1F2937"/>
  <rect x="0.5" y="0.5" width="43" height="43" rx="7.5" stroke="#1F2937"/>
  <path d="M27.7017 21.7015C27.7312 24.886 30.4955 25.9458 30.526 25.9594C30.5026 26.0339 30.0844 27.4696 29.0698 28.9522C28.1927 30.2341 27.2823 31.5113 25.8484 31.5381C24.4395 31.5638 23.9864 30.7023 22.3754 30.7023C20.7648 30.7023 20.2616 31.5113 18.9277 31.5638C17.5435 31.6163 16.4894 30.1774 15.605 28.9004C13.798 26.2878 12.417 21.5177 14.2713 18.2979C15.1924 16.6989 16.8388 15.6865 18.6257 15.6604C19.9848 15.6345 21.2677 16.5747 22.0986 16.5747C22.9289 16.5747 24.4879 15.4439 26.1269 15.6099C26.8131 15.6385 28.739 15.887 29.9757 17.6974C29.8763 17.7592 27.6778 19.0391 27.7017 21.7015ZM25.0537 13.8817C25.7885 12.9922 26.2831 11.7537 26.1482 10.5217C25.0889 10.5642 23.808 11.2276 23.0483 12.1167C22.3674 12.9038 21.7712 14.164 21.9319 15.3716C23.1127 15.463 24.3187 14.7716 25.0537 13.8817Z" fill="#F9FAFB"/>
  </svg>
  
  `,
  googleIcon: `<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="44" height="44" rx="8" fill="#EB4335"/>
  <path d="M32.56 22.2444C32.56 21.34 32.4866 20.68 32.3278 19.9955H22V24.0777H28.0622C27.94 25.0922 27.28 26.62 25.8133 27.6466L25.7927 27.7833L29.0582 30.313L29.2844 30.3355C31.3622 28.4166 32.56 25.5933 32.56 22.2444Z" fill="white"/>
  <path d="M22 33C24.97 33 27.4633 32.0221 29.2845 30.3355L25.8133 27.6466C24.8845 28.2944 23.6378 28.7466 22 28.7466C19.0912 28.7466 16.6223 26.8278 15.7422 24.1755L15.6132 24.1865L12.2177 26.8143L12.1733 26.9377C13.9822 30.531 17.6978 33 22 33Z" fill="white"/>
  <path d="M15.7422 24.1756C15.51 23.4911 15.3756 22.7577 15.3756 22C15.3756 21.2422 15.51 20.5089 15.73 19.8244L15.7238 19.6787L12.2858 17.0087L12.1733 17.0622C11.4278 18.5533 11 20.2278 11 22C11 23.7722 11.4278 25.4466 12.1733 26.9377L15.7422 24.1756Z" fill="white"/>
  <path d="M22 15.2533C24.0656 15.2533 25.4589 16.1455 26.2533 16.8911L29.3578 13.86C27.4512 12.0878 24.97 11 22 11C17.6978 11 13.9822 13.4689 12.1733 17.0622L15.73 19.8244C16.6223 17.1722 19.0912 15.2533 22 15.2533Z" fill="white"/>
  </svg>
  
  `,
  facebookIcon: `<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="44" height="44" rx="8" fill="#1877F2"/>
  <path d="M33.4783 21.0435C33.4783 14.7042 28.3393 9.56525 22 9.56525C15.6607 9.56525 10.5217 14.7042 10.5217 21.0435C10.5217 26.7726 14.7192 31.5212 20.2065 32.3823V24.3614H17.2921V21.0435H20.2065V18.5147C20.2065 15.638 21.9201 14.0489 24.542 14.0489C25.7979 14.0489 27.1114 14.2731 27.1114 14.2731V17.0979H25.664C24.2381 17.0979 23.7935 17.9826 23.7935 18.8904V21.0435H26.9769L26.468 24.3614H23.7935V32.3823C29.2808 31.5212 33.4783 26.7726 33.4783 21.0435Z" fill="#1877F2"/>
  <path d="M26.4681 24.3614L26.977 21.0435H23.7936V18.8903C23.7936 17.9826 24.2383 17.0978 25.6641 17.0978H27.1115V14.2731C27.1115 14.2731 25.798 14.0489 24.5421 14.0489C21.9203 14.0489 20.2066 15.6379 20.2066 18.5147V21.0435H17.2922V24.3614H20.2066V32.3822C21.3951 32.5682 22.6052 32.5682 23.7936 32.3822V24.3614H26.4681Z" fill="white"/>
  </svg>
  
  `,
};

interface IProps {
  title: string;
  leftText: string;
  linkText: string;
  onPress?: () => void;
}

const SocialMedia: FC<IProps> = ({title, leftText, linkText, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.icons}>
        <TouchableOpacity style={styles.icon}>
          <SvgXml xml={SocialMediaIcons.appleIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <SvgXml xml={SocialMediaIcons.googleIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <SvgXml xml={SocialMediaIcons.facebookIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.leftText}>{leftText}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.linkText}>{linkText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SocialMedia;
