import { Icon } from '@iconify/react';
import Div from '../Div';
import Link from 'next/link';

export default function Team({
  memberImage,
  memberName,
  memberDesignation,
  memberSocial,
  memberLink,
}) {
  return (
    <Div className="cs-team cs-style1">
      
<Link href={memberLink} >   
    <Div className="cs-member_thumb">
      <img src={memberImage} alt={memberName} />
      <Div className="cs-member_overlay" />
    </Div>
 
</Link>
      <Div className="cs-member_info">
        <h2 className="cs-member_name">
          <Link href={memberLink}>{memberName}</Link>
        </h2>
        <Div className="cs-member_designation">{memberDesignation}</Div>
      </Div>
      <Div className="cs-member_social cs-primary_color">
        {memberSocial.linkedin && (
          <Link href={memberSocial.linkedin}>
            <Icon icon="fa6-brands:linkedin-in" />
          </Link>
        )}
        {memberSocial.twitter && (
          <Link href={memberSocial.twitter}>
            <Icon icon="fa-brands:twitter" />
          </Link>
        )}
        {memberSocial.youtube && (
          <Link href={memberSocial.youtube}>
            <Icon icon="fa-brands:youtube" />
          </Link>
        )}
        {memberSocial.facebook && (
          <Link href={memberSocial.facebook}>
            <Icon icon="fa-brands:facebook-f" />
          </Link>
        )}
        {memberSocial.react && (
          <Link href={memberSocial.react}>
            <Icon icon="fa-brands:react" />
          </Link>
        )}
        {memberSocial.html && (
          <Link href={memberSocial.html}>
            <Icon icon="fa-brands:html5" />
          </Link>
        )}
        {memberSocial.code && (
          <Link href={memberSocial.code}>
            <Icon icon="fa-solid:code" />
          </Link>
        )}
        {memberSocial.javas && (
          <Link href={memberSocial.javas}>
            <Icon icon="fa-brands:js" />
          </Link>
        )}
        
        {memberSocial.android && (
          <Link href={memberSocial.android}>
            <Icon icon="fa-brands:android" />
          </Link>
        )}
        {memberSocial.appstore && (
          <Link href={memberSocial.appstore}>
            <Icon icon="fa-brands:app-store-ios" />
          </Link>
        )}
        {memberSocial.mobile && (
          <Link href={memberSocial.mobile}>
            <Icon icon="fa-solid:mobile" />
          </Link>
        )}
        {memberSocial.bootstrap && (
          <Link href={memberSocial.bootstrap}>
            <Icon icon="fa-brands:bootstrap" />
          </Link>
        )}
        {memberSocial.wordpress && (
          <Link href={memberSocial.wordpress}>
            <Icon icon="fa-brands:wordpress" />
          </Link>
        )}
        {memberSocial.figma && (
          <Link href={memberSocial.figma}>
            <Icon icon="fa-brands:figma" />
          </Link>
        )}
        {memberSocial.sketch && (
          <Link href={memberSocial.sketch}>
            <Icon icon="fa-brands:sketch" />
          </Link>
        )}
        {memberSocial.uikit && (
          <Link href={memberSocial.uikit}>
            <Icon icon="fa-brands:uikit" />
          </Link>
        )}
        
      </Div>
    </Div>
  );
}
