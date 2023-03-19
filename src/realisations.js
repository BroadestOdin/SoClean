import Header from "./header";
import Contact from "./contact";
import { InstagramEmbed } from 'react-social-media-embed';
export default function realisations()
{
    return(
    <div>
      <Header></Header>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', flexWrap:'wrap', margin:'2%', gap:'30px'}}>
        <InstagramEmbed url="https://www.instagram.com/p/CQEk_MjLWWn/" width={700} height={700} />
        <InstagramEmbed url="https://www.instagram.com/p/CQEk_MjLWWn/" width={700} height={700} />
        <InstagramEmbed url="https://www.instagram.com/p/CQEk_MjLWWn/" width={700} height={700} />
        <InstagramEmbed url="https://www.instagram.com/p/CQEk_MjLWWn/" width={700} height={700} />
      </div>
      <Contact></Contact>
    </div>);
}