const generateA = (url, icon) => {
  return `<a class='social' href=${url} target='_blank' rel='noopener noreferrer'>${icon}</a>`;
};

const socials = [
  generateA(
    "https://www.pinterest.com/crunchpot/",
    "<svg width='1.5rem' height='1.5rem' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M13,0C5.8210001,0,0,5.8210001,0,13c0,5.5074997,3.4265003,10.2115002,8.2624998,12.1049995	c-0.1134996-1.0279999-0.2165003-2.6065006,0.0454998-3.7290001c0.2360001-1.0139999,1.5244999-6.4619999,1.5244999-6.4619999	s-0.3889999-0.7789993-0.3889999-1.9294996c0-1.8079996,1.0474997-3.1570005,2.3520002-3.1570005	c1.1094999,0,1.6445007,0.8330002,1.6445007,1.8310003c0,1.1160002-0.7095003,2.783-1.0769997,4.3280001	c-0.3065004,1.2945004,0.6490002,2.3500004,1.9249992,2.3500004c2.3104992,0,4.0865002-2.4365005,4.0865002-5.9530001	c0-3.1125002-2.2360001-5.2890005-5.4295006-5.2890005c-3.6984997,0-5.8695002,2.7744999-5.8695002,5.6420002	c0,1.1170006,0.4300003,2.3150005,0.9674997,2.9669991c0.1059999,0.1289997,0.1215,0.2415009,0.0900002,0.3724995	c-0.0985003,0.4104996-0.3175001,1.2935009-0.3610001,1.4745007c-0.0565004,0.2385006-0.1885004,0.2880001-0.4344997,0.1735001	c-1.6239996-0.7560005-2.6389999-3.1294994-2.6389999-5.0365c0-4.1005001,2.9790001-7.8670001,8.5900002-7.8670001	c4.5100002,0,8.0144997,3.2129998,8.0144997,7.5084996c0,4.4804993-2.8255005,8.0860004-6.7460003,8.0860004	c-1.3174992,0-2.5555-0.6844997-2.9790001-1.493c0,0-0.6520004,2.4820004-0.8105001,3.0904999	c-0.2934999,1.1289997-1.0854998,2.5450001-1.6164999,3.407999C10.3675003,25.7964993,11.6599998,26,13,26	c7.1790009,0,13-5.8209991,13-13S20.1795006,0,13,0z'fill='black'/></svg>"
  ),

  generateA(
    "https://www.instagram.com/",
    "<svg width='1.5rem' height='1.5rem' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z'fill='black'/></svg>"
  ),

  generateA(
    "https://www.tiktok.com/en/",
    "<svg width='1.5rem' height='1.5rem' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.104,4,24,4z M22.689,13.474c-0.13,0.012-0.261,0.02-0.393,0.02c-1.495,0-2.809-0.768-3.574-1.931c0,3.049,0,6.519,0,6.577c0,2.685-2.177,4.861-4.861,4.861C11.177,23,9,20.823,9,18.139c0-2.685,2.177-4.861,4.861-4.861c0.102,0,0.201,0.009,0.3,0.015v2.396c-0.1-0.012-0.197-0.03-0.3-0.03c-1.37,0-2.481,1.111-2.481,2.481s1.11,2.481,2.481,2.481c1.371,0,2.581-1.08,2.581-2.45c0-0.055,0.024-11.17,0.024-11.17h2.289c0.215,2.047,1.868,3.663,3.934,3.811V13.474z'fill='black'/></svg>"
  ),
 
  generateA(
    "https://www.youtube.com/channel/UC6qryr48KAtVOHXqiiRGJ8A",
    "<svg width='1.5rem' height='1.5rem' viewBox='0 0 47 46' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M18.8538 28.2191V15.8332L31.0105 22.0482L18.8538 28.2191V28.2191ZM45.55 13.6888C45.55 13.6888 45.1112 10.6497 43.7612 9.31189C42.0512 7.55759 40.132 7.54877 39.2522 7.44519C32.9567 7 23.509 7 23.509 7H23.491C23.491 7 14.0455 7 7.74775 7.44519C6.868 7.54877 4.951 7.55538 3.23875 9.31189C1.88875 10.6497 1.45 13.6888 1.45 13.6888C1.45 13.6888 1 17.2547 1 20.8228V24.1661C1 27.732 1.45 31.3002 1.45 31.3002C1.45 31.3002 1.88875 34.3371 3.23875 35.6749C4.94875 37.4314 7.19875 37.3741 8.2 37.5592C11.8 37.8964 23.5 38 23.5 38C23.5 38 32.9567 37.9868 39.2522 37.5416C40.132 37.438 42.0512 37.4314 43.7612 35.6749C45.1112 34.3371 45.55 31.3002 45.55 31.3002C45.55 31.3002 46 27.732 46 24.1661V20.8228C46 17.2547 45.55 13.6888 45.55 13.6888V13.6888Z' fill='black'/></svg>"
  ),
 
];

module.exports = socials.map((value) => ({
  position: "right",
  type: "html",
  value,
}));