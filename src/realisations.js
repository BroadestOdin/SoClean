import Header from "./header";
import Contact from "./contact";
import { InstagramEmbed } from 'react-social-media-embed';
import RetrieveInsta from "./RetrieveInsta";
export default function realisations()
{

    return(
    <div>
      <Header></Header>
      <RetrieveInsta></RetrieveInsta>
      <Contact></Contact>
    </div>);
}