export interface IMusic{
  image:string
  title: string,
  author: string,
  src: string,
  progress: number | undefined,
  length: number | undefined
 }
 
 
 export const songsData : IMusic[]= [
  {
    image: '/src/components/Music/imageTracks/rassta.webp',
    title: "Rassta",
    author: "Abubakar",
    src: "/src/components/Music/tracks/6oru_15 remix-rassta.-kissvk.com.mp3",
    progress: 0,
    length: 0
  },
  {
    image: '/src/components/Music/imageTracks/img1.webp',
    title: "Hislerim",
    author: "Serhat Durmus",
    src: "/src/components/Music/tracks/Serhat Durmus feat. Zerrin-Hislerim-kissvk.com.mp3",
    progress: 0,
    length: 0
  },
  {
    image: '/src/components/Music/imageTracks/img2.jpg',
    title: "Chicago",
    author: "Lambo",
    src: "/src/components/Music/tracks/Mr Lambo-Chicago-kissvk.com.mp3",
    progress: 0,
    length: 0
  },
  {
    image: '/src/components/Music/imageTracks/img3.jpg',
    title: "124",
    author: "Cyberay",
    src: "/src/components/Music/tracks/Cyberay-124 -Slow--kissvk.com.mp3",
    progress: 0,
    length: 0
  },
  {
    image: '/src/components/Music/imageTracks/img4.png',
    title: "Кожура",
    author: "OM",
    src: "/src/components/Music/tracks/ОМ.-Кожура-kissvk.com.mp3",
    progress: 0,
    length: 0
  },
];

