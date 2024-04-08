import FacebookIcon from "#icons/FacebookIcon.astro"
import InstagramIcon from "#icons/InstagramIcon.astro"
import TiktokIcon from "#icons/TiktokIcon.astro"
import YoutubeIcon from "#icons/YoutubeIcon.astro"

type Data = {
    title: string,
    description: string,
    keywords: string,
    email: `${string}@${string}.${string}`,
    address: string,
    phone: string
}

export const data: Data = {
    title: 'KVA Handyman Solutions',
    description: 'KV Handyman Solutions is a handyman service in the Greater Toronto Area. We provide services for residential and commercial properties.',
    keywords: 'handyman, handyman services, handyman in Toronto, handyman in GTA, handyman in Greater Toronto Area, handyman in Mississauga, handyman in Brampton, handyman in Oakville, handyman in Burlington, handyman in Hamilton, handyman in Milton, handyman in Georgetown, handyman in Halton Hills, handyman in Caledon, handyman in Vaughan, handyman in Richmond Hill, handyman in Markham, handyman in Pickering, handyman in Ajax, handyman in Whitby, handyman in Oshawa, handyman in Durham Region, handyman in York Region, handyman in Peel Region, handyman in Halton Region, handyman in Toronto Region, handyman in Ontario, handyman in Canada, handyman in North America, handyman in the world',
    email: 'service@service.com',
    address: 'Greater Toronto Area.',
    phone: '123-456-7890',
}

export let socials = [
    {
        title: 'facebook',
        link : 'https://fb.com',
        icon: FacebookIcon,
        size: 18
    },
    {
        title: 'instagram',
        link : 'https://instagram.com',
        icon: InstagramIcon,
        size: 26
    },
    {
        title: 'youtube',
        link : 'https://youtube.com',
        icon: YoutubeIcon,
        size: 24
    },
    {
        title: 'tiktok',
        link : 'https://tiktok.com',
        icon: TiktokIcon,
        size: 18
    }
]

export let services = [
    {
        service: 'Installation water fixtures',
        img: 'img/services/installation-water-fixtures.webp',
        description: 'Install water fixtures in your home or business.'
    },
    {
        service: 'Emergency service',
        img: 'img/services/emergency-service.webp',
        description: 'We provide emergency services for your home or business.'
    },
    {
        service: 'Tv mounting',
        img: 'img/services/tv-mounting.webp',
        description: 'Mount your TV in your home or business.'
    },
    {
        service: 'Installation garbage disposal',
        img: 'img/services/installation-garbage-disposal.webp',
        description: 'Install garbage disposal in your home or business.'
    },
    {
        service: 'Light fixture',
        img: 'img/services/light-fixture.webp',
        description: 'Install light fixtures in your home or business.'
    },
    {
        service: 'Light maintenance',
        img: 'img/services/light-maintenance.webp',
        description: 'Maintain light fixtures in your home or business.'
    },
    {
        service: 'Lighting systems',
        img: 'img/services/lighting-systems.webp',
        description: 'Install lighting systems in your home or business.'
    },
    {
        service: 'Paint indoors',
        img: 'img/services/paint-indoors.webp',
        description: 'Paint indoors in your home or business.'
    },
    {
        service: 'Remodeling',
        img: 'img/services/remodeling.webp',
        description: 'Remodel your home or business.'
    },
    {
        service: 'Fan installation',
        img: 'img/services/fan-installation.webp',
        description: 'Install fans in your home or business.'
    },
    {
        service: 'Fan repair',
        img: 'img/services/fan-repair.webp',
        description: 'Repair fans in your home or business.'
    },
    {
        service: 'Furniture assembly',
        img: 'img/services/furniture-assembly.webp',
        description: 'Assemble furniture in your home or business.'
    },
    {
        service: 'General repairs',
        img: 'img/services/general-repairs.webp',
        description: 'General repairs in your home or business.'
    }
]