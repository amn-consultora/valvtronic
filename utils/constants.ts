import { BiTargetLock } from "react-icons/bi";
import { LiaBinocularsSolid } from "react-icons/lia";
import { IoDiamondOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";
import { FaUsersGear } from "react-icons/fa6";
import { GrLineChart } from "react-icons/gr";
import { BsGear } from "react-icons/bs";
import { LuMessagesSquare } from "react-icons/lu";
import { MdOutlineBusinessCenter } from "react-icons/md";

import { IDepartment, IIdentity } from "@/interfaces/constants";
import { IValue } from "@/interfaces/value";

export const values:IValue[] = [
    {
      id: 1,
      title: 'I+D Investigación y desarrollo',
      subtitle: 'Innovación tecnológica',
      img: "/assets/homepage/ojo.svg"
    },
    {
      id: 2,
      title: 'Ingeniería de detalles',
      subtitle: 'Planos y cálculos',
      img: "/assets/homepage/mano.svg"
    },
    {
      id: 3,
      title: 'Desarrollo de productos',
      subtitle: 'Válvulas, actuadores, sistemas de control',
      img: "/assets/homepage/caja.svg"
    },
    {
      id: 4,
      title: 'VAC | Centro de automatización',
      subtitle: 'Sector de fábrica',
      img: "/assets/homepage/nube.svg"
    },
  ];

  export const features = [
    'Capacitación constante de nuestro recurso humano y de nuestros clientes',
    'Ofrecemos al mercado el mejor servicio',
    'Priorizamos la necesidad de dar soluciones a las personas y profesionales del sistema productivo',
  ];

  export const identities:IIdentity[] = [
    {
      id: 1,
      title: 'Misión',
      subtitle:
          'Incididunt est quis amet labore sit quis incididunt est quis amet labore sit quis.',
          icon: BiTargetLock
    },
    {
      id: 2,
      title: 'Visión',
      subtitle:
          'Incididunt est quis amet labore sit quis incididunt est quis amet labore sit quis.',
          icon: LiaBinocularsSolid
    },
    {
      id: 3,
      title: 'Valores',
      subtitle:
          'Incididunt est quis amet labore sit quis incididunt est quis amet labore sit quis.',
          icon: IoDiamondOutline
    },
  ];

  export const markets = [
    {
      imgUrl: '/assets/images/planet-06.png',
      title: 'The launch of the Metaverse makes Elon musk ketar-ketir',
      subtitle:
          'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
    },
    {
      imgUrl: '/assets/images/planet-07.png',
      title: '7 tips to easily master the madness of the Metaverse',
      subtitle:
          'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
    },
    {
      imgUrl: '/assets/images/planet-08.png',
      title: 'With one platform you can explore the whole world virtually',
      subtitle:
          'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
    },
  ];

  export const departments:IDepartment[] = [
    {
      id: 1,
      imgUrl: '/assets/images/planet-06.png',
      title: 'Calidad',
      desc: 'Ad sit nisi ut veniam mollit irure sit quis laborum nostrud amet sint.',
      icon: IoDiamondOutline
    },
    {
      id: 2,
      imgUrl: '/assets/images/planet-07.png',
      title: 'Administración',
      desc: 'Ad sit nisi ut veniam mollit irure sit quis laborum nostrud amet sint.',
      icon: LuMessagesSquare,
    },
    {
      id: 3,
      imgUrl: '/assets/images/planet-08.png',
      title: 'Marketing',
      desc: 'Ad sit nisi ut veniam mollit irure sit quis laborum nostrud amet sint.',
      icon: LuMessagesSquare
    },
    {
      id: 4,
      imgUrl: '/assets/images/planet-08.png',
      title: 'Operaciones',
      desc: 'Ad sit nisi ut veniam mollit irure sit quis laborum nostrud amet sint.',
      icon: VscTools,
      subDepartments: [
        {id: 1, title: 'Programación'},
        {id: 2, title: 'Compras'},
        {id: 3, title: 'Mecanizado'},
        {id: 4, title: 'Montaje'},
        {id: 5, title: 'Despacho'},
      ]
    },
    {
      id: 5,
      imgUrl: '/assets/images/planet-08.png',
      title: 'Centro de Tecnología de Valvtronic',
      desc: 'Ad sit nisi ut veniam mollit irure sit quis laborum nostrud amet sint.',
      icon: BsGear
    },
    {
      id: 6,
      imgUrl: '/assets/images/planet-08.png',
      title: 'Ventas',
      desc: 'Ad sit nisi ut veniam mollit irure sit quis laborum nostrud amet sint.',
      icon: GrLineChart,
      subDepartments: [
        {id: 1, title: 'Internas'},
        {id: 2, title: 'Externas'},
        {id: 3, title: 'Servicio postventa'}
      ]
    },
    {
      id: 7,
      imgUrl: '/assets/images/planet-08.png',
      title: 'Expansión de Negocios',
      desc: 'Ad sit nisi ut veniam mollit irure sit quis laborum nostrud amet sint.',
      icon: MdOutlineBusinessCenter,
    },
    {
      id: 8,
      imgUrl: '/assets/images/planet-08.png',
      title: 'Recursos Humanos',
      desc: 'Ad sit nisi ut veniam mollit irure sit quis laborum nostrud amet sint.',
      icon : FaUsersGear
    },
  ];

  export const socials = [
    {
      name: 'twitter',
      url: '/assets/images/twitter.svg',
    },
    {
      name: 'linkedin',
      url: '/assets/images/linkedin.svg',
    },
    {
      name: 'instagram',
      url: '/assets/images/instagram.svg',
    },
    {
      name: 'facebook',
      url: '/assets/images/facebook.svg',
    },
  ];