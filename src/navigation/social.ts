import { SocialItem } from "@/interfaces"
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

export const socialItems: SocialItem[] = [
    {
        url: 'https://www.facebook.com/munipillcomarca',
        size: 25,
        icon: FaFacebook,
        color: '#3b5998'
    },
    {
        url: 'https://www.instagram.com/munipillcomarca/',
        size: 25,
        icon: FaInstagram,
        color: 'rgb(240, 79, 15)'
    },
    {
        url: 'https://www.youtube.com/@munipillcomarca',
        size: 25,
        icon: FaTiktok,
        color: '#000000'
    },
]